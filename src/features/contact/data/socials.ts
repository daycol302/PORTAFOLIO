import type { ContactMethod } from '../types';
import { siteConfig } from '@/config/site';

export const socials: ContactMethod[] = [
  {
    name: 'GitHub',
    url: siteConfig.links.github,
    icon: 'github',
    label: 'github.com/daycol302',
  },
  {
    name: 'LinkedIn',
    url: siteConfig.links.linkedin,
    icon: 'linkedin',
    label: 'linkedin.com/in/daynover-garcia-zapata-b35311121',
  },
  {
    name: 'Correo',
    url: `mailto:${siteConfig.links.email}`,
    icon: 'mail',
    label: siteConfig.links.email,
  },
];
