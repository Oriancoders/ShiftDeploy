export const revalidate = 3600;
import InsightDetail from '../../../src/Insights/InsightDetail';
import JsonLd from '../../../src/components/JsonLd';
import {
  buildSanityImageUrl,
  getInsightBySlug,
  getInsightList,
  getReadMinutes,
  normalizeInsightDetail,
  resolveSeo,
  resolveKeywords,
} from '../../../src/lib/insightsData';
import { buildPostGraph } from '../../../src/lib/structuredData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getInsightBySlug(slug);

  if (!post) {
    return {
      title: 'Insight Not Found | ShiftDeploy',
      robots: { index: false },
    };
  }

  const seo = resolveSeo(post);

  const metaTitle = seo.seoTitle || `${post.title} | ShiftDeploy Insights`;
  // The direct answer makes a strong meta description: it is already written to
  // be a self-contained answer, which is exactly what a snippet needs to be.
  const metaDesc =
    seo.seoDescription || post.directAnswer?.answer || post.excerpt || `Read ${post.title} on the ShiftDeploy blog.`;
  const canonicalHref = seo.canonicalUrl || `https://shiftdeploy.com/insights/${slug}`;

  const sanityOgImage =
    seo.openGraphImage ? buildSanityImageUrl(seo.openGraphImage, 1200, 630) : null;
  const mainOgImage =
    post.mainImage ? buildSanityImageUrl(post.mainImage, 1200, 630) : null;
  const ogImage = sanityOgImage || mainOgImage || '/og-image.png';

  const ogTitle = seo.socialTitle || post.title;
  const ogDesc = seo.socialDescription || metaDesc;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: resolveKeywords(post),
    alternates: { canonical: canonicalHref },
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonicalHref,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post._updatedAt || post.publishedAt,
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
  const post = await getInsightBySlug(slug);

  const ogImage =
    post?.mainImage ? buildSanityImageUrl(post.mainImage, 1200, 630) : 'https://shiftdeploy.com/og-image.png';

  const readMinutes = (() => {
    return getReadMinutes(post?.minutes, post?.readTime, post?.body);
  })();

  const initialPost = post ? normalizeInsightDetail(post) : null;
  const moreInsights = (await getInsightList()).filter((item) => item.id !== initialPost?.id).slice(0, 5);

  // One linked @graph replaces the previously separate article + breadcrumb
  // blocks, and adds FAQPage, HowTo, Speakable and entity markup.
  const graph = post
    ? buildPostGraph({
        post,
        slug,
        ogImage,
        readMinutes,
        seo: resolveSeo(post),
      })
    : null;

  return (
    <>
      {graph && <JsonLd data={graph} />}
      <InsightDetail slug={slug} initialPost={initialPost} initialMoreInsights={moreInsights} />
    </>
  );
}
