'use client';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionTitle } from '@/components/ui/section-title';
import { SkillsGrid } from './SkillsGrid';
import { useI18n } from '@/i18n/provider';

export function Skills() {
  const { dictionary } = useI18n();
  const copy = dictionary.sections.skills;
  return (
    <Section id="skills" variant="muted">
      <Container>
        <SectionTitle
          eyebrow={copy[0] ?? ''}
          title={copy[1] ?? ''}
          description={copy[2] ?? ''}
        />

        <SkillsGrid />
      </Container>
    </Section>
  );
}
