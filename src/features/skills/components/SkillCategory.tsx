'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { SkillCard } from './SkillCard';
import type { SkillCategory as SkillCategoryType } from '../types';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h3 className="text-foreground text-xl font-bold tracking-tight">
          {category.title}
        </h3>

        <div className="bg-primary mt-3 mb-6 h-1 w-12 rounded-full" />

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
