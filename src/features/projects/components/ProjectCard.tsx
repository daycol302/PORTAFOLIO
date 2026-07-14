import { Card } from "@/components/ui/card";

import { Project } from "@/types/portfolio";

import { ProjectImage } from "./ProjectImage";
import { ProjectStatus } from "./ProjectStatus";

type Props = {
  project: Project;
};

export function ProjectCard({
  project,
}: Props) {
  return (
    <Card className="overflow-hidden p-5">

      <ProjectImage
        image={project.image}
        title={project.title}
      />

      <div className="mt-6">

        <div className="flex items-center justify-between">

          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <ProjectStatus
            status={project.status}
          />

        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          {project.subtitle}
        </p>

        <p className="mt-4 leading-7 text-muted-foreground">
          {project.description}
        </p>

      </div>

    </Card>
  );
}