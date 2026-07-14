import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const containerVariants = cva('mx-auto w-full', {
  variants: {
    size: {
      sm: 'max-w-3xl',
      default: 'max-w-5xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    },
    padding: {
      none: 'px-0',
      default: 'px-[var(--space-container)]',
      lg: 'px-[var(--space-container)] sm:px-8',
    },
  },
  defaultVariants: {
    size: 'lg',
    padding: 'default',
  },
});

function Container({
  className,
  size,
  padding,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof containerVariants>) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ size, padding, className }))}
      {...props}
    />
  );
}

export { Container, containerVariants };
