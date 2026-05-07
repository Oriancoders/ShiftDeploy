export const revalidate = 3600;
import InsightDetail from '../../../src/Insights/InsightDetail';
import { sanityClient, isSanityConfigured } from '../../../src/lib/sanity';
import imageUrlBuilder from '@sanity/image-url';

const imageBuilder = isSanityConfigured ? imageUrlBuilder(sanityClient) : null;

async function getPost(slug) {
  if (!isSanityConfigured || !sanityClient) return null;
  try {
    return await sanityClient.fetch(
      `*[_type in ["post","insight","insights","blogPost"] && slug.current == $slug][0]{
        title,
        excerpt,
        mainImage,
        publishedAt,
        _updatedAt,
        "author": author->{ name, "image": image.asset->url },
        categories[]->{ title },
        minutes,
        readTime,
        body,
        seoTitle,
        seoDescription,
        focusKeyword,
        keywords,
        openGraphImage,
        socialTitle,
        socialDescription,
        canonicalUrl,
        noIndex
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

  const metaTitle = post.seoTitle || `${post.title} | ShiftDeploy Insights`;
  const metaDesc = post.seoDescription || post.excerpt || `Read ${post.title} on the ShiftDeploy blog.`;
  const canonicalHref = post.canonicalUrl || `https://shiftdeploy.com/insights/${slug}`;

  const sanityOgImage =
    post.openGraphImage && imageBuilder
      ? imageBuilder.image(post.openGraphImage).width(1200).height(630).auto('format').url()
      : null;
  const mainOgImage =
    post.mainImage && imageBuilder
      ? imageBuilder.image(post.mainImage).width(1200).height(630).auto('format').url()
      : null;
  const ogImage = sanityOgImage || mainOgImage || '/og-image.png';

  const ogTitle = post.socialTitle || post.title;
  const ogDesc = post.socialDescription || metaDesc;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: post.keywords?.length ? post.keywords : post.focusKeyword ? [post.focusKeyword] : undefined,
    alternates: { canonical: canonicalHref },
    robots: post.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonicalHref,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt || post.publishedAt,
      authors: post.author?.name ? [post.author.name] : ['ShiftDeploy'],
      tags: post.categories?.map((c) => c.title) || [],
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDesc,
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
