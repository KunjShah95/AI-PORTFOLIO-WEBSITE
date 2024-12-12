import React from 'react';
import { Bot, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-8">
        <div className="relative inline-block">
          <Bot size={48} className="text-purple-600 animate-bounce" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold">
          Welcome to the Future of
          <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Portfolio Websites
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my work through an AI-powered experience. Ask questions, get personalized recommendations,
          and discover projects that match your interests.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            Chat with AI
          </button>
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            View Projects
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}