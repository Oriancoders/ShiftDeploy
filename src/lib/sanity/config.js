/** Sanity project configuration. Public values only; the write token lives in server.js. */
export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'zan6neq8',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
};

export const isSanityConfigured = Boolean(sanityConfig.projectId && sanityConfig.dataset);
