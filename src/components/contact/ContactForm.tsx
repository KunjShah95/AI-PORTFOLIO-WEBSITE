import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useAnalytics } from '../../hooks/useAnalytics';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const { trackInteraction } = useAnalytics();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackInteraction('click', 'contact_submit');
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        <Send size={20} />
        Send Message
      </button>
    </form>
  );
}