type ExperienceBadgeProps = {
  label: string;
};

export function ExperienceBadge({
  label,
}: ExperienceBadgeProps) {
  return (
    <span
      className="
      rounded-full
      border
      border-border
      bg-muted/40
      px-3
      py-1
      text-xs
      font-medium
      transition-colors
      hover:border-primary
      hover:text-primary
      "
    >
      {label}
    </span>
  );
}