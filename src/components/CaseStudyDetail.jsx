import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';
import CloudinaryImage from './CloudinaryImage';
import Navigation from './Navigation';
import Footer from './Footer';
import JsonLd from './JsonLd';

const container = 'max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8';
const CAR = '-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:grid sm:gap-6 sm:overflow-visible sm:pb-0';
const ITEM = 'snap-start shrink-0 w-[82%] sm:w-auto';

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl mb-10">
      <p className="text-sm sm:text-base font-semibold text-orange-700 mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue text-balance">{title}</h2>
      {text && <p className="mt-3 text-lg sm:text-xl text-gray-700">{text}</p>}
    </div>
  );
}

// Shared layout for case studies: problem, what we built, timeline, challenges, results.
export default function CaseStudyDetail({
  slug, client, service, h1, h1Accent, intro, facts, image, imageAlt, problem, built, phases,
  challenges, results, quote, cta, related,
}) {
  const url = `https://shiftdeploy.com/CaseStudies/${slug}`;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${h1} ${h1Accent}`,
      description: intro,
      url,
      image,
      about: { '@type': 'Organization', name: client },
      author: { '@id': 'https://shiftdeploy.com/#organization' },
      publisher: { '@id': 'https://shiftdeploy.com/#organization' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shiftdeploy.com' },
        { '@type': 'ListItem', position: 2, name: 'Our work', item: 'https://shiftdeploy.com/missions' },
        { '@type': 'ListItem', position: 3, name: client, item: url },
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
          <div className={container}>
            <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-4">
              <Link href="/missions" prefetch={false} className="hover:text-primaryOrange">Our work</Link>
              <span aria-hidden="true"> / </span>
              <span className="font-semibold text-orange-700">{client}</span>
            </nav>
            <p className="text-sm sm:text-base font-semibold text-orange-700">Case study · {service}</p>
            <h1 className="mt-3 max-w-4xl text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] xl:text-6xl font-bold text-primaryBlue text-balance">
              {h1}
              <span className="block text-primaryOrange">{h1Accent}</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-gray-700">{intro}</p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-4xl">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-gray-200 bg-white p-4">
                  <dt className="text-sm text-gray-600">{label}</dt>
                  <dd className="mt-1 font-bold text-primaryBlue">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <CloudinaryImage src={image} alt={imageAlt} className="w-full h-auto" width="1280" height="720" loading="eager" />
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
            <div>
              <SectionHead eyebrow="The problem" title={problem.title} />
              <p className="-mt-4 text-lg sm:text-xl text-gray-700">{problem.body}</p>
            </div>
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-8 self-start">
              <h2 className="text-xl font-bold text-primaryBlue">What they needed</h2>
              <ul className="mt-4 space-y-3">
                {problem.needs.map((n) => (
                  <li key={n} className="flex items-start gap-2 text-gray-700 sm:text-lg">
                    <Check className="size-5 mt-1 shrink-0 text-green-700" aria-hidden="true" /> {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-14 sm:py-20">
          <div className={container}>
            <SectionHead eyebrow="What we built" title={built.title} />
            <ul className={`${CAR} sm:grid-cols-2 lg:grid-cols-3`}>
              {built.items.map(({ icon: Icon, title, body }) => (
                <li key={title} className={`${ITEM} rounded-2xl border border-gray-200 bg-white p-6 sm:p-8`}>
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

        {phases && (
          <section className="bg-white py-14 sm:py-20">
            <div className={container}>
              <SectionHead eyebrow="How we did it" title={phases.title} />
              <ol className="relative space-y-6 border-l-2 border-gray-200 pl-6 sm:pl-8 max-w-3xl">
                {phases.items.map(({ time, title, body }, i) => (
                  <li key={title} className="relative">
                    <span className="absolute -left-[2.35rem] sm:-left-[2.85rem] flex size-8 items-center justify-center rounded-full bg-primaryBlue text-sm font-bold text-white">{i + 1}</span>
                    <p className="text-sm font-semibold text-orange-700">{time}</p>
                    <h3 className="text-xl font-bold text-primaryBlue">{title}</h3>
                    <p className="mt-1 text-gray-700 sm:text-lg">{body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section className="bg-gray-50 py-14 sm:py-20">
          <div className={container}>
            <SectionHead eyebrow="Challenges" title="What was hard, and how we solved it" />
            <ul className="grid gap-6 md:grid-cols-2">
              {challenges.map(({ challenge, solution }) => (
                <li key={challenge} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-primaryBlue">{challenge}</h3>
                  <p className="mt-2 text-gray-700 sm:text-lg"><span className="font-semibold text-green-700">How we solved it: </span>{solution}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
            <div>
              <SectionHead eyebrow="The result" title={results.title} />
              <ul className="-mt-4 space-y-3">
                {results.items.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-lg text-gray-700">
                    <Check className="size-6 mt-0.5 shrink-0 text-green-700" aria-hidden="true" /> {r}
                  </li>
                ))}
              </ul>
            </div>
            {quote && (
              <figure className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 self-start">
                <blockquote className="text-xl font-semibold text-primaryBlue">“{quote.text}”</blockquote>
                <figcaption className="mt-4">
                  <span className="block font-bold text-primaryBlue">{quote.name}</span>
                  <span className="text-gray-600">{quote.role}</span>
                </figcaption>
              </figure>
            )}
          </div>
        </section>

        {related && (
          <section className="bg-gray-50 py-10">
            <div className={`${container} flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between`}>
              <p className="text-lg text-gray-700">{related.text}</p>
              <Link href={related.href} prefetch={false} className="min-h-[44px] inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
                {related.label} <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}

        <section className="bg-primaryBlue text-white px-4 py-14 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">{cta.title}</h2>
          <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">{cta.text}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/ContactUs" prefetch={false} className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg">
              Get your free check <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link href="/missions" prefetch={false} className="border-2 border-white text-white hover:bg-white hover:text-primaryBlue text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-colors">
              See more of our work
            </Link>
          </div>
          <p className="mt-6 text-white/80">
            Or call{' '}
            <a href="tel:+447311126710" className="font-bold text-white underline underline-offset-2 inline-flex items-center gap-1"><Phone className="size-4" aria-hidden="true" /> 07311 126710</a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
