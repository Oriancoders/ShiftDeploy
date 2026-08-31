import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Plus, Search } from 'lucide-react';
import { getCurrentUser, isAdminEmail } from '../../../src/lib/auth';
import { sanityWriteClient } from '../../../src/lib/sanity/server';
import { adminPostsQuery } from '../../../src/lib/sanity/queries';
import AdminShell from '../../../src/components/admin/AdminShell';
import PostRowActions from '../../../src/components/admin/PostRowActions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Insights manager | ShiftDeploy', robots: { index: false } };

const PAGE_SIZE = 10;

function formatDate(value) {
  if (!value) return '-';
  return new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export default async function AdminInsightsPage({ searchParams }) {
  const user = await getCurrentUser();
  if (!isAdminEmail(user?.email)) redirect('/admin/login');

  const sp = await searchParams;
  const q = (sp?.q ?? '').trim();
  const status = sp?.status === 'published' || sp?.status === 'draft' ? sp.status : 'all';

  const all = sanityWriteClient ? await sanityWriteClient.fetch(adminPostsQuery) : [];
  const published = all.filter((p) => p.status === 'published').length;

  const needle = q.toLowerCase();
  const filtered = all.filter((post) => {
    const postStatus = post.status || 'draft';
    if (status !== 'all' && postStatus !== status) return false;
    if (!needle) return true;
    return (
      (post.title || '').toLowerCase().includes(needle) ||
      (post.slug || '').toLowerCase().includes(needle) ||
      (post.authorName ?? '').toLowerCase().includes(needle) ||
      (post.categories ?? []).some((c) => (c.title || '').toLowerCase().includes(needle))
    );
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(totalPages, Math.max(1, Number(sp?.page) || 1));
  const posts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const hrefFor = (p, s = status, query = q) => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (s !== 'all') params.set('status', s);
    if (p > 1) params.set('page', String(p));
    const qs = params.toString();
    return `/admin/insights${qs ? `?${qs}` : ''}`;
  };

  return (
    <AdminShell user={user}>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-primaryBlue">Posts</h1>
          <p className="text-sm text-gray-500">
            {all.length} total · {published} published · {all.length - published} draft
          </p>
        </div>
        <Link
          href="/admin/insights/new"
          className="inline-flex items-center gap-2 rounded-lg bg-primaryBlue px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          <Plus className="size-4" /> New post
        </Link>
      </div>

      <form method="get" className="mb-4 flex flex-wrap gap-2">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search title, slug, author, category"
            className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-3 text-sm"
          />
        </div>
        <select
          name="status"
          defaultValue={status}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="all">All statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <button type="submit" className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Filter
        </button>
      </form>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {posts.length === 0 ? (
          <p className="px-4 py-12 text-center text-sm text-gray-500">
            {all.length === 0 ? 'No posts yet. Create your first one.' : 'Nothing matches that filter.'}
          </p>
        ) : (
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Title</th>
                <th className="px-4 py-2.5 font-semibold hidden md:table-cell">AI SEO</th>
                <th className="px-4 py-2.5 font-semibold hidden sm:table-cell">Date</th>
                <th className="px-4 py-2.5 font-semibold">Status</th>
                <th className="px-4 py-2.5" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post) => {
                const aiReady = post.hasDirectAnswer && (post.faqCount ?? 0) >= 3;
                return (
                  <tr key={post._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link href={`/admin/insights/${post._id}`} className="font-medium text-primaryBlue hover:underline">
                        {post.title || 'Untitled'}
                      </Link>
                      <p className="text-xs text-gray-400 truncate max-w-md">/{post.slug}</p>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          aiReady ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}
                        title={
                          aiReady
                            ? 'Direct answer and 3+ FAQs present'
                            : `Missing: ${[
                                !post.hasDirectAnswer && 'direct answer',
                                (post.faqCount ?? 0) < 3 && '3+ FAQs',
                              ].filter(Boolean).join(', ')}`
                        }
                      >
                        {aiReady ? 'Ready' : 'Needs work'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                      {formatDate(post.publishedAt || post.updatedAt)}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          post.status === 'published'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {post.status || 'draft'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <PostRowActions id={post._id} slug={post.slug} status={post.status || 'draft'} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={hrefFor(p)}
              className={`rounded-md px-3 py-1.5 ${
                p === page ? 'bg-primaryBlue text-white' : 'border border-gray-300 bg-white hover:bg-gray-50'
              }`}
            >
              {p}
            </Link>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
