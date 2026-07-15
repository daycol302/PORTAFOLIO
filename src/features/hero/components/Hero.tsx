import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';

import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

export default function Hero() {
  return (
    <Section id="hero" spacing="none" className="scroll-mt-16 py-5 md:py-8">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}
