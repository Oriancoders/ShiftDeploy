import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '../../../../src/components/Navigation';
import Footer from '../../../../src/components/Footer';
import JsonLd from '../../../../src/components/JsonLd';
import SanityImage from '../../../../src/components/SanityImage';
import { sanityClient } from '../../../../src/lib/sanity/client';
import { isSanityConfigured } from '../../../../src/lib/sanity/config';
import { authorBySlugQuery, authorSlugsQuery } from '../../../../src/lib/sanity/queries';

export const revalidate = 3600;

const SITE = 'https://shiftdeploy.com';

/**
 * Author profile page.
 *
 * This exists for two reasons that are really one reason. Google asks that
 * author.url in Article markup resolve to "a web page that uniquely identifies
 * the author" - ours previously pointed at the homepage because no such page
 * existed. And a named author with visible, checkable credentials is the
 * E-E-A-T signal that separates a page from an anonymous one.
 *
 * The Person schema here and the Person node on each article share the same
 * @id, so a parser resolves them to one entity rather than two people who
 * happen to share a name.
 */

export async function generateStaticParams() {
  if (!isSanityConfigured || !sanityClient) return [];
  try {
    const slugs = await sanityClient.fetch(authorSlugsQuery);
    return (slugs || []).filter(Boolean).map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

async function getAuthor(slug) {
  if (!isSanityConfigured || !sanityClient) return null;
  try {
    return await sanityClient.fetch(authorBySlugQuery, { slug });
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const author = await getAuthor(slug);
  if (!author) return { title: 'Author not found | ShiftDeploy', robots: { index: false } };

  const description =
    author.bio ||
    `${author.name}${author.jobTitle ? `, ${author.jobTitle}` : ''} at ShiftDeploy.`;

  return {
    title: `${author.name} | ShiftDeploy Insights`,
    description: description.slice(0, 160),
    alternates: { canonical: `${SITE}/insights/author/${slug}` },
    openGraph: {
      type: 'profile',
      title: author.name,
      description: description.slice(0, 200),
      url: `${SITE}/insights/author/${slug}`,
    },
  };
}

const formatDate = (v) =>
  v ? new Date(v).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';

export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const author = await getAuthor(slug);
  if (!author) notFound();

  const url = `${SITE}/insights/author/${slug}`;
  const posts = author.posts || [];

  // Same @id as the Person node on each article, so the two resolve to one
  // entity in the graph rather than a duplicate.
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profilepage`,
        url,
        name: `${author.name} | ShiftDeploy Insights`,
        mainEntity: { '@id': `${SITE}/#person-${slug}` },
      },
      {
        '@type': 'Person',
        '@id': `${SITE}/#person-${slug}`,
        name: author.name,
        url,
        ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
        ...(author.bio ? { description: author.bio } : {}),
        ...(author.imageUrl ? { image: author.imageUrl } : {}),
        ...(author.expertise?.length ? { knowsAbout: author.expertise } : {}),
        ...(author.credentials?.length ? { hasCredential: author.credentials } : {}),
        ...(author.sameAs?.length ? { sameAs: author.sameAs } : {}),
        worksFor: { '@type': 'Organization', name: 'ShiftDeploy', url: SITE },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE}/insights` },
          { '@type': 'ListItem', position: 3, name: author.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={graph} />
      <Navigation isDarkBg />

      <div className="bg-primaryBlue">
        <div className="mx-auto max-w-4xl px-4 pb-14 pt-28 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
            <Link href="/insights" className="hover:text-white">Insights</Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{author.name}</span>
          </nav>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {author.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${author.imageUrl}?w=224&h=224&fit=crop&auto=format`}
                alt=""
                width={112}
                height={112}
                className="size-28 shrink-0 rounded-full object-cover ring-4 ring-white/15"
              />
            )}

            <div className="min-w-0">
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">{author.name}</h1>
              {author.jobTitle && (
                <p className="mt-1 text-lg text-primaryOrange">{author.jobTitle}</p>
              )}
              {author.bio && (
                <p className="mt-4 max-w-2xl leading-relaxed text-white/70">{author.bio}</p>
              )}

              {author.sameAs?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {author.sameAs.map((href) => {
                    let label = href;
                    try { label = new URL(href).hostname.replace(/^www\./, ''); } catch {}
                    return (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer me"
                        className="text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white"
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {(author.expertise?.length > 0 || author.credentials?.length > 0) && (
          <div className="mb-12 grid gap-6 sm:grid-cols-2">
            {author.expertise?.length > 0 && (
              <section className="rounded-xl border border-gray-200 bg-white p-5">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
                  Areas of expertise
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {author.expertise.map((e) => (
                    <li key={e} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primaryBlue">
                      {e}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {author.credentials?.length > 0 && (
              <section className="rounded-xl border border-gray-200 bg-white p-5">
                <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
                  Credentials
                </h2>
                <ul className="space-y-2">
                  {author.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 text-primaryOrange">&#10003;</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}

        <h2 className="mb-6 text-2xl font-bold text-primaryBlue">
          {posts.length} article{posts.length === 1 ? '' : 's'} by {author.name}
        </h2>

        {posts.length === 0 ? (
          <p className="text-gray-500">No published articles yet.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
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
                      sizes="(max-width: 640px) 100vw, 320px"
                      maxWidth={640}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  )}
                  <div className="p-5">
                    <p className="mb-1 text-xs text-gray-400">{formatDate(post.date)}</p>
                    <h3 className="font-semibold leading-snug text-primaryBlue transition group-hover:text-primaryOrange">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 line-clamp-2 text-sm text-gray-600">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
