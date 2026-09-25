import test from 'node:test';
import assert from 'node:assert/strict';
import { parse, evaluate } from 'groq-js';
import { INSIGHTS_LIST_QUERY, INSIGHT_BY_SLUG_QUERY } from '../src/lib/insightsData.js';
import { authorBySlugQuery } from '../src/lib/sanity/queries.js';
import { insightSitemapQuery, authorSitemapQuery } from '../src/lib/sanity/publicContent.js';
import { buildPostPatch, validatePostEdit, validatePublication } from '../src/lib/sanity/postEditing.js';
import { websiteDomain } from '../src/lib/websiteDomain.js';
import { trackGeneratedLead } from '../src/lib/leadTracking.js';

const post = (id, overrides = {}) => ({
  _id: id, _type: 'post', _rev: 'revision-1', title: id,
  excerpt: 'A useful article.', slug: { current: id }, status: 'published',
  publishedAt: '2020-01-01T00:00:00Z', author: { _ref: 'author' },
  body: [{ _type: 'block', children: [{ _type: 'span', text: 'Article content.' }] }],
  ...overrides,
});
const dataset = [
  post('public', { relatedPosts: [{ _ref: 'draft' }, { _ref: 'other' }, { _ref: 'hidden' }], internalLinks: [{ _ref: 'future' }, { _ref: 'other' }] }),
  post('other'), post('draft', { status: 'draft' }), post('drafts.secret'),
  post('versions.release.secret'), post('unknown', { status: undefined }),
  post('future', { publishedAt: '2999-01-01T00:00:00Z' }),
  post('undated', { publishedAt: null }), post('invalid-date', { publishedAt: 'invalid' }),
  post('hidden', { seo: { noIndex: true } }), post('legacy-hidden', { noIndex: true }),
  post('external', { seo: { canonicalUrl: 'https://example.com/article' } }),
  post('alias', { canonicalUrl: 'https://shiftdeploy.com/insights/public' }),
  post('self', { seo: { canonicalUrl: 'https://shiftdeploy.com/insights/self' } }),
  post('empty-slug', { slug: { current: '' } }),
  { _id: 'author', _type: 'author', name: 'Author', slug: { current: 'writer' } },
  { _id: 'empty-author', _type: 'author', name: 'Empty', slug: { current: 'empty' } },
];
async function query(source, params = {}, data = dataset) {
  return (await evaluate(parse(source), { dataset: data, params })).get();
}

test('listing and sitemap contain only due, published, canonical indexable posts', async () => {
  const expected = ['other', 'public', 'self'];
  assert.deepEqual((await query(INSIGHTS_LIST_QUERY)).map((p) => p.id).sort(), expected);
  assert.deepEqual((await query(insightSitemapQuery)).map((p) => p.slug).sort(), expected);
});

test('direct URLs cannot read custom drafts, Sanity drafts, future or undated posts', async () => {
  for (const slug of ['draft', 'drafts.secret', 'versions.release.secret', 'unknown', 'future', 'undated', 'invalid-date', 'missing']) {
    assert.equal(await query(INSIGHT_BY_SLUG_QUERY, { slug }), null, slug);
  }
  assert.equal((await query(INSIGHT_BY_SLUG_QUERY, { slug: 'hidden' })).title, 'hidden');
});

test('related and internal references cannot re-expose unpublished or noindex posts', async () => {
  const result = await query(INSIGHT_BY_SLUG_QUERY, { slug: 'public' });
  assert.deepEqual(result.relatedPosts.map((p) => p.slug), ['other']);
  assert.deepEqual(result.internalLinks.map((p) => p.slug), ['other']);
});

test('author lists and sitemap follow the same publication rules', async () => {
  const author = await query(authorBySlugQuery, { slug: 'writer' });
  assert.deepEqual(author.posts.map((p) => p.slug).sort(), ['other', 'public', 'self']);
  assert.deepEqual((await query(authorSitemapQuery)).map((a) => a.slug), ['writer']);
});

test('unpublishing removes a post from all discovery surfaces', async () => {
  const before = [post('only'), dataset.find((d) => d._id === 'author')];
  const after = [{ ...before[0], status: 'draft' }, before[1]];
  assert.equal((await query(insightSitemapQuery, {}, before)).length, 1);
  for (const source of [INSIGHTS_LIST_QUERY, insightSitemapQuery, authorSitemapQuery]) {
    assert.deepEqual(await query(source, {}, after), []);
  }
  assert.equal(await query(INSIGHT_BY_SLUG_QUERY, { slug: 'only' }, after), null);
});

