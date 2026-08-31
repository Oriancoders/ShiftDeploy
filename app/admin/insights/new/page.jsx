import { redirect } from 'next/navigation';
import { getCurrentUser, isAdminEmail } from '../../../../src/lib/auth';
import { sanityWriteClient } from '../../../../src/lib/sanity/server';
import { adminAuthorsQuery, adminCategoriesQuery } from '../../../../src/lib/sanity/queries';
import AdminShell from '../../../../src/components/admin/AdminShell';
import PostEditor from '../../../../src/components/admin/PostEditor';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'New post | ShiftDeploy', robots: { index: false } };

export default async function NewPostPage() {
  const user = await getCurrentUser();
  if (!isAdminEmail(user?.email)) redirect('/admin/login');

  const [authors, categories] = sanityWriteClient
    ? await Promise.all([
        sanityWriteClient.fetch(adminAuthorsQuery),
        sanityWriteClient.fetch(adminCategoriesQuery),
      ])
    : [[], []];

  return (
    <AdminShell user={user}>
      <PostEditor post={null} authors={authors} categories={categories} />
    </AdminShell>
  );
}
