import { Container } from "./container";
import { NavLinks } from "./nav-links";
import Link from "next/link";
import { Logo } from "./logo";
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from "./mobile-nav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">

          <Logo />

          <div className="flex items-center gap-4">

            <NavLinks
              className="hidden items-center gap-8 md:flex"
            />

            <ThemeToggle />

            <MobileNav />

          </div>
        </div>
      </Container>
    </header>
  );
}