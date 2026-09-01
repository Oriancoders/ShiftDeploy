/**
 * Structured data (JSON-LD) builder.
 *
 * Everything is emitted as a single linked @graph rather than a pile of
 * separate <script> tags. The graph form lets nodes reference each other by
 * @id — the article points at its author, its publisher, and its FAQ — which
 * is what lets a parser resolve the whole page into one coherent entity
 * instead of several disconnected fragments.
 */

import { urlFor } from './sanity/image';
import { portableTextToPlain } from './sanity/markdown';

/** Real word count from the body, so wordCount is a measurement not a guess. */
const countWords = (body) => {
  const text = portableTextToPlain(body).trim();
  return text ? text.split(/\s+/).length : 0;
};

const SITE = 'https://shiftdeploy.com';
const ORG_ID = `${SITE}/#organization`;

/**
 * Google asks for 16:9, 4:3 and 1:1 crops of the article image so it can pick
 * whichever fits a given result layout. One URL is accepted but limits which
 * rich results the page is eligible for.
 */
const articleImages = (image, fallback) => {
  const b = urlFor(image);
  if (!b) return fallback ? [fallback] : undefined;
  const crop = (w, h) => {
    try {
      // PNG, not auto=format: Google Images does not index SVG, and several
      // covers are SVG diagrams.
      return b.width(w).height(h).fit('crop').quality(85).format('png').url();
    } catch {
      return null;
    }
  };
  const out = [crop(1200, 675), crop(1200, 900), crop(1200, 1200)].filter(Boolean);
  return out.length ? out : fallback ? [fallback] : undefined;
};

