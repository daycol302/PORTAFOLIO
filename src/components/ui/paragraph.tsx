import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const paragraphVariants = cva('text-foreground', {
  variants: {
    size: {
      sm: 'text-sm leading-[var(--leading-normal)]',
      default: 'text-base leading-[var(--leading-relaxed)]',
      lg: 'text-lg leading-[var(--leading-relaxed)]',
    },
    muted: {
      true: 'text-muted-foreground',
      false: '',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
    },
  },
  defaultVariants: {
    size: 'default',
    muted: true,
    weight: 'normal',
  },
});

function Paragraph({
  className,
  size,
  muted,
  weight,
  ...props
}: React.ComponentProps<'p'> & VariantProps<typeof paragraphVariants>) {
  return (
    <p
      data-slot="paragraph"
      className={cn(paragraphVariants({ size, muted, weight, className }))}
      {...props}
    />
  );
}

export { Paragraph, paragraphVariants };
