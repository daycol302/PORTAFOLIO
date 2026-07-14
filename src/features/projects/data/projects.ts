import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "portfolio",

    title: "Professional Portfolio",

    subtitle: "Cloud & Infrastructure",

    description:
      "Portafolio desarrollado con Next.js, TypeScript y Tailwind CSS siguiendo una arquitectura escalable basada en Features.",

    image: "/images/projects/portfolio.png",

    github: "#",

    demo: "#",

    featured: true,

    status: "Completed",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },

  {
    id: "aws-dashboard",

    title: "AWS Dashboard",

    subtitle: "Infrastructure Monitoring",

    description:
      "Dashboard para visualizar recursos de AWS y monitorear infraestructura.",

    image: "/images/projects/aws-dashboard.png",

    github: "#",

    demo: "#",

    featured: true,

    status: "In Progress",

    technologies: [
      "AWS",
      "React",
      "Node.js",
      "CloudWatch"
    ]
  }
];