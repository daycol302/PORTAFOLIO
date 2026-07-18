'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useI18n } from '@/i18n/provider';

export function AboutStats() {
  const { dictionary } = useI18n();
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {dictionary.about.stats.map(([value, label]) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Card className="overflow-hidden">
            <div className="p-6 transition-shadow hover:shadow-md">
              <p className="text-primary text-4xl font-bold">{value}</p>
              <p className="text-muted-foreground mt-2 text-sm">{label}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
