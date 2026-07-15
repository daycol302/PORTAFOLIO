export const siteConfig = {
  name: 'Daynover García',
  description:
    'Cloud & Infrastructure Engineer | AWS | Automatización | DevOps',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  locale: 'es',
  image: '/og-image.png',
  keywords: [
    'AWS',
    'Cloud',
    'Infrastructure',
    'DevOps',
    'Docker',
    'Next.js',
    'TypeScript',
    'Software Engineer',
  ] as string[],
  author: {
    name: 'Daynover Garcia Zapata',
    twitter: 'DaynoverGZ',
  },
  nav: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Certificaciones', href: '#certifications' },
    { label: 'Contacto', href: '#contact' },
  ],
  links: {
    github: 'https://github.com/daynovergarcia',
    linkedin: 'https://www.linkedin.com/in/daynovergarcia',
    email: 'daynover.garcia@example.com',
    cv: '/cv.pdf',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export type NavItem = (typeof siteConfig.nav)[number];
