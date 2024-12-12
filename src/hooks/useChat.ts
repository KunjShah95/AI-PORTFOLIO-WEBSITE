import { useState, useCallback } from 'react';
import { ChatMessage } from '../types';
import { generateAIResponse, formatChatMessage } from '../utils/chat';
import { useAnalytics } from './useAnalytics';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { trackInteraction } = useAnalytics();

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage = formatChatMessage(content, 'user');
    setMessages(prev => [...prev, userMessage]);
    trackInteraction('chat', 'send_message');

    setIsLoading(true);
    try {
      const response = await generateAIResponse(content);
      const aiMessage = formatChatMessage(response, 'assistant');
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Failed to generate AI response:', error);
    } finally {
      setIsLoading(false);
    }
  }, [trackInteraction]);

  return {
    messages,
    isLoading,
    sendMessage,
  };
}