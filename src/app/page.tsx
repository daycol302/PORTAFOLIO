import { About } from '@/features/about';
import { Contact } from '@/features/contact';
import { Experience } from '@/features/experience';
import { Hero } from '@/features/hero';
import { Projects } from '@/features/projects';
import { Skills } from '@/features/skills';
import { Certifications } from '@/features/certifications';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
