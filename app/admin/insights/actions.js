'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { assertAdmin } from '../../../src/lib/auth';
import { sanityWriteClient } from '../../../src/lib/sanity/server';
import { slugExistsQuery } from '../../../src/lib/sanity/queries';

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

function slugify(input) {
  return String(input || '')
    .toLowerCase()
    .trim()
    .replace(/['".,:;!?()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96);
}

function fail(err) {
  return {
    ok: false,
    message: err instanceof Error ? err.message : 'Unexpected error',
  };
}

function requireClient() {
  if (!sanityWriteClient) throw new Error('Sanity is not configured.');
  if (!process.env.SANITY_API_TOKEN) {
    throw new Error('SANITY_API_TOKEN is not set - the editor cannot write without it.');
  }
  return sanityWriteClient;
}

/** Content changed: refresh the public insights pages. */
function refreshInsights() {
  revalidateTag('insights');
  revalidatePath('/insights', 'layout');
  revalidatePath('/admin/insights', 'layout');
}

async function ensureUniqueSlug(type, wanted, excludeId) {
  const client = requireClient();
  let slug = wanted;
  for (let i = 0; i < 20; i++) {
    const clashes = await client.fetch(slugExistsQuery, {
      type,
      slug,
      excludeId: excludeId || '',
    });
    if (!clashes) return slug;
    slug = `${wanted}-${i + 2}`;
  }
  throw new Error('Could not find a unique slug');
}

/** Strip undefined/empty values so Sanity documents stay tidy. */
function clean(obj) {
  if (Array.isArray(obj)) {
    const arr = obj.map(clean).filter((v) => v !== undefined);
    return arr.length ? arr : undefined;
  }
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const c = clean(v);
      if (c !== undefined && c !== '' && !(Array.isArray(c) && c.length === 0)) out[k] = c;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return obj === '' || obj === null ? undefined : obj;
}

/** Attach a stable _key to each array member, which Sanity requires. */
function keyed(arr, prefix) {
  return (arr || []).map((item, i) => ({ _key: `${prefix}${i}`, ...item }));
}

/* ------------------------------------------------------------------ */
/* Media                                                                */
/* ------------------------------------------------------------------ */

const MAX_UPLOAD = 12 * 1024 * 1024; // 12 MB
const IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/avif',
  'image/svg+xml',
];

/**
 * Uploads an image to Sanity's asset CDN. Returns the asset reference the
 * editor embeds into image fields.
 */
export async function uploadImage(formData) {
  try {
    await assertAdmin();
    const client = requireClient();

    const file = formData.get('file');
    if (!(file instanceof File)) return { ok: false, message: 'No file received.' };
    if (!IMAGE_TYPES.includes(file.type)) {
      return { ok: false, message: 'Only JPEG, PNG, WebP, AVIF or GIF images are allowed.' };
    }
    if (file.size > MAX_UPLOAD) {
      return { ok: false, message: 'Image is larger than 12 MB.' };
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // A descriptive filename is itself a small image-SEO signal, and it is what
    // shows in the asset library later. Strip anything that is not URL-safe.
    const safeName = file.name
      .replace(/\.[^.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60);
    const ext = (file.type.split('/')[1] || 'jpg').replace('svg+xml', 'svg');

    const asset = await client.assets.upload('image', buffer, {
      filename: `${safeName || 'image'}.${ext}`,
      contentType: file.type,
    });

    return {
      ok: true,
      message: 'Uploaded.',
      assetRef: asset._id,
      url: asset.url,
      width: asset.metadata?.dimensions?.width,
      height: asset.metadata?.dimensions?.height,
      size: asset.size,
    };
  } catch (err) {
    return fail(err);
  }
}

/* ------------------------------------------------------------------ */
/* Posts                                                                */
/* ------------------------------------------------------------------ */

function toSanityImage(img) {
  if (!img?.assetRef) return undefined;
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: img.assetRef },
    alt: img.alt || undefined,
  };
}

export async function savePost(input) {
  try {
    await assertAdmin();
    const client = requireClient();

    const title = String(input.title || '').trim();
    if (!title) return { ok: false, message: 'Title is required.' };
    if (!String(input.excerpt || '').trim()) {
      return { ok: false, message: 'Excerpt is required.' };
    }

    const publishing = input.status === 'published';
    if (publishing && (!input.body || input.body.length === 0)) {
      return { ok: false, message: 'Cannot publish an empty post.' };
    }
    if (publishing && input.mainImage && !String(input.mainImage.alt || '').trim()) {
      return { ok: false, message: 'Cover image needs alt text before publishing.' };
    }

    const wantedSlug = slugify(input.slug || title);
    if (!wantedSlug) return { ok: false, message: 'Slug is required.' };
    const slug = await ensureUniqueSlug('post', wantedSlug, input.id);

    const now = new Date().toISOString();
    const ai = input.aiSeo || {};

    const doc = clean({
      _type: 'post',
      title,
      slug: { _type: 'slug', current: slug },
      excerpt: String(input.excerpt).trim(),
      status: input.status,
      publishedAt: publishing ? input.publishedAt || now : input.publishedAt,
      updatedAt: now,
      featured: Boolean(input.featured),
      readingTime: input.readingTime || undefined,
      author: input.authorId ? { _type: 'reference', _ref: input.authorId } : undefined,
      categories: (input.categoryIds || []).map((id, i) => ({
        _type: 'reference',
        _ref: id,
        _key: `cat${i}`,
      })),
      tags: (input.tags || []).map((t) => String(t).trim()).filter(Boolean),
      mainImage: toSanityImage(input.mainImage),
      body: input.body,
      schemaType: input.schemaType || 'BlogPosting',

      // --- AI SEO / GEO ---
      directAnswer: ai.directAnswer?.answer
        ? {
            question: ai.directAnswer.question,
            answer: ai.directAnswer.answer,
            supportingStat: ai.directAnswer.supportingStat,
            statSource: ai.directAnswer.statSource,
            statSourceUrl: ai.directAnswer.statSourceUrl,
          }
        : undefined,
      keyTakeaways: ai.keyTakeaways?.points?.length
        ? { title: ai.keyTakeaways.title || 'Key takeaways', points: ai.keyTakeaways.points }
        : undefined,
      faqSection: ai.faq?.length
        ? {
            title: ai.faqTitle || 'Frequently asked questions',
            items: keyed(
              ai.faq.filter((f) => f.question && f.answer),
              'faq'
            ),
          }
        : undefined,
      howTo: ai.howTo?.steps?.length
        ? {
            title: ai.howTo.title,
            description: ai.howTo.description,
            totalTime: ai.howTo.totalTime,
            steps: keyed(
              ai.howTo.steps.filter((s) => s.name),
              'step'
            ),
          }
        : undefined,
      citations: ai.citations?.length
        ? keyed(
            ai.citations.filter((c) => c.title),
            'cite'
          )
        : undefined,
      entities: ai.entities?.length
        ? keyed(
            ai.entities.filter((e) => e.name),
            'ent'
          )
        : undefined,
      speakable: { enabled: true, cssSelectors: ['.direct-answer', '.key-takeaways'] },

      // --- classic SEO ---
      seo: {
        seoTitle: input.seo?.seoTitle,
        seoDescription: input.seo?.seoDescription,
        focusKeyword: input.seo?.focusKeyword,
        secondaryKeywords: input.seo?.secondaryKeywords,
        semanticKeywords: input.seo?.semanticKeywords,
        canonicalUrl: input.seo?.canonicalUrl,
        noIndex: input.seo?.noIndex || undefined,
        searchIntent: input.seo?.searchIntent,
        funnelStage: input.seo?.funnelStage,
        targetAudience: input.seo?.targetAudience,
      },
      social: {
        socialTitle: input.social?.socialTitle,
        socialDescription: input.social?.socialDescription,
        openGraphImage: toSanityImage(input.social?.openGraphImage),
      },
    });

    let id = input.id;
    if (id) {
      await client.createOrReplace({ ...doc, _id: id });
    } else {
      const created = await client.create(doc);
      id = created._id;
    }

    refreshInsights();
    return {
      ok: true,
      message: publishing ? 'Published.' : 'Draft saved.',
      id,
      slug,
    };
  } catch (err) {
    return fail(err);
  }
}

export async function setPostStatus(id, status) {
  try {
    await assertAdmin();
    const client = requireClient();

    const patch = client.patch(id).set({ status, updatedAt: new Date().toISOString() });
    if (status === 'published') {
      patch.setIfMissing({ publishedAt: new Date().toISOString() });
    }
    await patch.commit();

    refreshInsights();
    return { ok: true, message: status === 'published' ? 'Published.' : 'Unpublished.' };
  } catch (err) {
    return fail(err);
  }
}

export async function deletePost(id) {
  try {
    await assertAdmin();
    await requireClient().delete(id);
    refreshInsights();
    return { ok: true, message: 'Post deleted.' };
  } catch (err) {
    return fail(err);
  }
}

/* ------------------------------------------------------------------ */
/* Authors & categories                                                 */
/* ------------------------------------------------------------------ */

export async function saveAuthor(input) {
  try {
    await assertAdmin();
    const client = requireClient();

    const name = String(input.name || '').trim();
    if (!name) return { ok: false, message: 'Name is required.' };
    const slug = await ensureUniqueSlug('author', slugify(input.slug || name), input.id);

    const doc = clean({
      _type: 'author',
      name,
      slug: { _type: 'slug', current: slug },
      jobTitle: input.jobTitle,
      bio: input.bio,
      expertise: input.expertise,
      credentials: input.credentials,
      sameAs: input.sameAs,
      image: toSanityImage(input.image),
    });

    if (input.id) await client.createOrReplace({ ...doc, _id: input.id });
    else await client.create(doc);

    refreshInsights();
    return { ok: true, message: 'Author saved.' };
  } catch (err) {
    return fail(err);
  }
}

export async function deleteAuthor(id) {
  try {
    await assertAdmin();
    await requireClient().delete(id);
    refreshInsights();
    return { ok: true, message: 'Author deleted.' };
  } catch (err) {
    return fail(err);
  }
}

export async function saveCategory(input) {
  try {
    await assertAdmin();
    const client = requireClient();

    const title = String(input.title || '').trim();
    if (!title) return { ok: false, message: 'Title is required.' };
    const slug = await ensureUniqueSlug('category', slugify(input.slug || title), input.id);

    const doc = clean({
      _type: 'category',
      title,
      slug: { _type: 'slug', current: slug },
      description: input.description,
      topicCluster: input.topicCluster,
      color: input.color,
    });

    if (input.id) await client.createOrReplace({ ...doc, _id: input.id });
    else await client.create(doc);

    refreshInsights();
    return { ok: true, message: 'Category saved.' };
  } catch (err) {
    return fail(err);
  }
}

export async function deleteCategory(id) {
  try {
    await assertAdmin();
    await requireClient().delete(id);
    refreshInsights();
    return { ok: true, message: 'Category deleted.' };
  } catch (err) {
    return fail(err);
  }
}
