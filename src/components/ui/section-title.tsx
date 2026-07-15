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
          ? 'mx-auto mb-6 max-w-2xl text-center'
          : 'mb-6 max-w-2xl'
      }
    >
      {eyebrow && (
        <span className="text-primary text-sm font-semibold tracking-[0.18em] uppercase">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="text-muted-foreground mt-3 max-w-2xl leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
