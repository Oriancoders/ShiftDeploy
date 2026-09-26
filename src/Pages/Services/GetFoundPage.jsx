import Link from 'next/link';
import { MapPin, Star, LayoutTemplate, Smartphone, BadgeCheck, ShieldCheck, Search, Phone } from 'lucide-react';
import ServiceDetail from '../../components/ServiceDetail';

const pains = [
  { title: 'Competitors show up, you don’t', body: 'People nearby search for what you do, and find someone else first.' },
  { title: 'Not enough reviews', body: 'A handful of reviews loses out to the business down the road with fifty.' },
  { title: 'Your website doesn’t bring calls', body: 'It looks fine, but it doesn’t turn visitors into customers.' },
  { title: 'Quiet months', body: 'Word of mouth is great until it dries up, and you can’t switch it back on.' },
];

const gets = [
  { icon: MapPin, title: 'Show up on Google Maps', label: 'Google Business Profile & local SEO', body: 'We set up and improve your Google Business Profile and website so you appear when people nearby search.' },
  { icon: Star, title: 'More 5-star reviews', label: 'Google review system', body: 'Happy customers leave a Google review in two taps, and problems reach you privately first.' },
  { icon: LayoutTemplate, title: 'A website that brings in calls', label: 'Web design', body: 'A clear website that tells people why to choose you and makes it easy to call or book.' },
  { icon: Smartphone, title: 'Fast on a phone', label: 'Website speed', body: 'Most people search on a phone. We make sure your site loads quickly there.' },
  { icon: BadgeCheck, title: 'Look trustworthy at a glance', label: 'Reviews, photos and proof', body: 'Real reviews, photos of your work and clear prices, right where people decide.' },
  { icon: ShieldCheck, title: 'Kept working and up to date', label: 'Website maintenance', body: 'We look after your website so it stays safe, fast and working.', href: '/services/shiftflow', cta: 'See how we look after it' },
];

const audiences = [
  { title: 'Trades', body: 'Plumbers, electricians, builders and other trades who need the phone to ring.', href: '/plumbers', cta: 'See our work for plumbers' },
  { title: 'Clinics and practices', body: 'Private clinics, dentists and therapists who need trust and bookings.', href: '/review-your-doctor', cta: 'See our review system for clinics' },
  { title: 'Salons and local services', body: 'Hair, beauty, fitness and local businesses that run on appointments.' },
];

const steps = [
  { title: 'Free check', body: 'We see how you show up on Google today and what’s stopping people calling.' },
  { title: 'Plan and fixed quote', body: 'A clear plan, a fixed price and a timeline before anything starts.' },
  { title: 'We set it up', body: 'Google profile, reviews, website: we handle it and keep you updated.' },
  { title: 'You see the results', body: 'We show you the calls, enquiries and reviews it brings in.' },
];

const faqs = [
  {
    q: 'How can I get more customers for my business?',
    a: 'For most local service businesses, the quickest wins are showing up on Google Maps when people nearby search, having plenty of good reviews, and a website that makes it easy to call or book. Our free check shows which of these will help you most.',
  },
  {
    q: 'How do I get my business on Google Maps?',
    a: 'You need a verified Google Business Profile with the right category, service area, photos and opening hours. We set it up or improve the one you have, so you’re more likely to appear in the map results.',
  },
  {
    q: 'What is local SEO?',
    a: 'Local SEO means helping your business show up when people nearby search for what you do, like “electrician near me”. It covers your Google profile, reviews and website.',
  },
  {
    q: 'How can I get more Google reviews?',
    a: 'Ask at the right moment and make it quick. A QR code or a text with a direct link lets happy customers leave a review in two taps. We set that up for you.',
  },
  {
    q: 'Do I need a website if I have a Google Business Profile?',
    a: 'Your profile gets you found; your website helps people decide. Most customers check both before they call, so the two work best together.',
  },
  {
    q: 'How long until I see more customers?',
    a: 'Some changes, like a better Google profile and more reviews, can help within weeks. Local search rankings build over time. We’ll give you an honest timeline after the free check.',
  },
  {
    q: 'Can you guarantee first place on Google?',
    a: 'No, and anyone who does isn’t being honest. What we can do is give your business the best possible chance to show up and be chosen.',
  },
];

function SearchResultMock() {
  return (
    <figure className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2.5 text-gray-600">
          <Search className="size-4" aria-hidden="true" />
          <span className="text-sm">electrician near me</span>
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
            <span className="inline-flex items-center justify-center rounded-lg border border-gray-300 py-2 text-sm font-semibold text-primaryBlue">Website</span>
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-gray-200 p-4 opacity-60">
          <p className="font-semibold text-gray-700">Another business</p>
          <p className="text-sm text-gray-500">Fewer reviews · Further away</p>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">Example: found first, called first.</figcaption>
    </figure>
  );
}

export default function GetFoundPage({ children }) {
  return (
    <ServiceDetail
      slug="shiftbuild"
      crumb="Get found by more customers"
      h1="More local customers"
      h1Accent="finding you first."
      intro="When someone nearby needs what you do, they search on Google and pick from the first few businesses they see. We make sure yours is one of them, and that it’s easy to call."
      ctaLabel="Get your free check"
      visual={<SearchResultMock />}
      ticks={['Free, no obligation', 'Fixed quote up front', 'Plain English, no jargon']}
      pains={{ title: 'Why customers pick someone else', items: pains }}
      gets={{ title: 'Everything that gets you found and chosen', items: gets }}
      audiences={{ title: 'For local service businesses', items: audiences }}
      steps={{ title: 'From free check to more customers', items: steps }}
      proof={
        <p>
          See websites we’ve built for{' '}
          <Link href="/CaseStudies/K2TradersCase" prefetch={false} className="font-semibold text-primaryBlue underline underline-offset-2 hover:text-primaryOrange">K2 Traders</Link>
          {' '}and{' '}
          <Link href="/CaseStudies/BullseyesCase" prefetch={false} className="font-semibold text-primaryBlue underline underline-offset-2 hover:text-primaryOrange">Bullseye Investments</Link>.
        </p>
      }
      faqs={faqs}
      faqEyebrow="Questions about getting more customers"
      finalTitle="Want more customers finding you?"
      finalText="Get a free check. We’ll show you how you appear on Google today and the quickest ways to get found."
      service={{
        name: 'Get found by more customers: local SEO, Google reviews and web design',
        type: 'Local SEO and web design',
        description: 'Help local service businesses show up on Google Maps and local search, get more reviews, and turn visitors into calls.',
      }}
    >
      {children}
    </ServiceDetail>
  );
}
