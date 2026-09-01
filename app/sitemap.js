import { sanityClient } from '../src/lib/sanity/client';
import { isSanityConfigured } from '../src/lib/sanity/config';

const BASE_URL = 'https://shiftdeploy.com';

async function getAuthorSlugs() {
  if (!isSanityConfigured || !sanityClient) return [];
  try {
    // Only authors who actually have published posts - an empty profile page
    // in the sitemap is a thin page invitation.
    return await sanityClient.fetch(
      `*[_type == "author" && defined(slug.current)
         && count(*[_type == "post" && author._ref == ^._id && status == "published"]) > 0
        ]{ "slug": slug.current, _updatedAt }`
    );
  } catch {
    return [];
  }
}

async function getInsightSlugs() {
  if (!isSanityConfigured || !sanityClient) return [];
  try {
    const posts = await sanityClient.fetch(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    );
    return posts;
  } catch {
    return [];
  }
}

export default async function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: BASE_URL, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/services`, lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/shiftspeed`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/shiftconvert`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/shiftbuild`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/shiftflow`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/insideShiftDeploy`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/missions`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/insights`, lastModified: now, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/digital-receptionist`, lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/ContactUs`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/CaseStudies/SlackerIOT`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/CaseStudies/BullseyesCase`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/CaseStudies/K2TradersCase`, lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/terms-of-services`, lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
  ];

  const slugs = await getInsightSlugs();
  const insightRoutes = slugs.map((post) => ({
    url: `${BASE_URL}/insights/${post.slug}`,
    lastModified: post._updatedAt,
    priority: 0.7,
    changeFrequency: 'weekly',
  }));

  const authors = await getAuthorSlugs();
  const authorRoutes = authors.map((a) => ({
    url: `${BASE_URL}/insights/author/${a.slug}`,
    lastModified: a._updatedAt,
    priority: 0.5,
    changeFrequency: 'monthly',
  }));

  return [...staticRoutes, ...insightRoutes, ...authorRoutes];
}
