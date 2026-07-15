import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const sectionVariants = cva('w-full', {
  variants: {
    spacing: {
      none: 'py-0',
      sm: 'py-8 md:py-12',
      default: 'py-[var(--space-section)] md:py-16',
      lg: 'py-[var(--space-section-lg)] md:py-24',
    },
    variant: {
      default: 'bg-background',
      muted: 'bg-muted/50',
      elevated: 'bg-surface-elevated',
    },
  },
  defaultVariants: {
    spacing: 'default',
    variant: 'default',
  },
});

function Section({
  className,
  spacing,
  variant,
  ...props
}: React.ComponentProps<'section'> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing, variant, className }))}
      {...props}
    />
  );
}

export { Section, sectionVariants };
