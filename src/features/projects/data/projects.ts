import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 'portfolio',

    title: 'Portafolio profesional',

    subtitle: 'Sitio personal de infraestructura y desarrollo',

    description:
      'Portafolio desarrollado con Next.js, TypeScript y Tailwind CSS siguiendo una arquitectura escalable basada en características.',

    image: '/images/projects/portfolio.png',

    github: 'https://github.com/username/portfolio',

    demo: 'https://portfolio.example.com',

    featured: true,

    status: 'Completed',

    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },

  {
    id: 'aws-dashboard',

    title: 'Panel de AWS',

    subtitle: 'Monitoreo de infraestructura',

    description:
      'Dashboard para visualizar recursos en AWS y mantener el control del estado de la infraestructura.',

    image: '/images/projects/aws-dashboard.png',

    github: 'https://github.com/username/aws-dashboard',

    demo: 'https://aws-dashboard.example.com',

    featured: true,

    status: 'In Progress',

    technologies: ['AWS', 'React', 'Node.js', 'CloudWatch'],
  },
];
