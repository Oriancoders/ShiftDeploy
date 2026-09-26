import Link from 'next/link';
import { ArrowRight, PhoneCall, MessagesSquare, MessageCircle, CalendarCheck, BookOpenText, BellRing } from 'lucide-react';
import ServiceDetail from '../components/ServiceDetail';
import HeroAnimation from './LandingPage/landingComps/HeroAnimation';

const pains = [
  { title: 'Calls ring out while you work', body: 'You’re with a customer or on a job, and the caller rings the next business.' },
  { title: 'Evenings and weekends go quiet', body: 'Enquiries after hours wait until morning, and by then they’ve booked elsewhere.' },
  { title: 'Messages pile up', body: 'Website chats and WhatsApps sit unanswered while you’re busy.' },
  { title: 'A receptionist costs thousands', body: 'A full-time receptionist in the UK typically costs around £2,000 to £2,500 a month.' },
];

const gets = [
  { icon: PhoneCall, title: 'Answers your phone', label: 'AI phone answering', body: 'Picks up every call to your business number, day or night, and speaks naturally with your callers.' },
  { icon: MessagesSquare, title: 'Chats on your website', label: 'AI chatbot', body: 'Answers visitors’ questions on your website instantly and helps them book.' },
  { icon: MessageCircle, title: 'Replies on WhatsApp', label: 'WhatsApp automation', body: 'Answers WhatsApp messages in seconds, so customers never wait for a reply.' },
  { icon: CalendarCheck, title: 'Books appointments', label: 'Diary booking', body: 'Finds a free slot and books it straight into your diary, with reminders sent automatically.' },
  { icon: BookOpenText, title: 'Knows your business', label: 'Your FAQs, prices and hours', body: 'Answers questions about your services, prices and opening hours the way you would.' },
  { icon: BellRing, title: 'Keeps you in the loop', label: 'Instant alerts and handover', body: 'Texts you every new enquiry, and passes anything it can’t handle to you.' },
];

const audiences = [
  { title: 'Trades', body: 'Plumbers, electricians and builders who can’t answer the phone on a job.', href: '/plumbers', cta: 'See our work for plumbers' },
  { title: 'Clinics and practices', body: 'Private clinics, dentists and therapists who need every booking captured.' },
  { title: 'Salons and local services', body: 'Hair, beauty, fitness and local businesses that run on appointments.' },
];

const steps = [
  { title: 'Free demo', body: 'See the AI receptionist handle a real booking, and ask anything you like.' },
  { title: 'We set it up', body: 'It learns your services, prices, opening hours and how you like bookings made.' },
  { title: 'Goes live', body: 'On your phone number, website and WhatsApp, usually within days.' },
  { title: 'You get every enquiry', body: 'Every call, chat and message answered, and every lead sent to your phone.' },
];

const faqs = [
  {
    q: 'What is an AI receptionist?',
    a: 'An AI receptionist is a virtual receptionist that answers your business calls, website chats and WhatsApp messages. It answers common questions, takes details and books appointments 24/7, then texts you what came in.',
  },
  {
    q: 'How much does an AI receptionist cost?',
    a: 'It depends on your call volume and which channels you want covered. It costs a fraction of a full-time receptionist, which typically runs £2,000 to £2,500 a month in the UK. You get an exact price after the free demo.',
  },
  {
    q: 'Will callers know they’re talking to an AI?',
    a: 'Yes, and they should. It says briefly that the caller is speaking to your assistant and that the call may be recorded. It speaks naturally and politely, and passes anything it can’t handle to you.',
  },
  {
    q: 'Can I keep my business phone number?',
    a: 'Yes. Calls are forwarded to your AI receptionist, so customers ring the same number they always have.',
  },
  {
    q: 'Does it work on WhatsApp and my website too?',
    a: 'Yes. The same receptionist answers phone calls, website chats and WhatsApp messages, so every channel gets the same quick, consistent reply.',
  },
  {
    q: 'What happens if it can’t answer a question?',
    a: 'It takes the customer’s details and passes the message to you straight away, so you can call them back.',
  },
  {
    q: 'Is it UK GDPR compliant?',
    a: 'We set it up with UK GDPR in mind. Callers are told the call may be recorded, only the details needed are collected, and we agree with you how long they’re kept.',
  },
  {
    q: 'How long does it take to set up?',
    a: 'Usually a few days. We set it up for you once we know your services, prices, opening hours and how you take bookings.',
  },
];

export default function ReceptionistPage() {
  return (
    <ServiceDetail
      slug="digital-receptionist"
      path="/digital-receptionist"
      parent={{ label: 'Products', href: '/product' }}
      crumb="AI receptionist"
      h1="Every call, chat and WhatsApp"
      h1Accent="answered. Day or night."
      intro="Your AI receptionist picks up the phone, replies on your website and answers WhatsApp messages, 24/7. It answers questions, takes details and books appointments, then texts you what came in."
      ctaLabel="Book a free demo"
      visual={<HeroAnimation />}
      ticks={['Free demo', 'Keep your own number', 'Set up for you']}
      secondary={
        <Link href="/digital-receptionist/demo" prefetch={false} className="min-h-[44px] inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
          Try the live demo now <ArrowRight size={18} aria-hidden="true" />
        </Link>
      }
      pains={{ title: 'Every missed call is a customer for someone else', items: pains }}
      gets={{ eyebrow: 'What it does', title: 'One receptionist for your phone, website and WhatsApp', items: gets }}
      audiences={{ title: 'Built for businesses that run on bookings', items: audiences }}
      steps={{ title: 'From free demo to never missing a call', items: steps }}
      faqs={faqs}
      faqEyebrow="Questions about the AI receptionist"
      finalTitle="How many calls did you miss this week?"
      finalText="Book a free demo. See your AI receptionist answer a call, reply on WhatsApp and book an appointment."
      service={{
        name: 'Digital Receptionist: AI receptionist for phone, website chat and WhatsApp',
        type: 'AI receptionist',
        description: 'An AI receptionist that answers business phone calls, website chats and WhatsApp messages 24/7, answers questions and books appointments.',
      }}
    />
  );
}
