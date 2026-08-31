'use client';

import { SessionProvider } from 'next-auth/react';

/** next-auth's client hooks (signIn/signOut) need this context. */
export default function AdminProviders({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
