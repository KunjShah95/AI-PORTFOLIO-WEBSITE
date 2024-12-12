import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChatInterface } from './components/chat/ChatInterface';
import { ProjectsGrid } from './components/projects/ProjectsGrid';
import { ResumeGenerator } from './components/resume/ResumeGenerator';
import { ContactForm } from './components/contact/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="container mx-auto px-4 py-16 space-y-32">
        <Hero />
        
        <section id="projects" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <ProjectsGrid />
        </section>
        
        <section id="resume" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Resume Generator</h2>
          <ResumeGenerator />
        </section>
        
        <section id="chat" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Chat with AI</h2>
          <ChatInterface />
        </section>
        
        <section id="contact" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}