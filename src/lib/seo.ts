import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = '',
  noIndex = false,
}: CreateMetadataOptions = {}): Metadata {
  const pageTitle = title ?? siteConfig.name;
  const canonicalUrl = new URL(path, siteConfig.url).toString();
  const imageUrl = new URL(siteConfig.image, siteConfig.url).toString();

  return {
    title: title
      ? title
      : { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
    description: description || undefined,
    metadataBase: new URL(siteConfig.url),
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    keywords:
      siteConfig.keywords.length > 0 ? [...siteConfig.keywords] : undefined,
    authors: siteConfig.author.name
      ? [{ name: siteConfig.author.name }]
      : undefined,
    creator: siteConfig.author.name || undefined,
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: canonicalUrl,
      title: pageTitle,
      description: description || undefined,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          alt: `${siteConfig.name} | ${description}`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: description || undefined,
      creator: siteConfig.author.twitter || undefined,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
