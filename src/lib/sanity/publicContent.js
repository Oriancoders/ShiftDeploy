export const SITE_URL = 'https://shiftdeploy.com';

// The custom editor stores status on normal documents, independently of Sanity drafts.
export const PUBLIC_POST_FILTER = `
  _type in ["insight", "insights", "post", "blogPost"]
  && !(_id in path("drafts.**")) && !(_id in path("versions.**"))
  && status == "published"
  && defined(slug.current) && slug.current != ""
  && defined(title) && title != ""
  && dateTime(publishedAt) <= dateTime(now())
`;

export const INDEXABLE_POST_FILTER = `(${PUBLIC_POST_FILTER})
  && coalesce(seo.noIndex, noIndex, false) == false
  && coalesce(seo.canonicalUrl, canonicalUrl, "") in [
    "", "${SITE_URL}/insights/" + slug.current
  ]`;

export const INSIGHTS_FETCH_OPTIONS = {
  cache: 'force-cache',
  next: { tags: ['insights'], revalidate: 60 },
};

export const insightSitemapQuery = `*[${INDEXABLE_POST_FILTER}]{
  "slug": slug.current, "modified": coalesce(updatedAt, _updatedAt, publishedAt)
}`;

export const authorSitemapQuery = `*[_type == "author" && defined(slug.current)
  && !(_id in path("drafts.**")) && !(_id in path("versions.**"))
  && count(*[${INDEXABLE_POST_FILTER} && author._ref == ^._id]) > 0
]{ "slug": slug.current, "modified": _updatedAt }`;
