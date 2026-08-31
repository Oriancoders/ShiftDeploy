import 'server-only';
import { createClient } from '@sanity/client';
import { sanityConfig, isSanityConfigured } from './config';

/**
 * Server-only write client for the admin blog manager. Sees drafts
 * (perspective raw) and can create/patch/delete documents and upload assets.
 * NEVER import from client components.
 */
export const sanityWriteClient = isSanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
      perspective: 'raw',
    })
  : null;

export const hasWriteToken = Boolean(process.env.SANITY_API_TOKEN);
