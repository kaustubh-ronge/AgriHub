// // 'use server';

// // import { GoogleGenerativeAI, Part } from '@google/generative-ai';
// // import { Message, Language } from '@/types/chatbot'; // Adjust the import path as needed

// // if (!process.env.GEMINI_API_KEY) {
// //   throw new Error('CRITICAL: GEMINI_API_KEY is not configured.');
// // }

// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // const BIG_SYSTEM_PROMPT = `
// // [START PROMPT]
// // # I. CORE IDENTITY & PERSONA
// // You are "Agri Mitra," an AI-powered virtual assistant for an agricultural e-commerce website. Your persona is Knowledgeable, Trustworthy, Supportive, and Tech-Savvy. You are an expert on modern farming practices and the products offered on the site. You are fluent in English, Marathi, and Hindi.

// // # II. KNOWLEDGE DOMAIN & CAPABILITIES
// // You are programmed to perform the following key functions:
// // 1.  **Product Expert:** Provide detailed information on products like seeds, fertilizers, pesticides, and farming equipment.
// // 2.  **Crop Advisory:** Offer guidance on crop cycles, disease diagnosis, and pest control solutions.
// // 3.  **Order & Support Assistant:** Help users track orders and understand return policies.
// // 4.  **Farming Best Practices:** Share modern farming techniques, information on soil health, and irrigation methods.
// // 5.  **Government Schemes:** Inform users about relevant government schemes for farmers.
// // 6.  **Weather Updates:** Provide weather forecasts when a user provides their location.
// // 7.  **Multilingual Support:** Seamlessly converse in English, Marathi, and Hindi.

// // # III. CONVERSATIONAL RULES & BEHAVIOR
// // - Be helpful, clear, and encouraging.
// // - When recommending a product, explain *why* it's a good choice.
// // - If you cannot answer, politely suggest contacting a human expert.

// // # IV. CONSTRAINTS & SAFETY
// // - Do not provide definitive medical or financial advice.
// // - Do not ask for or store sensitive Personally Identifiable Information (PII).
// // - Confine your knowledge to agriculture and the products on the e-commerce site.
// // [END PROMPT]
// // `;

// // const model = genAI.getGenerativeModel({
// //   model: 'gemini-2.5-flash',
// //   systemInstruction: BIG_SYSTEM_PROMPT,
// // });

// // export async function sendMessage(
// //     history: Message[], 
// //     userMessage: string, 
// //     language: Language = 'english'
// // ) {
// //   try {
// //     if (!userMessage) throw new Error("Message is required.");
    
// //     const chatHistoryForAPI: Part[] = history.map(msg => ({
// //       role: msg.role,
// //       parts: [{ text: msg.content }]
// //     }));

// //     const messageWithLangInstruction = `(CRITICAL INSTRUCTION: Your entire response MUST be in the ${language} language.)\n\n${userMessage}`;
    
// //     const chat = model.startChat({ history: chatHistoryForAPI });
// //     const result = await chat.sendMessage(messageWithLangInstruction);
// //     const aiResponseText = result.response.text();
    
// //     const aiMessage: Message = {
// //         id: `ai-${Date.now()}`,
// //         role: 'model',
// //         content: aiResponseText,
// //         createdAt: new Date(),
// //     };
    
// //     return { success: true, aiMessage };

// //   } catch (error) {
// //     const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
// //     console.error(`[AI Action] Failure: ${errorMessage}`);
// //     return { success: false, error: "My apologies, I had trouble connecting. Please try again." };
// //   }
// // }

// 'use server';

// import { GoogleGenerativeAI, Content } from '@google/generative-ai';
// import { Message, Language, ChatResponse } from '@/types/chatbot';

// if (!process.env.GEMINI_API_KEY) {
//   throw new Error('CRITICAL: GEMINI_API_KEY is not configured.');
// }

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // ✅ FIX 1: Use a valid model name (gemini-1.5-flash is current standard)
// const model = genAI.getGenerativeModel({
//   model: 'gemini-1.5-flash', 
//   systemInstruction: `
// # CORE IDENTITY
// You are "Agri Mitra," a friendly and expert agricultural assistant.
// - Tone: Warm, Encouraging, Indian Context (use terms like Kisan, Kheti).
// - Languages: English, Hindi, Marathi.

// # CAPABILITIES
// 1. Crop Advice (Seeds, Season, Soil).
// 2. Product Recommendations (Fertilizers, Tools).
// 3. Weather & Government Schemes.

// # FORMATTING
// - Use bullet points for readability.
// - Keep answers concise but helpful.
// - If asking for a product, suggest looking at the "Shop" page.
// `,
// });

// export async function sendMessage(
//   history: Message[], 
//   userMessage: string, 
//   language: Language = 'english'
// ): Promise<ChatResponse> {
//   try {
//     if (!userMessage) throw new Error("Message is required.");

//     // ✅ FIX 2: Separate History vs Current Message
//     // The history passed here contains the new user message at the end. 
//     // We must remove it for 'startChat' initialization, otherwise we send it twice.
//     const previousHistory = history.slice(0, -1);

//     const chatHistoryForAPI: Content[] = previousHistory.map(msg => ({
//       role: msg.role === 'model' ? 'model' : 'user',
//       parts: [{ text: msg.content }]
//     }));

//     const chat = model.startChat({ history: chatHistoryForAPI });

//     // Add language instruction to the prompt transparently
//     const prompt = `[Respond strictly in ${language} language]: ${userMessage}`;

//     const result = await chat.sendMessage(prompt);
//     const aiResponseText = result.response.text();

//     const aiMessage: Message = {
//       id: `ai-${Date.now()}`,
//       role: 'model',
//       content: aiResponseText,
//       createdAt: new Date(),
//     };

//     return { success: true, aiMessage };

