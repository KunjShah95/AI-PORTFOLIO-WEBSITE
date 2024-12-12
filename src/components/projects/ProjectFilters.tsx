import React from 'react';
import { ProjectFilter } from '../../types';

interface ProjectFiltersProps {
  filters: ProjectFilter[];
  onToggle: (tag: string) => void;
}

export function ProjectFilters({ filters, onToggle }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ tag, active }) => (
        <button
          key={tag}
          onClick={() => onToggle(tag)}
          className={`px-4 py-2 rounded-full transition-colors ${
            active
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}