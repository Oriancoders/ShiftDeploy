import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Plus } from 'lucide-react';
import { getCurrentUser, isAdminEmail } from '../../../src/lib/auth';
import { sanityWriteClient } from '../../../src/lib/sanity/server';
import { adminPostsQuery } from '../../../src/lib/sanity/queries';
import AdminShell from '../../../src/components/admin/AdminShell';
import PostTable from '../../../src/components/admin/PostTable';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Insights manager | ShiftDeploy', robots: { index: false } };

export default async function AdminInsightsPage() {
  const user = await getCurrentUser();
  if (!isAdminEmail(user?.email)) redirect('/admin/login');

  // The whole list is fetched once and filtered in the browser. At this scale
  // that is far cheaper than a server round trip per keystroke, and it makes
  // the search feel instant.
  const posts = sanityWriteClient ? await sanityWriteClient.fetch(adminPostsQuery) : [];
  const published = posts.filter((p) => p.status === 'published').length;

  return (
    <AdminShell user={user}>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex-1">
          <h1 className="text-xl font-bold text-primaryBlue">Posts</h1>
          <p className="text-sm text-gray-500">
            {posts.length} total · {published} published · {posts.length - published} draft
          </p>
        </div>
        <Link
          href="/admin/insights/new"
          className="inline-flex items-center gap-2 rounded-lg bg-primaryBlue px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          <Plus className="size-4" /> New post
        </Link>
      </div>

      <PostTable posts={posts} />
    </AdminShell>
  );
}
