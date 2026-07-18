'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { ContactMethod } from '../types';
import { useI18n } from '@/i18n/provider';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

type ContactIconKey = keyof typeof iconMap;

interface ContactInfoCardProps {
  method: ContactMethod;
}

export function ContactInfoCard({ method }: ContactInfoCardProps) {
  const Icon = iconMap[method.icon as ContactIconKey] ?? Mail;
  const { dictionary } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 text-primary grid h-12 w-12 place-items-center rounded-2xl">
            <Icon className="size-5" />
          </div>

          <div>
            <p className="text-foreground text-sm font-semibold">
              {method.name}
            </p>
            <p className="text-muted-foreground text-sm">{method.label}</p>
          </div>
        </div>

        <Button
          asChild
          variant="default"
          className="mt-6 w-full justify-center"
        >
          <a href={method.url} target="_blank" rel="noreferrer">
            {method.name === 'LinkedIn'
              ? dictionary.contact.profile
              : method.name === 'GitHub'
                ? dictionary.contact.repositories
                : dictionary.contact.emailAction}
          </a>
        </Button>
      </Card>
    </motion.div>
  );
}