export const buildPostGraph = ({ post, slug, ogImage, readMinutes, seo }) => {
  if (!post) return null;

  const url = seo?.canonicalUrl || `${SITE}/insights/${slug}`;
  const pageId = `${url}#webpage`;
  const articleId = `${url}#article`;
  const authorId = `${url}#author`;

  const graph = [];

  /* ---- Organization (publisher) ---- */
  graph.push({
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'ShiftDeploy',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/og-image.png`, width: 1200, height: 630 },
  });

  /* ---- Author ----
   * A Person node with sameAs links and credentials is the single clearest
   * E-E-A-T signal available in structured data. */
  const author = post.author || {};
  const authorSameAs = [
    ...(Array.isArray(author.sameAs) ? author.sameAs : []),
    author.socialLinks?.linkedin,
    author.socialLinks?.twitter,
    author.socialLinks?.website,
  ].filter(Boolean);

  graph.push({
    '@type': 'Person',
    '@id': authorId,
    name: author.name || 'ShiftDeploy',
    ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
    ...(author.bio ? { description: author.bio } : {}),
    ...(author.image ? { image: author.image } : {}),
    ...(author.expertise?.length ? { knowsAbout: author.expertise } : {}),
    ...(author.credentials?.length ? { hasCredential: author.credentials } : {}),
    ...(authorSameAs.length ? { sameAs: authorSameAs } : {}),
    // Google wants author.url to resolve to a page that uniquely identifies
    // the author. /insights/author/<slug> now exists, so use it when we have a
    // slug and fall back to the site when we do not.
    url: author.slug ? `${SITE}/insights/author/${author.slug}` : SITE,
    worksFor: { '@id': ORG_ID },
  });

  /* ---- The article ---- */
  const articleType = post.schemaType && post.schemaType !== 'FAQPage' && post.schemaType !== 'HowTo'
    ? post.schemaType
    : 'BlogPosting';

  const da = post.directAnswer;
  const entities = Array.isArray(post.entities) ? post.entities : [];
  const citations = Array.isArray(post.citations) ? post.citations : [];
  const takeaways = post.keyTakeaways?.points?.filter(Boolean) || [];

  const article = {
    '@type': articleType,
    '@id': articleId,
    isPartOf: { '@id': pageId },
    mainEntityOfPage: { '@id': pageId },
    headline: post.title,
    ...(seo?.seoTitle ? { alternativeHeadline: seo.seoTitle } : {}),
    description: seo?.seoDescription || post.excerpt || '',
    image: articleImages(post.mainImage, ogImage),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post._updatedAt || post.publishedAt,
    author: { '@id': authorId },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-GB',
    // timeRequired only. wordCount used to be readMinutes*200, which is a
    // fabricated figure dressed as a measurement - if it disagrees with the
    // visible text it is a trust signal working against us.
    ...(readMinutes ? { timeRequired: `PT${readMinutes}M` } : {}),
    ...(() => { const w = countWords(post.body); return w ? { wordCount: w } : {}; })(),
    ...(seo?.focusKeyword || seo?.secondaryKeywords?.length
      ? { keywords: [seo.focusKeyword, ...(seo.secondaryKeywords || [])].filter(Boolean).join(', ') }
      : {}),

    // `about` is the topic; `mentions` are supporting entities. Splitting them
    // tells an engine what the page is *for* versus what it merely references.
    ...(entities.length
      ? {
          about: entities.slice(0, 3).map((e) => ({
            '@type': e.type || 'Thing',
            name: e.name,
            ...(e.sameAs ? { sameAs: e.sameAs } : {}),
          })),
          mentions: entities.map((e) => ({
            '@type': e.type || 'Thing',
            name: e.name,
            ...(e.sameAs ? { sameAs: e.sameAs } : {}),
          })),
        }
      : {}),

    ...(citations.length
      ? {
          citation: citations.map((c) => ({
            '@type': 'CreativeWork',
            name: c.title,
            ...(c.url ? { url: c.url } : {}),
            ...(c.publisher ? { publisher: { '@type': 'Organization', name: c.publisher } } : {}),
            ...(c.datePublished ? { datePublished: c.datePublished } : {}),
          })),
        }
      : {}),

    // The direct answer, restated as an abstract. Some extractors read
    // `abstract` in preference to parsing body text.
    ...(da?.answer ? { abstract: da.answer } : {}),

    ...(takeaways.length
      ? {
          alternativeHeadline: post.title,
          teaches: takeaways,
        }
      : {}),

    isAccessibleForFree: true,
    ...(post.categories?.length ? { articleSection: post.categories.map((c) => c.title).filter(Boolean) } : {}),
  };

  /* Speakable — voice assistants read these selectors aloud. */
  const speakable = post.speakable;
  if (speakable?.enabled !== false) {
    const selectors = speakable?.cssSelectors?.length
      ? speakable.cssSelectors
      : ['.direct-answer', '.key-takeaways'];
    article.speakable = { '@type': 'SpeakableSpecification', cssSelector: selectors };
  }

  graph.push(article);

  /* ---- WebPage ---- */
  graph.push({
    '@type': 'WebPage',
    '@id': pageId,
    url,
    name: seo?.seoTitle || post.title,
    description: seo?.seoDescription || post.excerpt || '',
    isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'ShiftDeploy' },
    primaryImageOfPage: { '@type': 'ImageObject', url: ogImage },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post._updatedAt || post.publishedAt,
    breadcrumb: { '@id': `${url}#breadcrumb` },
    inLanguage: 'en-GB',
  });

  /* ---- Breadcrumb ---- */
  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE}/insights` },
      { '@type': 'ListItem', position: 3, name: post.title || slug, item: url },
    ],
  });

  /* ---- FAQPage ----
   * Collects both the post-level FAQ section and any inline FAQ blocks in the
   * body, so a question is marked up wherever the writer put it. */
  const faqItems = [
    ...(post.faqSection?.items || []),
    ...(Array.isArray(post.body)
      ? post.body.filter((b) => b?._type === 'faq').flatMap((b) => b.items || [])
      : []),
  ].filter((i) => i?.question && i?.answer);

  if (faqItems.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      isPartOf: { '@id': pageId },
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  /* ---- The direct answer, as its own Question node ----
   * This is the piece most likely to be lifted verbatim into an AI answer, so
   * it gets marked up independently of the FAQ list. */
  if (da?.question && da?.answer) {
    graph.push({
      '@type': 'Question',
      '@id': `${url}#direct-answer`,
      name: da.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: da.supportingStat ? `${da.answer} ${da.supportingStat}` : da.answer,
        ...(da.statSourceUrl ? { citation: da.statSourceUrl } : {}),
      },
    });
  }

  /* ---- HowTo ---- */
  const howTo = post.howTo;
  if (howTo?.steps?.length) {
    graph.push({
      '@type': 'HowTo',
      '@id': `${url}#howto`,
      name: howTo.title || post.title,
      ...(howTo.description ? { description: howTo.description } : {}),
      ...(howTo.totalTime ? { totalTime: howTo.totalTime } : {}),
      step: howTo.steps.map((step, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: step.name,
        text: step.text,
        ...(step.url ? { url: `${url}${step.url}` } : {}),
      })),
    });
  }

  /* ---- Key takeaways as an ItemList ----
   * Lists survive AI chunking intact, which is why they get quoted. */
  if (takeaways.length) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#takeaways`,
      name: post.keyTakeaways?.title || 'Key takeaways',
      itemListElement: takeaways.map((point, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: point,
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
};
