const OWNED_FIELDS = [
  'title', 'slug', 'excerpt', 'status', 'publishedAt', 'updatedAt', 'featured',
  'author', 'categories', 'tags', 'mainImage', 'body', 'schemaType',
  'directAnswer', 'keyTakeaways', 'faqSection', 'howTo', 'citations', 'entities',
];

const SEO_FIELDS = [
  'seoTitle', 'seoDescription', 'focusKeyword', 'secondaryKeywords',
  'semanticKeywords', 'canonicalUrl', 'noIndex', 'searchIntent', 'funnelStage', 'targetAudience',
];

export function validatePublication(post) {
  if (!String(post.title || '').trim()) throw new Error('Title is required.');
  if (!String(post.excerpt || '').trim()) throw new Error('Excerpt is required.');
  if (!post.slug?.current) throw new Error('Slug is required.');
  if (!Array.isArray(post.body) || !post.body.length) throw new Error('Cannot publish an empty post.');
  if (post.mainImage && !String(post.mainImage.alt || '').trim()) {
    throw new Error('Cover image needs alt text before publishing.');
  }
  if (!Number.isFinite(Date.parse(post.publishedAt))) throw new Error('A valid publication date is required.');
}

export function validatePostEdit(existing, input) {
  if (!['draft', 'published'].includes(input.status)) throw new Error('Invalid post status.');
  if (input.id && (!existing || existing._type !== 'post')) throw new Error('Post not found.');
  if (existing && (!input.revision || input.revision !== existing._rev)) {
    throw new Error('This post has changed. Reload the editor before saving.');
  }
  // Preserve even legacy slugs verbatim once a URL has been published.
  const locked = existing && (existing.status === 'published' || existing.publishedAt);
  if (locked && input.slug !== existing.slug?.current) {
    throw new Error('Published URLs are locked. A URL change requires a redirect migration.');
  }
  const canonical = input.seo?.canonicalUrl;
  if (canonical) {
    let url;
    try { url = new URL(canonical); } catch { throw new Error('Canonical URL must be an absolute HTTP(S) URL.'); }
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.hash) {
      throw new Error('Canonical URL must be an absolute HTTP(S) URL without credentials or a fragment.');
    }
  }
}

export function buildPostPatch(existing, edited) {
  const set = {};
  const unset = [];
  for (const field of OWNED_FIELDS) {
    if (edited[field] === undefined) unset.push(field);
    else set[field] = edited[field];
  }

  // Keep crop/hotspot and other image metadata when editing the same asset.
  if (set.mainImage?.asset?._ref === existing.mainImage?.asset?._ref && set.mainImage) {
    set.mainImage = { ...existing.mainImage, ...set.mainImage };
  }
  for (const field of ['keyTakeaways', 'faqSection']) {
    if (set[field] && existing[field]?.title) {
      set[field] = { ...set[field], title: existing[field].title };
    }
  }

  const seo = { ...existing.seo };
  for (const field of SEO_FIELDS) {
    if (edited.seo?.[field] === undefined) delete seo[field];
    else seo[field] = edited.seo[field];
    // Clear migrated aliases so an intentionally blank field cannot reappear.
    if (Object.hasOwn(existing, field)) unset.push(field);
  }
  set.seo = seo;
  return { set, unset };
}
