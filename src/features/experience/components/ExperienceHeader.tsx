type ExperienceHeaderProps = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
};

export function ExperienceHeader({
  role,
  company,
  location,
  start,
  end,
  current,
}: ExperienceHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">
          {role}
        </h3>

        <p className="text-lg text-muted-foreground">
          {company}
        </p>

        <p className="text-sm text-muted-foreground">
          📍 {location}
        </p>
      </div>

      <span
        className="
        rounded-full
        border
        border-primary/20
        bg-primary/10
        px-4
        py-2
        text-sm
        font-medium
        text-primary
        "
      >
        {start} — {current ? "Actual" : end}
      </span>
    </div>
  );
}