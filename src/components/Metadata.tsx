import Head from 'expo-router/head';
import React from 'react';

interface MetadataProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE = 'Vegan Daily - Easy Daily Vegan Recipes';
const DEFAULT_DESCRIPTION = 'Discover delicious and easy vegan recipes for breakfast, lunch, and dinner every day. No accounts, just healthy plant-based meals.';
const BASE_URL = 'https://vegandaily.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og.png`;

export const Metadata: React.FC<MetadataProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}) => {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | Vegan Daily`;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Favicon - The user mentioned placing favicon.ico in public */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
