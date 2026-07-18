'use client';

import { getProjects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { useI18n } from '@/i18n/provider';

export function ProjectsGrid() {
  const { locale } = useI18n();
  const projects = getProjects(locale);
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
