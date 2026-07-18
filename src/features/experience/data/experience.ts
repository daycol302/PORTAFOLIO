import type { Experience } from '@/types/portfolio';
import type { Locale } from '@/i18n/config';

export const experiences: Experience[] = [
  {
    id: 'infomedia',

    company: 'Infomedia Service',

    role: 'Project and Infrastructure Support Technician and LAN Analyst',

    employmentType: 'Tiempo completo',

    mode: 'Presencial',

    location: 'Bogotá, Colombia',

    start: 'Jun 2025',

    end: 'Actual',

    current: true,

    description: [
      'Implementación, instalación y soporte técnico de plataformas empresariales para clientes corporativos.',
      'Configuración, mantenimiento preventivo y correctivo de servidores, dispositivos de red y equipos tecnológicos.',
      'Soporte técnico de Nivel 1 y Nivel 2 para soluciones de IPTV, cartelería digital (Digital Signage) y Tótems interactivos.',
      'Participación en ventanas de migración y despliegue de infraestructura junto al equipo de ingeniería.',
      'Diagnóstico y resolución de incidentes en ambientes productivos, cumpliendo SLA y tiempos de respuesta.',
      'Levantamiento de información técnica en sitio para nuevos proyectos e implementaciones.',
      'Gestión de inventario, validación, preparación y entrega de equipos tecnológicos para clientes.',
      'Elaboración de informes técnicos y seguimiento de actividades de soporte y proyectos.',
      'Colaboración con ingenieros y especialistas para garantizar la continuidad operacional y la satisfacción del cliente.',
    ],

    technologies: [
      'Windows Server',
      'Active Directory',
      'IPTV',
      'Digital Signage',
      'Networking',
      'Troubleshooting',
      'Project Deployment',
      'IT Support',
    ],
  },
  {
    id: 'independent',

    company: 'Proyecto Personal',

    role: 'Server Administrator & Backend Developer',

    employmentType: 'Proyecto Personal',

    mode: 'Remoto',

    location: 'Colombia',

    start: 'Ene 2025',

    end: 'Actual',

    current: false,

    description: [
      'Administración integral de un servidor privado basado en infraestructura cloud.',
      'Desarrollo de nuevas funcionalidades utilizando C#.',
      'Optimización de bases de datos MySQL.',
      'Administración de configuraciones del servidor.',
      'Monitoreo y mejora del rendimiento.',
    ],

    technologies: ['C#', 'MySQL', 'Azure', 'Git'],
  },
  {
    id: 'colmena',

    company: 'Colmena Seguros',

    role: 'IT Project Support',

    employmentType: 'Contrato de Aprendizaje',

    mode: 'Presencial',

    location: 'Bogotá',

    start: 'Oct 2024',

    end: 'Abr 2025',

    current: false,

    description: [
      'Seguimiento de proyectos tecnológicos.',
      'Elaboración de documentación técnica.',
      'Coordinación entre áreas técnicas y funcionales.',
      'Generación de informes ejecutivos.',
      'Apoyo en la gestión del portafolio tecnológico.',
    ],

    technologies: ['Power BI', 'Microsoft Office', 'Project Management'],
  },
  {
    id: 'pear',

    company: 'Pear Solutions',

    role: 'Infrastructure Support Engineer',

    employmentType: 'Tiempo completo',

    mode: 'Presencial',

    location: 'Bogotá',

    start: 'Jun 2023',

    end: 'Oct 2024',

    current: false,

    description: [
      'Soporte técnico N1 y N2.',
      'Administración de Microsoft 365.',
      'Gestión de Active Directory.',
      'Administración básica de Windows Server.',
      'Migración de correos y OneDrive.',
      'Uso de Git y Azure DevOps.',
    ],

    technologies: [
      'Microsoft 365',
      'Windows Server',
      'Active Directory',
      'Azure DevOps',
      'Git',
    ],
  },
  {
    id: 'adsum',

    company: 'Adsum Soluciones',

    role: 'IT Support Analyst',

    employmentType: 'Tiempo completo',

    mode: 'Presencial',

    location: 'Bogotá',

    start: 'Ene 2023',

    end: 'Jun 2023',

    current: false,

    description: [
      'Administración de licencias Microsoft 365.',
      'Soporte técnico empresarial.',
      'Administración básica de servidores.',
      'Optimización de procesos internos.',
    ],

    technologies: ['Microsoft 365', 'Windows Server', 'IT Support'],
  },
  {
    id: 'heimcore',

    company: 'Heimcore SAS',

    role: 'Help Desk Technician',

    employmentType: 'Tiempo completo',

    mode: 'Presencial',

    location: 'Bogotá',

    start: 'Ene 2022',

    end: 'Nov 2022',

    current: false,

    description: [
      'Mantenimiento preventivo y correctivo.',
      'Soporte de impresoras y dispositivos móviles.',
      'Soporte funcional Oracle y SAP.',
      'Gestión de incidentes bajo ITIL.',
      'Administración básica de servidores.',
    ],

    technologies: ['Oracle', 'SAP', 'Windows', 'ITIL'],
  },
];

