import { SectionTitle } from "@/components/ui/section-title";
import { aboutData } from "../data/about";

export function AboutContent() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Sobre mí"
        title={aboutData.subtitle}
        description=""
      />

      <div className="space-y-5 leading-8 text-muted-foreground">
        {aboutData.description
          .trim()
          .split("\n")
          .map((paragraph) => (
            <p key={paragraph}>{paragraph.trim()}</p>
          ))}
      </div>
    </div>
  );
}