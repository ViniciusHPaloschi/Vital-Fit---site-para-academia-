import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client safely
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToAssistant = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "Desculpe, o sistema de IA não está configurado corretamente (chave de API ausente).";
  }

  try {
    const model = 'gemini-2.5-flash';
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `Você é o VitalBot, um assistente virtual especialista da academia Vital Fit.
        Seu tom é motivador, enérgico e profissional.
        Responda dúvidas sobre exercícios, nutrição básica, benefícios dos planos da academia e horários.
        Seja conciso (máximo 3 frases) e incentive o usuário a visitar a academia.
        A academia oferece Musculação, Cross Training, Yoga e Boxe.`,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta agora.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro ao tentar conectar com o assistente. Tente novamente mais tarde.";
  }
};