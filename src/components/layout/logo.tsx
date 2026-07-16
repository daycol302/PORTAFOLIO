import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-2xl font-bold transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
        DG
      </div>

      <div className="hidden sm:block">
        <p className="text-base font-bold tracking-tight">
          {siteConfig.author.name}
        </p>

        <p className="text-muted-foreground text-xs">
          {siteConfig.author.role}
        </p>
      </div>
    </Link>
  );
}
