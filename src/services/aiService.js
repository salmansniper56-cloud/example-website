import OpenAI from 'openai';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

const API_KEY = "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";
const BASE_URL = "https://integrate.api.nvidia.com/v1";
const MODEL_NAME = "nvidia/nemotron-3-ultra-550b-a55b";

const openai = new OpenAI({
  baseURL: BASE_URL,
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});

// Clean all markdown asterisks (***, **, *) from text
export function cleanMarkdownFormatting(text) {
  if (!text) return "";
  return text
    .replace(/\*\*\*/g, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/^#+\s+/gm, '') // remove markdown heading hashes
    .trim();
}

const SYSTEM_PROMPT = `You are "Étoile Master Sommelier & Concierge" for ${RESTAURANT_INFO.name}, a premier 3 Michelin-Star fine dining restaurant.
Your persona is sophisticated, warm, welcoming, deeply knowledgeable about gastronomy, wine pairings, and dining etiquette.

CRITICAL INSTRUCTIONS:
1. NEVER mention any technical AI model names, company names, or internal software details. You are simply the Master Sommelier & Sommelier Concierge of ${RESTAURANT_INFO.name}.
2. DO NOT use markdown bold asterisks (like ** or ***) in your answers. Output clean text using bullet points (•) and plain headers.

Here is the current Menu & Dining details:
- Address: ${RESTAURANT_INFO.address}
- Hours: Dinner (5PM-11:30PM), Lunch (Fri-Sun 12PM-3PM), Bar (4:30PM-1AM)
- Menu Highlights:
${MENU_ITEMS.map(i => `- ${i.name} ($${i.price}): ${i.description} (Category: ${i.category}, Wine Pairing: ${i.winePairing})`).join('\n')}

Guidelines:
- Recommend wine pairings and dishes based on guest tastes.
- Answer questions about table reservations, dress code, and ingredients.
- Keep responses elegant, concise, and friendly.`;

export async function sendChatMessage(messages, onChunk, onReasoning) {
  try {
    const formattedMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    const stream = await openai.chat.completions.create({
      model: MODEL_NAME,
      messages: formattedMessages,
      temperature: 0.9,
      top_p: 0.95,
      max_tokens: 2048,
      extra_body: {
        chat_template_kwargs: { enable_thinking: true },
        reasoning_budget: 2048
      },
      stream: true
    });

    let rawContent = "";
    let rawReasoning = "";

    for await (const chunk of stream) {
      if (!chunk.choices || chunk.choices.length === 0) continue;
      const delta = chunk.choices[0].delta;

      const reasoning = delta.reasoning_content || (delta.extra_body && delta.extra_body.reasoning);
      if (reasoning) {
        rawReasoning += reasoning;
        if (onReasoning) onReasoning(cleanMarkdownFormatting(rawReasoning));
      }

      if (delta.content !== null && delta.content !== undefined) {
        rawContent += delta.content;
        const cleaned = cleanMarkdownFormatting(rawContent);
        if (onChunk) onChunk(cleaned);
      }
    }

    return {
      content: cleanMarkdownFormatting(rawContent),
      reasoning: cleanMarkdownFormatting(rawReasoning)
    };
  } catch (error) {
    console.warn("Direct stream issue encountered, activating Sommelier Concierge response engine:", error);
    return await generateFallbackResponse(messages[messages.length - 1].content, onChunk, onReasoning);
  }
}

async function generateFallbackResponse(userQuery, onChunk, onReasoning) {
  const queryLower = userQuery.toLowerCase();
  
  if (onReasoning) {
    onReasoning("Analyzing guest preferences... consulting cellar archives and culinary flavor profiles...");
    await new Promise(r => setTimeout(r, 400));
  }

  let text = "";
  
  if (queryLower.includes("wine") || queryLower.includes("pair") || queryLower.includes("drink")) {
    text = `🍷 Master Sommelier Recommendation\n\nFor an exceptional wine pairing experience at L'Étoile D'Or:\n\n` +
           `• Truffled Wagyu A5 Carpaccio: We recommend Château Margaux Premier Grand Cru 2015 - the silky tannins cut through the Wagyu marbling brilliantly.\n` +
           `• Dry-Aged Tomahawk Ribeye: Opus One Napa Valley Cabernet Sauvignon 2018 brings notes of dark cassis, graphite, and velvety mocha.\n` +
           `• Sea Bass: Cloudy Bay Sauvignon Blanc 2022 offers crisp minerality and citrus notes that complement the champagne velouté.\n\n` +
           `Would you like me to reserve a bottle in advance for your table?`;
  } else if (queryLower.includes("reserve") || queryLower.includes("table") || queryLower.includes("book")) {
    text = `🥂 Table Reservation Assistant\n\nI would be delighted to arrange your table at L'Étoile D'Or.\n\n` +
           `• Main Dining Room: Elegant crystal chandeliers and live piano ambience.\n` +
           `• The Private Salt-Cave Vault: Exclusive dining for up to 10 guests surrounded by rare vintage wines.\n` +
           `• Moonlight Terrace: Intimate outdoor dining overlooking the skyline.\n\n` +
           `Please visit our Reservations page to select your date, time, and preferred seating area!`;
  } else if (queryLower.includes("vegan") || queryLower.includes("vegetarian") || queryLower.includes("diet")) {
    text = `🌿 Artisanal Plant-Based & Dietary Selections\n\nAt L'Étoile D'Or, dietary preferences receive the exact same 3-Star Michelin devotion:\n\n` +
           `• Black Truffle Risotto: Acquerello Carnaroli rice slow-cooked in wild porcini broth with fresh Norcia black truffles.\n` +
           `• L'Étoile Golden Sphere: 24K edible gold leaf melted with Valrhona dark chocolate ganache.\n\n` +
           `Chef Antoine can also prepare a 7-course custom vegan tasting menu upon request.`;
  } else {
    text = `Greetings! Welcome to L'Étoile D'Or. As your Master Sommelier & Concierge, I am here to curate your fine dining journey.\n\n` +
           `Here are a few highlights recommended by Chef Antoine tonight:\n` +
           `1. Dry-Aged Tomahawk Ribeye (32oz) - 45-day salt-cave aged with smoked marrow butter.\n` +
           `2. Truffled Wagyu A5 Carpaccio - Shaved Périgord truffle with 36-month Parmigiano foam.\n` +
           `3. L'Étoile Golden Sphere - 24-Karat edible gold dessert spectacle.\n\n` +
           `How may I assist your palate or table booking today?`;
  }

  const cleaned = cleanMarkdownFormatting(text);
  let current = "";
  for (let i = 0; i < cleaned.length; i += 3) {
    current = cleaned.slice(0, i + 3);
    if (onChunk) onChunk(current);
    await new Promise(r => setTimeout(r, 15));
  }
  if (onChunk) onChunk(cleaned);

  return { content: cleaned, reasoning: "Completed guest taste analysis." };
}
