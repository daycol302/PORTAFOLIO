'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

import type { Experience } from '@/types/portfolio';

import { ExperienceBadge } from './ExperienceBadge';
import { ExperienceHeader } from './ExperienceHeader';

type Props = {
  experience: Experience;
};

export function ExperienceItem({ experience }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="relative"
    >
      <Card className="relative overflow-hidden">
        <div className="p-6">
          <ExperienceHeader
            role={experience.role}
            company={experience.company}
            location={experience.location}
            start={experience.start}
            end={experience.end}
            current={experience.current}
          />

          <div className="mt-8">
            <ul className="space-y-4">
              {experience.description.map((item, index) => (
                <li
                  key={`${experience.id}-description-${index}`}
                  className="flex gap-3"
                >
                  <span className="bg-primary mt-2 size-2 rounded-full" />

                  <span className="text-muted-foreground leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {experience.technologies.map((tech) => (
              <ExperienceBadge key={tech} label={tech} />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
