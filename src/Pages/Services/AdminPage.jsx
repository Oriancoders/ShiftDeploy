import { ReceiptPoundSterling, Bot, Workflow, Smartphone, ShieldCheck, BarChart3, CheckCircle2 } from 'lucide-react';
import ServiceDetail from '../../components/ServiceDetail';

const pains = [
  { title: 'Evenings lost to paperwork', body: 'Invoices, quotes and emails, done after a full day’s work.' },
  { title: 'Chasing people for money', body: 'Sending reminder after reminder to get paid for work you’ve done.' },
  { title: 'Typing the same thing twice', body: 'Copying details from emails to spreadsheets to your diary.' },
  { title: 'A website nobody looks after', body: 'Updates get put off until something breaks.' },
];

const gets = [
  { icon: ReceiptPoundSterling, title: 'Invoices and payment chasers', label: 'Invoice automation', body: 'Invoices go out on time and polite reminders follow, so you get paid without chasing.' },
  { icon: Bot, title: 'An assistant for the boring jobs', label: 'AI assistant (AI agent)', body: 'An AI assistant that sorts enquiries, drafts replies and updates your records, so you don’t have to.' },
  { icon: Workflow, title: 'No more copying and pasting', label: 'Business automation', body: 'We connect the tools you already use, so details only need entering once.' },
  { icon: Smartphone, title: 'An app built around your business', label: 'Mobile & web apps', body: 'Booking, job or customer apps that fit how your business actually runs.' },
  { icon: ShieldCheck, title: 'Your website looked after', label: 'Website maintenance & support', body: 'Updates, security checks and small changes handled for a fixed monthly price.' },
  { icon: BarChart3, title: 'See how you’re doing at a glance', label: 'Simple dashboards', body: 'Enquiries, jobs and money in one simple view, without the spreadsheet.' },
];

const steps = [
  { title: 'Free check', body: 'You tell us what eats your time. We find the jobs that can run on their own.' },
  { title: 'Plan and fixed quote', body: 'The simplest fixes first, with a clear, fixed price.' },
  { title: 'We set it up', body: 'We build it around the way you already work, and show you how it runs.' },
  { title: 'Looked after', body: 'We keep it running and improve it as your business grows.' },
];

const faqs = [
  {
    q: 'What admin can I automate in my business?',
    a: 'Common ones are invoices and payment reminders, appointment reminders, replying to enquiries, quote follow-ups and copying details between your email, diary and spreadsheets.',
  },
  {
    q: 'What is an AI agent, and can it help my business?',
    a: 'An AI agent is an assistant that can carry out tasks for you, like reading enquiries, drafting replies or updating records. It’s useful for repetitive jobs that follow the same steps each time.',
  },
  {
    q: 'How do I stop chasing unpaid invoices?',
    a: 'Send invoices straight after the job with an easy way to pay, then let polite automatic reminders do the chasing. We set this up for you.',
  },
  {
    q: 'Do I need to change the software I use?',
    a: 'Usually not. Where we can, we connect the tools you already use rather than asking you to switch.',
  },
  {
    q: 'Can you build an app for my business?',
    a: 'Yes. We build mobile and web apps for things like bookings, jobs and customer accounts, designed around how your business works.',
  },
  {
    q: 'Do you offer website maintenance and support?',
    a: 'Yes. For a fixed monthly price we keep your website updated, run security checks, monitor for problems and make small changes for you.',
  },
  {
    q: 'How much time could I save?',
    a: 'It depends on your business. Our free check looks at the jobs that take up your time and tells you honestly which ones can be automated.',
  },
];

function WeekVisual() {
  const rows = ['Invoices sent', 'Payment reminders sent', 'Appointment reminders sent', 'Website updates done'];
  return (
    <figure className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">
        <p className="text-sm font-semibold text-gray-500">This week, done for you</p>
        <p className="mt-1 text-xl font-bold text-primaryBlue">Nothing for you to chase</p>
        <ul className="mt-5 divide-y divide-gray-100">
          {rows.map((label) => (
            <li key={label} className="flex items-center justify-between py-3">
              <span className="text-gray-700">{label}</span>
              <CheckCircle2 className="size-5 text-green-700" aria-label="Done" />
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">Example of the admin that runs on its own.</figcaption>
    </figure>
  );
}

export default function AdminPage({ children }) {
  return (
    <ServiceDetail
      slug="shiftflow"
      crumb="Get your evenings back"
      h1="Get your evenings back"
      h1Accent="from admin."
      intro="Invoices, reminders, chasing payments, copying details from one place to another. We take the repetitive jobs off your plate, build simple tools around how you work, and keep it all running."
      ctaLabel="Get your free check"
      visual={<WeekVisual />}
      ticks={['Free, no obligation', 'Works with your tools', 'No long contract']}
      stats={[
        {
          figure: '11 hours',
          text: 'a week spent by UK small business owners on admin and finance tasks.',
          source: 'Amex SME Barometer, 2026',
          url: 'https://retailtimes.co.uk/amex-sme-barometer-small-business-owners-spend-nearly-twice-the-time-on-admin-than-growing-their-business/',
        },
        {
          figure: '68%',
          text: 'of UK tradespeople are chasing late payments from customers.',
          source: 'Aviva, 2025',
          url: 'https://www.aviva.com/newsroom/news-and-research-overview/news-releases/2025/01/15012025/',
        },
      ]}
      pains={{ title: 'The jobs that eat your time', items: pains }}
      gets={{ title: 'Admin that runs on its own', items: gets }}
      steps={{ title: 'From free check to your evenings back', items: steps }}
      faqs={faqs}
      faqEyebrow="Questions about admin and automation"
      finalTitle="What would you do with 11 extra hours a week?"
      finalText="Get a free check. Tell us what eats your time and we’ll show you what can run on its own."
      service={{
        name: 'Business automation, AI assistants, apps and website maintenance',
        type: 'Business process automation',
        description: 'Automate invoices, payment reminders and repetitive admin with AI assistants, business automation, custom apps and website maintenance.',
      }}
    >
      {children}
    </ServiceDetail>
  );
}
