'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const technologies = ['AWS', 'Azure', 'Terraform', 'Docker'];

export default function HeroTechStack() {
  return (
    <motion.div
      className="flex flex-wrap gap-3"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
    >
      {technologies.map((tech) => (
        <Badge key={tech} variant="technology">
          {tech}
        </Badge>
      ))}
    </motion.div>
  );
}
