import type { Project } from '@/types/portfolio';
import type { Locale } from '@/i18n/config';

export const projects: Project[] = [
  {
    id: 'portfolio',

    title: 'Enterprise Portfolio Platform',

    subtitle: 'Portafolio profesional desarrollado con Next.js y TypeScript',

    description:
      'Aplicación web diseñada para presentar mi experiencia profesional, proyectos y habilidades en Infraestructura TI, Cloud Computing y Desarrollo. Construida con una arquitectura moderna orientada a rendimiento, escalabilidad y mantenibilidad.',

    image: '/images/projects/portfolio.png',

    github: 'https://github.com/daycol302/PORTAFOLIO',

    demo: 'https://portafolio-ten-nu-85.vercel.app/',

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

    image: '/images/projects/aws_project.png',

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

const englishProjects: Record<string, Partial<Project>> = {
  portfolio: {
    subtitle: 'Professional portfolio built with Next.js and TypeScript',
    description:
      'Web application designed to showcase my professional experience, projects, and skills in IT Infrastructure, Cloud Computing, and Development. Built with a modern architecture focused on performance, scalability, and maintainability.',
    highlights: [
      'Highly scalable Feature-First architecture.',
      'Fully responsive design.',
      'SEO and performance optimization.',
      'Persistent light and dark mode.',
      'Reusable components and strict typing.',
    ],
    metric: 'Optimized for a high Performance, SEO, and Accessibility score.',
  },
  'aws-learning-lab': {
    subtitle: 'Hands-on labs to strengthen AWS Cloud knowledge',
    description:
      'A collection of labs focused on understanding core AWS services through hands-on implementations, following security and infrastructure-management best practices.',
    highlights: [
      'IAM user and policy configuration.',
      'EC2 instance deployment.',
      'Amazon S3 storage administration.',
      'Basic VPC network configuration.',
      'CloudWatch monitoring.',
    ],
    metric: 'Labs completed while preparing for AWS certifications.',
  },
  'enterprise-infrastructure': {
    subtitle: 'Corporate infrastructure and Microsoft services administration',
    description:
      'Hands-on experience administering Microsoft platforms, Active Directory, Windows Server, and Microsoft 365, supporting incident resolution, user management, and enterprise support.',
    highlights: [
      'Active Directory administration.',
      'Microsoft 365 management.',
      'Windows Server administration.',
      'N1 and N2 technical support.',
      'Enterprise incident resolution.',
    ],
    metric: 'Over three years of experience in corporate environments.',
  },
  'powerbi-dashboard': {
    subtitle: 'Dashboard for operational KPI tracking',
    description:
      'Project focused on visualizing operational information with Power BI to simplify KPI analysis and support decision-making in enterprise environments.',
    highlights: [
      'KPI visualization.',
      'Interactive dashboards.',
      'Information analysis.',
      'Report optimization.',
    ],
    metric: 'Reduced information lookup time through centralized dashboards.',
    architecture: 'SQL → Power BI → Dashboards → KPIs',
  },
};

export function getProjects(locale: Locale): Project[] {
  if (locale === 'es') return projects;
  return projects.map((project) => ({
    ...project,
    ...englishProjects[project.id],
  }));
}
