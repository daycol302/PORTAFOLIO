'use client';

import { Menu, X } from 'lucide-react';
import * as React from 'react';

import { NavLinks } from '@/components/layout/nav-links';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  const close = React.useCallback(() => setOpen(false), []);

  React.useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, close]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      <div
        id="mobile-nav"
        className={cn(
          'absolute inset-x-0 top-16 border-b border-border bg-background/95 backdrop-blur-md transition-all duration-200',
          open
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0 pointer-events-none'
        )}
      >
        <NavLinks
          className="flex flex-col gap-4 px-[var(--space-container)] py-6"
          onLinkClick={close}
        />
      </div>
    </div>
  );
}
