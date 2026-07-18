'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import HeroActions from './HeroActions';
import HeroTechStack from './HeroTechStack';
import { profile } from '@/features/hero/data/profile';
import { useI18n } from '@/i18n/provider';

export default function HeroContent() {
  const { dictionary } = useI18n();
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
            alt={dictionary.hero.photo}
            fill
            priority
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            {dictionary.hero.available}
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
        {dictionary.hero.role}
      </h2>

      <p className="text-muted-foreground max-w-xl text-base leading-8 sm:text-lg">
        {dictionary.hero.description}
      </p>

      <HeroActions />

      <HeroTechStack />
    </motion.div>
  );
}
