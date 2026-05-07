import './globals.css';
import { Inter } from 'next/font/google';
import GlobalProvider from '../src/GlobalProvider/GlobalProvider';
import LazyGTM from '../src/utils/LazyGTM';
import ScrollToTop from '../src/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://shiftdeploy.com'),
  title: {
    default: 'ShiftDeploy | Performance-First Web Agency',
    template: '%s | ShiftDeploy',
  },
  description:
    'Helping businesses build faster websites, improve conversions, and grow with a performance-first approach. Expert web development, CRO, and automation.',
  keywords: [
    'web agency',
    'performance web development',
    'conversion rate optimisation',
    'website speed optimisation',
    'Core Web Vitals',
    'CRO agency',
    'business automation',
    'AI chatbot',
    'ShiftDeploy',
    'web development UK',
  ],
  authors: [{ name: 'ShiftDeploy', url: 'https://shiftdeploy.com' }],
  creator: 'ShiftDeploy',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://shiftdeploy.com',
    siteName: 'ShiftDeploy',
    title: 'ShiftDeploy | Performance-First Web Agency',
    description:
      'Helping businesses build faster websites, improve conversions, and grow with a performance-first approach.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ShiftDeploy – Performance-First Web Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shiftdeploy',
    creator: '@shiftdeploy',
    title: 'ShiftDeploy | Performance-First Web Agency',
    description:
      'Helping businesses build faster websites, improve conversions, and grow with a performance-first approach.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  alternates: {
    canonical: 'https://shiftdeploy.com',
  },
  // Add your Google Search Console verification code below when you have it
  // verification: { google: 'YOUR_GSC_CODE_HERE' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ShiftDeploy',
  url: 'https://shiftdeploy.com',
  logo: 'https://shiftdeploy.com/og-image.png',
  description: 'Performance-first web agency specialising in website speed optimisation, conversion rate optimisation, custom web development, and business automation.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@shiftdeploy.com',
    telephone: '+447311126710',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://x.com/shiftdeploy',
    'https://join.slack.com/t/shiftdeployworkspace/shared_invite/zt-3gan3ow0g-OW0s3OJIJKIzQwQ0tB1V6A1',
  ],
  serviceArea: { '@type': 'Place', name: 'United Kingdom' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={inter.className}>
      <head>
        {/* Preconnect to Cloudinary CDN — saves ~150ms on image loads */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {/* Preconnect to Sanity CDN for blog images */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQPM36RX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <GlobalProvider>
          <LazyGTM />
          <ScrollToTop />
          <div className="bg-white min-h-screen">{children}</div>
        </GlobalProvider>
      </body>
    </html>
  );
}
