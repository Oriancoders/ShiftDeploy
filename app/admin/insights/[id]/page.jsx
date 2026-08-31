import { notFound, redirect } from 'next/navigation';
import { getCurrentUser, isAdminEmail } from '../../../../src/lib/auth';
import { sanityWriteClient } from '../../../../src/lib/sanity/server';
import {
  adminPostByIdQuery,
  adminAuthorsQuery,
  adminCategoriesQuery,
} from '../../../../src/lib/sanity/queries';
import AdminShell from '../../../../src/components/admin/AdminShell';
import PostEditor from '../../../../src/components/admin/PostEditor';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Edit post | ShiftDeploy', robots: { index: false } };

export default async function EditPostPage({ params }) {
  const user = await getCurrentUser();
  if (!isAdminEmail(user?.email)) redirect('/admin/login');

  const { id } = await params;
  if (!sanityWriteClient) notFound();

  const [post, authors, categories] = await Promise.all([
    sanityWriteClient.fetch(adminPostByIdQuery, { id }),
    sanityWriteClient.fetch(adminAuthorsQuery),
    sanityWriteClient.fetch(adminCategoriesQuery),
  ]);

  if (!post) notFound();

  return (
    <AdminShell user={user}>
      <PostEditor post={post} authors={authors} categories={categories} />
    </AdminShell>
  );
}
