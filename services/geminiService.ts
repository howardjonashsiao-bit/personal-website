import { GoogleGenAI } from "@google/genai";
import { USER_PROFILE, EXPERIENCES } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct a system prompt based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for Howard Hsiao's portfolio website. 
Your goal is to answer questions about Howard based strictly on the following information.
Be polite, professional, and slightly enthusiastic.

Howard's Profile:
${JSON.stringify(USER_PROFILE)}

Howard's Experience:
${JSON.stringify(EXPERIENCES)}

If a user asks about something not in this data, simply state that you don't have that specific information but they can contact Howard directly via the contact section.
Keep answers concise and relevant to a recruiter or potential collaborator.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my AI brain is currently offline (API Key missing). Please contact Howard directly!";
  }

  try {
    const model = 'gemini-2.5-flash';
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I processed that, but couldn't generate a text response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary error. Please try again later.";
  }
};