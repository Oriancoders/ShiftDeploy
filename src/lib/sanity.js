import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2024-01-01";
const token = import.meta.env.VITE_SANITY_TOKEN;
const useCdn = String(import.meta.env.VITE_SANITY_USE_CDN || "true") === "true";

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
      perspective: "published",
    })
  : null;

