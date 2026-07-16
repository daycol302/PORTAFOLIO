export const siteConfig = {
  name: 'Daynover García',
  title: 'Infrastructure & Cloud Engineer',
  description:
    'Infrastructure & Cloud Engineer | Infraestructura TI | Microsoft 365 | Active Directory | AWS Cloud',

  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',

  locale: 'es',

  image: '/og-image.png',

  keywords: [
    'Infrastructure Engineer',
    'Cloud Engineer',
    'AWS',
    'Microsoft 365',
    'Active Directory',
    'Windows Server',
    'Azure',
    'Networking',
    'IT Infrastructure',
    'IT Support',
    'PowerShell',
    'Next.js',
    'TypeScript',
  ] as string[],

  author: {
    name: 'Daynover García Zapata',

    role: 'Infrastructure & Cloud Engineer',

    location: 'Bogotá D.C., Colombia',

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

    email: 'daynovergarcia@gmail.com',

    cv: '/cv.pdf',
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type NavItem = (typeof siteConfig.nav)[number];
