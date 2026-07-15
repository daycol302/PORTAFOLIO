export const siteConfig = {
  name: 'Portafolio',
  description: 'Cloud Engineer | Infrastructure | AWS | Full Stack Developer',
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
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    email: 'hello@example.com',
    cv: '/cv.pdf',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export type NavItem = (typeof siteConfig.nav)[number];
