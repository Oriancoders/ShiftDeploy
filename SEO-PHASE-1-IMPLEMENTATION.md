# Phase 1 implementation

Date: 2026-09-25. Scope: the audit's initial technical publishing, discovery and measurement foundation. Changes are local, not deployed. No live Sanity documents were mutated and no real test emails were delivered.

## Research applied

- [Sanity perspectives](https://www.sanity.io/docs/content-lake/perspectives): the project's custom `status` field needs explicit publication filtering; a published perspective alone does not enforce it.
- [Sanity JavaScript client](https://github.com/sanity-io/client): field patches and revision preconditions preserve unowned content and protect against stale editor saves.
- [Next.js 15 notFound](https://nextjs.org/docs/15/app/api-reference/functions/not-found): missing articles should terminate server rendering with not-found handling.
- [Next.js 15 revalidateTag](https://nextjs.org/docs/15/app/api-reference/functions/revalidateTag): shared content tags invalidate dependent public queries after editor changes.
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): list preferred indexable URLs; do not manufacture modification dates on every request.
- [GA4 generate_lead](https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead) and [GTM dataLayer](https://developers.google.com/tag-platform/tag-manager/datalayer): use an explicit success event through the existing container, without contact details in the event payload.

These changes improve publishing correctness and measurement. They do not guarantee first-page rankings or AI recommendations; llms.txt is not a substitute for crawlability, useful content and evidence.

## Implemented

- Shared publication rules across article lists, details, related/internal references, author pages, sitemap and article social images. Drafts, future posts, missing publication dates and Sanity draft/version documents are excluded from public article retrieval. Noindex and alternate-canonical articles are excluded from discovery lists and sitemap, but published direct URLs remain accessible.
- Real missing-article 404/noindex handling. Content service errors are not silently converted into empty successful listings.
- Safer Sanity saves: preserve CTA, links, social fields and image crop metadata outside editor ownership; protect against stale revisions; validate publication fields; prevent published slug changes. Author/category edits preserve existing slugs and unowned fields too.
- Tagged cache invalidation plus a 60-second revalidation interval; removed the conflicting 24-hour sitemap cache override. Static sitemap entries no longer claim a new modification timestamp on each request.
- Success-only `generate_lead` events for contact, homepage audit, service growth audit and plumber booking forms, using existing GTM. Failed delivery is not counted. Removed contact details from affected form console logging.
- Homepage website validation now accepts UK domains and full HTTP(S) website URLs without a fixed TLD allowlist.

## Verification

- `npm.cmd run test:seo`: 10 passing tests, including real GROQ query evaluation against publication fixtures, safe field preservation, revision/slug rules, UK domains and tracking payloads.
- Production `npm.cmd run build`: passed. Targeted lint: zero errors, seven existing image-element warnings. `git diff --check`: passed, with Windows line-ending notices only.
- Read-only live Sanity check: eight public articles and one sitemap author retained; detail and related references resolved correctly.
- Node HTTP checks of live robots.txt and sitemap.xml returned 200. This supersedes the earlier client-specific 403 observation, but does not prove verified Googlebot/Bingbot access.
- Local Playwright: homepage mocked delivery emits exactly one lead event; mocked failure emits none; article returns 200 with one H1; missing article returns 404 with noindex; sitemap, robots and llms routes return 200; static homepage sitemap entry has no fabricated lastmod; no browser page errors.
- Desktop/mobile screenshots captured under ignored `test-results/`. The in-app browser tool could not initialise, so local Playwright was used.
- Admin mutations were tested through helper/query fixtures, not against live CMS documents. Other three forms share the tested tracking helper but have not received separate end-to-end delivery tests.

## Existing accounts: deployment checklist

The owner confirmed GSC, GA4/GTM and Bing Webmaster Tools are already configured. No duplicate accounts, analytics scripts or containers were added.

1. Deploy and rerun public route checks on production, including a nonexistent article and one known published article.
2. In existing GTM, inspect current lead triggers first. Configure or adapt a Custom Event trigger named `generate_lead` and its GA4 event tag. Map `form_id`, `lead_type` and `lead_source` from dataLayer. Respect the existing consent setup and avoid double counting with existing form-submit or thank-you conversions.
3. Use GTM Preview and GA4 DebugView to verify one event after successful delivery, none on validation/delivery failure, and no email/name/message in event parameters. Review GA4 key-event configuration. The code queues dataLayer events; it does not itself configure a GA4 tag.
4. In GSC and Bing, check the submitted sitemap and inspect representative URLs after deployment. Use actual crawler logs or verified tool crawl tests to investigate bot access; spoofed user-agent requests alone are insufficient.
5. Record the last 3-6 months of UK queries/pages, indexation and selected canonicals, plus organic enquiries and qualified leads by source. Private dashboards and this baseline remain unverified here.

## Boundaries

- Custom drafts in normal Sanity IDs are filtered from the website, not made private at the dataset API level. Confidential drafts need a separate dataset/access design or native draft workflow.
- External CMS changes and scheduled publication rely on cache revalidation, not an exact-time publishing scheduler. Admin changes invalidate the shared tag.
- Published URL changes are blocked rather than automatically redirected. A future intentional migration needs an explicit redirect map.
- Homepage positioning, ShiftFlow consistency, service consolidation, author/schema truthfulness, article CTA/content repair and case-study evidence remain subsequent audit work. No unverified client outcomes or SEO promises were added.
- Local preview: http://localhost:3101.
