'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import HeroActions from './HeroActions';
import HeroTechStack from './HeroTechStack';
import { profile } from '@/features/hero/data/profile';

export default function HeroContent() {
  return (
    <motion.div
      className="flex flex-col justify-center space-y-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3">
        <div className="border-primary/30 relative size-11 overflow-hidden rounded-full border-2 shadow-sm">
          <Image
            src={profile.image}
            alt={`Foto de ${profile.name}`}
            fill
            priority
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            Disponible para nuevas oportunidades
          </p>
          <p className="text-muted-foreground text-xs">{profile.location}</p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Daynover <span className="text-primary">García Zapata</span>
        </h1>

        <p className="text-primary mt-2 text-sm font-semibold tracking-[0.2em] uppercase">
          Cloud • Infrastructure • Datacenter
        </p>
      </div>

      <h2 className="text-lg leading-tight font-medium sm:text-xl lg:text-2xl">
        Ingeniero de Sistemas en formación enfocado en Cloud, Infraestructura y
        Soluciones Empresariales.
      </h2>

      <p className="text-muted-foreground max-w-xl text-base leading-8 sm:text-lg">
        Cuento con más de 3 años de experiencia en soporte técnico N1/N2,
        administración de infraestructura TI y operaciones de Datacenter. He
        trabajado con Microsoft 365, Active Directory, Windows Server y
        Microsoft Azure, mientras continúo fortaleciendo mis conocimientos en
        AWS, automatización y ciberseguridad para evolucionar hacia roles de
        Cloud Infrastructure.
      </p>

      <HeroActions />

      <HeroTechStack />
    </motion.div>
  );
}
