import Link from 'next/link';
import {
  ArrowRight, ArrowDown, Check, Phone, PhoneCall, MessageCircle, LayoutTemplate, Gauge,
  MousePointerClick, Star, Workflow, Smartphone, ShieldCheck,
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import ShiftProtocol from '../LandingPage/landingComps/ShiftProtocol';

const problems = [
  {
    id: 'missed-calls',
    problem: '“I keep missing calls.”',
    intro: 'Every call you can’t answer is a customer who rings someone else.',
    services: [
      {
        icon: PhoneCall,
        name: 'AI receptionist & call answering',
        body: 'A virtual receptionist that answers every call, day or night, takes details and books appointments.',
        gets: ['Answers when you’re busy or closed', 'Books straight into your diary', 'Texts you the details'],
        href: '/digital-receptionist',
      },
      {
        icon: MessageCircle,
        name: 'WhatsApp & chat automation',
        body: 'Instant replies on WhatsApp, where many of your customers would rather message than call.',
        gets: ['Replies in seconds, any hour', 'Lets customers book or ask questions', 'Sends reminders automatically'],
        href: '/ContactUs',
        cta: 'Ask us about it',
      },
    ],
  },
  {
    id: 'website',
    problem: '“My website doesn’t bring in enquiries.”',
    intro: 'It looks fine, but nobody calls. Usually it’s slow, hard to find on Google, or unclear.',
    services: [
      {
        icon: LayoutTemplate,
        name: 'Web design & local SEO',
        body: 'A website built to be found by nearby customers and turn visits into calls and bookings.',
        gets: ['Shows up when locals search', 'Clear on a phone', 'Easy to call or book from'],
        href: '/services/shiftbuild',
      },
      {
        icon: Gauge,
        name: 'Website speed optimisation',
        body: 'Pages that load fast on a phone, so visitors don’t give up and go to a competitor.',
        gets: ['Faster on mobile', 'Better for Google rankings', 'Before-and-after report'],
        href: '/services/shiftspeed',
      },
      {
        icon: MousePointerClick,
        name: 'Conversion rate optimisation',
        body: 'More calls and bookings from the visitors you already get, without a full redesign.',
        gets: ['Clearer wording and buttons', 'Simpler enquiry forms', 'Changes you can measure'],
        href: '/services/shiftconvert',
      },
    ],
  },
  {
    id: 'reviews',
    problem: '“Happy customers never leave reviews.”',
    intro: 'One bad review stands out when the happy ones stay quiet.',
    services: [
      {
        icon: Star,
        name: 'Google review system',
        body: 'A QR code at your front desk lets customers leave a Google review in two taps, and tell you privately if something went wrong.',
        gets: ['More Google reviews', 'Problems reach you first', 'No app, no staff training'],
        href: '/review-your-doctor',
        cta: 'See it for clinics',
      },
    ],
  },
  {
    id: 'admin',
    problem: '“Admin eats my evenings.”',
    intro: 'Reminders, follow-ups and invoices that you do by hand, every single day.',
    services: [
      {
        icon: Workflow,
        name: 'Business automation',
        body: 'The repetitive jobs happen on time, on their own, so you get your evenings back.',
        gets: ['Appointment reminders', 'Enquiry follow-ups', 'Invoices and payment chasers'],
        href: '/ContactUs',
        cta: 'Ask us about it',
      },
      {
        icon: Smartphone,
        name: 'Mobile & web apps',
        body: 'Booking, ordering or customer apps built around how your business actually runs.',
        gets: ['Built for your way of working', 'Works on any phone', 'Grows with your business'],
        href: '/ContactUs',
        cta: 'Ask us about it',
      },
    ],
  },
  {
    id: 'maintenance',
    problem: '“Nobody looks after my website.”',
    intro: 'Small updates turn into big headaches, and things quietly break.',
    services: [
      {
        icon: ShieldCheck,
        name: 'Website maintenance & support',
        body: 'We keep your site secure, up to date and working, with one team you can call.',
        gets: ['Updates and security', 'Problems fixed quickly', 'Regular check-ups'],
        href: '/services/shiftflow',
      },
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
    q: 'Do I need a new website?',
    a: 'Often not. Many websites only need to load faster, explain things more clearly and make it easier to call or book. If a rebuild is better, we’ll explain why.',
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
    itemListElement: problems.flatMap((p) => p.services).map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.body,
        provider: { '@id': 'https://shiftdeploy.com/#organization' },
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        ...(s.href.startsWith('/ContactUs') ? {} : { url: `https://shiftdeploy.com${s.href}` }),
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
              AI call answering, WhatsApp automation, web design and local SEO, apps and business
              automation for service businesses. Find your problem below.
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

        {problems.map(({ id, problem, intro, services }, i) => (
          <section key={id} id={id} className={`scroll-mt-20 py-14 sm:py-20 ${i % 2 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-8 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue text-balance">{problem}</h2>
                <p className="mt-3 text-lg sm:text-xl text-gray-700">{intro}</p>
              </div>
              <ul className={`grid gap-6 ${services.length > 2 ? 'md:grid-cols-3' : services.length === 2 ? 'md:grid-cols-2' : 'max-w-2xl'}`}>
                {services.map(({ icon: Icon, name, body, gets, href, cta = 'Find out more' }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      prefetch={false}
                      className={`group flex h-full flex-col rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-primaryOrange hover:shadow-lg transition ${i % 2 ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <span className="flex size-12 items-center justify-center rounded-full bg-orange-50">
                        <Icon className="size-6 text-primaryOrange" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-xl font-bold text-primaryBlue">{name}</h3>
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
                        {cta} <ArrowRight size={18} aria-hidden="true" />
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
