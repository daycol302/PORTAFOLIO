'use client';

import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const inputClasses =
  'w-full rounded-2xl border border-border bg-background px-4 py-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20';

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden">
        <div>
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Formulario
          </p>
          <h3 className="text-foreground mt-3 text-2xl font-semibold">
            Envíame un mensaje
          </h3>
          <p className="text-muted-foreground mt-4 text-sm leading-7">
            Completa los campos y el formulario estará listo para integrarse con
            tu backend.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-muted-foreground space-y-2 text-sm">
              <span className="text-foreground block font-medium">Nombre</span>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className={inputClasses}
              />
            </label>

            <label className="text-muted-foreground space-y-2 text-sm">
              <span className="text-foreground block font-medium">
                Correo electrónico
              </span>
              <input
                type="email"
                name="email"
                placeholder="tu@correo.com"
                className={inputClasses}
              />
            </label>
          </div>

          <label className="text-muted-foreground space-y-2 text-sm">
            <span className="text-foreground block font-medium">Asunto</span>
            <input
              type="text"
              name="subject"
              placeholder="Título del mensaje"
              className={inputClasses}
            />
          </label>

          <label className="text-muted-foreground space-y-2 text-sm">
            <span className="text-foreground block font-medium">Mensaje</span>
            <textarea
              name="message"
              rows={5}
              placeholder="Cuéntame sobre tu proyecto"
              className={inputClasses}
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground text-sm">
              El formulario está preparado para integración futura.
            </p>

            <Button type="submit" className="w-full sm:w-auto">
              Enviar mensaje
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
}
