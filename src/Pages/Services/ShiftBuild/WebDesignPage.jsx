import Link from 'next/link';
import { Phone, Search, Smartphone, PhoneCall, PenLine, Pencil, ShieldCheck, Star, MapPin } from 'lucide-react';
import ServiceDetail from '../../../components/ServiceDetail';

const pains = [
  { title: 'It looks fine, but nobody calls', body: 'People visit, look around and leave without getting in touch.' },
  { title: 'You don’t show up on Google', body: 'When someone nearby searches for what you do, they find a competitor.' },
  { title: 'It’s slow or awkward on a phone', body: 'Most of your visitors are on a phone. If it’s fiddly, they give up.' },
  { title: 'Changing anything is a hassle', body: 'Every small update means waiting on someone and paying for it.' },
];

const gets = [
  { icon: MapPin, title: 'Built to be found locally', body: 'Set up for local SEO, so you show up when people nearby search for what you do.' },
  { icon: Smartphone, title: 'Fast and clear on a phone', body: 'Designed for phones first, because that’s where most of your customers are.' },
  { icon: PhoneCall, title: 'Easy to call or book', body: 'A clear next step on every page: call, book or send an enquiry in seconds.' },
  { icon: PenLine, title: 'Words that sound like you', body: 'We help write clear, plain-English wording that tells customers why to choose you.' },
  { icon: Pencil, title: 'Easy to update', body: 'Change prices, photos or opening hours without calling a developer.' },
  { icon: ShieldCheck, title: 'Looked after after launch', body: 'Optional ongoing support keeps it secure, fast and up to date.' },
];

const audiences = [
  { title: 'Trades', body: 'Plumbers, electricians, builders and other trades who need the phone to ring.', href: '/plumbers', cta: 'See websites for plumbers' },
  { title: 'Clinics and practices', body: 'Private clinics, dentists and therapists who need bookings and trust.' },
  { title: 'Salons and local services', body: 'Hair, beauty, fitness and local businesses that run on appointments.' },
];

const steps = [
  { title: 'Free website audit', body: 'We check your current site, or your plans, and show you what’s holding you back.' },
  { title: 'Plan and fixed quote', body: 'You get a clear plan, a fixed price and a timeline before anything starts.' },
  { title: 'Design and build', body: 'We design and build it, keep you updated, and you approve it before it goes live.' },
  { title: 'Launch and improve', body: 'We launch it, check it’s working, and show you the enquiries it brings in.' },
];

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'It depends on how many pages you need and what it has to do, like bookings or payments. You get a fixed quote after the free audit, so there are no surprises.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Most websites take around 2 to 4 weeks, depending on the size and how quickly the content is ready. You’ll get a timeline with your quote.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'We build every site to be found in local search, with the right structure, speed and wording. Rankings take time and nobody can honestly guarantee position one, but we give you the best possible start.',
  },
  {
    q: 'Can I update the website myself?',
    a: 'Yes. You can change text, photos, prices and opening hours yourself. If you’d rather not, we can do it for you.',
  },
  {
    q: 'Can you move my existing website and keep my domain?',
    a: 'Yes. We can redesign your current site, move the important content across and keep your domain name, so you don’t lose what you’ve built.',
  },
  {
    q: 'Do you write the content?',
    a: 'We help. We work with you to write clear, plain-English wording that explains what you do and why customers should choose you.',
  },
  {
    q: 'Do I need a new website, or can you fix the one I have?',
    a: 'Often you don’t need a new one. If your site only needs to be faster or clearer, we’ll say so and fix that instead.',
  },
];

function SearchResultMock() {
  return (
    <figure className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-gray-600">
          <Search className="size-4" aria-hidden="true" />
          <span className="text-sm">plumber near me</span>
        </div>
        <div className="mt-5 rounded-xl border-2 border-primaryOrange bg-orange-50/40 p-4">
          <p className="text-xs font-semibold text-green-700">Top result</p>
          <p className="mt-1 text-lg font-bold text-primaryBlue">Your Business</p>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-700">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
            <span className="ml-1">Open now · Near you</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primaryBlue py-2 text-sm font-semibold text-white">
              <Phone className="size-4" aria-hidden="true" /> Call
            </span>
            <span className="inline-flex items-center justify-center rounded-lg border border-gray-300 py-2 text-sm font-semibold text-primaryBlue">
              Website
            </span>
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-gray-200 p-4 opacity-60">
          <p className="font-semibold text-gray-700">Another business</p>
          <p className="text-sm text-gray-500">Further away</p>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">What we build towards: found first, called first.</figcaption>
    </figure>
  );
}

export default function WebDesignPage({ children }) {
  return (
    <ServiceDetail
      slug="shiftbuild"
      crumb="Web design & local SEO"
      h1="A website that"
      h1Accent="makes your phone ring."
      intro="Most business websites look fine and do nothing. We design websites for service businesses that show up when people nearby search, and make it easy to call or book."
      ctaLabel="Get your free website audit"
      visual={<SearchResultMock />}
      ticks={['Free, no obligation', 'Fixed quote up front', 'Plain English, no jargon']}
      pains={{ title: 'Why most business websites don’t bring in work', items: pains }}
      gets={{ title: 'A website built to win customers, not just look nice', items: gets }}
      audiences={{ title: 'Web design for service businesses', items: audiences }}
      steps={{ title: 'From free audit to a website that works', items: steps }}
      proof={
        <p>
          See websites we’ve built for{' '}
          <Link href="/CaseStudies/K2TradersCase" prefetch={false} className="font-semibold text-primaryBlue underline underline-offset-2 hover:text-primaryOrange">K2 Traders</Link>
          {' '}and{' '}
          <Link href="/CaseStudies/BullseyesCase" prefetch={false} className="font-semibold text-primaryBlue underline underline-offset-2 hover:text-primaryOrange">Bullseye Investments</Link>.
        </p>
      }
      faqs={faqs}
      faqEyebrow="Questions about web design"
      finalTitle="Is your website losing you customers?"
      finalText="Get a free website audit. We’ll show you what’s stopping people calling, and the simplest way to fix it."
      service={{ name: 'Web design and local SEO', type: 'Web design', description: 'Websites for service businesses that show up in local search and turn visitors into calls and bookings.' }}
    >
      {children}
    </ServiceDetail>
  );
}
