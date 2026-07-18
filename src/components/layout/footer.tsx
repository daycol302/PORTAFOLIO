'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/container';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n/provider';

const socialItems = [
  {
    label: 'LinkedIn',
    href: siteConfig.links.linkedin,
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: siteConfig.links.github,
    Icon: Github,
  },
  {
    label: 'Correo',
    href: `mailto:${siteConfig.links.email}`,
    Icon: Mail,
  },
] as const;

export function Footer() {
  const { dictionary } = useI18n();
  const localizedSocialItems = socialItems.map((item) =>
    item.label === 'Correo'
      ? { ...item, label: dictionary.footer.email }
      : item,
  );
  return (
    <motion.footer
      className="border-border bg-background border-t"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Container className="py-10">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Información */}
          <div className="space-y-6">
            <div>
              <p className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
                {siteConfig.author.name}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                {siteConfig.author.role}
              </h2>

              <div className="text-muted-foreground mt-3 flex items-center gap-2 text-sm">
                <MapPin className="size-4" />
                {siteConfig.author.location}
              </div>
            </div>

            <p className="text-muted-foreground max-w-2xl leading-7">
              {dictionary.footer.text}
            </p>
          </div>

          {/* Redes */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold">{dictionary.footer.connect}</h3>

            <div className="flex flex-col gap-3">
              {localizedSocialItems.map(({ label, href, Icon }) => (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  className="justify-start"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                </Button>
              ))}
            </div>

            <Button asChild className="w-full">
              <a
                href="#hero"
                className="flex items-center justify-center gap-2"
              >
                {dictionary.footer.top}
                <ArrowUp className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="bg-border my-8 h-px w-full" />

        <div className="text-muted-foreground flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.author.name}.{' '}
            {dictionary.footer.rights}
          </p>

          <p>{dictionary.footer.built}</p>
        </div>
      </Container>
    </motion.footer>
  );
}
