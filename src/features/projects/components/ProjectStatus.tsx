import { Badge } from '@/components/ui/badge';

type Props = {
  status: 'Completed' | 'In Progress' | 'Learning';
};

export function ProjectStatus({ status }: Props) {
  if (status === 'Completed') {
    return <Badge variant="success">Completado</Badge>;
  }

  if (status === 'In Progress') {
    return <Badge variant="warning">En progreso</Badge>;
  }

  return <Badge variant="secondary">Aprendiendo</Badge>;
}
