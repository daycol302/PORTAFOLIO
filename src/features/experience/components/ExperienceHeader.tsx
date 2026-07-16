type ExperienceHeaderProps = {
  role: string;
  company: string;
  location: string;
  mode: string;
  employmentType: string;
  start: string;
  end: string;
  current: boolean;
};

export function ExperienceHeader({
  role,
  company,
  location,
  mode,
  employmentType,
  start,
  end,
  current,
}: ExperienceHeaderProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div className="flex-1">
        {/* Empresa */}
        <h3 className="text-2xl font-bold tracking-tight">{company}</h3>

        {/* Cargo */}
        <p className="text-primary mt-2 text-lg font-semibold">{role}</p>

        {/* Información adicional */}
        <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span>📍 {location}</span>
          <span>🏢 {mode}</span>
          <span>💼 {employmentType}</span>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 md:items-end">
        {/* Fecha */}
        <span className="border-primary/20 bg-primary/10 text-primary rounded-full border px-4 py-2 text-sm font-semibold">
          {start} · {current ? 'Actualidad' : end}
        </span>

        {/* Badge empleo actual */}
        {current && (
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            ● Actualmente
          </span>
        )}
      </div>
    </div>
  );
}
