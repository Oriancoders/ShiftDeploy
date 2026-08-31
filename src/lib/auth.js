import GoogleProvider from 'next-auth/providers/google';
import { getServerSession } from 'next-auth/next';

/** Returns the list of admin emails from env, lowercased. */
export function adminEmails() {
  return (process.env.ADMIN_EMAILS ?? '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

/** True if the given email belongs to an admin. */
export function isAdminEmail(email) {
  if (!email) return false;
  return adminEmails().includes(String(email).toLowerCase());
}

/**
 * NextAuth options. Google is the only provider and the allow-list is enforced
 * in signIn, so a Google account that is not in ADMIN_EMAILS cannot obtain a
 * session at all - the check does not rely on any later page-level guard.
 *
 * Two-factor auth is whatever the Google account itself enforces; there is no
 * separate password for /admin.
 */
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  session: { strategy: 'jwt', maxAge: 60 * 60 * 8 },
  pages: { signIn: '/admin/login', error: '/admin/login' },
  callbacks: {
    async signIn({ user }) {
      return isAdminEmail(user?.email);
    },
    async jwt({ token }) {
      token.isAdmin = isAdminEmail(token?.email);
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.isAdmin = Boolean(token?.isAdmin);
      return session;
    },
  },
};

/** Current authenticated user ({ email, name, image }), or null. Server-side only. */
export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;
  return session.user;
}

/** Throws unless the caller is a signed-in admin. Used by every server action. */
export async function assertAdmin() {
  const user = await getCurrentUser();
  if (!isAdminEmail(user?.email)) {
    throw new Error('Not authorised');
  }
  return user;
}
