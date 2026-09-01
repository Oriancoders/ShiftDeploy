import './globals.css';
import 'highlight.js/styles/atom-one-dark.css';
import { Inter } from 'next/font/google';
import GlobalProvider from '../src/GlobalProvider/GlobalProvider';
import LazyGTM from '../src/utils/LazyGTM';
import ScrollToTop from '../src/components/ScrollToTop';
import JsonLd from '../src/components/JsonLd';
import { FOUNDERS, COMPANY_LINKEDIN } from '../src/data/founders';

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

/**
 * Organization entity.
 *
 * This is what an AI assistant reads when someone asks "who is ShiftDeploy,
 * where are they, how do I contact them". When it is thin, the model falls
 * back to third-party scrapers - we have seen it cite RocketReach for a phone
 * number that is published in our own footer. Everything verifiable goes here.
 *
 * @id is stable so other schema on the site can reference this one node rather
 * than redeclaring the organisation.
 */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': 'https://shiftdeploy.com/#organization',
  name: 'ShiftDeploy',
  legalName: 'ShiftDeploy',
  url: 'https://shiftdeploy.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://shiftdeploy.com/og-image.png',
    width: 1200,
    height: 630,
  },
  image: 'https://shiftdeploy.com/og-image.png',
  description:
    'Performance-first web agency specialising in website speed optimisation, conversion rate optimisation, custom web development, and business automation. We work mostly with dental practices, clinics and service businesses in the UK.',
  slogan: 'We fix what is blocking your growth.',
  email: 'contact@shiftdeploy.com',
  telephone: '+447311126710',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'contact@shiftdeploy.com',
      telephone: '+447311126710',
      contactType: 'customer service',
      availableLanguage: 'English',
      areaServed: 'GB',
    },
    {
      '@type': 'ContactPoint',
      email: 'contact@shiftdeploy.com',
      contactType: 'sales',
      availableLanguage: 'English',
      areaServed: 'GB',
    },
  ],
  sameAs: [
    COMPANY_LINKEDIN,
    'https://x.com/shiftdeploy',
    'https://join.slack.com/t/shiftdeployworkspace/shared_invite/zt-3gan3ow0g-OW0s3OJIJKIzQwQ0tB1V6A1',
  ],
  // Named founders. An organisation with no people attached is exactly the gap
  // that sends an assistant to a scraper for "who runs this company".
  founder: FOUNDERS.map((f) => ({
    '@type': 'Person',
    '@id': `https://shiftdeploy.com/insideShiftDeploy#${f.slug}`,
    name: f.name,
    jobTitle: f.role,
    // belief + story, flattened. `bio` was renamed when the section was
    // rewritten; reading it here would have silently emitted undefined.
    description: [f.belief, f.story].filter(Boolean).join(' ').split('\n\n').join(' '),
    ...(f.image ? { image: `https://shiftdeploy.com${f.image}` } : {}),
    ...(f.focus?.length ? { knowsAbout: f.focus } : {}),
    // Only emit sameAs when the URL actually resolves to this person.
    ...(f.linkedin ? { sameAs: [f.linkedin] } : {}),
    worksFor: { '@id': 'https://shiftdeploy.com/#organization' },
  })),
  // Honest geography. We operate from Karachi and serve the UK remotely, and
  // saying so is the safer position: a claimed UK address we do not have is
  // both a Google Business Profile violation and the exact thing that makes a
  // remote agency look like a front. addressCountry alone (no street) states
  // where we are without pretending to a presence we lack.
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Karachi',
    addressCountry: 'PK',
  },
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Pakistan' },
  ],
  serviceArea: { '@type': 'Country', name: 'United Kingdom' },
  // A remote business is a service-area business in Google's terms: no
  // storefront, work delivered to the client wherever they are.
  availableLanguage: ['en-GB', 'en', 'ur'],
  knowsLanguage: ['English', 'Urdu'],
  knowsAbout: [
    'Core Web Vitals',
    'Largest Contentful Paint',
    'Interaction to Next Paint',
    'Website speed optimisation',
    'Conversion rate optimisation',
    'Web development',
    'Business process automation',
  ],
  // Named services, so an assistant asked "what do they do" has a list rather
  // than a paragraph it has to parse.
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ShiftDeploy services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ShiftSpeed',
          description: 'Core Web Vitals and page speed optimisation.',
          url: 'https://shiftdeploy.com/services/shiftspeed',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ShiftConvert',
          description: 'Conversion rate optimisation for booking and enquiry flows.',
          url: 'https://shiftdeploy.com/services/shiftconvert',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ShiftBuild',
          description: 'Custom web development.',
          url: 'https://shiftdeploy.com/services/shiftbuild',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ShiftFlow',
          description: 'Business process and workflow automation.',
          url: 'https://shiftdeploy.com/services/shiftflow',
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={inter.className}>
      <head>
        {/* Preconnect to Cloudinary CDN - saves ~150ms on image loads */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {/* Preconnect to Sanity CDN for blog images */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body className="overflow-x-hidden">
        <JsonLd data={organizationSchema} />
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
