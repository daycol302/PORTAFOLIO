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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden p-6">
        <h3 className="text-foreground text-lg font-semibold">
          {category.title}
        </h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
