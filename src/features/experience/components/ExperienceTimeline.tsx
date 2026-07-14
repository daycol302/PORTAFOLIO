import { experiences } from "../data/experience";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceTimeline() {
  return (
    <div className="relative mt-20">

      <div
        className="
        absolute
        left-5
        top-0
        h-full
        w-px
        bg-border
        "
      />

      <div className="space-y-12">

        {experiences.map((experience) => (

          <div
            key={experience.id}
            className="
            relative
            pl-16
            "
          >
            <div
              className="
              absolute
              left-3
              top-10
              size-4
              rounded-full
              border-4
              border-background
              bg-primary
              "
            />

            <ExperienceItem
              experience={experience}
            />

          </div>

        ))}

      </div>

    </div>
  );
}