test('safe save preserves fields the editor does not own and image crop metadata', () => {
  const existing = post('existing', {
    relatedPosts: [{ _ref: 'other' }], primaryCta: { url: '/ContactUs' },
    internalLinks: [{ _ref: 'public' }], theme: 'dark', customField: { intact: true },
    social: { socialTitle: 'Social title' }, readingTime: 8,
    mainImage: { asset: { _ref: 'image-a' }, crop: { top: 0.1 }, alt: 'Old' },
    seo: { customField: true, seoTitle: 'Old title', noIndex: true },
    seoTitle: 'Legacy title', noIndex: true, directAnswer: { answer: 'Old answer' },
  });
  const edited = post('existing', {
    title: 'New title', mainImage: { asset: { _ref: 'image-a' }, alt: 'New' },
    seo: { noIndex: false },
  });
  const patch = buildPostPatch(existing, edited);
  const saved = { ...existing, ...patch.set };
  for (const key of patch.unset) delete saved[key];
  for (const key of ['relatedPosts', 'primaryCta', 'internalLinks', 'theme', 'customField', 'social', 'readingTime']) {
    assert.deepEqual(saved[key], existing[key], key);
  }
  assert.deepEqual(saved.mainImage.crop, { top: 0.1 });
  assert.equal(saved.mainImage.alt, 'New');
  assert.deepEqual(saved.seo, { customField: true, noIndex: false });
  assert.equal(saved.seoTitle, undefined);
  assert.equal(saved.noIndex, undefined);
  assert.equal(saved.directAnswer, undefined);
});

test('published URLs stay locked, including legacy and subsequently unpublished URLs', () => {
  const existing = post('legacy', { slug: { current: '-legacy-long-slug' }, status: 'draft' });
  const input = { id: 'legacy', revision: existing._rev, slug: existing.slug.current, status: 'published' };
  assert.doesNotThrow(() => validatePostEdit(existing, input));
  assert.throws(() => validatePostEdit(existing, { ...input, slug: 'new-slug' }), /locked/);
  assert.throws(() => validatePostEdit(existing, { ...input, revision: 'stale' }), /changed/);
  assert.throws(() => validatePostEdit(null, input), /not found/);
  assert.throws(() => validatePostEdit(existing, { ...input, status: 'anything' }), /status/);
});

test('publication validates body, image alt and date; bad canonicals are rejected', () => {
  assert.doesNotThrow(() => validatePublication(post('valid')));
  assert.throws(() => validatePublication(post('empty', { body: [] })), /empty/);
  assert.throws(() => validatePublication(post('image', { mainImage: {} })), /alt/);
  assert.throws(() => validatePublication(post('date', { publishedAt: 'bad' })), /date/);
  for (const canonicalUrl of ['javascript:alert(1)', '/relative', 'https://example.com/#fragment']) {
    assert.throws(() => validatePostEdit(null, { status: 'draft', seo: { canonicalUrl } }), /Canonical/);
  }
});

test('UK and full website URLs are accepted without a fixed TLD allowlist', () => {
  assert.equal(websiteDomain('example.co.uk'), 'example.co.uk');
  assert.equal(websiteDomain('https://www.example.uk/book?source=test'), 'www.example.uk');
  assert.equal(websiteDomain('example.agency'), 'example.agency');
  for (const input of ['', 'localhost', 'not a domain', 'javascript:alert(1)', 'https://user:pass@example.com', 'http://127.0.0.1', 'https://-bad.com']) {
    assert.equal(websiteDomain(input), null, input);
  }
});

test('lead events use approved fields, queue before GTM and never break submission', () => {
  globalThis.window = {};
  try {
    trackGeneratedLead('contact');
    assert.deepEqual(window.dataLayer, [{ event: 'generate_lead', form_id: 'contact', lead_type: 'contact_enquiry', lead_source: 'contact_form' }]);
    trackGeneratedLead('person@example.com');
    assert.equal(window.dataLayer.length, 1);
    window.dataLayer = { push() { throw new Error('analytics unavailable'); } };
    assert.doesNotThrow(() => trackGeneratedLead('contact'));
  } finally {
    delete globalThis.window;
  }
  assert.doesNotThrow(() => trackGeneratedLead('contact'));
});
