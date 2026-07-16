import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionTitle } from '@/components/ui/section-title';
import { SkillsGrid } from './SkillsGrid';

export function Skills() {
  return (
    <Section id="skills" variant="muted">
      <Container>
        <SectionTitle
          eyebrow="Competencias"
          title="Tecnologías y competencias profesionales"
          description="Mi experiencia combina infraestructura empresarial, plataformas Microsoft, desarrollo moderno y el aprendizaje continuo en Cloud Computing para construir soluciones eficientes y escalables."
        />

        <SkillsGrid />
      </Container>
    </Section>
  );
}
