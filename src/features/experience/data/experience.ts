import type { Experience } from '@/types/portfolio';

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
