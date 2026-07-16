type ProjectStatusValue = 'Completed' | 'In Progress' | 'Learning';
export interface Experience {
  id: string;

  company: string;

  role: string;

  employmentType:
    | 'Tiempo completo'
    | 'Contrato'
    | 'Prácticas'
    | 'Proyecto Personal'
    | 'Contrato de Aprendizaje';

  location: string;

  mode: 'Presencial' | 'Híbrido' | 'Remoto';

  start: string;

  end: string;

  current: boolean;

  description: string[];

  technologies: string[];
}
export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatusValue;
  subtitle: string;
  image: string;
  technologies: string[];
  highlights: string[];
  metric?: string;
  architecture?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  status: 'completed' | 'in-progress';
  credentialUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
