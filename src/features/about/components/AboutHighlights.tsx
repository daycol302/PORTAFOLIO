'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { useI18n } from '@/i18n/provider';

export function AboutHighlights() {
  const { dictionary } = useI18n();
  return (
    <Card>
      <h3 className="mb-6 text-xl font-semibold">
        {dictionary.about.strengths}
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {dictionary.about.highlights.map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="text-primary h-5 w-5" />

            <span>{item}</span>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
