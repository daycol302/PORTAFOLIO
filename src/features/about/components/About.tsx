import { Section } from "@/components/layout/section";

import { AboutContent } from "./AboutContent";
import { AboutHighlights } from "./AboutHighlights";
import { AboutStats } from "./AboutStats";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-2">
        <AboutContent />

        <div className="space-y-10">
          <AboutHighlights />

          <AboutStats />
        </div>
      </div>
    </Section>
  );
}