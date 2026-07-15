'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { siteConfig } from '@/config/site';

const socialItems = [
  {
    label: 'GitHub',
    href: siteConfig.links.github,
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.links.linkedin,
    Icon: Linkedin,
  },
  {
    label: 'Correo',
    href: `mailto:${siteConfig.links.email}`,
    Icon: Mail,
  },
] as const;

export function Footer() {
  return (
    <motion.footer
      className="border-border bg-background/80 border-t"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Container className="py-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
                {siteConfig.author.name}
              </p>
              <p className="text-foreground mt-2 text-xl font-semibold sm:text-2xl">
                {siteConfig.description}
              </p>
            </div>
            <p className="text-muted-foreground max-w-2xl text-sm leading-6">
              Conecta con mi trabajo, experiencia y servicios a través de mis
              redes sociales.
            </p>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {siteConfig.author.name}. Todos los
              derechos reservados.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex flex-wrap justify-start gap-3 sm:justify-end">
              {socialItems.map(({ label, href, Icon }) => (
                <Button key={label} asChild variant="outline" size="sm">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                </Button>
              ))}
            </div>
            <Button asChild variant="default" className="w-full sm:w-auto">
              <a
                href="#hero"
                className="inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                Volver arriba <ArrowUp className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </motion.footer>
  );
}
