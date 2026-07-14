import { aboutData } from '../data/about';

export function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {aboutData.stats.map((stat) => (
        <div
          key={stat.label}
          className="hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-4xl font-bold text-primary">
            {stat.value}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}