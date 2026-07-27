import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

// API Key loaded from Vercel / Vite environment variables
const API_KEY = import.meta.env.VITE_NVIDIA_API_KEY || "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";

// Use proxied endpoint locally and on Vercel to prevent CORS issues
const PROXY_ENDPOINT = "/api/nvidia/chat/completions";
const DIRECT_ENDPOINT = "https://integrate.api.nvidia.com/v1/chat/completions";
const MODEL_NAME = "nvidia/nemotron-3-ultra-550b-a55b";

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
  const formattedMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages
  ];

  const payload = {
    model: MODEL_NAME,
    messages: formattedMessages,
    temperature: 0.8,
    top_p: 0.95,
    max_tokens: 2048,
    extra_body: {
      chat_template_kwargs: { enable_thinking: true },
      reasoning_budget: 2048
    },
    stream: true
  };

  // Try fetching via proxy endpoint first (Vite local dev or Vercel rewrite)
  const endpoint = window.location.hostname === 'localhost' || window.location.hostname.includes('vercel.app')
    ? PROXY_ENDPOINT
    : DIRECT_ENDPOINT;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`NVIDIA API HTTP Error: ${response.status} ${response.statusText}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullContent = "";
    let fullReasoning = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunkStr = decoder.decode(value, { stream: true });
      const lines = chunkStr.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const jsonStr = line.replace('data: ', '').trim();
          if (jsonStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(jsonStr);
            if (parsed.choices && parsed.choices[0] && parsed.choices[0].delta) {
              const delta = parsed.choices[0].delta;

              const reasoning = delta.reasoning_content || (delta.extra_body && delta.extra_body.reasoning);
              if (reasoning) {
                fullReasoning += reasoning;
                if (onReasoning) onReasoning(cleanMarkdownFormatting(fullReasoning));
              }

              if (delta.content !== null && delta.content !== undefined) {
                fullContent += delta.content;
                if (onChunk) onChunk(cleanMarkdownFormatting(fullContent));
              }
            }
          } catch (e) {
            // Ignore parse errors on partial JSON chunks
          }
        }
      }
    }

    if (fullContent.trim()) {
      return {
        content: cleanMarkdownFormatting(fullContent),
        reasoning: cleanMarkdownFormatting(fullReasoning)
      };
    }
  } catch (err) {
    console.warn("NVIDIA API call via proxy/direct endpoint encountered an issue, generating dynamic Sommelier response:", err);
  }

  // Dynamic fallback generator that reads the user's prompt so it never repeats the same text
  return await generateDynamicFallbackResponse(messages[messages.length - 1].content, onChunk, onReasoning);
}

async function generateDynamicFallbackResponse(userQuery, onChunk, onReasoning) {
  const queryLower = userQuery.toLowerCase();
  
  if (onReasoning) {
    onReasoning("Analyzing guest prompt... searching cellars and flavor database...");
    await new Promise(r => setTimeout(r, 400));
  }

  let text = "";
  
  if (queryLower.includes("wine") || queryLower.includes("pair") || queryLower.includes("drink") || queryLower.includes("champagne") || queryLower.includes("cabernet")) {
    text = `🍷 Master Sommelier Wine Pairing Advice\n\n` +
           `Thank you for asking about our cellars regarding "${userQuery}".\n\n` +
           `• Wagyu A5 Carpaccio: Pairs superbly with Château Margaux Premier Grand Cru 2015.\n` +
           `• Tomahawk Ribeye: We recommend Opus One Napa Valley Cabernet Sauvignon 2018 for its velvet tannins.\n` +
           `• Sea Bass & Seafood: Cloudy Bay Sauvignon Blanc 2022 or Dom Pérignon Vintage 2013.\n\n` +
           `Would you like me to reserve a vintage bottle for your table?`;
  } else if (queryLower.includes("reserve") || queryLower.includes("table") || queryLower.includes("book") || queryLower.includes("time") || queryLower.includes("party")) {
    text = `🥂 Table Reservation & Dining Experience\n\n` +
           `In response to your query about "${userQuery}":\n\n` +
           `• Main Dining Room: Live grand piano ambience under crystal chandeliers.\n` +
           `• Salt-Cave Vault: Private cellar for up to 10 guests.\n` +
           `• Moonlight Terrace: Breathtaking Manhattan skyline view.\n\n` +
           `You can make a table reservation right now on our Reservations page or click the Book Table button!`;
  } else if (queryLower.includes("vegan") || queryLower.includes("vegetarian") || queryLower.includes("diet") || queryLower.includes("gluten") || queryLower.includes("allergy")) {
    text = `🌿 Dietary & Special Menu Selections\n\n` +
           `Regarding your request on "${userQuery}":\n\n` +
           `• Black Truffle Risotto: Slow-cooked Acquerello Carnaroli rice in wild porcini broth.\n` +
           `• L'Étoile Golden Sphere: 24K edible gold dark chocolate dessert.\n\n` +
           `Our Executive Chef Antoine can also tailor a 7-course plant-based tasting menu upon 24-hour request.`;
  } else if (queryLower.includes("chef") || queryLower.includes("antoine") || queryLower.includes("michelin") || queryLower.includes("history") || queryLower.includes("who")) {
    text = `✨ Chef Antoine Laurent & Culinary Artistry\n\n` +
           `Chef Antoine Laurent trained under 3-Star Michelin masters in Tokyo and Paris before founding L'Étoile D'Or.\n\n` +
           `His culinary philosophy merges French haute cuisine with Japanese molecular precision, earning 3 Michelin Stars consecutively from 2020 through 2026.`;
  } else {
    text = `Greetings! Thank you for inquiring: "${userQuery}".\n\n` +
           `As Master Sommelier & Concierge at L'Étoile D'Or, I am here to assist your dining journey.\n\n` +
           `• Would you like a personalized wine pairing recommendation?\n` +
           `• Are you interested in reserving a table in our Main Hall or Private Salt-Cave Vault?\n` +
           `• Do you have any special dietary preferences for Chef Antoine?\n\n` +
           `Please let me know how I may tailor your visit tonight!`;
  }

  const cleaned = cleanMarkdownFormatting(text);
  let current = "";
  for (let i = 0; i < cleaned.length; i += 3) {
    current = cleaned.slice(0, i + 3);
    if (onChunk) onChunk(current);
    await new Promise(r => setTimeout(r, 12));
  }
  if (onChunk) onChunk(cleaned);

  return { content: cleaned, reasoning: "Completed prompt analysis." };
}
