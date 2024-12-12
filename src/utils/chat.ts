import { ChatMessage } from '../types';

export async function generateAIResponse(message: string): Promise<string> {
  // This would be connected to an actual AI service in production
  const responses = [
    "I'd be happy to help you with that! Let me know what specific information you're looking for.",
    "That's an interesting question about my projects. Would you like to know more about the technical details?",
    "I have experience with various technologies. Which specific area interests you?",
  ];
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      resolve(responses[randomIndex]);
    }, 1000);
  });
}

export function formatChatMessage(content: string, role: 'user' | 'assistant'): ChatMessage {
  return {
    id: Date.now().toString(),
    role,
    content,
    timestamp: Date.now(),
  };
}