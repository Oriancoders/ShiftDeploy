import Link from 'next/link';

export const metadata = {
  title: '404 – Page Not Found | ShiftDeploy',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primaryBlue flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-8xl font-bold text-primaryOrange mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Looks like this page went off-mission. Let's get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-primaryOrange hover:bg-toOrange text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
