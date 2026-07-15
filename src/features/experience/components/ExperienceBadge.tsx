import { Badge } from '@/components/ui/badge';

type ExperienceBadgeProps = {
  label: string;
};

export function ExperienceBadge({ label }: ExperienceBadgeProps) {
  return <Badge variant="outline">{label}</Badge>;
}
