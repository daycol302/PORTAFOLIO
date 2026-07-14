import { CheckCircle2 } from 'lucide-react';

import { aboutData } from '../data/about';
import { Card } from '@/components/ui/card';

export function AboutHighlights() {
  return (
    <Card>
      <h3 className="mb-6 text-xl font-semibold">
        Fortalezas
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {aboutData.highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-primary" />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}