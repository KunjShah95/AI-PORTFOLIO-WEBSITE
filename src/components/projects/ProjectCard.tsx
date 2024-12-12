import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <ExternalLink size={20} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}