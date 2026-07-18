import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { I18nProvider } from '@/i18n/provider';
import { siteConfig } from '@/config/site';
import { createMetadata } from '@/lib/seo';

// Ignore missing type declarations for side-effect CSS import in this environment
import './globals.css';
import Navbar from '@/components/layout/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  ...createMetadata(),

  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.image}`,
    email: `mailto:${siteConfig.links.email}`,
    jobTitle: siteConfig.author.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogotá',
      addressCountry: 'CO',
    },
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    description: siteConfig.description,
    knowsAbout: [
      'AWS',
      'Microsoft 365',
      'Active Directory',
      'Windows Server',
      'Cloud Computing',
      'IT Infrastructure',
      'Networking',
      'PowerShell',
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background min-h-screen font-sans antialiased`}
      >
        <ThemeProvider>
          <I18nProvider>
            <Navbar />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
