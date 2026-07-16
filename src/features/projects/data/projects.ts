import type { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 'portfolio',

    title: 'Enterprise Portfolio Platform',

    subtitle: 'Portafolio profesional desarrollado con Next.js y TypeScript',

    description:
      'Aplicación web diseñada para presentar mi experiencia profesional, proyectos y habilidades en Infraestructura TI, Cloud Computing y Desarrollo. Construida con una arquitectura moderna orientada a rendimiento, escalabilidad y mantenibilidad.',

    image: '/images/projects/portfolio.png',

    github: '#',

    demo: '#',

    featured: true,

    status: 'Completed',

    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],

    highlights: [
      'Arquitectura Feature-First altamente escalable.',
      'Diseño completamente responsive.',
      'Optimización SEO y rendimiento.',
      'Modo claro y oscuro persistente.',
      'Componentes reutilizables y tipado estricto.',
    ],

    metric:
      'Optimizado para obtener una alta puntuación en Performance, SEO y Accessibility.',

    architecture:
      'Next.js → Feature Architecture → TypeScript → Tailwind CSS → Vercel',
  },

  {
    id: 'aws-learning-lab',

    title: 'AWS Cloud Learning Lab',

    subtitle:
      'Laboratorios prácticos para fortalecer conocimientos en AWS Cloud',

    description:
      'Colección de laboratorios enfocados en comprender los principales servicios de AWS mediante implementaciones prácticas, siguiendo buenas prácticas de seguridad y administración de infraestructura.',

    image: '/images/projects/aws-learning-lab.png',

    github: '#',

    demo: '#',

    featured: true,

    status: 'Learning',

    technologies: ['AWS', 'IAM', 'EC2', 'S3', 'VPC', 'CloudWatch', 'Git'],

    highlights: [
      'Configuración de usuarios y políticas IAM.',
      'Implementación de instancias EC2.',
      'Administración de almacenamiento con Amazon S3.',
      'Configuración básica de redes VPC.',
      'Monitoreo mediante CloudWatch.',
    ],

    metric:
      'Laboratorios desarrollados durante la preparación para certificaciones AWS.',

    architecture: 'IAM → EC2 → S3 → VPC → CloudWatch',
  },

  {
    id: 'enterprise-infrastructure',

    title: 'Enterprise Infrastructure Administration',

    subtitle:
      'Administración de infraestructura corporativa y servicios Microsoft',

    description:
      'Experiencia aplicada en administración de plataformas Microsoft, Active Directory, Windows Server y Microsoft 365, participando en la resolución de incidencias, gestión de usuarios y soporte empresarial.',

    image: '/images/projects/infrastructure.png',

    github: '#',

    demo: '#',

    featured: true,

    status: 'Completed',

    technologies: [
      'Microsoft 365',
      'Azure',
      'Active Directory',
      'Windows Server',
      'PowerShell',
      'Networking',
    ],

    highlights: [
      'Administración de Active Directory.',
      'Gestión de Microsoft 365.',
      'Administración de Windows Server.',
      'Soporte técnico N1 y N2.',
      'Resolución de incidencias empresariales.',
    ],

    metric: 'Más de 3 años de experiencia en entornos corporativos.',

    architecture:
      'Usuarios → Active Directory → Microsoft 365 → Windows Server',
  },

  {
    id: 'powerbi-dashboard',

    title: 'IT Operations Dashboard',

    subtitle: 'Dashboard para seguimiento de indicadores operativos',

    description:
      'Proyecto orientado a la visualización de información operativa mediante Power BI para facilitar el análisis de indicadores y apoyar la toma de decisiones en entornos empresariales.',

    image: '/images/projects/powerbi-dashboard.png',

    github: '#',

    demo: '#',

    featured: false,

    status: 'Completed',

    technologies: ['Power BI', 'Excel', 'SQL', 'Azure'],

    highlights: [
      'Visualización de indicadores.',
      'Dashboards interactivos.',
      'Análisis de información.',
      'Optimización de reportes.',
    ],

    metric:
      'Reducción del tiempo de consulta de información mediante paneles centralizados.',

    architecture: 'SQL → Power BI → Dashboards → Indicadores',
  },
];
