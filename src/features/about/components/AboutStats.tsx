'use client';

import { motion } from 'framer-motion';
import { aboutData } from '../data/about';
import { Card } from '@/components/ui/card';

export function AboutStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {aboutData.stats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <Card className="overflow-hidden">
            <div className="p-6 transition-shadow hover:shadow-md">
              <p className="text-primary text-4xl font-bold">{stat.value}</p>
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
