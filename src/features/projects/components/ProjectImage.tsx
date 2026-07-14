import Image from "next/image";

type ProjectImageProps = {
  image: string;
  title: string;
};

export function ProjectImage({
  image,
  title,
}: ProjectImageProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}