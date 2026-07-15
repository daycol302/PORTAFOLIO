'use client';

import { motion } from 'framer-motion';

import HeroActions from './HeroActions';
import HeroTechStack from './HeroTechStack';

export default function HeroContent() {
  return (
    <motion.div
      className="flex flex-col justify-center space-y-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <span className="text-primary text-sm font-medium tracking-widest uppercase">
        👋 Hola, soy
      </span>

      <div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Daynover <span className="text-primary">García Zapata</span>
        </h1>
      </div>

      <h2 className="text-lg leading-tight font-medium sm:text-xl lg:text-2xl">
        Construyo plataformas cloud modernas, seguras y preparadas para crecer.
      </h2>

      <p className="text-muted-foreground max-w-xl text-base leading-8 sm:text-lg">
        Cloud & Infrastructure Engineer especializado en AWS, Azure y DevOps.
        Desarrollo soluciones enfocadas en automatización, disponibilidad y
        escalabilidad, aplicando buenas prácticas para crear infraestructuras
        eficientes, seguras y fáciles de mantener.
      </p>

      <HeroActions />

      <HeroTechStack />
    </motion.div>
  );
}
