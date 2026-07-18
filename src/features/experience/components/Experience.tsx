'use client';

import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionTitle } from '@/components/ui/section-title';

import { ExperienceTimeline } from './ExperienceTimeline';
import { useI18n } from '@/i18n/provider';

export default function Experience() {
  const { dictionary } = useI18n();
  const copy = dictionary.sections.experience;
  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          eyebrow={copy[0] ?? ''}
          title={copy[1] ?? ''}
          description={copy[2] ?? ''}
        />
        <ExperienceTimeline />
      </Container>
    </Section>
  );
}
