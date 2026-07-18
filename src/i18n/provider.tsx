'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLocale, isLocale, localeCookie, type Locale } from './config';
import { dictionaries, type Dictionary } from './dictionary';

type I18nContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
};
const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  useEffect(() => {
    const saved = window.localStorage.getItem(localeCookie);
    const browser = navigator.language.split('-')[0];
    const detected = isLocale(saved)
      ? saved
      : isLocale(browser)
        ? browser
        : defaultLocale;
    setLocaleState(detected);
  }, []);
  const setLocale = (next: Locale) => {
    window.localStorage.setItem(localeCookie, next);
    document.cookie = `${localeCookie}=${next};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = next;
    setLocaleState(next);
  };
  const value = useMemo(
    () => ({ locale, dictionary: dictionaries[locale], setLocale }),
    [locale],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error('useI18n must be used within I18nProvider');
  return value;
}
