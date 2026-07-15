import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionTitle } from '@/components/ui/section-title';

import { ExperienceTimeline } from './ExperienceTimeline';

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          eyebrow="Experiencia"
          title="Mi trayectoria profesional"
          description="Más de 3 años trabajando en soporte, infraestructura y administración de plataformas Microsoft, preparándome para especializarme en Cloud Computing."
        />

        <ExperienceTimeline />
      </Container>
    </Section>
  );
}
