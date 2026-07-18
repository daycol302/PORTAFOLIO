'use client';

import { getSkills } from '../data/skills';
import { SkillCategory } from './SkillCategory';
import { useI18n } from '@/i18n/provider';

export function SkillsGrid() {
  const { locale } = useI18n();
  const skills = getSkills(locale);
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {skills.map((category) => (
        <SkillCategory key={category.title} category={category} />
      ))}
    </div>
  );
}
