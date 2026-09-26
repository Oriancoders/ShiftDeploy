import { RefreshCw, ShieldCheck, BellRing, Gauge, Pencil, PhoneCall, CheckCircle2 } from 'lucide-react';
import ServiceDetail from '../../../components/ServiceDetail';

const pains = [
  { title: 'Something breaks, nobody fixes it', body: 'A form stops working and you only find out when a customer tells you.' },
  { title: 'Updates keep getting put off', body: 'Out-of-date websites break more often and are easier to hack.' },
  { title: 'You worry about security', body: 'You’ve heard of sites being hacked, but don’t know if yours is safe.' },
  { title: 'Small changes take weeks', body: 'Changing a price or photo means chasing someone and waiting.' },
];

const gets = [
  { icon: RefreshCw, title: 'Updates handled', body: 'We keep your website’s software and plugins up to date, so it keeps working.' },
  { icon: ShieldCheck, title: 'Security checks', body: 'Regular checks and fixes to keep your website and your customers’ details safe.' },
  { icon: BellRing, title: 'Problems spotted early', body: 'We monitor your site, so we usually know about a problem before your customers do.' },
  { icon: Gauge, title: 'Kept fast', body: 'Monthly speed checks, so your site doesn’t slowly get slower.' },
  { icon: Pencil, title: 'Small changes done for you', body: 'New prices, photos or opening hours? Tell us and we’ll update it.' },
  { icon: PhoneCall, title: 'One team you can call', body: 'No more chasing different people. One team looks after everything.' },
];

const steps = [
  { title: 'Free website check', body: 'We look at your website’s health, security and speed, and tell you what needs attention.' },
  { title: 'Fixed monthly price', body: 'You get a clear monthly price for looking after your site. No surprises.' },
  { title: 'Set up in about a week', body: 'We set up monitoring and fix anything urgent straight away.' },
  { title: 'Looked after every month', body: 'Updates, checks and small improvements, month after month.' },
];

const faqs = [
  {
    q: 'What does website maintenance include?',
    a: 'Keeping your website’s software up to date, regular security checks, monitoring for problems, monthly speed checks and making small changes for you, like prices, photos or opening hours.',
  },
  {
    q: 'How much does website maintenance cost?',
    a: 'It’s a fixed monthly price that depends on the size of your site and how much you’d like us to handle. You’ll know the exact price after the free website check.',
  },
  {
    q: 'Do I really need website maintenance?',
    a: 'If your website brings in customers, yes. Without updates and checks, websites slowly break, slow down and become easier to hack, often without you noticing.',
  },
  {
    q: 'What happens if my website goes down?',
    a: 'Because we monitor your site, we usually know first and start fixing it straight away, rather than waiting for a customer to tell you.',
  },
  {
    q: 'Can you look after a website someone else built?',
    a: 'Usually, yes. We check it first as part of the free website check and tell you honestly if there’s anything we can’t support.',
  },
  {
    q: 'How long does it take to get started?',
    a: 'Setting up usually takes about a week. We fix anything urgent straight away.',
  },
  {
    q: 'Am I tied into a long contract?',
    a: 'No. You pay monthly and there’s no forced long-term commitment.',
  },
];

function CareVisual() {
  const rows = [
    ['Software updates', 'Done'],
    ['Security check', 'Passed'],
    ['Speed check', 'Good'],
    ['Your change requests', 'Done'],
  ];
  return (
    <figure className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">
        <p className="text-sm font-semibold text-gray-500">Your monthly website report</p>
        <p className="mt-1 text-xl font-bold text-primaryBlue">Everything’s looked after</p>
        <ul className="mt-5 divide-y divide-gray-100">
          {rows.map(([label, status]) => (
            <li key={label} className="flex items-center justify-between py-3">
              <span className="text-gray-700">{label}</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-green-700">
                <CheckCircle2 className="size-5" aria-hidden="true" /> {status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">Example of what you’d see each month.</figcaption>
    </figure>
  );
}

export default function CarePage({ children }) {
  return (
    <ServiceDetail
      slug="shiftflow"
      crumb="Website maintenance & support"
      h1="Your website, looked after."
      h1Accent="So you don’t have to."
      intro="Updates, security checks and small changes, handled by one team you can call. Your website stays safe, fast and working while you run your business."
      ctaLabel="Get your free website check"
      visual={<CareVisual />}
      ticks={['Free, no obligation', 'Fixed monthly price', 'No long contract']}
      pains={{ title: 'What happens when nobody looks after a website', items: pains }}
      gets={{ title: 'Everything your website needs, every month', items: gets }}
      steps={{ title: 'From free check to a website you don’t worry about', items: steps }}
      faqs={faqs}
      faqEyebrow="Questions about website maintenance"
      finalTitle="Want one less thing to worry about?"
      finalText="Get a free website check. We’ll show you what needs attention and how we’d look after it."
      service={{
        name: 'Website maintenance and support',
        type: 'Website maintenance',
        description: 'Monthly website maintenance for service businesses: updates, security checks, monitoring, speed checks and small changes.',
      }}
    >
      {children}
    </ServiceDetail>
  );
}
