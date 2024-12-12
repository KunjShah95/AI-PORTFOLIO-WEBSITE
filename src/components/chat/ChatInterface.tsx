import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { ChatMessage } from '../../types';
import { ChatBubble } from './ChatBubble';

export function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a simulated AI response. In a real implementation, this would be connected to an AI service.',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 p-4 border-b dark:border-gray-700">
        <Bot className="text-purple-600" />
        <h2 className="font-semibold">AI Assistant</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <ChatBubble key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 rounded-full border dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}