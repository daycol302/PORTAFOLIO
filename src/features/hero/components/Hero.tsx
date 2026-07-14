import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-12 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}