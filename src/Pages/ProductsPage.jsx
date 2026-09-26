import Link from 'next/link';
import { ArrowRight, Check, Phone, PhoneCall, Star, Package, Wrench } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import JsonLd from '../components/JsonLd';

const container = 'max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8';

const products = [
  {
    icon: PhoneCall,
    problem: '“I miss calls when I’m busy.”',
    name: 'Digital Receptionist',
    label: 'AI receptionist',
    body: 'A virtual receptionist that answers your business phone day or night, answers common questions, takes details and books appointments into your diary.',
    outcomes: ['Every call answered, even after hours', 'Bookings straight into your diary', 'A text with every new enquiry'],
    who: 'For any business that takes bookings by phone.',
    price: 'Free demo, then a clear monthly price.',
    href: '/digital-receptionist',
    cta: 'See the AI receptionist',
  },
  {
    icon: Star,
    problem: '“Happy patients never leave reviews.”',
    name: 'Review Your Doctor',
    label: 'Google review software for clinics',
    body: 'Patients scan a code at reception and rate their visit. Every patient can leave a Google review in two taps, and any problem comes to you privately first.',
    outcomes: ['More 5-star Google reviews', 'Unhappy patients reach you first', 'Receipts emailed to patients in one click'],
    who: 'For UK private clinics, dentists and practices.',
    price: 'Free for 30 days, then from £49 a month.',
    href: '/review-your-doctor',
    cta: 'See Review Your Doctor',
  },
];

const faqs = [
  {
    q: 'What’s the difference between your products and your services?',
    a: 'Products are ready-made tools you can start using quickly, like our AI receptionist. Services are fixes we build around your business, like automation or a new website. The free check tells you which suits you.',
  },
  {
    q: 'How quickly can I start?',
    a: 'Review Your Doctor can be set up in minutes. The AI receptionist is usually live within days, once it knows your services and opening hours.',
  },
  {
    q: 'Do I need any technical skills?',
    a: 'No. We set everything up for you and show you how it works. There’s nothing to install.',
  },
  {
    q: 'Can I try before I pay?',
    a: 'Yes. Review Your Doctor is free for 30 days, and you can book a free demo of the AI receptionist before deciding.',
  },
  {
    q: 'Is my customers’ data safe?',
    a: 'Both products are set up with UK GDPR in mind. We only collect the details needed and agree with you how long they’re kept.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ShiftDeploy products',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Digital Receptionist (AI receptionist)',
          description: 'An AI receptionist that answers business calls day or night and books appointments.',
          url: 'https://shiftdeploy.com/digital-receptionist',
          provider: { '@id': 'https://shiftdeploy.com/#organization' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Review Your Doctor',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: 'Google review and patient feedback software for UK private clinics.',
          url: 'https://shiftdeploy.com/review-your-doctor',
          offers: { '@type': 'Offer', price: '49', priceCurrency: 'GBP' },
          publisher: { '@id': 'https://shiftdeploy.com/#organization' },
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shiftdeploy.com' },
      { '@type': 'ListItem', position: 2, name: 'Our products', item: 'https://shiftdeploy.com/product' },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full">
      <JsonLd data={schema} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-primaryBlue focus:shadow-lg">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <section className="bg-gray-50 pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Our products</p>
            <h1 className="text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] xl:text-6xl font-bold text-primaryBlue text-balance">
              Ready-made tools
              <span className="block text-primaryOrange">that work while you don’t.</span>
            </h1>
            <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
              No big project needed. An AI receptionist that answers every call, and review
              software that gets clinics more Google reviews. Both set up for you.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className={container}>
            <ul className="grid gap-6 lg:grid-cols-2">
              {products.map(({ icon: Icon, problem, name, label, body, outcomes, who, price, href, cta }) => (
                <li key={name} className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
                  <p className="text-lg font-semibold text-gray-600">{problem}</p>
                  <div className="mt-5 flex items-center gap-4">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <Icon className="size-7 text-primaryOrange" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-primaryBlue">{name}</h2>
                      <p className="text-sm font-semibold text-orange-700">{label}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-gray-700 sm:text-lg">{body}</p>
                  <ul className="mt-5 space-y-2">
                    {outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-gray-700 sm:text-lg">
                        <Check className="size-5 mt-1 shrink-0 text-green-700" aria-hidden="true" /> {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex-1 space-y-1 text-gray-600">
                    <p>{who}</p>
                    <p className="font-semibold text-primaryBlue">{price}</p>
                  </div>
                  <Link href={href} prefetch={false} className="mt-6 bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg sm:self-start">
                    {cta} <ArrowRight size={20} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 py-14 sm:py-20">
          <div className={container}>
            <div className="max-w-3xl mb-10">
              <p className="text-sm sm:text-base font-semibold text-orange-700 mb-3">Product or service?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue text-balance">Not sure which you need?</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                <Package className="size-8 text-primaryOrange" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-primaryBlue">Choose a product if…</h3>
                <p className="mt-2 text-gray-700 sm:text-lg">You have one clear problem, like missed calls or too few reviews, and want it fixed quickly with a ready-made tool.</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                <Wrench className="size-8 text-primaryOrange" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-primaryBlue">Choose a service if…</h3>
                <p className="mt-2 text-gray-700 sm:text-lg">You need something built around how your business works, like automation, an app or a new website.</p>
                <Link href="/services" prefetch={false} className="mt-2 min-h-[44px] inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
                  See our services <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-14 sm:py-20 scroll-mt-20">
          <div className={container}>
            <div className="max-w-3xl mb-10">
              <p className="text-sm sm:text-base font-semibold text-orange-700 mb-3">Questions about our products</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue">Straight answers.</h2>
            </div>
            <dl className="grid gap-6 md:grid-cols-2">
              {faqs.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                  <dt><h3 className="text-lg sm:text-xl font-bold text-primaryBlue">{q}</h3></dt>
                  <dd className="mt-3 text-gray-700 sm:text-lg leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-primaryBlue text-white px-4 py-14 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Not sure where to start?</h2>
          <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Get a free check. We’ll tell you whether a product or a service will fix your problem faster.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/ContactUs" prefetch={false} className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg">
              Get your free check <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <a href="tel:+447311126710" className="border-2 border-white text-white hover:bg-white hover:text-primaryBlue text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-colors">
              <Phone size={20} aria-hidden="true" /> Or call 07311 126710
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
