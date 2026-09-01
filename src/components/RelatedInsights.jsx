import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SanityImage from './SanityImage';
import { sanityClient } from '../lib/sanity/client';
import { isSanityConfigured } from '../lib/sanity/config';

/**
 * Shows the most relevant blog posts on a service page.
 *
 * The blog and the service pages were two disconnected islands: no service
 * page linked to any post, and only one post linked back to a service. That
 * costs twice - crawlers had no path between the two, and a visitor reading
 * about ShiftSpeed had nothing proving we understand the problem.
 *
 * Matching is by tag or category rather than a hand-maintained list, so new
 * posts appear here automatically once they carry the right taxonomy.
 */
async function getRelated({ tags = [], categories = [], limit = 3 }) {
  if (!isSanityConfigured || !sanityClient) return [];
  try {
    return await sanityClient.fetch(
      `*[_type == "post"
         && status == "published"
         && (count((tags[])[@ in $tags]) > 0 || count((categories[]->title)[@ in $cats]) > 0)
        ] | order(coalesce(publishedAt, _createdAt) desc)[0...$limit]{
          title,
          "slug": slug.current,
          excerpt,
          mainImage,
          "date": coalesce(publishedAt, _createdAt),
          "readMinutes": readingTime
        }`,
      { tags, cats: categories, limit }
    );
  } catch {
    return [];
  }
}

const formatDate = (v) =>
  v ? new Date(v).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

export default async function RelatedInsights({
  tags = [],
  categories = [],
  limit = 3,
  heading = 'Related reading',
  subheading,
}) {
  const posts = await getRelated({ tags, categories, limit });
  // Render nothing rather than an empty shell if the taxonomy matches nothing.
  if (!posts.length) return null;

  return (
    <section className="bg-gray-50 py-16" aria-labelledby="related-insights-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="related-insights-heading" className="text-2xl font-bold text-primaryBlue sm:text-3xl">
              {heading}
            </h2>
            {subheading && <p className="mt-2 max-w-2xl text-gray-600">{subheading}</p>}
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primaryBlue hover:text-primaryOrange"
          >
            All insights <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
            >
              <Link href={`/insights/${post.slug}`} className="block">
                {post.mainImage && (
                  <SanityImage
                    image={post.mainImage}
                    alt=""
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    maxWidth={760}
                    className="aspect-[16/9] w-full object-cover"
                  />
                )}
                <div className="p-5">
                  <p className="mb-1.5 text-xs text-gray-400">{formatDate(post.date)}</p>
                  <h3 className="font-semibold leading-snug text-primaryBlue transition group-hover:text-primaryOrange">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primaryBlue">
                    Read <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
