'use client';
import { useI18n } from '@/i18n/provider';
import type { Locale } from '@/i18n/config';
export function LanguageSwitcher() {
  const { locale, dictionary, setLocale } = useI18n();
  return (
    <select
      aria-label={dictionary.common.language}
      value={locale}
      onChange={(event) => setLocale(event.target.value as Locale)}
      className="bg-background text-muted-foreground border-border h-9 rounded-md border px-2 text-sm"
    >
      <option value="es">🇪🇸 Español</option>
      <option value="en">🇺🇸 English</option>
    </select>
  );
}
