'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { profile } from '@/features/hero/data/profile';

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="mx-auto w-full max-w-xs"
    >
      <Card className="overflow-hidden">
        <CardHeader className="items-center pb-2">
          <div className="border-primary/20 relative h-40 w-40 overflow-hidden rounded-full border-2">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          <div>
            <h3 className="text-xl font-semibold">{profile.name}</h3>

            <p className="text-muted-foreground">{profile.role}</p>
          </div>

          <p className="text-muted-foreground text-sm">📍 {profile.location}</p>

          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-sm font-medium text-green-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>

            {profile.status.es}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
