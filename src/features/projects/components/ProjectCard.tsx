'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import type { Project } from '@/types/portfolio';

import { ProjectImage } from './ProjectImage';
import { ProjectLinks } from './ProjectLinks';
import { ProjectStatus } from './ProjectStatus';

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="overflow-hidden"
    >
      <Card padding="none" className="flex h-full flex-col overflow-hidden">
        <ProjectImage image={project.image} title={project.title} />

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                {project.featured ? (
                  <span className="border-border/60 bg-primary/10 text-primary rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.24em] uppercase">
                    Featured
                  </span>
                ) : null}
              </div>

              <p className="text-muted-foreground text-sm">
                {project.subtitle}
              </p>
            </div>

            <ProjectStatus status={project.status} />
          </div>

          <p className="text-muted-foreground leading-7">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="technology">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-auto">
            <ProjectLinks
              {...(project.github ? { github: project.github } : {})}
              {...(project.demo ? { demo: project.demo } : {})}
            />
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
