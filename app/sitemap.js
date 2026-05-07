import { sanityClient, isSanityConfigured } from '../src/lib/sanity';

const BASE_URL = 'https://shiftdeploy.com';

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
  const staticRoutes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/shiftspeed`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/shiftconvert`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/shiftbuild`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services/shiftflow`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/insideShiftDeploy`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/missions`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/insights`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/digital-receptionist`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/ContactUs`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/CaseStudies/SlackerIOT`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/CaseStudies/BullseyesCase`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/CaseStudies/K2TradersCase`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${BASE_URL}/terms-of-services`, priority: 0.3, changeFrequency: 'yearly' },
  ];

  const slugs = await getInsightSlugs();
  const insightRoutes = slugs.map((post) => ({
    url: `${BASE_URL}/insights/${post.slug}`,
    lastModified: post._updatedAt,
    priority: 0.7,
    changeFrequency: 'weekly',
  }));

  return [...staticRoutes, ...insightRoutes];
}
