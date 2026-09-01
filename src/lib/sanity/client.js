import { createClient } from '@sanity/client';
import { sanityConfig, isSanityConfigured } from './config';

/**
 * Public read client. No token, published content only.
 * Safe for the public insights pages.
 *
 * useCdn defaults to false on purpose. Next already caches these queries, so
 * Sanity's API CDN would only add a second stale layer that revalidateTag
 * cannot clear - after publishing from /admin, an edited cover image would
 * keep resolving to the old asset URL even though the Next cache had already
 * been expired. With it off, every cache miss reads current data.
 *
 * NEXT_PUBLIC_SANITY_USE_CDN=true opts back in if you would rather have the
 * faster cache miss and accept that edits can take a few minutes to appear.
 */
export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: String(process.env.NEXT_PUBLIC_SANITY_USE_CDN) === 'true',
      perspective: 'published',
    })
  : null;
