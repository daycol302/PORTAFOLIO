import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold transition-transform duration-300 group-hover:scale-105">
        DG
      </div>

      <div className="hidden sm:block">
        <p className="font-semibold">
          Daynover García
        </p>

        <p className="text-xs text-muted-foreground">
          Cloud & Infrastructure Engineer
        </p>
      </div>
    </Link>
  );
}