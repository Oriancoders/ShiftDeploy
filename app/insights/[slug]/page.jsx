export const revalidate = 3600;
import InsightDetail from '../../../src/Insights/InsightDetail';
import { sanityClient, isSanityConfigured } from '../../../src/lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const imageBuilder = isSanityConfigured ? imageUrlBuilder(sanityClient) : null;

async function getPost(slug) {
  if (!isSanityConfigured || !sanityClient) return null;
  try {
    return await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        title,
        excerpt,
        mainImage,
        publishedAt,
        _updatedAt,
        "author": author->{ name, "image": image.asset->url },
        categories[]->{ title },
        minutes,
        readTime,
        body
      }`,
      { slug }
    );
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Insight Not Found | ShiftDeploy',
      robots: { index: false },
    };
  }

  const ogImage =
    post.mainImage && imageBuilder
      ? imageBuilder.image(post.mainImage).width(1200).height(630).auto('format').url()
      : '/og-image.png';

  return {
    title: `${post.title} | ShiftDeploy Insights`,
    description: post.excerpt || `Read ${post.title} on the ShiftDeploy blog.`,
    alternates: { canonical: `https://shiftdeploy.com/insights/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on the ShiftDeploy blog.`,
      url: `https://shiftdeploy.com/insights/${slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt || post.publishedAt,
      authors: post.author?.name ? [post.author.name] : ['ShiftDeploy'],
      tags: post.categories?.map((c) => c.title) || [],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read ${post.title} on the ShiftDeploy blog.`,
      images: [ogImage],
    },
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  const ogImage =
    post?.mainImage && imageBuilder
      ? imageBuilder.image(post.mainImage).width(1200).height(630).auto('format').url()
      : 'https://shiftdeploy.com/og-image.png';

  const readMinutes = (() => {
    const fromMinutes = Number(post?.minutes);
    if (Number.isFinite(fromMinutes) && fromMinutes > 0) return Math.round(fromMinutes);
    const fromReadTime = Number(post?.readTime);
    if (Number.isFinite(fromReadTime) && fromReadTime > 0) return Math.round(fromReadTime);
    if (!Array.isArray(post?.body)) return 3;
    const words = post.body
      .map((b) => (b?.children || []).map((c) => c?.text || '').join(' ')).join(' ')
      .split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  })();

  const articleSchema = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt || '',
        image: ogImage,
        datePublished: post.publishedAt,
        dateModified: post._updatedAt || post.publishedAt,
        timeRequired: `PT${readMinutes}M`,
        wordCount: readMinutes * 200,
        author: {
          '@type': 'Person',
          name: post.author?.name || 'ShiftDeploy',
          url: 'https://shiftdeploy.com',
        },
        publisher: {
          '@type': 'Organization',
          name: 'ShiftDeploy',
          url: 'https://shiftdeploy.com',
          logo: { '@type': 'ImageObject', url: 'https://shiftdeploy.com/og-image.png', width: 1200, height: 630 },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://shiftdeploy.com/insights/${slug}` },
        keywords: post.categories?.map((c) => c.title).join(', ') || 'web performance, CRO, digital growth',
        isPartOf: { '@type': 'Blog', name: 'ShiftDeploy Insights', url: 'https://shiftdeploy.com/insights' },
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shiftdeploy.com' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://shiftdeploy.com/insights' },
      { '@type': 'ListItem', position: 3, name: post?.title || slug, item: `https://shiftdeploy.com/insights/${slug}` },
    ],
  };

  return (
    <>
      {articleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InsightDetail slug={slug} />
    </>
  );
}
