'use client';

import { siteConfig } from '@/config/site';

import { NavLink } from '@/components/layout/nav-link';

type NavLinksProps = {
  className?: string;
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function NavLinks({ className, onLinkClick }: NavLinksProps) {
  return (
    <ul className={`flex items-center gap-8 ${className ?? ''}`}>
      {siteConfig.nav.map((item) => (
        <li key={item.href}>
          <NavLink
            href={item.href}
            label={item.label}
            {...(onLinkClick ? { onClick: onLinkClick } : {})}
          />
        </li>
      ))}
    </ul>
  );
}
