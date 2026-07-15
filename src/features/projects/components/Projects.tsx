import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionTitle } from '@/components/ui/section-title';

import { ProjectsGrid } from './ProjectsGrid';

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          eyebrow="Proyectos"
          title="Algunos proyectos destacados"
          description="Aplicaciones y laboratorios desarrollados para fortalecer mis conocimientos en desarrollo, infraestructura y Cloud Computing."
        />

        <ProjectsGrid />
      </Container>
    </Section>
  );
}
