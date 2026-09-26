import Link from 'next/link';
import { ArrowRight, Check, Phone, Target, MessageSquareText, Scale, HeartHandshake, Clock, Mail, Users, Lock, Video } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';

const container = 'max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8';
const CAR = '-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:grid sm:gap-6 sm:overflow-visible sm:pb-0';
const ITEM = 'snap-start shrink-0 w-[82%] sm:w-auto';

const beliefs = [
  { icon: Target, title: 'Start with the problem, not the tool', body: 'We don’t sell websites or software. We find what’s costing you customers, then pick the simplest fix.' },
  { icon: MessageSquareText, title: 'Plain English, always', body: 'No jargon. If we can’t explain it clearly, we haven’t understood it well enough.' },
  { icon: Scale, title: 'Only fix what matters', body: 'We tell you what to do first, what can wait and what isn’t worth the money.' },
  { icon: HeartHandshake, title: 'Honest if we can’t help', body: 'If we’re not the right fit, or nothing needs fixing, we’ll tell you.' },
];

const howWeWork = [
  { icon: Clock, title: 'We work UK hours', body: 'Our working day overlaps yours, so you’re not waiting until the next morning.' },
  { icon: Mail, title: 'A reply within 24 hours', body: 'Every enquiry gets a reply from a person within 24 hours.' },
  { icon: Users, title: 'You talk to the people doing the work', body: 'No account managers and no handoffs. The person who checks your business is the one who fixes it.' },
  { icon: Lock, title: 'Nothing changes without your say-so', body: 'The free check doesn’t touch anything. We only ask for the access we need, and hand it back afterwards.' },
  { icon: Video, title: 'Video calls, not travel costs', body: 'Most work happens on a quick video call and a shared document, so there’s nothing extra to pay for.' },
];

const refuse = [
  'We don’t disappear once you’ve paid. You always know what’s happening.',
  'We don’t hide behind jargon. You get a clear answer in plain English.',
  'We don’t promise what we can’t deliver, like guaranteed first place on Google.',
  'We don’t push you into long contracts or things you don’t need.',
];

const faqs = [
  {
    q: 'Who is ShiftDeploy?',
    a: 'ShiftDeploy is a small remote team that helps UK service businesses stop losing work. We find where you’re losing customers and fix it with the right tool: an AI receptionist, automation, an app or a website.',
  },
  {
    q: 'What kind of businesses do you work with?',
    a: 'Service businesses: trades like plumbers and electricians, private clinics and practices, salons and other local businesses that rely on calls, bookings and enquiries.',
  },
  {
    q: 'Where are you based?',
    a: 'We’re a remote team working with clients across the UK, during UK working hours. Most work happens by video call and shared documents.',
  },
  {
    q: 'How quickly will you reply?',
    a: 'Every enquiry gets a reply from a person within 24 hours.',
  },
  {
    q: 'Who will I be speaking to?',
    a: 'The people doing the work. There are no account managers passing messages along.',
  },
  {
    q: 'How do I know if you’re right for my business?',
    a: 'Start with the free check. We’ll look at where you’re losing customers and tell you honestly whether we can help, with no obligation.',
  },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ShiftDeploy',
    url: 'https://shiftdeploy.com/about',
    mainEntity: { '@id': 'https://shiftdeploy.com/#organization' },
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
      { '@type': 'ListItem', position: 2, name: 'About us', item: 'https://shiftdeploy.com/about' },
    ],
  },
];

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl mb-10">
      <p className="text-sm sm:text-base font-semibold text-orange-700 mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue text-balance">{title}</h2>
      {text && <p className="mt-3 text-lg sm:text-xl text-gray-700">{text}</p>}
    </div>
  );
}

export default function AboutPage() {
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
            <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">About us</p>
            <h1 className="text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] xl:text-6xl font-bold text-primaryBlue text-balance">
              We help service businesses
              <span className="block text-primaryOrange">stop losing work.</span>
            </h1>
            <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
              ShiftDeploy is a small remote team working with service businesses across the UK. We
              find where you’re losing customers and fix it, whether that’s with an AI receptionist,
              automation, an app or a website.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className={container}>
            <SectionHead eyebrow="What we believe" title="Four rules we work by" />
            <ul className={`${CAR} sm:grid-cols-2 lg:grid-cols-4`}>
              {beliefs.map(({ icon: Icon, title, body }) => (
                <li key={title} className={`${ITEM} rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8`}>
                  <span className="flex size-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="size-6 text-primaryOrange" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-primaryBlue">{title}</h3>
                  <p className="mt-2 text-gray-700 sm:text-lg">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 py-14 sm:py-20">
          <div className={container}>
            <SectionHead
              eyebrow="How we work"
              title="A remote team that works like it’s down the road"
              text="What working with us actually looks like, day to day."
            />
            <ul className={`${CAR} sm:grid-cols-2 lg:grid-cols-3`}>
              {howWeWork.map(({ icon: Icon, title, body }) => (
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

        <section className="bg-white py-14 sm:py-20">
          <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
            <div>
              <SectionHead eyebrow="What we won’t do" title="Promises we keep by not making them" />
              <ul className="space-y-4">
                {refuse.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-lg text-gray-700">
                    <Check className="size-6 mt-0.5 shrink-0 text-green-700" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 self-start">
              <p className="text-sm font-semibold text-orange-700">Work we’ve done</p>
              <h3 className="mt-2 text-2xl font-bold text-primaryBlue">A website a client could trust</h3>
              <p className="mt-3 text-gray-700 sm:text-lg">
                Bullseye Investments needed a website that made a clear first impression and was easy
                for clients to use. We built it, and their Head of Business Development, Farjad Abbas,
                called it “better than anything I’ve seen.”
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/CaseStudies/BullseyesCase" prefetch={false} className="min-h-[44px] inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
                  Read the case study <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link href="/missions" prefetch={false} className="min-h-[44px] inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
                  See all our work <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-gray-50 py-14 sm:py-20 scroll-mt-20">
          <div className={container}>
            <SectionHead eyebrow="Questions about us" title="Straight answers." />
            <dl className="grid gap-6 md:grid-cols-2">
              {faqs.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
                  <dt><h3 className="text-lg sm:text-xl font-bold text-primaryBlue">{q}</h3></dt>
                  <dd className="mt-3 text-gray-700 sm:text-lg leading-relaxed">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-primaryBlue text-white px-4 py-14 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Let’s find where you’re losing work</h2>
          <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            Start with a free check. We’ll tell you honestly what’s worth fixing, and what isn’t.
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
