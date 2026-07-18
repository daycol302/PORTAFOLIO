'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

import type { Experience } from '@/types/portfolio';

import { ExperienceBadge } from './ExperienceBadge';
import { ExperienceHeader } from './ExperienceHeader';
import { useI18n } from '@/i18n/provider';

type Props = {
  experience: Experience;
};

export function ExperienceItem({ experience }: Props) {
  const { dictionary } = useI18n();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative"
    >
      <Card className="relative overflow-hidden">
        <div className="p-8 lg:p-10">
          <ExperienceHeader
            role={experience.role}
            company={experience.company}
            location={experience.location}
            mode={experience.mode}
            employmentType={experience.employmentType}
            start={experience.start}
            end={experience.end}
            current={experience.current}
          />
          <div className="bg-border mt-6 h-px w-full" />
          <div className="mt-7">
            <ul className="space-y-4">
              {experience.description.map((item, index) => (
                <li
                  key={`${experience.id}-description-${index}`}
                  className="flex gap-3"
                >
                  <div className="bg-primary/10 text-primary mt-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                    ✓
                  </div>

                  <span className="text-muted-foreground text-[15px] leading-7">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-widest uppercase">
              {dictionary.common.technologies}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {experience.technologies.map((tech) => (
                <ExperienceBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
