import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';

import { AboutContent } from './AboutContent';
import { AboutHighlights } from './AboutHighlights';
import { AboutStats } from './AboutStats';

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <AboutContent />

          <div className="space-y-6">
            <AboutHighlights />

            <AboutStats />
          </div>
        </div>
      </Container>
    </Section>
  );
}
