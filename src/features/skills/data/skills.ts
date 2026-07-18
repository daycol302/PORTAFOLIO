import type { SkillCategory } from '../types';
import type { Locale } from '@/i18n/config';

export const skills: SkillCategory[] = [
  {
    title: 'Cloud Computing',
    skills: [
      'AWS (Learning)',
      'Microsoft Azure',
      'Amazon EC2',
      'Amazon S3',
      'IAM',
      'VPC',
      'CloudWatch',
    ],
  },

  {
    title: 'Infraestructura TI',
    skills: [
      'Windows Server',
      'Active Directory',
      'DNS',
      'DHCP',
      'Networking',
      'VPN',
      'Virtualización',
    ],
  },

  {
    title: 'Microsoft Ecosystem',
    skills: [
      'Microsoft 365',
      'Azure AD',
      'Exchange Online',
      'OneDrive',
      'SharePoint',
      'PowerShell',
    ],
  },

  {
    title: 'Desarrollo',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'C#', 'SQL'],
  },

  {
    title: 'Herramientas',
    skills: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'Azure DevOps',
      'Power BI',
      'Postman',
    ],
  },

  {
    title: 'Metodologías',
    skills: [
      'ITIL v4',
      'Scrum',
      'Gestión de Incidentes',
      'Soporte N1/N2',
      'Resolución de Problemas',
      'Documentación Técnica',
    ],
  },
];

const englishTitles = [
  'Cloud Computing',
  'IT Infrastructure',
  'Microsoft Ecosystem',
  'Development',
  'Tools',
  'Methodologies',
];
const englishSkills = [
  undefined,
  [
    'Windows Server',
    'Active Directory',
    'DNS',
    'DHCP',
    'Networking',
    'VPN',
    'Virtualization',
  ],
  undefined,
  undefined,
  undefined,
  [
    'ITIL v4',
    'Scrum',
    'Incident Management',
    'N1/N2 Support',
    'Problem Solving',
    'Technical Documentation',
  ],
];

export function getSkills(locale: Locale): SkillCategory[] {
  if (locale === 'es') return skills;
  return skills.map((category, index) => ({
    title: englishTitles[index] ?? category.title,
    skills: englishSkills[index] ?? category.skills,
  }));
}
