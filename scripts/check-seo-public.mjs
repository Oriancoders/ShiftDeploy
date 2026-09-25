import nextEnv from '@next/env';
nextEnv.loadEnvConfig(process.cwd());

const { sanityClient } = await import('../src/lib/sanity/client.js');
const { INSIGHTS_LIST_QUERY, INSIGHT_BY_SLUG_QUERY } = await import('../src/lib/insightsData.js');
const { insightSitemapQuery, authorSitemapQuery } = await import('../src/lib/sanity/publicContent.js');

// Read-only: no credentials or article contents are printed and no mutations run.
const [list, posts, authors, statusCounts] = await Promise.all([
  sanityClient.fetch(INSIGHTS_LIST_QUERY),
  sanityClient.fetch(insightSitemapQuery),
  sanityClient.fetch(authorSitemapQuery),
  sanityClient.fetch(`{
    "published": count(*[_type == "post" && status == "published"]),
    "nonPublished": count(*[_type == "post" && status != "published"]),
    "missingStatus": count(*[_type == "post" && !defined(status)])
  }`),
]);
const detail = list[0] ? await sanityClient.fetch(INSIGHT_BY_SLUG_QUERY, { slug: list[0].id }) : null;
console.log(JSON.stringify({
  publicArticles: list.length, sitemapArticles: posts.length, sitemapAuthors: authors.length,
  statusCounts, sampleDetailResolved: Boolean(detail),
  sampleRelatedLinksValid: detail?.relatedPosts?.every((p) => Boolean(p?.slug)),
}, null, 2));

for (const path of ['/robots.txt', '/sitemap.xml']) {
  try {
    const response = await fetch(`https://shiftdeploy.com${path}`, { signal: AbortSignal.timeout(15000) });
    console.log(JSON.stringify({ path, status: response.status, type: response.headers.get('content-type') }));
  } catch {
    console.log(JSON.stringify({ path, status: 'unreachable from audit client' }));
  }
}
