'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const NAV = [
  { href: '/admin/insights', label: 'Posts' },
  { href: '/admin/insights/authors', label: 'Authors' },
  { href: '/admin/insights/categories', label: 'Categories' },
];

export default function AdminShell({ user, children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-6">
          <Link href="/admin/insights" className="font-bold text-primaryBlue">
            Insights
          </Link>

          <nav className="flex items-center gap-1 text-sm">
            {NAV.map((item) => {
              const active =
                item.href === '/admin/insights'
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-1.5 font-medium transition ${
                    active
                      ? 'bg-primaryBlue/10 text-primaryBlue'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 text-sm">
            <Link href="/insights" target="_blank" className="text-gray-500 hover:text-gray-900">
              View blog
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-gray-500 hidden sm:inline">{user?.email}</span>
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="rounded-md px-2 py-1 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
