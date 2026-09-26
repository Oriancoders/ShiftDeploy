import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import JsonLd from './JsonLd';

const primaryBtn = 'bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg';
const container = 'max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8';

function SectionHead({ eyebrow, title }) {
  return (
    <div className="max-w-3xl mb-10">
      <p className="text-sm sm:text-base font-semibold text-orange-700 mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue text-balance">{title}</h2>
    </div>
  );
}

function Ticks({ items, dark }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base ${dark ? 'justify-center text-white/85' : 'text-gray-600'}`}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-2">
          <Check className={`size-4 ${dark ? 'text-green-400' : 'text-green-700'}`} aria-hidden="true" /> {t}
        </li>
      ))}
    </ul>
  );
}

// Shared layout for every service page, so each one follows the same order:
// hero, problems, what you get, (who it's for), steps, FAQ, final call to action.
export default function ServiceDetail({
  slug, crumb, h1, h1Accent, intro, ctaLabel, visual, ticks, pains, gets, audiences, steps, proof,
  faqs, faqEyebrow, finalTitle, finalText, service, children,
}) {
  const url = `https://shiftdeploy.com/services/${slug}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      serviceType: service.type,
      description: service.description,
      url,
      provider: { '@id': 'https://shiftdeploy.com/#organization' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
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
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://shiftdeploy.com/services' },
        { '@type': 'ListItem', position: 3, name: crumb, item: url },
      ],
    },
  ];

  return (
    <div className="w-full">
      <JsonLd data={schema} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-primaryBlue focus:shadow-lg">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <section className="bg-gray-50 pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div className={`${container} grid gap-12 lg:grid-cols-[1.3fr_1fr] items-center`}>
            <div>
              <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
                <Link href="/services" prefetch={false} className="hover:text-primaryOrange">Services</Link>
                <span aria-hidden="true"> / </span>
                <span className="font-semibold text-orange-700">{crumb}</span>
              </nav>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-primaryBlue text-balance">
                {h1}
                <span className="block text-primaryOrange">{h1Accent}</span>
              </h1>
              <p className="text-lg sm:text-xl mt-6 max-w-xl leading-relaxed text-gray-700">{intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
                <Link href="/ContactUs" prefetch={false} className={primaryBtn}>
                  {ctaLabel} <ArrowRight size={20} aria-hidden="true" />
                </Link>
                <a href="tel:+447311126710" className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-colors">
                  <Phone size={20} aria-hidden="true" /> 07311 126710
                </a>
              </div>
              <div className="mt-6"><Ticks items={ticks} /></div>
            </div>
            {visual}
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className={container}>
            <SectionHead eyebrow="Sound familiar?" title={pains.title} />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pains.items.map(({ title, body }) => (
                <li key={title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-lg font-bold text-primaryBlue">{title}</h3>
                  <p className="mt-2 text-gray-700">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 py-14 sm:py-20">
          <div className={container}>
            <SectionHead eyebrow="What you get" title={gets.title} />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gets.items.map(({ icon: Icon, title, body }) => (
                <li key={title} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                  <span className="flex size-12 items-center justify-center rounded-full bg-orange-50">
                    <Icon className="size-6 text-primaryOrange" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-primaryBlue">{title}</h3>
                  <p className="mt-2 text-gray-700 sm:text-lg">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {audiences && (
          <section className="bg-white py-14 sm:py-20">
            <div className={container}>
              <SectionHead eyebrow="Who it’s for" title={audiences.title} />
              <ul className="grid gap-6 md:grid-cols-3">
                {audiences.items.map(({ title, body, href, cta }) => (
                  <li key={title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-primaryBlue">{title}</h3>
                    <p className="mt-2 text-gray-700 sm:text-lg">{body}</p>
                    {href && (
                      <Link href={href} prefetch={false} className="mt-4 inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
                        {cta} <ArrowRight size={18} aria-hidden="true" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className={`py-14 sm:py-20 ${audiences ? 'bg-gray-50' : 'bg-white'}`}>
          <div className={container}>
            <SectionHead eyebrow="How it works" title={steps.title} />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.items.map(({ title, body }, i) => (
                <li key={title} className={`rounded-2xl border border-gray-200 p-6 sm:p-8 ${audiences ? 'bg-white' : 'bg-gray-50'}`}>
                  <span className="flex size-10 items-center justify-center rounded-full bg-primaryBlue text-white font-bold">{i + 1}</span>
                  <h3 className="mt-5 text-xl font-bold text-primaryBlue">{title}</h3>
                  <p className="mt-2 text-gray-700 sm:text-lg">{body}</p>
                </li>
              ))}
            </ol>
            {proof && <div className="mt-8 text-gray-700 sm:text-lg">{proof}</div>}
          </div>
        </section>

        <section id="faq" className={`py-14 sm:py-20 scroll-mt-20 ${audiences ? 'bg-white' : 'bg-gray-50'}`}>
          <div className={container}>
            <SectionHead eyebrow={faqEyebrow} title="Straight answers." />
            <dl className="grid gap-6 md:grid-cols-2">
              {faqs.map(({ q, a }) => (
                <div key={q} className={`rounded-2xl border border-gray-200 p-6 sm:p-8 ${audiences ? 'bg-gray-50' : 'bg-white'}`}>
                  <dt><h3 className="text-lg sm:text-xl font-bold text-primaryBlue">{q}</h3></dt>
                  <dd className="mt-3 text-gray-700 sm:text-lg leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {children}

        <section className="bg-primaryBlue text-white px-4 py-14 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">{finalTitle}</h2>
          <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">{finalText}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/ContactUs" prefetch={false} className={primaryBtn}>
              {ctaLabel} <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <a href="tel:+447311126710" className="border-2 border-white text-white hover:bg-white hover:text-primaryBlue text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-colors">
              <Phone size={20} aria-hidden="true" /> Or call 07311 126710
            </a>
          </div>
          <div className="mt-6"><Ticks items={ticks} dark /></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
