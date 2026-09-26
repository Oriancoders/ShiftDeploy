import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check, Phone } from 'lucide-react';
import CloudinaryImage from '../../components/CloudinaryImage';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

const container = 'max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8';

const allProjects = [
  {
    hidden: true,
    client: 'Fluid Plumbing Solutions, Hull',
    service: 'Website & local SEO',
    title: 'From nothing online to found on Google',
    problem: 'A Hull plumber with no website, no logo and no way for local customers to find him online.',
    did: 'We built his whole online presence from scratch: branding, a fast website and a Google Maps listing covering Hull and the East Riding.',
    results: ['Live website in under two weeks', 'Showing on Google Maps locally', 'New customers finding him online'],
    quote: '“Before ShiftDeploy I had nothing online. Now customers find me on Google. Best thing I’ve done for the business.” Zack Gibson, owner',
    image: '/fluid-plumbing-hull.webp',
    imageAlt: 'Fluid Plumbing Solutions website for a plumber in Hull',
    href: '/plumbers#work',
  },
  {
    client: 'Bullseye Investments',
    service: 'Website design',
    title: 'A website that makes a clear first impression',
    problem: 'Visitors couldn’t quickly tell what the firm offered or what to do next.',
    did: 'We rebuilt the website with a clear message, one obvious next step on every page, and easy access to the client portal. We still look after it.',
    results: ['Clear message from the first screen', 'Obvious next step on every page', 'Easy access to the client portal'],
    image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764978786/bullseyes_x1ifpw.png',
    imageAlt: 'Bullseye Investments website homepage showing its financial services offer',
    href: '/CaseStudies/BullseyesCase',
  },
  {
    client: 'K2 Traders',
    service: 'E-commerce website',
    title: 'An online shop that’s quick and easy to buy from',
    problem: 'They needed an online shop that was simple to buy from and cheap to run.',
    did: 'We built a fast shop with a simple checkout that works well on a phone, set up so there’s no monthly hosting bill.',
    results: ['Faster pages across the shop', 'Simple checkout on a phone', 'No monthly hosting bill'],
    image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979152/k2_traders_vj05aq.png',
    imageAlt: 'K2 Traders website homepage and product navigation',
    href: '/CaseStudies/K2TradersCase',
  },
  {
    client: 'Slacker IoT',
    service: 'Web app development',
    title: 'An EV charging platform, built from scratch',
    problem: 'They needed one system to run chargers, customers and payments.',
    did: 'We built the whole platform: a customer dashboard, admin controls and billing that runs on its own.',
    results: ['Live charger status for customers', 'Billing and payments that run themselves', 'One dashboard to manage it all'],
    image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764978775/ev_dashboard_lak5oh.png',
    imageAlt: 'Slacker IoT EV charging dashboard showing battery, power and session data',
    href: '/CaseStudies/SlackerIOT',
  },
];

const projects = allProjects.filter((p) => !p.hidden);

const quotes = [
  { quote: 'Better than anything I’ve seen.', name: 'Farjad Abbas', role: 'Head of Business Development, Bullseye Investments' },
  { quote: 'ShiftDeploy is highly recommended. They have consistently met deadlines, and their after-sales service is outstanding.', name: 'Kamran Abbas', role: 'Chief Strategist, Bullseye Investments', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7415328654185947136/' },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our work: ShiftDeploy case studies',
    url: 'https://shiftdeploy.com/missions',
    about: { '@id': 'https://shiftdeploy.com/#organization' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `${p.client}: ${p.title}`,
        url: `https://shiftdeploy.com${p.href}`,
      })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://shiftdeploy.com' },
      { '@type': 'ListItem', position: 2, name: 'Our work', item: 'https://shiftdeploy.com/missions' },
    ],
  },
];

export default function OurWorkPage() {
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
            <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Our work</p>
            <h1 className="text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] xl:text-6xl font-bold text-primaryBlue text-balance">
              Real businesses.
              <span className="block text-primaryOrange">Real work, delivered.</span>
            </h1>
            <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
              A few of the projects we’ve designed and built. Each one started with a business
              problem, not a list of features.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className={`${container} space-y-10`}>
            {projects.map(({ client, service, title, problem, did, results, quote, image, imageAlt, href }, i) => (
              <article key={client} className="grid gap-8 lg:grid-cols-2 items-center rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
                <div className={i % 2 ? 'lg:order-2' : ''}>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-white">
                    <CloudinaryImage src={image} alt={imageAlt} className="size-full object-contain" width="960" height="600" loading={i === 0 ? 'eager' : 'lazy'} />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-orange-700">{client} · {service}</p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-primaryBlue text-balance">{title}</h2>
                  <dl className="mt-5 space-y-4 sm:text-lg">
                    <div>
                      <dt className="font-bold text-primaryBlue">The problem</dt>
                      <dd className="text-gray-700">{problem}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-primaryBlue">What we did</dt>
                      <dd className="text-gray-700">{did}</dd>
                    </div>
                  </dl>
                  <ul className="mt-5 space-y-2">
                    {results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-gray-700">
                        <Check className="size-5 mt-0.5 shrink-0 text-green-700" aria-hidden="true" /> {r}
                      </li>
                    ))}
                  </ul>
                  {quote && <p className="mt-5 border-l-4 border-primaryOrange pl-4 text-gray-700 italic">{quote}</p>}
                  <Link href={href} prefetch={false} className="mt-6 min-h-[44px] inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
                    Read the case study <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-14 sm:py-20">
          <div className={container}>
            <p className="text-sm sm:text-base font-semibold text-orange-700 mb-3">What clients say</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue">In their words</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {quotes.map(({ quote, name, role, href }) => (
                <figure key={name} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                  <blockquote className="text-xl font-semibold text-primaryBlue">“{quote}”</blockquote>
                  <figcaption className="mt-4">
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center gap-1.5 font-bold text-primaryBlue underline underline-offset-2 hover:text-primaryOrange">
                        {name} <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="block font-bold text-primaryBlue">{name}</span>
                    )}
                    <span className="block text-gray-600">{role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primaryBlue text-white px-4 py-14 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Could your business be next?</h2>
          <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Get a free check. We’ll show you where you’re losing work and how we’d fix it.
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
