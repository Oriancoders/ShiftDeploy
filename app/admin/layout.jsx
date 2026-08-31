import AdminProviders from '../../src/components/admin/AdminProviders';

/**
 * Admin area. Rendered bare - no marketing nav or footer - and never indexed.
 */
export const metadata = {
  title: 'Admin | ShiftDeploy',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return (
    <AdminProviders>
      <div className="min-h-screen bg-gray-50">{children}</div>
    </AdminProviders>
  );
}
