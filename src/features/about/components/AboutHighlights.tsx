'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import { aboutData } from '../data/about';
import { Card } from '@/components/ui/card';

export function AboutHighlights() {
  return (
    <Card>
      <h3 className="mb-6 text-xl font-semibold">Fortalezas</h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {aboutData.highlights.map((item) => (
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
