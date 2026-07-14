import { About } from "@/features/about";
import { Experience } from "@/features/experience";
import Hero from "@/features/hero/components/Hero";
import { Projects } from "@/features/projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
