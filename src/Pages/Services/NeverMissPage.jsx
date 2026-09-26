import { PhoneCall, MessageSquareText, MessageCircle, Mail, CalendarCheck, BellRing } from 'lucide-react';
import ServiceDetail from '../../components/ServiceDetail';
import HeroAnimation from '../LandingPage/landingComps/HeroAnimation';

const pains = [
  { title: 'You can’t answer on a job', body: 'You’re with a customer or up a ladder. The phone rings out.' },
  { title: 'Voicemail means lost work', body: 'Most people don’t leave a message. They just ring the next business.' },
  { title: 'Messages wait till evening', body: 'WhatsApps and emails sit unread while the customer books someone else.' },
  { title: 'Out-of-hours enquiries go cold', body: 'Enquiries at night and weekends aren’t answered until it’s too late.' },
];

const gets = [
  { icon: PhoneCall, title: 'Every call answered', label: 'AI receptionist', body: 'A virtual receptionist answers your calls day or night, takes details and books appointments.', href: '/digital-receptionist', cta: 'See the AI receptionist' },
  { icon: MessageSquareText, title: 'A text back when you miss a call', label: 'Missed call text back', body: 'If a call slips through, the caller gets a friendly text straight away, so they don’t ring someone else.' },
  { icon: MessageCircle, title: 'Instant WhatsApp replies', label: 'WhatsApp automation', body: 'Customers get an answer on WhatsApp in seconds, and can book or ask questions at any hour.' },
  { icon: Mail, title: 'Enquiry forms that reply at once', label: 'Instant enquiry replies', body: 'Every website enquiry gets an immediate reply, so the customer knows you’ve got it.' },
  { icon: CalendarCheck, title: 'Bookings while you sleep', label: '24/7 online booking', body: 'Customers can book a time that suits them, even when you’re closed.' },
  { icon: BellRing, title: 'Every lead on your phone', label: 'Instant alerts', body: 'You get a text with every new enquiry and booking, so nothing gets missed.' },
];

const steps = [
  { title: 'Free check', body: 'We look at how calls, messages and enquiries reach you now, and where they slip away.' },
  { title: 'Plan and fixed quote', body: 'The simplest setup for your business, with a fixed price.' },
  { title: 'We set it up', body: 'Simpler setups, like call answering or WhatsApp replies, can often be live within days.' },
  { title: 'Every enquiry answered', body: 'Calls, messages and forms all get a reply, and you see every lead.' },
];

const faqs = [
  {
    q: 'What is an AI receptionist?',
    a: 'An AI receptionist is a virtual receptionist that answers your business phone. It picks up every call, answers common questions, takes details and books appointments, then texts you what came in.',
  },
  {
    q: 'Will callers know it isn’t a person?',
    a: 'Yes, and they should. It says briefly that the caller is speaking to your assistant and that the call may be recorded. It speaks naturally, and anything it can’t handle is passed to you as a message.',
  },
  {
    q: 'Can I keep my business phone number?',
    a: 'Yes. Calls you can’t answer are forwarded, so customers ring the same number they always have.',
  },
  {
    q: 'What is missed call text back?',
    a: 'When you can’t answer, the caller automatically gets a text saying sorry you missed them, with a way to book or reply. It stops them ringing a competitor.',
  },
  {
    q: 'Can it reply to customers on WhatsApp?',
    a: 'Yes. We set up WhatsApp for your business so customers get instant replies, can book and get reminders automatically.',
  },
  {
    q: 'Is it cheaper than a receptionist or answering service?',
    a: 'Usually, yes. A full-time receptionist in the UK typically costs around £2,000 to £2,500 a month including National Insurance and pension. You’ll get an exact price in your quote.',
  },
  {
    q: 'What happens to calls it can’t handle?',
    a: 'They’re passed to you as a message with the caller’s details, so you can call back. Urgent calls can be flagged straight away.',
  },
];

export default function NeverMissPage({ children }) {
  return (
    <ServiceDetail
      slug="shiftspeed"
      crumb="Never miss a call or enquiry"
      h1="Never miss a call"
      h1Accent="or enquiry again."
      intro="When you’re on a job, with a customer or closed for the night, calls and messages go unanswered, and people ring the next business. We make sure every one gets a reply, straight away."
      ctaLabel="Get your free check"
      visual={<HeroAnimation />}
      ticks={['Free, no obligation', 'Keep your own number', 'Often live within days']}
      pains={{ title: 'Where enquiries slip away', items: pains }}
      gets={{ title: 'Every call and message answered', items: gets }}
      steps={{ title: 'From free check to never missing a lead', items: steps }}
      faqs={faqs}
      faqEyebrow="Questions about missed calls"
      finalTitle="How many calls did you miss this week?"
      finalText="Get a free check. We’ll show you where enquiries are slipping away and the simplest way to catch every one."
      service={{
        name: 'Never miss a call or enquiry: AI receptionist, missed call text back and WhatsApp automation',
        type: 'Call answering and enquiry response',
        description: 'Answer every call, message and website enquiry straight away with an AI receptionist, missed call text back, WhatsApp automation and instant alerts.',
      }}
    >
      {children}
    </ServiceDetail>
  );
}
