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
          title="Proyectos que reflejan mi experiencia profesional"
          description="Una selección de proyectos y laboratorios que demuestran mi experiencia en infraestructura, desarrollo y el proceso de especialización que estoy llevando hacia Cloud Computing."
        />

        <ProjectsGrid />
      </Container>
    </Section>
  );
}
