import { Badge } from '@/components/ui/badge';
import { useI18n } from '@/i18n/provider';

type Props = {
  status: 'Completed' | 'In Progress' | 'Learning';
};

export function ProjectStatus({ status }: Props) {
  const { dictionary } = useI18n();
  if (status === 'Completed') {
    return <Badge variant="success">{dictionary.common.completed}</Badge>;
  }

  if (status === 'In Progress') {
    return <Badge variant="warning">{dictionary.common.progress}</Badge>;
  }

  return <Badge variant="secondary">{dictionary.common.learning}</Badge>;
}
