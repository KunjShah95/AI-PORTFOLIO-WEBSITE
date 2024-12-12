import React, { useState } from 'react';
import { Project, ProjectFilter } from '../../types';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';

export function ProjectsGrid() {
  const [filters, setFilters] = useState<ProjectFilter[]>(
    Array.from(
      new Set(projects.flatMap(p => p.tags))
    ).map(tag => ({ tag, active: false }))
  );

  const filteredProjects = projects.filter(project =>
    filters.every(f => !f.active) || 
    project.tags.some(tag => filters.find(f => f.tag === tag)?.active)
  );

  const toggleFilter = (tag: string) => {
    setFilters(prev =>
      prev.map(f =>
        f.tag === tag ? { ...f, active: !f.active } : f
      )
    );
  };

  return (
    <div className="space-y-8">
      <ProjectFilters filters={filters} onToggle={toggleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}