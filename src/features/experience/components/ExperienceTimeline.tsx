'use client';

import { motion } from 'framer-motion';
import { getExperiences } from '../data/experience';
import { ExperienceItem } from './ExperienceItem';
import { useI18n } from '@/i18n/provider';

export function ExperienceTimeline() {
  const { locale } = useI18n();
  const experiences = getExperiences(locale);
  return (
    <motion.div className="relative mt-20">
      <motion.div
        className="bg-border absolute top-0 left-4 h-full w-px"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      />

      <div className="space-y-12">
        {experiences.map((experience) => (
          <div key={experience.id} className="relative pl-14 sm:pl-16">
            <div className="border-background bg-primary absolute top-10 left-0 h-4 w-4 rounded-full border-4" />

            <ExperienceItem experience={experience} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
