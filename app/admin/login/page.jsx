import { redirect } from 'next/navigation';
import { getCurrentUser, isAdminEmail } from '../../../src/lib/auth';
import LoginButton from '../../../src/components/admin/LoginButton';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Sign in | ShiftDeploy Admin', robots: { index: false } };

export default async function AdminLoginPage({ searchParams }) {
  const sp = await searchParams;
  const user = await getCurrentUser();
  if (isAdminEmail(user?.email)) redirect('/admin/insights');

  // NextAuth sends AccessDenied when the signIn callback rejects a
  // non-allow-listed Google account.
  const denied = sp?.error === 'AccessDenied';

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-primaryBlue">ShiftDeploy Insights</h1>
        <p className="mt-1 text-sm text-gray-500">Sign in to manage the blog.</p>

        {denied && (
          <p className="mt-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
            That Google account is not on the admin list.
          </p>
        )}

        <div className="mt-6">
          <LoginButton />
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Two-factor authentication is handled by your Google account.
        </p>
      </div>
    </main>
  );
}
