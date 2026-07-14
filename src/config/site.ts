export const siteConfig = {
  name: 'Portafolio',
  description: 'Cloud Engineer | Infrastructure | AWS | Full Stack Developer',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'es',
  keywords: [
    "AWS",
    "Cloud",
    "Infrastructure",
    "DevOps",
    "Docker",
    "Next.js",
    "TypeScript",
    "Software Engineer"
  ] as string[],
  author: {
    name: 'Daynover Garcia Zapata',
    twitter: 'DaynoverGZ',
  },
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Contacto', href: '#contact' },
  ],
  links: {
    github: '',
    linkedin: '',
    email: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export type NavItem = (typeof siteConfig.nav)[number];
