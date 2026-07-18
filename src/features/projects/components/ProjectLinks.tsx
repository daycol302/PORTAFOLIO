'use client';

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/provider';

type Props = {
  github?: string;
  demo?: string;
};

export function ProjectLinks({ github, demo }: Props) {
  const { dictionary } = useI18n();
  const links = [
    {
      label: dictionary.common.repository,
      href: github,
      icon: Github,
    },
    {
      label: dictionary.common.viewProject,
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
