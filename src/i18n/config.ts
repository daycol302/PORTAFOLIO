export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';
export const localeCookie = 'portfolio-locale';

export const isLocale = (value: string | null | undefined): value is Locale =>
  Boolean(value && locales.includes(value as Locale));
