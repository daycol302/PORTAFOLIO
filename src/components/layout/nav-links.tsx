'use client';

import { siteConfig } from '@/config/site';

import { NavLink } from '@/components/layout/nav-link';

type NavLinksProps = {
  className?: string;
  onLinkClick?: () => void;
};

export function NavLinks({ className, onLinkClick }: NavLinksProps) {
  return (
    <ul className={className}>
      {siteConfig.nav.map((item) => (
        <li key={item.href}>
          <NavLink
            href={item.href}
            label={item.label}
            onClick={onLinkClick}
          />
        </li>
      ))}
    </ul>
  );
}