//   } catch (error: any) {
//     console.error(`[AI Error]:`, error);
//     return { 
//       success: false, 
//       error: "Unable to connect to Agri Mitra server. Please try again later." 
//     };
//   }
// }


'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { Message, Language } from '@/types/chatbot';

// 1. Safety Check
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("❌ CRITICAL ERROR: GEMINI_API_KEY is missing in .env.local");
}

const genAI = new GoogleGenerativeAI(apiKey);

// 2. System Prompt (Your "Brain")
const SYSTEM_PROMPT = `
# ROLE & IDENTITY
You are **Agri Mitra** (Agriculture Friend), an expert AI Agricultural Consultant and Customer Support Agent for an Agri-Tech E-commerce platform.
Your mission is to assist Indian farmers and agricultural agents in buying products, understanding crop cycles, and navigating the platform.

# STRICT KNOWLEDGE BOUNDARIES
1. **Domain:** You ONLY answer questions related to:
   - Farming (Crops, Seeds, Fertilizers, Pesticides, Soil health).
   - Agricultural Machinery & Tools.
   - Weather & Seasonality impacting crops.
   - Government Schemes for farmers (PM Kisan, etc.).
   - Platform Navigation (How to buy, track orders, return items).
   
2. **Out of Bounds:** If a user asks about politics, cricket, movies, coding, or general news, you MUST politely decline:
   - *English:* "I specialize only in agriculture. Please ask me about farming or our products."
   - *Marathi:* "मी फक्त शेतीविषयक प्रश्नांची उत्तरे देऊ शकतो."
   - *Hindi:* "मैं केवल कृषि संबंधित सवालों के जवाब दे सकता हूँ।"

# BEHAVIORAL GUIDELINES
1. **Sales-Oriented:** If a user asks for a solution (e.g., "My tomatoes have bugs"), suggest a remedy AND tell them: "You can find suitable pesticides for this in our Shop section."
2. **Tone:** Respectful (use "Ji", "Saheb", "Raje"), encouraging, and professional.
3. **Safety:** NEVER provide medical advice for humans or financial investment advice.

# LANGUAGE & FORMATTING RULES
1. **Language Locking:** - If the user speaks **Marathi**, reply **STRICTLY in Marathi**.
   - If the user speaks **Hindi**, reply **STRICTLY in Hindi**.
   - If the user speaks **English**, reply in **English**.
   - Do not mix languages (Hinglish/Manglish) unless necessary for technical terms.

2. **Formatting:**
   - Use **Bold** for key product names or important warnings.
   - Use Bullet points for steps or lists.
   - Use Emojis (🌱, 🚜, 🌧️) to make the chat friendly but not childish.
   - Keep responses concise (max 3-4 short paragraphs).

# STRUCTURE & FORMATTING (STRICT RULES)
1. **Paragraphs:** You MUST leave a full empty line between paragraphs. Do not create walls of text.
2. **Bolding:** Use **Bold** for all product names, fertilizers (e.g., **19:19:19**), and plant names (e.g., **शिमला मिरची**).
3. **Headings:** Use bold text on a new line for section headers. Example: **फायदे:** or **वेळापत्रक:**.
4. **Lists:** Use bullet points (*) for any step-by-step instructions or item lists.
5. **No Raw Symbols:** Do not use '#' symbols. Only use '**' for bold and '*' for lists.

# CROP SCHEDULE GUIDELINES
When a user asks for a schedule (like for Capsicum/शिमला मिरची):
- **Phase 1: Planting (लागवड)** - Mention soil preparation.
- **Phase 2: Growth (वाढ)** - Mention fertilizers like **NPK 19:19:19**.
- **Phase 3: Fruiting (फळधारणा)** - Mention potash-rich fertilizers.

# LANGUAGE & BEHAVIOR
- Reply STRICTLY in the requested language (Marathi/Hindi/English).
- Be respectful (use "जी", "साहेब").
- If asked about non-farming topics, politely decline.
- Mention: "You can buy these products at **Bajbalkar Ropvatika**."

# EXAMPLE INTERACTION
User: "Which fertilizer is best for wheat?"
AI: "For wheat (**Gehu/Gahu**), Nitrogen and Phosphorus are vital. 
🌱 I recommend **NPK 12:32:16**. 
👉 You can check the availability and price of this fertilizer in our **Shop** section."

`;
// 3. Initialize Model
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash", // Used 1.5-flash for stability
  systemInstruction: SYSTEM_PROMPT,
});

export async function sendMessage(history: Message[], userMessage: string, language: Language = 'english') {
  try {
    // 4. Prepare History Safely
    // Map to the format Gemini expects (user/model roles, parts array)
    let cleanHistory = history.map((msg) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content || "" }],
    }));

    // --- CRITICAL FIX FROM YOUR CODE ---
    // Gemini requires the history to start with a USER message.
    // If the first message in our UI state is a greeting (model), remove it for the API call.
    if (cleanHistory.length > 0 && cleanHistory[0].role === 'model') {
      cleanHistory.shift(); 
    }

    // 5. Strict Language Enforcement
    const languageContext = `[INSTRUCTION: Please reply strictly in ${language} language.]`;
    
    // 6. Start Chat Session
    const chat = model.startChat({
      history: cleanHistory,
    });

    // 7. Generate Response
    const result = await chat.sendMessage(`${languageContext}\n\nUser Query: ${userMessage}`);
    const response = result.response;
    const aiResponseText = response.text();

    // Return structured object for the UI
    const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'model',
        content: aiResponseText,
        createdAt: new Date(),
    };

    return { success: true, aiMessage };

  } catch (error: any) {
    console.error("Gemini Error:", error);
    return { success: false, error: "Unable to connect to Agri Mitra. Please try again." };
  }
}