export const themeConfig = {
  defaultTheme: 'system',
  themes: ['light', 'dark', 'system'],
  storageKey: 'portafolio-theme',
} as const;

export type Theme = (typeof themeConfig.themes)[number];
