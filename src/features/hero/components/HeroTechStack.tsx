const technologies = [
  "AWS",
  "Next.js",
  "TypeScript",
  "Docker",
  "Linux",
  "Git",
  "PostgreSQL",
  "Active Directory",
];

export default function HeroTechStack() {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}