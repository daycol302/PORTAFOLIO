import { Container } from './container';
import { NavLinks } from './nav-links';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';

export default function Navbar() {
  return (
    <header className="border-border/40 bg-background/80 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <nav aria-label="Primary navigation" className="hidden md:block">
              <NavLinks className="items-center gap-8" />
            </nav>

            <ThemeToggle />

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
