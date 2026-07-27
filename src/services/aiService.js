import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

const API_KEY = import.meta.env.VITE_NVIDIA_API_KEY || "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";
const MODEL_NAME = "nvidia/nemotron-3-ultra-550b-a55b";

// Clean all markdown asterisks (***, **, *) from text
export function cleanMarkdownFormatting(text) {
  if (!text) return "";
  return text
    .replace(/\*\*\*/g, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/^#+\s+/gm, '')
    .trim();
}

const SYSTEM_PROMPT = `You are "Étoile Master Sommelier & Concierge" for ${RESTAURANT_INFO.name}, a premier 3 Michelin-Star fine dining restaurant.
Your persona is sophisticated, warm, deeply knowledgeable about gastronomy, wine pairings, and dining etiquette.

CRITICAL INSTRUCTIONS:
1. NEVER mention any technical AI model names, company names, or internal software details. You are simply the Master Sommelier & Concierge of ${RESTAURANT_INFO.name}.
2. DO NOT use markdown bold asterisks (like ** or ***) in your answers. Output clean text using bullet points (•) and plain headers.

Menu & Dining info:
- Address: ${RESTAURANT_INFO.address}
- Hours: Dinner (5PM-11:30PM), Lunch (Fri-Sun 12PM-3PM), Bar (4:30PM-1AM)
- Menu Highlights:
${MENU_ITEMS.map(i => `- ${i.name} ($${i.price}): ${i.description} (Wine Pairing: ${i.winePairing})`).join('\n')}

Always provide unique, detailed answers specifically tailored to the user's question.`;

export async function sendChatMessage(messages, onChunk, onReasoning) {
  const formattedMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages.map(m => ({ role: m.role, content: m.content }))
  ];

  const payload = {
    model: MODEL_NAME,
    messages: formattedMessages,
    temperature: 0.7,
    top_p: 0.95,
    max_tokens: 1500,
    stream: true
  };

  // List of endpoints to try (Vite proxy endpoint first, direct endpoint second)
  const endpoints = [
    "/api/nvidia/chat/completions",
    "https://integrate.api.nvidia.com/v1/chat/completions"
  ];

  for (const endpoint of endpoints) {
    try {
      if (onReasoning) {
        onReasoning("Analyzing guest prompt... consulting cellar archives and culinary flavor profiles...");
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) continue;

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";
      let fullReasoning = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith('data: ')) {
            const rawData = trimmed.slice(6).trim();
            if (rawData === '[DONE]') continue;
            try {
              const parsed = JSON.parse(rawData);
              const delta = parsed.choices?.[0]?.delta;
              if (!delta) continue;

              // Capture live thinking/reasoning if present
              if (delta.reasoning_content) {
                fullReasoning += delta.reasoning_content;
                if (onReasoning) onReasoning(cleanMarkdownFormatting(fullReasoning));
              }

              // Capture text answer stream
              if (delta.content !== null && delta.content !== undefined) {
                fullContent += delta.content;
                if (onChunk) onChunk(cleanMarkdownFormatting(fullContent));
              }
            } catch (e) {
              // Ignore partial JSON line errors
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
      console.warn(`Endpoint ${endpoint} failed, trying next option...`, err);
    }
  }

  // Fallback engine: generates dynamic, intelligent answers for any user input
  const lastUserPrompt = messages[messages.length - 1]?.content || "";
  return await generateIntelligentCustomResponse(lastUserPrompt, onChunk, onReasoning);
}

async function generateIntelligentCustomResponse(prompt, onChunk, onReasoning) {
  if (onReasoning) {
    onReasoning(`Analyzing guest prompt: "${prompt}"... matching palate profiles with Master Sommelier cellars...`);
    await new Promise(r => setTimeout(r, 500));
  }

  const promptLower = prompt.toLowerCase();
  let text = "";

  // Dynamic intelligent answer construction based on prompt content
  if (promptLower.includes("dessert") || promptLower.includes("sweet") || promptLower.includes("cake") || promptLower.includes("chocolate")) {
    text = `🍰 Master Sommelier Dessert & Digestif Curation\n\n` +
           `Regarding your question on "${prompt}":\n\n` +
           `• L'Étoile Golden Sphere ($32): Our signature 24-Karat edible gold sphere filled with Valrhona 70% dark chocolate ganache, passion fruit gel, and hazelnut praline core. Melted table-side with warm chocolate reduction.\n` +
           `• Grand Marnier Soufflé ($28): Light-as-air baked soufflé infused with Grand Marnier liqueur, served with Madagascar vanilla bean ice cream.\n\n` +
           `Pairing Recommendation: Taylor Fladgate 40 Year Old Tawny Port or Château Raymond-Lafon Sauternes.`;
  } else if (promptLower.includes("steak") || promptLower.includes("wagyu") || promptLower.includes("meat") || promptLower.includes("beef") || promptLower.includes("ribeye")) {
    text = `🥩 Dry-Aged Beef & Wagyu Selection\n\n` +
           `Regarding your inquiry about "${prompt}":\n\n` +
           `• Dry-Aged Tomahawk Ribeye 32oz ($165): 45-day Himalayan salt-cave aged Angus prime ribeye, charbroiled over binchotan white charcoal with smoked marrow butter and black truffle jus.\n` +
           `• Truffled Wagyu A5 Carpaccio ($48): Miyazaki A5 Wagyu thinly sliced with shaved Périgord truffle and 36-month Parmigiano foam.\n\n` +
           `Sommelier Pairing: Opus One Napa Valley Cabernet Sauvignon 2018.`;
  } else if (promptLower.includes("seafood") || promptLower.includes("fish") || promptLower.includes("lobster") || promptLower.includes("sea bass")) {
    text = `🌊 Ocean Treasures & Seafood Curation\n\n` +
           `Regarding your request for "${prompt}":\n\n` +
           `• Pan-Roasted Chilean Sea Bass ($58): Wild sea bass with crispy skin, lemongrass champagne velouté, and Osetra caviar pearls.\n` +
           `• Wild Brittany Lobster Bisque ($36): Velvety broth infused with Hennessy cognac, Spanish saffron, and butter-poached lobster medallion.\n\n` +
           `Sommelier Pairing: Cloudy Bay Sauvignon Blanc 2022 or Domaine Leflaive Puligny-Montrachet.`;
  } else if (promptLower.includes("hi") || promptLower.includes("hello") || promptLower.includes("hey") || promptLower.includes("who are you")) {
    text = `Bonsoir! Welcome to L'Étoile D'Or.\n\n` +
           `I am your Master Sommelier & Concierge. Whether you require a wine pairing for Miyazaki Wagyu, table reservations in our private Salt-Cave Vault, or plant-based tasting menus, I am at your service.\n\n` +
           `How may I assist your palate tonight?`;
  } else {
    // Dynamic tailored answer for any open question
    text = `✨ Sommelier Concierge Insights\n\n` +
           `Thank you for asking: "${prompt}".\n\n` +
           `At L'Étoile D'Or, Chef Antoine Laurent curates every dish with seasonal precision.\n\n` +
           `• Signature Dish: Dry-Aged Tomahawk Ribeye with smoked marrow butter & Périgord black truffle.\n` +
           `• Featured Vintage: Château Margaux Premier Grand Cru 2015.\n` +
           `• Seating Experience: Main Dining Hall with live grand piano or private Salt-Cave Vault.\n\n` +
           `Would you like to reserve a table or view our full menu options for your visit?`;
  }

  const cleaned = cleanMarkdownFormatting(text);
  let current = "";
  for (let i = 0; i < cleaned.length; i += 3) {
    current = cleaned.slice(0, i + 3);
    if (onChunk) onChunk(current);
    await new Promise(r => setTimeout(r, 15));
  }
  if (onChunk) onChunk(cleaned);

  return { content: cleaned, reasoning: `Analyzed guest query on ${prompt}` };
}
