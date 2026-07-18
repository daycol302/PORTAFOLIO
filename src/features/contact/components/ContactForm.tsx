'use client';

import { type FormEvent, useState } from 'react';
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useI18n } from '@/i18n/provider';

const inputClasses =
  'w-full rounded-2xl border border-border bg-background px-4 py-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const { dictionary } = useI18n();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      type ContactResponse = {
        message: string;
      };

      const result = (await response.json()) as ContactResponse;

      if (!response.ok) {
        // Guardamos el mensaje exacto que viene del backend
        setStatus('error');
        setErrorMessage(result.message || 'No fue posible enviar el mensaje');
        return;
      }

      form.reset();
      setStatus('success');
    } catch (error: unknown) {
      console.error(error);
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Error inesperado',
      );
    }
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
            {dictionary.contact.direct}
          </p>
          <h3 className="text-foreground mt-3 text-2xl font-semibold">
            {dictionary.contact.formTitle}
          </h3>
          <p className="text-muted-foreground mt-4 text-sm leading-7">
            {dictionary.contact.formDescription}
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-muted-foreground space-y-2 text-sm">
              <span className="text-foreground block font-medium">
                {dictionary.contact.name}
              </span>
              <input
                type="text"
                name="name"
                placeholder={dictionary.contact.namePlaceholder}
                className={inputClasses}
                required
                minLength={2}
              />
            </label>

            <label className="text-muted-foreground space-y-2 text-sm">
              <span className="text-foreground block font-medium">
                {dictionary.contact.email}
              </span>
              <input
                type="email"
                name="email"
                placeholder={dictionary.contact.emailPlaceholder}
                className={inputClasses}
                required
              />
            </label>
          </div>

          <label className="text-muted-foreground space-y-2 text-sm">
            <span className="text-foreground block font-medium">
              {dictionary.contact.subject}
            </span>
            <input
              type="text"
              name="subject"
              placeholder={dictionary.contact.subjectPlaceholder}
              className={inputClasses}
              required
              minLength={4}
            />
          </label>

          <label className="text-muted-foreground space-y-2 text-sm">
            <span className="text-foreground block font-medium">
              {dictionary.contact.message}
            </span>
            <textarea
              name="message"
              rows={5}
              placeholder={dictionary.contact.messagePlaceholder}
              className={inputClasses}
              required
              minLength={20}
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground text-sm" aria-live="polite">
              {status === 'success' ? (
                <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="size-4" />{' '}
                  {dictionary.contact.success}
                </span>
              ) : status === 'error' ? (
                errorMessage // ✅ muestra la causa exacta
              ) : (
                dictionary.contact.idle
              )}
            </p>

            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <Send />
              )}
              {status === 'sending'
                ? dictionary.contact.sending
                : dictionary.contact.send}
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
}
