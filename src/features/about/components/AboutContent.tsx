'use client';

import { SectionTitle } from '@/components/ui/section-title';
import { useI18n } from '@/i18n/provider';

export function AboutContent() {
  const { dictionary } = useI18n();
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow={dictionary.about.eyebrow}
        title={dictionary.about.subtitle}
        description=""
      />

      <div className="text-muted-foreground space-y-5 leading-8">
        {dictionary.about.description
          .trim()
          .split('\n')
          .map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
      </div>
    </div>
  );
}
