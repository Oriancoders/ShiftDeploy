'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import PostRowActions from './PostRowActions';

/**
 * The admin post list.
 *
 * Filtering is client-side and instant. The previous version was a GET form
 * that round-tripped to the server on every search, which for a list of this
 * size is a page reload to do work the browser can do on a keystroke.
 */

const PAGE_SIZE = 10;

function formatDate(value) {
  if (!value) return '-';
  return new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

const STATUSES = [
  { id: 'all', label: 'All' },
  { id: 'published', label: 'Published' },
  { id: 'draft', label: 'Draft' },
];

export default function PostTable({ posts }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [aiFilter, setAiFilter] = useState('all');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const terms = q ? q.split(/\s+/) : [];

    return posts.filter((post) => {
      const postStatus = post.status || 'draft';
      if (status !== 'all' && postStatus !== status) return false;

      if (aiFilter !== 'all') {
        const ready = post.hasDirectAnswer && (post.faqCount ?? 0) >= 3;
        if (aiFilter === 'ready' && !ready) return false;
        if (aiFilter === 'needs' && ready) return false;
      }

      if (!terms.length) return true;
      const haystack = [
        post.title,
        post.slug,
        post.authorName,
        post.excerpt,
        ...(post.categories || []).map((c) => c.title),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return terms.every((t) => haystack.includes(t));
    });
  }, [posts, query, status, aiFilter]);

  // Keep the page in range as the result set shrinks under the cursor.
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const reset = () => { setQuery(''); setStatus('all'); setAiFilter('all'); setPage(1); };
  const isFiltered = query || status !== 'all' || aiFilter !== 'all';

  const pill = (active) =>
    `rounded-full px-3 py-1 text-xs font-semibold transition ${
      active
        ? 'bg-primaryBlue text-white'
        : 'bg-white text-gray-600 border border-gray-200 hover:border-primaryBlue hover:text-primaryBlue'
    }`;

  return (
    <>
      <div className="mb-4 space-y-3">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            placeholder="Search title, slug, author or category"
            aria-label="Search posts"
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-9 text-sm focus:border-primaryBlue focus:outline-none focus:ring-1 focus:ring-primaryBlue"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {STATUSES.map((s) => (
            <button key={s.id} type="button"
              onClick={() => { setStatus(s.id); setPage(1); }}
              className={pill(status === s.id)}>
              {s.label}
            </button>
          ))}

          <span className="mx-1 h-4 w-px bg-gray-200" />

          <button type="button"
            onClick={() => { setAiFilter(aiFilter === 'ready' ? 'all' : 'ready'); setPage(1); }}
            className={pill(aiFilter === 'ready')}>
            AI SEO ready
          </button>
          <button type="button"
            onClick={() => { setAiFilter(aiFilter === 'needs' ? 'all' : 'needs'); setPage(1); }}
            className={pill(aiFilter === 'needs')}>
            Needs work
          </button>

          {isFiltered && (
            <button type="button" onClick={reset}
              className="ml-auto text-xs font-semibold text-primaryBlue hover:underline">
              Clear filters
            </button>
          )}
        </div>

        {isFiltered && (
          <p className="text-xs text-gray-500" role="status" aria-live="polite">
            {filtered.length} of {posts.length} post{posts.length === 1 ? '' : 's'}
          </p>
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {visible.length === 0 ? (
          <p className="px-4 py-12 text-center text-sm text-gray-500">
            {posts.length === 0 ? 'No posts yet. Create your first one.' : 'Nothing matches those filters.'}
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
              {visible.map((post) => {
                const aiReady = post.hasDirectAnswer && (post.faqCount ?? 0) >= 3;
                return (
                  <tr key={post._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link href={`/admin/insights/${post._id}`}
                        className="font-medium text-primaryBlue hover:underline">
                        {post.title || 'Untitled'}
                      </Link>
                      <p className="max-w-md truncate text-xs text-gray-400">/{post.slug}</p>
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
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`rounded-md px-3 py-1.5 ${
                p === safePage
                  ? 'bg-primaryBlue text-white'
                  : 'border border-gray-300 bg-white hover:bg-gray-50'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
