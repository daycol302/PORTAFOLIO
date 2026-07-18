'use client';

import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionTitle } from '@/components/ui/section-title';

import { ProjectsGrid } from './ProjectsGrid';
import { useI18n } from '@/i18n/provider';

export default function Projects() {
  const { dictionary } = useI18n();
  const copy = dictionary.sections.projects;
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          eyebrow={copy[0] ?? ''}
          title={copy[1] ?? ''}
          description={copy[2] ?? ''}
        />

        <ProjectsGrid />
      </Container>
    </Section>
  );
}
