import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionTitle } from '@/components/ui/section-title';

import { ExperienceTimeline } from './ExperienceTimeline';

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          eyebrow="Experiencia Profesional"
          title="Construyendo soluciones tecnológicas con impacto"
          description="Durante los últimos años he participado en proyectos de soporte empresarial, infraestructura, administración de plataformas Microsoft y servicios Cloud, fortaleciendo continuamente mis habilidades para afrontar nuevos retos tecnológicos."
        />
        <ExperienceTimeline />
      </Container>
    </Section>
  );
}
