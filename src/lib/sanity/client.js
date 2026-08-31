import { createClient } from '@sanity/client';
import { sanityConfig, isSanityConfigured } from './config';

/**
 * Public read client. No token, published content only.
 * Safe for the public insights pages.
 *
 * useCdn is false on purpose. Next already caches these queries (tagged
 * "insights", see ./insights.js), so Sanity's API CDN would only add a second
 * stale layer that revalidateTag cannot clear - an edited cover image would
 * keep resolving to the old asset URL after the Next cache had already been
 * expired. With it off, every cache miss reads current data.
 */
export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: false,
      perspective: 'published',
    })
  : null;
