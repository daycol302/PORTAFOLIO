import { skills } from '../data/skills';
import { SkillCategory } from './SkillCategory';

export function SkillsGrid() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {skills.map((category) => (
        <SkillCategory key={category.title} category={category} />
      ))}
    </div>
  );
}
