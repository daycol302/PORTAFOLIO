import { Badge } from "@/components/ui/badge";

type Props = {
  status: "Completed" | "In Progress" | "Learning";
};

export function ProjectStatus({
  status,
}: Props) {
  if (status === "Completed") {
    return (
      <Badge variant="success">
        Completed
      </Badge>
    );
  }

  if (status === "In Progress") {
    return (
      <Badge variant="warning">
        In Progress
      </Badge>
    );
  }

  return (
    <Badge variant="secondary">
      Learning
    </Badge>
  );
}