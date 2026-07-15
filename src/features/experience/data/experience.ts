import type { Experience } from '@/types/portfolio';

export const experiences: Experience[] = [
  {
    id: 'current',

    company: 'Nombre de la empresa',

    role: 'Analista de Soporte e Infraestructura',

    employmentType: 'Tiempo completo',

    mode: 'Presencial',

    location: 'Bogotá, Colombia',

    start: '2022',

    end: 'Actual',

    current: true,

    description: [
      'Soporte técnico N1 y N2 para usuarios corporativos.',
      'Administración de Active Directory.',
      'Gestión de Microsoft 365.',
      'Administración de Windows Server.',
      'Administración de impresoras corporativas.',
      'Soporte de redes LAN y WiFi.',
      'Cumplimiento de ANS e ITIL.',
    ],

    technologies: [
      'Windows Server',
      'Active Directory',
      'Microsoft 365',
      'Azure AD',
      'PowerShell',
      'Networking',
      'ITIL',
    ],
  },
];
