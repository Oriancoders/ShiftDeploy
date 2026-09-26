import Link from 'next/link';
import {
  ArrowRight, ArrowDown, Check, Phone, PhoneCall, MessageCircle, MessageSquareText, LayoutTemplate, MapPin,
  MousePointerClick, Star, Send, BellRing, ReceiptPoundSterling, Bot, Smartphone,
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import ShiftProtocol from '../LandingPage/landingComps/ShiftProtocol';

const problems = [
  {
    id: 'get-found',
    href: '/services/shiftbuild',
    problem: '“Not enough people find me.”',
    intro: 'People nearby search on Google and pick from the first few businesses they see.',
    services: [
      { icon: MapPin, name: 'Show up on Google Maps', label: 'Google Business Profile & local SEO', body: 'Appear when people nearby search for what you do.', gets: ['Found in local search', 'A complete Google profile', 'More calls from Google'] },
      { icon: Star, name: 'More 5-star reviews', label: 'Google review system', body: 'Happy customers leave a review in two taps.', gets: ['More reviews, faster', 'Problems reach you first', 'No app needed'] },
      { icon: LayoutTemplate, name: 'A website that brings in calls', label: 'Web design', body: 'Clear, fast on a phone and easy to call or book from.', gets: ['Tells people why you', 'Fast on a phone', 'Easy to get in touch'] },
    ],
  },
  {
    id: 'missed-calls',
    href: '/services/shiftspeed',
    problem: '“I keep missing calls and messages.”',
    intro: 'Every call you can’t answer is a customer who rings someone else.',
    services: [
      { icon: PhoneCall, name: 'Every call answered', label: 'AI receptionist', body: 'Answers day or night, takes details and books appointments.', gets: ['Answers when you’re busy', 'Books into your diary', 'Texts you the details'], href: '/digital-receptionist' },
      { icon: MessageSquareText, name: 'A text back when you miss a call', label: 'Missed call text back', body: 'The caller gets a friendly text straight away.', gets: ['Stops them ringing others', 'Lets them book or reply', 'Works automatically'] },
      { icon: MessageCircle, name: 'Instant WhatsApp replies', label: 'WhatsApp automation', body: 'Answers in seconds, bookings at any hour.', gets: ['Replies in seconds', 'Book or ask questions', 'Reminders sent for you'] },
    ],
  },
  {
    id: 'win-jobs',
    href: '/services/shiftconvert',
    problem: '“Quotes go quiet and people don’t turn up.”',
    intro: 'The work is there. It slips away after the enquiry comes in.',
    services: [
      { icon: Send, name: 'Quotes followed up for you', label: 'Automatic follow-ups', body: 'A polite nudge after every quote, without you remembering.', gets: ['Every quote chased', 'Friendly, not pushy', 'More jobs won'] },
      { icon: BellRing, name: 'Fewer no-shows', label: 'Appointment reminders', body: 'Text or WhatsApp reminders before every appointment.', gets: ['Fewer empty slots', 'Sent automatically', 'Easy to reschedule'] },
      { icon: MousePointerClick, name: 'Easier to say yes', label: 'Online booking & conversion', body: 'Online booking and a website that makes enquiring easy.', gets: ['Book in seconds', 'Shorter forms', 'Clear next steps'] },
    ],
  },
  {
    id: 'admin',
    href: '/services/shiftflow',
    problem: '“Admin eats my evenings.”',
    intro: 'Invoices, reminders and chasing payments, after a full day’s work.',
    services: [
      { icon: ReceiptPoundSterling, name: 'Get paid without chasing', label: 'Invoice automation', body: 'Invoices and polite payment reminders that go out on their own.', gets: ['Invoices sent on time', 'Automatic reminders', 'Less chasing'] },
      { icon: Bot, name: 'An assistant for the boring jobs', label: 'AI assistant & business automation', body: 'Sorts enquiries, drafts replies and stops the copying and pasting.', gets: ['Details entered once', 'Replies drafted for you', 'Works with your tools'] },
      { icon: Smartphone, name: 'Tools built around you', label: 'Apps & website maintenance', body: 'Custom apps, and a website looked after every month.', gets: ['Apps for bookings or jobs', 'Website kept updated', 'One team to call'] },
    ],
  },
];

const faqs = [
  {
    q: 'Which service do I need?',
    a: 'You don’t need to know. Tell us the problem, like missed calls or a quiet website, and we’ll recommend the simplest fix. That’s what the free check is for.',
  },
  {
    q: 'Can I combine more than one service?',
    a: 'Yes. Many businesses start with one fix, like call answering, and add others later. You only pay for what solves your problem.',
  },
  {
    q: 'Do you only build websites?',
    a: 'No. The fix might be an AI receptionist, instant WhatsApp replies, automatic reminders, an app or a website. We pick whatever solves your problem best.',
  },
  {
    q: 'Do you work with my existing developer or team?',
    a: 'Yes. We can work alongside them, either making the changes ourselves or giving clear guidance they can follow.',
  },
  {
    q: 'How quickly can you start?',
    a: 'We usually start the free check within 48 hours. Simpler fixes, like call answering or WhatsApp replies, can often be live within days.',
  },
  {
    q: 'Am I tied into a long contract?',
    a: 'No. You get a clear, fixed quote before any work starts, and there’s no forced long-term commitment.',
  },
  {
    q: 'What if you find nothing wrong?',
    a: 'Then we’ll tell you. The free check is there to give you an honest answer, not to sell you a project.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ShiftDeploy services',
    itemListElement: problems.flatMap((p) => p.services.map((sv) => ({ ...sv, href: sv.href || p.href }))).map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.body,
        provider: { '@id': 'https://shiftdeploy.com/#organization' },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        url: `https://shiftdeploy.com${s.href}`,
      },
    })),
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
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      <JsonLd data={schema} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-primaryBlue focus:shadow-lg">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <section className="bg-gray-50 pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Our services</p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-primaryBlue text-balance">
              Tell us the problem.
              <span className="block text-primaryOrange">We’ll pick the right fix.</span>
            </h1>
            <p className="text-lg sm:text-xl mt-6 max-w-3xl mx-auto leading-relaxed text-gray-700">
              Whether it’s getting found, answering every enquiry, winning the job or cutting the
              admin, we fix it with whatever works best. Find your problem below.
            </p>
            <nav aria-label="Jump to a problem" className="mt-8 -mx-4 px-4 flex overflow-x-auto snap-x gap-2 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center sm:overflow-visible">
              {problems.map(({ id, problem }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="shrink-0 snap-start inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-primaryBlue hover:border-primaryOrange hover:text-primaryOrange"
                >
                  {problem.replace(/[“”]/g, '')} <ArrowDown size={14} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </section>

        {problems.map(({ id, href, problem, intro, services }, i) => (
          <section key={id} id={id} className={`scroll-mt-20 py-14 sm:py-20 ${i % 2 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 sm:mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue text-balance">{problem}</h2>
                  <p className="mt-3 text-lg sm:text-xl text-gray-700">{intro}</p>
                </div>
                <Link href={href} prefetch={false} className="shrink-0 inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
                  See how we fix this <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
              <ul className="grid gap-6 md:grid-cols-3">
                {services.map(({ icon: Icon, name, label, body, gets, href: itemHref }) => (
                  <li key={name}>
                    <Link
                      href={itemHref || href}
                      prefetch={false}
                      className={`group flex h-full flex-col rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-primaryOrange hover:shadow-lg transition ${i % 2 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <span className="flex size-12 items-center justify-center rounded-full bg-orange-50">
                        <Icon className="size-6 text-primaryOrange" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-xl font-bold text-primaryBlue">{name}</h3>
                      <p className="mt-1 text-sm font-semibold text-orange-700">{label}</p>
                      <p className="mt-2 text-gray-700 sm:text-lg">{body}</p>
                      <ul className="mt-4 space-y-2 flex-1">
                        {gets.map((g) => (
                          <li key={g} className="flex items-start gap-2 text-gray-700">
                            <Check className="size-5 mt-0.5 shrink-0 text-green-700" aria-hidden="true" />
                            {g}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-6 inline-flex items-center gap-2 font-bold text-primaryBlue group-hover:text-primaryOrange">
                        Find out more <ArrowRight size={18} aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="bg-gray-50 py-14 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue text-balance">Not sure which one you need?</h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-700">
              That’s normal. Tell us what’s going wrong and we’ll suggest the simplest fix, for free.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/ContactUs" prefetch={false} className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg">
                Get your free check <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <a href="tel:+447311126710" className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-colors">
                <Phone size={20} aria-hidden="true" /> 07311 126710
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-14 sm:py-20 scroll-mt-20">
          <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
              <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Questions about our services</p>
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

        <ShiftProtocol />
      </main>
      <Footer />
    </div>
  );
}
