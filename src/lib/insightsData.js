import imageUrlBuilder from '@sanity/image-url';
import { isSanityConfigured, sanityClient } from './sanity';

export const INSIGHTS_LIST_QUERY = `*[
  _type in ["insight", "insights", "post", "blogPost"]
] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "id": coalesce(slug.current, _id),
  excerpt,
  summary,
  "date": coalesce(publishedAt, _createdAt),
  tags,
  categories[]->{ title },
  author->{ name },
  mainImage,
  minutes,
  readTime,
  featured,
  status
}`;

export const INSIGHT_BY_SLUG_QUERY = `*[
  _type in ["insight", "insights", "post", "blogPost"] &&
  slug.current == $slug
][0]{
  _id,
  title,
  "id": coalesce(slug.current, _id),
  excerpt,
  summary,
  "date": coalesce(publishedAt, _createdAt),
  publishedAt,
  _updatedAt,
  tags,
  categories[]->{
    title,
    "slug": slug.current
  },
  author->{
    name,
    jobTitle,
    "image": image.asset->url,
    expertise,
    socialLinks
  },
  "mainImage": coalesce(mainImage, coverImage),
  minutes,
  readTime,
  body,
  seoTitle,
  seoDescription,
  focusKeyword,
  keywords,
  secondaryKeywords,
  openGraphImage,
  socialTitle,
  socialDescription,
  canonicalUrl,
  noIndex,
  searchIntent,
  funnelStage,
  primaryCta,
  internalLinks[]->{
    title,
    "slug": slug.current
  },
  theme,
  featured,
  status,
  relatedPosts[]->{
    title,
    "slug": slug.current,
    excerpt,
    mainImage,
    "date": coalesce(publishedAt, _createdAt),
    minutes,
    readingTime,
    author->{ name }
  }
}`;

const imageBuilder = isSanityConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null;

export const buildSanityImageUrl = (image, width = 1200, height) => {
  if (!image || !imageBuilder) return null;
  try {
    const builder = imageBuilder.image(image).width(width).auto('format');
    return height ? builder.height(height).url() : builder.url();
  } catch {
    return null;
  }
};

export const normalizeTags = (rawTags, rawCategories) => {
  const fromTags = Array.isArray(rawTags)
    ? rawTags.map((tag) => (typeof tag === 'string' ? tag : tag?.title || tag?.value || '')).filter(Boolean)
    : [];
  const fromCategories = Array.isArray(rawCategories)
    ? rawCategories.map((cat) => cat?.title || '').filter(Boolean)
    : [];
  const combined = [...fromTags, ...fromCategories];
  return combined.length > 0 ? Array.from(new Set(combined)) : ['Insights'];
};

const getPortableTextWordCount = (body) => {
  if (!Array.isArray(body)) return 0;
  const text = body
    .map((block) => (block?.children || []).map((child) => child?.text || '').join(' '))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text ? text.split(' ').length : 0;
};

export const getReadMinutes = (minutes, readTime, body) => {
  const fromMinutes = Number(minutes);
  if (Number.isFinite(fromMinutes) && fromMinutes > 0) return Math.round(fromMinutes);

  const fromReadTime = Number(readTime);
  if (Number.isFinite(fromReadTime) && fromReadTime > 0) return Math.round(fromReadTime);

  const words = getPortableTextWordCount(body);
  if (words <= 0) return 5;
  return Math.max(1, Math.ceil(words / 200));
};

export const normalizeInsightListItem = (doc) => ({
  id: doc.id || doc._id,
  title: doc.title,
  excerpt: doc.excerpt || doc.summary || '',
  date: doc.date || new Date().toISOString(),
  tags: normalizeTags(doc.tags, doc.categories),
  author: doc?.author?.name || 'ShiftDeploy',
  mainImage: doc.mainImage || null,
  minutes: getReadMinutes(doc.minutes, doc.readTime, doc.body),
  featured: Boolean(doc.featured),
  status: doc.status || 'published',
});

export const normalizeInsightDetail = (doc) => ({
  id: doc.id || doc._id,
  title: doc.title,
  excerpt: doc.excerpt || doc.summary || '',
  date: doc.date || new Date().toISOString(),
  tags: normalizeTags(doc.tags, doc.categories),
  author: doc?.author?.name || 'ShiftDeploy',
  authorJobTitle: doc?.author?.jobTitle || '',
  authorImage: doc?.author?.image || null,
  authorExpertise: doc?.author?.expertise || [],
  mainImage: doc.mainImage || doc.coverImage || null,
  body: Array.isArray(doc.body) ? doc.body : [],
  minutes: getReadMinutes(doc.minutes, doc.readTime, doc.body),
  internalLinks: Array.isArray(doc.internalLinks) ? doc.internalLinks : [],
  theme: doc.theme || null,
  primaryCta: doc.primaryCta || null,
  relatedPosts: Array.isArray(doc.relatedPosts) ? doc.relatedPosts : [],
  featured: Boolean(doc.featured),
});

export async function getInsightList() {
  if (!isSanityConfigured || !sanityClient) return [];
  try {
    const docs = await sanityClient.fetch(INSIGHTS_LIST_QUERY);
    return Array.isArray(docs) ? docs.filter((doc) => doc?.title).map(normalizeInsightListItem) : [];
  } catch {
    return [];
  }
}

export async function getInsightBySlug(slug) {
  if (!slug || !isSanityConfigured || !sanityClient) return null;
  try {
    return await sanityClient.fetch(INSIGHT_BY_SLUG_QUERY, { slug });
  } catch {
    return null;
  }
}
