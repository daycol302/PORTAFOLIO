'use client';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

export default function HeroActions() {
  return (
    <motion.div
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
    >
      <Button asChild className="w-full sm:w-auto" size="lg">
        <a href="#projects">Ver proyectos</a>
      </Button>

      <Button asChild variant="outline" className="w-full sm:w-auto" size="lg">
        <a href="#contact">Contáctame</a>
      </Button>
    </motion.div>
  );
}
