import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const headingVariants = cva('font-semibold tracking-tight text-foreground', {
  variants: {
    level: {
      display:
        'text-5xl leading-[var(--leading-tight)] tracking-[var(--tracking-tighter)] sm:text-6xl',
      h1: 'text-4xl leading-[var(--leading-tight)] tracking-[var(--tracking-tighter)] sm:text-5xl',
      h2: 'text-3xl leading-[var(--leading-snug)] tracking-[var(--tracking-tight)] sm:text-4xl',
      h3: 'text-2xl leading-[var(--leading-snug)] tracking-[var(--tracking-tight)]',
      h4: 'text-xl leading-[var(--leading-snug)]',
    },
    muted: {
      true: 'text-muted-foreground',
      false: '',
    },
  },
  defaultVariants: {
    level: 'h2',
    muted: false,
  },
});

type HeadingLevel = NonNullable<VariantProps<typeof headingVariants>['level']>;

const headingElements: Record<HeadingLevel, 'h1' | 'h2' | 'h3' | 'p'> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h3',
};

type HeadingProps = React.ComponentProps<'h1'> &
  VariantProps<typeof headingVariants> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  };

function Heading({ className, level = 'h2', muted, as, ...props }: HeadingProps) {
  const resolvedLevel = level ?? 'h2';
  const Component = as ?? headingElements[resolvedLevel];

  return (
    <Component
      data-slot="heading"
      className={cn(headingVariants({ level: resolvedLevel, muted, className }))}
      {...props}
    />
  );
}

export { Heading, headingVariants };
