type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionTitleProps) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl'
      }
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}