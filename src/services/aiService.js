import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

const API_KEY = import.meta.env.VITE_NVIDIA_API_KEY || "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";
const MODEL_NAME = "nvidia/nemotron-3-ultra-550b-a55b";

export function cleanMarkdownFormatting(text) {
  if (!text) return "";
  return text
    .replace(/\*\*\*/g, '')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/^#+\s+/gm, '')
    .trim();
}

const SYSTEM_PROMPT = `You are "Crunchy AI Crave Assistant" for ${RESTAURANT_INFO.name}, a high-energy, top-tier fast-casual burger, crispy chicken & artisan pizza restaurant!
Your persona is energetic, friendly, helpful, and passionate about delicious food, hot deals, and custom combo builds.

CRITICAL INSTRUCTIONS:
1. NEVER mention any technical AI model names or company software names. You are purely the AI Crave Assistant of ${RESTAURANT_INFO.name}.
2. DO NOT use markdown bold asterisks (like ** or ***) in your answers. Output clean text using bullet points (•) and plain headings.

Menu Highlights:
${MENU_ITEMS.map(i => `- ${i.name} ($${i.price}): ${i.description} (Category: ${i.category})`).join('\n')}

Guidelines:
- Recommend burger custom combos, pizza crust options, spicy chicken crunch levels, and dessert milkshakes.
- Answer order, delivery, and combo deal questions cleanly.`;

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

  const endpoints = [
    "/api/nvidia/chat/completions",
    "https://integrate.api.nvidia.com/v1/chat/completions"
  ];

  for (const endpoint of endpoints) {
    try {
      if (onReasoning) {
        onReasoning("Sizzling prompt... matching custom combos and crave deals...");
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

              if (delta.reasoning_content) {
                fullReasoning += delta.reasoning_content;
                if (onReasoning) onReasoning(cleanMarkdownFormatting(fullReasoning));
              }

              if (delta.content !== null && delta.content !== undefined) {
                fullContent += delta.content;
                if (onChunk) onChunk(cleanMarkdownFormatting(fullContent));
              }
            } catch (e) {
              // Ignore partial JSON parse errors
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
      console.warn(`Endpoint ${endpoint} failed, generating dynamic Crave Assistant response...`, err);
    }
  }

  const lastUserPrompt = messages[messages.length - 1]?.content || "";
  return await generateDynamicCraveResponse(lastUserPrompt, onChunk, onReasoning);
}

async function generateDynamicCraveResponse(prompt, onChunk, onReasoning) {
  if (onReasoning) {
    onReasoning(`Analyzing crave request for: "${prompt}"... selecting top combos...`);
    await new Promise(r => setTimeout(r, 400));
  }

  const promptLower = prompt.toLowerCase();
  let text = "";

  if (promptLower.includes("burger") || promptLower.includes("smash") || promptLower.includes("beef") || promptLower.includes("cheese")) {
    text = `🍔 Crunchy Crave Burger Curation\n\n` +
           `For the ultimate burger craving:\n\n` +
           `• The Monster Double Smash Burger ($12.99): Two Angus smashed patties with triple melted cheddar, bacon, and secret Crave sauce.\n` +
           `• Fiery Nashville Spicy Chicken Burger ($11.49): Jumbo 11-spice crispy chicken in Nashville hot glaze with honey habanero mayo.\n\n` +
           `Pro Tip: Upgrade to the Ultimate Crave Box ($16.99) to get loaded animal fries and an Oreo shake!`;
  } else if (promptLower.includes("pizza") || promptLower.includes("pepperoni") || promptLower.includes("crust")) {
    text = `🍕 Hand-Tossed Pizza Highlights\n\n` +
           `Regarding your pizza request:\n\n` +
           `• Supreme Loaded Pepperoni ($18.99): Mozzarella stuffed crust, double smoked pepperoni, San Marzano sauce.\n` +
           `• Truffle Mushroom & 4-Cheese ($19.99): Creamy white base, porcini mushrooms, black truffle drizzle.\n\n` +
           `Would you like to customize your crust or add a 12-Piece Crispy Chicken Bucket?`;
  } else if (promptLower.includes("deal") || promptLower.includes("combo") || promptLower.includes("box") || promptLower.includes("save")) {
    text = `🔥 Hot Crave Deals Right Now\n\n` +
           `1. THE ULTIMATE CRAVE BOX ($16.99 - Save 30%):\n` +
           `Includes 1 Double Smash Burger + 2 Crispy Wings + Loaded Animal Fries + Thick Shake.\n\n` +
           `2. FAMILY PIZZA & CHICKEN FEAST ($34.99 - Save $13):\n` +
           `Includes 1 Supreme Pepperoni Stuffed Crust + 8 Pcs Crispy Chicken + 2 Shakes.\n\n` +
           `Head over to our Build Combo page to construct your custom box!`;
  } else {
    text = `Welcome to Burger & Crunch Co.!\n\n` +
           `Regarding "${prompt}":\n\n` +
           `• We serve 100% Angus smash burgers, 11-spice mega crispy chicken, and stuffed crust artisan pizzas.\n` +
           `• Average express delivery time is under 19 minutes.\n\n` +
           `How may I help you pick your combo or order today?`;
  }

  const cleaned = cleanMarkdownFormatting(text);
  let current = "";
  for (let i = 0; i < cleaned.length; i += 3) {
    current = cleaned.slice(0, i + 3);
    if (onChunk) onChunk(current);
    await new Promise(r => setTimeout(r, 12));
  }
  if (onChunk) onChunk(cleaned);

  return { content: cleaned, reasoning: `Analyzed craving for: ${prompt}` };
}
