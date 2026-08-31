import { redirect } from 'next/navigation';
import { getCurrentUser, isAdminEmail } from '../../../../src/lib/auth';
import { sanityWriteClient } from '../../../../src/lib/sanity/server';
import { adminCategoriesQuery } from '../../../../src/lib/sanity/queries';
import AdminShell from '../../../../src/components/admin/AdminShell';
import SimpleManager from '../../../../src/components/admin/SimpleManager';
import { saveCategory, deleteCategory } from '../actions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Categories | ShiftDeploy', robots: { index: false } };

const FIELDS = [
  { name: 'title', label: 'Title' },
  { name: 'description', label: 'Description', type: 'textarea' },
  {
    name: 'topicCluster',
    label: 'Topic cluster',
    hint: 'Grouping posts into clusters is how you build the topical authority both Google and AI engines reward.',
  },
  { name: 'color', label: 'Badge colour', placeholder: '#1D4ED8' },
];

export default async function CategoriesPage() {
  const user = await getCurrentUser();
  if (!isAdminEmail(user?.email)) redirect('/admin/login');

  const categories = sanityWriteClient ? await sanityWriteClient.fetch(adminCategoriesQuery) : [];

  return (
    <AdminShell user={user}>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-primaryBlue">Categories</h1>
        <p className="text-sm text-gray-500">Used for navigation, breadcrumbs and articleSection markup.</p>
      </div>
      <SimpleManager
        items={categories}
        fields={FIELDS}
        labelKey="title"
        emptyText="No categories yet."
        onSave={saveCategory}
        onDelete={deleteCategory}
      />
    </AdminShell>
  );
}
