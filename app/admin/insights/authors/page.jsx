import { redirect } from 'next/navigation';
import { getCurrentUser, isAdminEmail } from '../../../../src/lib/auth';
import { sanityWriteClient } from '../../../../src/lib/sanity/server';
import { adminAuthorsQuery } from '../../../../src/lib/sanity/queries';
import AdminShell from '../../../../src/components/admin/AdminShell';
import SimpleManager from '../../../../src/components/admin/SimpleManager';
import { saveAuthor, deleteAuthor } from '../actions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Authors | ShiftDeploy', robots: { index: false } };

const FIELDS = [
  { name: 'name', label: 'Name' },
  { name: 'jobTitle', label: 'Job title', hint: 'Specific titles carry more authority than "Writer".' },
  { name: 'bio', label: 'Bio', type: 'textarea', hint: 'Third person. What makes them qualified on this subject.' },
  { name: 'expertise', label: 'Areas of expertise', list: true, placeholder: 'One per line' },
  { name: 'credentials', label: 'Credentials', list: true, placeholder: 'One per line' },
  {
    name: 'sameAs',
    label: 'Profile URLs',
    list: true,
    placeholder: 'One per line',
    hint: 'LinkedIn, X, personal site. These verify the author is a real, known person.',
  },
];

export default async function AuthorsPage() {
  const user = await getCurrentUser();
  if (!isAdminEmail(user?.email)) redirect('/admin/login');

  const authors = sanityWriteClient ? await sanityWriteClient.fetch(adminAuthorsQuery) : [];

  return (
    <AdminShell user={user}>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-primaryBlue">Authors</h1>
        <p className="text-sm text-gray-500">
          A named author with real credentials is a direct E-E-A-T signal.
        </p>
      </div>
      <SimpleManager
        items={authors}
        fields={FIELDS}
        labelKey="name"
        emptyText="No authors yet."
        onSave={saveAuthor}
        onDelete={deleteAuthor}
      />
    </AdminShell>
  );
}
