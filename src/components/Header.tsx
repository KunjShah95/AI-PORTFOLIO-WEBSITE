import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Portfolio.AI
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden">
            <Menu size={20} />
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400">About</a>
            <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400">Projects</a>
            <a href="#chat" className="hover:text-purple-600 dark:hover:text-purple-400">Chat</a>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}