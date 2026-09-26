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
  // Dates are real content edits. Update a route's date whenever its page content changes.
  const CONTENT_UPDATED = '2026-09-26';
  const staticRoutes = [
    ['', 1.0, 'weekly'],
    ['/services', 0.9, 'monthly'],
    ['/digital-receptionist', 0.9, 'monthly'],
    ['/services/shiftbuild', 0.8, 'monthly'],
    ['/services/shiftspeed', 0.8, 'monthly'],
    ['/services/shiftconvert', 0.8, 'monthly'],
    ['/services/shiftflow', 0.8, 'monthly'],
    ['/product', 0.8, 'monthly'],
    ['/review-your-doctor', 0.8, 'monthly'],
    ['/plumbers', 0.8, 'monthly'],
    ['/ContactUs', 0.8, 'yearly'],
    ['/about', 0.7, 'yearly'],
    ['/missions', 0.7, 'monthly'],
    ['/service-growth-audit', 0.7, 'monthly'],
    ['/insights', 0.7, 'weekly'],
    ['/digital-receptionist/demo', 0.6, 'monthly'],
    ['/CaseStudies/SlackerIOT', 0.6, 'yearly'],
    ['/CaseStudies/BullseyesCase', 0.6, 'yearly'],
    ['/CaseStudies/K2TradersCase', 0.6, 'yearly'],
    ['/privacy-policy', 0.3, 'yearly'],
    ['/terms-of-services', 0.3, 'yearly'],
  ].map(([path, priority, changeFrequency]) => ({
    url: `${BASE_URL}${path}`,
    lastModified: CONTENT_UPDATED,
    priority,
    changeFrequency,
  }));

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
