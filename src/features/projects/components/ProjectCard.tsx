'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Network } from 'lucide-react';
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

          <ul className="space-y-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-sm leading-6">
                <CheckCircle2 className="text-primary mt-1 size-4 shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>

          {project.architecture ? (
            <div className="border-primary/15 bg-primary/5 rounded-xl border p-3 text-sm">
              <p className="text-primary flex items-center gap-2 font-semibold">
                <Network className="size-4" /> Arquitectura
              </p>
              <p className="text-muted-foreground mt-2 leading-6">
                {project.architecture}
              </p>
            </div>
          ) : null}

          {project.metric ? (
            <p className="text-primary text-sm font-semibold">
              {project.metric}
            </p>
          ) : null}

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
