import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionTitle } from '@/components/ui/section-title';
import { SkillsGrid } from './SkillsGrid';

export function Skills() {
  return (
    <Section id="skills" variant="muted">
      <Container>
        <SectionTitle
          eyebrow="Habilidades"
          title="Tecnologías que uso en mis proyectos"
          description="Integro las mejores prácticas de cloud, infraestructura y desarrollo para construir soluciones confiables y escalables."
        />

        <SkillsGrid />
      </Container>
    </Section>
  );
}