const englishExperience: Record<string, Partial<Experience>> = {
  infomedia: {
    employmentType: 'Full-time',
    mode: 'On-site',
    location: 'Bogotá, Colombia',
    start: 'Jun 2025',
    end: 'Present',
    description: [
      'Implementation, installation, and technical support for enterprise platforms used by corporate clients.',
      'Configuration and preventive/corrective maintenance of servers, network devices, and technology equipment.',
      'Level 1 and Level 2 technical support for IPTV, digital signage, and interactive kiosk solutions.',
      'Participation in infrastructure migration and deployment windows alongside the engineering team.',
      'Diagnosis and resolution of incidents in production environments, meeting SLAs and response times.',
      'On-site technical information gathering for new projects and implementations.',
      'Inventory management, validation, preparation, and delivery of technology equipment to clients.',
      'Preparation of technical reports and follow-up of support and project activities.',
      'Collaboration with engineers and specialists to ensure operational continuity and client satisfaction.',
    ],
  },
  independent: {
    company: 'Personal Project',
    employmentType: 'Personal project',
    mode: 'Remote',
    start: 'Jan 2025',
    end: 'Present',
    description: [
      'End-to-end administration of a private server based on cloud infrastructure.',
      'Development of new features using C#.',
      'MySQL database optimization.',
      'Server configuration administration.',
      'Performance monitoring and improvement.',
    ],
  },
  colmena: {
    employmentType: 'Apprenticeship contract',
    mode: 'On-site',
    location: 'Bogotá',
    start: 'Oct 2024',
    end: 'Apr 2025',
    description: [
      'Technology project tracking.',
      'Preparation of technical documentation.',
      'Coordination between technical and functional teams.',
      'Creation of executive reports.',
      'Support for technology portfolio management.',
    ],
  },
  pear: {
    employmentType: 'Full-time',
    mode: 'On-site',
    location: 'Bogotá',
    start: 'Jun 2023',
    end: 'Oct 2024',
    description: [
      'N1 and N2 technical support.',
      'Microsoft 365 administration.',
      'Active Directory management.',
      'Basic Windows Server administration.',
      'Email and OneDrive migration.',
      'Use of Git and Azure DevOps.',
    ],
  },
  adsum: {
    employmentType: 'Full-time',
    mode: 'On-site',
    location: 'Bogotá',
    start: 'Jan 2023',
    end: 'Jun 2023',
    description: [
      'Microsoft 365 license administration.',
      'Enterprise technical support.',
      'Basic server administration.',
      'Internal process optimization.',
    ],
  },
  heimcore: {
    employmentType: 'Full-time',
    mode: 'On-site',
    location: 'Bogotá',
    start: 'Jan 2022',
    end: 'Nov 2022',
    description: [
      'Preventive and corrective maintenance.',
      'Printer and mobile device support.',
      'Oracle and SAP functional support.',
      'ITIL-based incident management.',
      'Basic server administration.',
    ],
  },
};

export function getExperiences(locale: Locale): Experience[] {
  if (locale === 'es') return experiences;
  return experiences.map((experience) => ({
    ...experience,
    ...englishExperience[experience.id],
  }));
}
