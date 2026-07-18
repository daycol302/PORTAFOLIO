'use client';

import { useI18n } from '@/i18n/provider';

import { NavLink } from '@/components/layout/nav-link';

type NavLinksProps = {
  className?: string;
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function NavLinks({ className, onLinkClick }: NavLinksProps) {
  const { dictionary } = useI18n();
  const hrefs = [
    '#hero',
    '#about',
    '#experience',
    '#skills',
    '#projects',
    '#certifications',
    '#contact',
  ];
  return (
    <ul className={`flex items-center gap-8 ${className ?? ''}`}>
      {hrefs.map((href, index) => (
        <li key={href}>
          <NavLink
            href={href}
            label={dictionary.nav[index] ?? ''}
            {...(onLinkClick ? { onClick: onLinkClick } : {})}
          />
        </li>
      ))}
    </ul>
  );
}
