'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  CheckCircle2,
  CloudCog,
  GitBranch,
  ShieldCheck,
} from 'lucide-react';
import { useI18n } from '@/i18n/provider';

export default function HeroImage() {
  const { dictionary } = useI18n();
  const services = [
    {
      label: 'CI/CD pipeline',
      value: dictionary.hero.healthy,
      icon: GitBranch,
    },
    {
      label: 'Infrastructure',
      value: dictionary.hero.protected,
      icon: ShieldCheck,
    },
    {
      label: 'Observability',
      value: dictionary.hero.serviceOnline,
      icon: Activity,
    },
  ];
  return (
    <motion.aside
      aria-label={dictionary.hero.operations}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="from-primary/20 via-primary/5 absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br to-transparent blur-2xl" />

      <div className="border-primary/15 bg-card/95 relative overflow-hidden rounded-3xl border p-5 shadow-xl backdrop-blur sm:p-6">
        <div className="bg-primary/5 absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_31px,rgba(14,165,233,0.08)_32px),linear-gradient(to_bottom,transparent_0,transparent_31px,rgba(14,165,233,0.08)_32px)] bg-[size:32px_32px]" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-primary-foreground grid size-11 place-items-center rounded-2xl shadow-lg shadow-sky-500/25">
                <CloudCog className="size-6" />
              </div>
              <div>
                <p className="text-foreground font-semibold">
                  Cloud Operations
                </p>
                <p className="text-muted-foreground text-sm">
                  {dictionary.hero.lab}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              {dictionary.hero.online}
            </span>
          </div>

          <div className="border-primary/15 bg-background/70 relative mt-6 overflow-hidden rounded-2xl border p-5">
            <div className="from-primary/25 absolute top-12 left-1/2 h-24 w-px bg-gradient-to-b to-transparent" />
            <div className="from-primary/25 absolute top-1/2 left-[22%] h-px w-[56%] bg-gradient-to-r to-transparent" />

            <div className="relative flex justify-center">
              <div className="border-primary/25 bg-primary/10 text-primary rounded-xl border px-3 py-2 text-xs font-semibold">
                GitHub Actions
              </div>
            </div>
            <div className="relative mt-10 flex justify-between gap-3 text-center">
              {['Terraform', 'AWS VPC', 'CloudWatch'].map((item) => (
                <div
                  key={item}
                  className="border-border bg-card min-w-0 flex-1 rounded-xl border px-2 py-3 text-xs font-medium shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-4 text-center text-xs">
              {dictionary.hero.pipeline}
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {services.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="border-border bg-background/60 rounded-xl border p-3"
              >
                <Icon className="text-primary size-4" />
                <p className="text-muted-foreground mt-3 text-xs">{label}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold">
                  <CheckCircle2 className="size-3.5 text-emerald-500" />
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
