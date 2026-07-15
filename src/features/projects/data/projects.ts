import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 'portfolio',

    title: 'Portafolio profesional',

    subtitle: 'Portafolio rápido, accesible y orientado a Cloud',

    description:
      'Sitio personal construido con una arquitectura feature-first para presentar proyectos, experiencia y habilidades de infraestructura de forma clara y medible.',

    image: '/images/projects/portfolio.png',

    github: 'https://github.com/daynovergarcia/cloud-portfolio',

    demo: 'https://daynovergarcia.dev',

    featured: true,

    status: 'Completed',

    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],

    highlights: [
      'SEO técnico con sitemap, robots y datos estructurados',
      'Tema claro/oscuro persistente y navegación accesible',
      'Componentes reutilizables y tipado estricto',
    ],
    metric: 'Objetivo: 90+ en Lighthouse',
    architecture: 'Next.js → componentes por feature → datos tipados → Vercel',
  },

  {
    id: 'aws-dashboard',

    title: 'Cloud Operations Lab',

    subtitle:
      'Infraestructura como código, observabilidad y despliegue continuo',

    description:
      'Laboratorio de operaciones cloud que simula el despliegue y monitoreo de una aplicación contenida, priorizando seguridad, trazabilidad y control de costos.',

    image: '/images/projects/aws-dashboard.png',

    github: 'https://github.com/daynovergarcia/cloud-operations-lab',

    demo: 'https://cloud-lab.daynovergarcia.dev',

    featured: true,

    status: 'In Progress',

    technologies: [
      'AWS',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'CloudWatch',
    ],

    highlights: [
      'Red VPC segmentada con roles IAM de mínimo privilegio',
      'Infraestructura reproducible con Terraform',
      'Alertas y métricas de disponibilidad con CloudWatch',
    ],
    metric: 'Meta: despliegues repetibles en menos de 10 minutos',
    architecture: 'GitHub Actions → Terraform → AWS VPC / ECS → CloudWatch',
  },
];
