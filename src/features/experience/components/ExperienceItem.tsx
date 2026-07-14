import { Card } from "@/components/ui/card";

import { Experience } from "@/types/portfolio";

import { ExperienceBadge } from "./ExperienceBadge";
import { ExperienceHeader } from "./ExperienceHeader";

type Props = {
  experience: Experience;
};

export function ExperienceItem({
  experience,
}: Props) {
  return (
    <Card className="relative overflow-hidden p-8">

      <ExperienceHeader
        role={experience.role}
        company={experience.company}
        location={experience.location}
        start={experience.start}
        end={experience.end}
        current={experience.current}
      />

      <div className="mt-8">

        <ul className="space-y-4">

          {experience.description.map((item) => (

            <li
              key={item}
              className="flex gap-3"
            >
              <span
                className="
                mt-2
                size-2
                rounded-full
                bg-primary
                "
              />

              <span className="leading-7 text-muted-foreground">
                {item}
              </span>

            </li>

          ))}

        </ul>

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        {experience.technologies.map((tech) => (

          <ExperienceBadge
            key={tech}
            label={tech}
          />

        ))}

      </div>

    </Card>
  );
}