import Image from 'next/image';

type ProjectImageProps = {
  image: string;
  title: string;
};

export function ProjectImage({ image, title }: ProjectImageProps) {
  return (
    <div className="bg-muted relative aspect-video overflow-hidden rounded-2xl border">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-400 hover:scale-102"
      />
    </div>
  );
}
