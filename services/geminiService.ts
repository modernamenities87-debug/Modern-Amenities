
import { GoogleGenAI } from "@google/genai";

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction: `You are "AmenityBot", a world-class senior interior design and ergonomic expert for "Modern Amenities Furniture". 
        
        Guidelines:
        1. Context: Modern Amenities is a leader in premium office and home furniture (similar to brands like Featherlite or Herman Miller).
        2. Products: You recommend chairs (Liberate, Helix, Astro), workstations (Genesis, Perform), and tables (Elevate Sit-Stand, Vibe).
        3. Expertise: Explain ergonomic features like "Synchro-tilt", "Lumbar Support", and "Dynaflex" to help users understand the value.
        4. Tone: Professional, helpful, and sophisticated.
        5. Language: Use English primarily, but understand Hinglish queries.
        6. Limits: Keep responses concise (under 80 words).
        7. Pricing: Give estimates in INR but always suggest contacting the sales team for bulk quotes.`,
      },
    });

    return response.text || "I apologize, I'm having trouble retrieving that design advice. How else can I help you?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our design server is currently resting. Please try again in a moment!";
  }
};
