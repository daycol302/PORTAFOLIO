import { Badge } from '@/components/ui/badge';

interface SkillCardProps {
  skill: string;
}

export function SkillCard({ skill }: SkillCardProps) {
  return <Badge variant="technology">{skill}</Badge>;
}
