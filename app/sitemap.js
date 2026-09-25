import { sanityClient } from '../src/lib/sanity/client';
import { isSanityConfigured } from '../src/lib/sanity/config';
import { INSIGHTS_FETCH_OPTIONS, insightSitemapQuery, authorSitemapQuery } from '../src/lib/sanity/publicContent';

export const revalidate = 60;

const BASE_URL = 'https://shiftdeploy.com';

async function getAuthorSlugs() {
  if (!isSanityConfigured || !sanityClient) return [];
  return sanityClient.fetch(authorSitemapQuery, {}, INSIGHTS_FETCH_OPTIONS);
}

async function getInsightSlugs() {
  if (!isSanityConfigured || !sanityClient) return [];
  // CMS failures must not silently publish a sitemap without articles.
  return sanityClient.fetch(insightSitemapQuery, {}, INSIGHTS_FETCH_OPTIONS);
}

export default async function sitemap() {
  // Unknown modification dates are omitted; regeneration is not a content edit.
  const staticRoutes = [
    '', '/services', '/services/shiftspeed', '/services/shiftconvert',
    '/services/shiftbuild', '/services/shiftflow', '/insideShiftDeploy',
    '/product', '/review-your-doctor', '/service-growth-audit', '/shift-protocol',
    '/deploy-toolkit', '/missions', '/insights', '/digital-receptionist', '/plumbers',
    '/ContactUs', '/CaseStudies/SlackerIOT', '/CaseStudies/BullseyesCase',
    '/CaseStudies/K2TradersCase', '/privacy-policy', '/terms-of-services',
  ].map((path) => ({ url: `${BASE_URL}${path}` }));

  const slugs = await getInsightSlugs();
  const insightRoutes = slugs.map((post) => ({
    url: `${BASE_URL}/insights/${encodeURIComponent(post.slug)}`,
    lastModified: post.modified,
    priority: 0.7,
    changeFrequency: 'weekly',
  }));

  const authors = await getAuthorSlugs();
  const authorRoutes = authors.map((a) => ({
    url: `${BASE_URL}/insights/author/${encodeURIComponent(a.slug)}`,
    lastModified: a.modified,
    priority: 0.5,
    changeFrequency: 'monthly',
  }));

  return [...staticRoutes, ...insightRoutes, ...authorRoutes];
}
