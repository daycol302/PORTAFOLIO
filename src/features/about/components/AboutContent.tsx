import { SectionTitle } from '@/components/ui/section-title';
import { aboutData } from '../data/about';

export function AboutContent() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Sobre mí"
        title={aboutData.subtitle}
        description=""
      />

      <div className="text-muted-foreground space-y-5 leading-8">
        {aboutData.description
          .trim()
          .split('\n')
          .map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
      </div>
    </div>
  );
}
