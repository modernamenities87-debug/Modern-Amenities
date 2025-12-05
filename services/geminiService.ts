import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getChatSession = () => {
  if (chatSession) return chatSession;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are "AmenityBot", an expert interior design consultant for Modern Amenities. 
        Your goal is to help customers find the perfect furniture for their office or home.
        Be professional, polite, and knowledgeable about ergonomics, office layouts, and color coordination.
        Suggest products like "Liberate Chair", "Genesis Workstation", or "Cloud Sofa" when relevant.
        Keep answers concise (under 100 words) unless asked for details.
        If asked about prices, give estimates in INR but suggest contacting a dealer for exact quotes.`,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Error initializing Gemini Chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const session = getChatSession();
  if (!session) {
    return "I'm currently having trouble connecting to my design database. Please try again later.";
  }

  try {
    const response = await session.sendMessage({ message });
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a technical glitch. Let's try that again.";
  }
};