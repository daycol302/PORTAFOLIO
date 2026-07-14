import Link from "next/link";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">

      <Link
        href="#projects"
        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:opacity-90"
      >
        View Projects
      </Link>

      <Link
        href="#contact"
        className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-muted"
      >
        Contact Me
      </Link>

    </div>
  );
}