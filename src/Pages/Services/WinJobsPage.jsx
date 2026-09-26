import { Send, BellRing, CalendarCheck, ListChecks, MousePointerClick, Star, CheckCircle2 } from 'lucide-react';
import ServiceDetail from '../../components/ServiceDetail';

const pains = [
  { title: 'Quotes go quiet', body: 'You send a quote, hear nothing back, and never find the time to chase it.' },
  { title: 'People don’t turn up', body: 'Missed appointments leave gaps in your day you can’t fill.' },
  { title: 'Enquiries slip through', body: 'Leads come in by phone, email and WhatsApp, and some get forgotten.' },
  { title: 'Saying yes is hard', body: 'Long forms or unclear next steps put people off booking.' },
];

const gets = [
  { icon: Send, title: 'Quotes followed up for you', label: 'Automatic follow-ups', body: 'A polite follow-up goes out a few days after every quote, so more of them turn into jobs.' },
  { icon: BellRing, title: 'Fewer no-shows', label: 'Appointment reminders', body: 'Customers get a text or WhatsApp reminder before they’re due, so fewer forget.' },
  { icon: CalendarCheck, title: 'Book online in seconds', label: 'Online booking', body: 'Customers pick a time and book themselves, day or night.' },
  { icon: ListChecks, title: 'Every lead in one list', label: 'Simple enquiry tracking', body: 'All your enquiries in one place, so you can see who needs a reply and nothing gets lost.' },
  { icon: MousePointerClick, title: 'A website that makes saying yes easy', label: 'Conversion rate optimisation', body: 'Clearer wording, shorter forms and obvious buttons, so more visitors get in touch.' },
  { icon: Star, title: 'Reviews where people decide', label: 'Trust and reviews', body: 'Real reviews shown right where customers are making up their minds.' },
];

const steps = [
  { title: 'Free check', body: 'We look at what happens after an enquiry comes in, and where jobs are being lost.' },
  { title: 'Plan and fixed quote', body: 'A short list of fixes, in order of impact, with a fixed price.' },
  { title: 'We set it up', body: 'Follow-ups, reminders and booking, set up to fit how you already work.' },
  { title: 'More jobs won', body: 'We track the enquiries, bookings and jobs that come in, and keep improving.' },
];

const faqs = [
  {
    q: 'How do I follow up a quote without being pushy?',
    a: 'A short, friendly message a few days later asking if they have any questions works well. We set this up to happen automatically, so every quote gets followed up without you remembering.',
  },
  {
    q: 'How can I reduce no-shows?',
    a: 'Send a confirmation when someone books and a reminder before the appointment, by text or WhatsApp. Many businesses also take a deposit. We set up reminders that go out on their own.',
  },
  {
    q: 'Can customers book online with me?',
    a: 'Yes. We set up online booking so customers can pick a time that suits them and get reminders automatically.',
  },
  {
    q: 'Why isn’t my website getting enquiries?',
    a: 'If people visit but don’t get in touch, it’s usually unclear wording, no obvious next step, a long form or a site that’s awkward on a phone. Our free check shows which one it is.',
  },
  {
    q: 'What is conversion rate optimisation?',
    a: 'It means getting more of the people who visit your website to call, book or enquire, instead of paying for more visitors.',
  },
  {
    q: 'Do I need new software?',
    a: 'Often not. Where we can, we work with the tools you already use, like your calendar, email and WhatsApp, and connect them.',
  },
  {
    q: 'How do you measure the results?',
    a: 'We track real enquiries, bookings and jobs won, not just clicks, so you can see what’s bringing in work.',
  },
];

function QuoteVisual() {
  const items = [
    { day: 'Monday', text: 'Quote sent to Sarah', tone: 'text-gray-700' },
    { day: 'Wednesday', text: 'Friendly follow-up sent for you', tone: 'text-primaryBlue font-semibold' },
    { day: 'Wednesday', text: '“Yes please, when can you start?”', tone: 'text-green-700 font-semibold' },
  ];
  return (
    <figure className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">
        <p className="text-sm font-semibold text-gray-500">A quote that didn’t go quiet</p>
        <ol className="mt-5 space-y-4">
          {items.map(({ day, text, tone }) => (
            <li key={text} className="flex gap-3">
              <CheckCircle2 className="size-5 mt-0.5 shrink-0 text-green-700" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold text-gray-500">{day}</p>
                <p className={tone}>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">Example: the follow-up that wins the job.</figcaption>
    </figure>
  );
}

export default function WinJobsPage({ children }) {
  return (
    <ServiceDetail
      slug="shiftconvert"
      crumb="Turn enquiries into paying jobs"
      h1="Win more of the jobs"
      h1Accent="you’re already being asked for."
      intro="Quotes go unanswered, people forget their appointments and enquiries slip through the cracks. We make sure every lead is followed up, every booking is reminded, and saying yes is easy."
      ctaLabel="Get your free check"
      visual={<QuoteVisual />}
      ticks={['Free, no obligation', 'Works with your tools', 'Results you can measure']}
      stats={[
        {
          figure: 'Almost 7%',
          text: 'of monthly revenue lost to cancellations and no-shows by UK hair and beauty businesses.',
          source: 'Professional Beauty',
          url: 'https://professionalbeauty.co.uk/beauty-appointment-cancellations-income-loss-survey',
        },
      ]}
      pains={{ title: 'Where jobs slip away after the enquiry', items: pains }}
      gets={{ title: 'Every lead followed up, every booking reminded', items: gets }}
      steps={{ title: 'From free check to more jobs won', items: steps }}
      faqs={faqs}
      faqEyebrow="Questions about winning more jobs"
      finalTitle="How many quotes went quiet this month?"
      finalText="Get a free check. We’ll show you where jobs are slipping away and the simplest way to win more of them."
      service={{
        name: 'Turn enquiries into paying jobs: follow-ups, reminders, online booking and conversion rate optimisation',
        type: 'Lead follow-up and conversion',
        description: 'Win more jobs with automatic quote follow-ups, appointment reminders, online booking and a website that makes it easy to say yes.',
      }}
    >
      {children}
    </ServiceDetail>
  );
}
