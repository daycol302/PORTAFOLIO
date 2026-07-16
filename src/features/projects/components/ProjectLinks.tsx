'use client';

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

type Props = {
  github?: string;
  demo?: string;
};

export function ProjectLinks({ github, demo }: Props) {
  const links = [
    {
      label: 'Repositorio',
      href: github,
      icon: Github,
    },
    {
      label: 'Ver proyecto',
      href: demo,
      icon: ExternalLink,
    },
  ].filter((item) => item.href && item.href !== '#');

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <motion.div
            key={link.label}
            whileHover={{ y: -2 }}
            className="inline-flex"
          >
            <Button asChild variant="outline" size="sm">
              <a
                href={link.href!}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Icon className="size-4" />
                {link.label}
              </a>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}
