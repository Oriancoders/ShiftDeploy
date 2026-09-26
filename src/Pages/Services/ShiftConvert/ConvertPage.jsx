import { Search, PenLine, MousePointerClick, ListChecks, Star, BarChart3 } from 'lucide-react';
import ServiceDetail from '../../../components/ServiceDetail';

const pains = [
  { title: 'People look, then leave', body: 'Visitors arrive, scroll a bit and go, without calling or booking.' },
  { title: 'It’s not clear why you', body: 'In a few seconds, people can’t tell what you do or why to choose you.' },
  { title: 'The form puts people off', body: 'Too many questions, and people give up halfway through.' },
  { title: 'It’s hard to act on a phone', body: 'The call or book button is small, hidden or hard to tap.' },
];

const gets = [
  { icon: Search, title: 'We find where people drop off', body: 'We review your key pages and see exactly where visitors lose interest.' },
  { icon: PenLine, title: 'Clearer wording', body: 'Plain-English wording that says what you do and why customers should pick you.' },
  { icon: MousePointerClick, title: 'An obvious next step', body: 'Clear, easy-to-tap buttons to call, book or enquire on every key page.' },
  { icon: ListChecks, title: 'Shorter enquiry forms', body: 'Only the questions you really need, so more people finish the form.' },
  { icon: Star, title: 'Trust where it counts', body: 'Reviews, photos and reassurance placed right where people decide.' },
  { icon: BarChart3, title: 'Results you can measure', body: 'We track completed enquiries and bookings, not just clicks.' },
];

const steps = [
  { title: 'Free conversion check', body: 'We look at your key pages and show you where visitors are dropping off.' },
  { title: 'Plan and fixed quote', body: 'A short list of changes, in order of impact, with a fixed price.' },
  { title: 'We make the changes', body: 'We improve the pages that matter most, without a full redesign.' },
  { title: 'Measure and improve', body: 'We track the enquiries that come in and keep improving what works.' },
];

const faqs = [
  {
    q: 'Why isn’t my website getting enquiries?',
    a: 'If people visit but don’t get in touch, it’s usually unclear wording, no obvious next step, a long form, or a site that’s awkward on a phone. If hardly anyone visits, the problem is being found on Google instead.',
  },
  {
    q: 'What is conversion rate optimisation?',
    a: 'It means getting more of your current visitors to call, book or enquire. Instead of paying for more traffic, you make the website better at turning visitors into customers.',
  },
  {
    q: 'Do I need a full website redesign?',
    a: 'Usually not. We focus on the few pages and steps that matter most, so improvements are quicker and cheaper than a rebuild.',
  },
  {
    q: 'Do you run A/B tests?',
    a: 'When there’s enough traffic to get a reliable answer, yes. For smaller sites, we make proven improvements first and test where it makes sense.',
  },
  {
    q: 'How do you measure the results?',
    a: 'We track real enquiries, bookings and calls, not just button clicks, so you can see whether the changes are bringing in more work.',
  },
  {
    q: 'Can you work with my current designer or developer?',
    a: 'Yes. We can make the changes ourselves or give your team clear recommendations to follow.',
  },
  {
    q: 'How quickly can you start?',
    a: 'We usually start the free conversion check within 48 hours, so you see the findings before any work is agreed.',
  },
];

function FormVisual() {
  const Field = ({ label, muted }) => (
    <div className={`rounded-md border px-3 py-2 text-xs ${muted ? 'border-gray-200 text-gray-400' : 'border-gray-300 text-gray-600'}`}>{label}</div>
  );
  return (
    <figure className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
          <p className="text-xs font-semibold text-red-600">Before</p>
          <div className="mt-3 space-y-2">
            {['Full name', 'Company', 'Job title', 'Email', 'Phone', 'Address', 'Postcode', 'How did you hear?'].map((f) => (
              <Field key={f} label={f} muted />
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-600">Many people give up halfway.</p>
        </div>
        <div className="rounded-2xl border-2 border-primaryOrange bg-white p-4 shadow-2xl self-start">
          <p className="text-xs font-semibold text-green-700">After</p>
          <div className="mt-3 space-y-2">
            {['Name', 'Phone', 'What do you need?'].map((f) => (
              <Field key={f} label={f} />
            ))}
          </div>
          <div className="mt-3 rounded-md bg-primaryOrange py-2 text-center text-xs font-bold text-white">Get a quote</div>
          <p className="mt-3 text-xs text-gray-600">Quick to finish on a phone.</p>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">Illustration: a shorter form gets finished more often.</figcaption>
    </figure>
  );
}

export default function ConvertPage({ children }) {
  return (
    <ServiceDetail
      slug="shiftconvert"
      crumb="Conversion rate optimisation"
      h1="More enquiries"
      h1Accent="from the visitors you already get."
      intro="People visit your website, then leave without getting in touch. We find what’s putting them off and fix it, so more visitors become customers, without a full redesign."
      ctaLabel="Get your free check"
      visual={<FormVisual />}
      ticks={['Free, no obligation', 'No full redesign', 'Results you can measure']}
      pains={{ title: 'Why visitors leave without getting in touch', items: pains }}
      gets={{ title: 'More enquiries, without paying for more traffic', items: gets }}
      steps={{ title: 'From free check to more enquiries', items: steps }}
      faqs={faqs}
      faqEyebrow="Questions about getting more enquiries"
      finalTitle="Getting visitors but not enquiries?"
      finalText="Get a free conversion check. We’ll show you where visitors drop off and the simplest changes to fix it."
      service={{
        name: 'Conversion rate optimisation',
        type: 'Conversion rate optimisation',
        description: 'Turn more website visitors into calls, bookings and enquiries with clearer wording, easier forms and obvious next steps.',
      }}
    >
      {children}
    </ServiceDetail>
  );
}
