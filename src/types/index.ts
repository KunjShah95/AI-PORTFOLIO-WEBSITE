export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ProjectFilter {
  tag: string;
  active: boolean;
}