import { Check, ArrowRight, ArrowUpRight, Star, QrCode, BellRing, MailCheck, ReceiptText, ShieldCheck } from 'lucide-react';
import ServiceDetail from '../components/ServiceDetail';

const LIVE_URL = 'https://reviewyourdoctor.shiftdeploy.com';
const SIGNUP_URL = `${LIVE_URL}/signup`;

const pains = [
  { title: 'Happy patients stay quiet', body: 'Most satisfied patients never think to leave a review, even when they loved their visit.' },
  { title: 'One bad review stands out', body: 'With only a few reviews, a single unhappy patient can shape how everyone sees you.' },
  { title: 'Complaints reach Google first', body: 'You find out about a problem when it’s already public, not when you could fix it.' },
  { title: 'Asking feels awkward', body: 'Your team is busy, and asking every patient for a review rarely happens.' },
];

const gets = [
  { icon: QrCode, title: 'One poster at reception', label: 'QR review poster', body: 'Patients scan a branded code with their own phone. No app, no hardware, no staff training.' },
  { icon: Star, title: 'More 5-star Google reviews', label: 'Google review growth', body: 'Every patient is asked at the right moment, and a Google review takes two taps.' },
  { icon: BellRing, title: 'Problems reach you first', label: 'Private feedback and alerts', body: 'Unhappy patients can tell you privately, and the manager is alerted straight away.' },
  { icon: MailCheck, title: 'Win unhappy patients back', label: 'Automatic follow-ups', body: 'Follow-up emails go out in your clinic’s name, and once it’s resolved, one click invites a review.' },
  { icon: ReceiptText, title: 'Receipts without a billing system', label: 'Patient billing', body: 'Add a patient, click send, and a branded PDF receipt lands in their email.' },
  { icon: ShieldCheck, title: 'Built with UK GDPR in mind', label: 'Fair to Google’s rules', body: 'Consent at signup, a published DPA, and the same review choice for every patient.' },
];

const steps = [
  { title: 'Start your free trial', body: 'Sign up in minutes. No card needed to start.' },
  { title: 'Print your poster', body: 'Put your branded QR poster at reception, or send the link in receipts.' },
  { title: 'Patients rate their visit', body: 'Every patient chooses a Google review or private feedback, in seconds.' },
  { title: 'Watch reviews grow', body: 'See ratings, feedback and trends on your live dashboard.' },
];

const plans = [
  { name: 'Starter', price: '£49', points: ['Branded QR poster and review requests', 'Private feedback and instant alerts', 'Live dashboard and patient records'] },
  { name: 'Growth', price: '£69', popular: true, points: ['Everything in Starter', 'Automatic follow-up emails', 'One-click win-back review invites'] },
  { name: 'Pro', price: '£79', points: ['Everything in Growth', 'Patient billing and PDF receipts', 'Custom emails and revenue reports'] },
];

const faqs = [
  {
    q: 'How can my clinic get more Google reviews?',
    a: 'Ask every patient at the right moment and make it quick. With Review Your Doctor, patients scan a code at reception and can leave a Google review in two taps.',
  },
  {
    q: 'Is it allowed to ask patients for reviews?',
    a: 'Yes. Google allows businesses to ask for reviews, as long as every customer gets the same chance to leave one. Review Your Doctor gives every patient the same choice.',
  },
  {
    q: 'What happens when a patient is unhappy?',
    a: 'They can tell you privately. The manager is alerted straight away, so you can put things right, and then invite them to leave a review once it’s resolved.',
  },
  {
    q: 'Do patients need to download an app?',
    a: 'No. Patients scan the QR code with their phone’s camera and rate their visit in their web browser.',
  },
  {
    q: 'Is it UK GDPR compliant?',
    a: 'It’s built with UK GDPR in mind, with consent at signup and a published data processing agreement.',
  },
  {
    q: 'How much does it cost?',
    a: 'Every plan starts with a free 30-day trial. After that, plans are £49, £69 or £79 a month, depending on the features you need.',
  },
  {
    q: 'How quickly can we start?',
    a: 'In minutes. Sign up, print your branded poster and put it at reception.',
  },
];

function ReviewPhoneVisual() {
  return (
    <figure className="w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
      <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl">
        <p className="text-sm font-bold text-primaryBlue">Your clinic</p>
        <p className="text-xs text-gray-500">How was your visit today?</p>
        <div className="my-5 flex justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-8 fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
            <p className="text-sm font-bold text-emerald-700">Leave a Google review</p>
            <p className="mt-0.5 text-xs text-emerald-700/80">Two taps</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">
            <p className="text-sm font-bold text-primaryBlue">Tell the clinic privately</p>
            <p className="mt-0.5 text-xs text-gray-500">Goes to the manager</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">What your patients see on their phone.</figcaption>
    </figure>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-14 sm:py-20 scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <p className="text-sm sm:text-base font-semibold text-orange-700 mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue text-balance">Simple plans, free for 30 days</h2>
          <p className="mt-3 text-lg sm:text-xl text-gray-700">Start free, then pick the plan that suits your clinic. No card needed to start.</p>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {plans.map(({ name, price, points, popular }) => (
            <li key={name} className={`relative flex flex-col rounded-2xl bg-white p-6 sm:p-8 ${popular ? 'border-2 border-primaryOrange shadow-xl' : 'border border-gray-200'}`}>
              {popular && <p className="absolute -top-3 left-6 rounded-full bg-primaryOrange px-3 py-1 text-xs font-bold text-white">Most popular</p>}
              <h3 className="text-xl font-bold text-primaryBlue">{name}</h3>
              <p className="mt-2 text-4xl font-bold text-primaryBlue">{price}<span className="text-base font-medium text-gray-600"> a month</span></p>
              <ul className="mt-5 space-y-2 flex-1">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-gray-700">
                    <Check className="size-5 mt-0.5 shrink-0 text-green-700" aria-hidden="true" /> {pt}
                  </li>
                ))}
              </ul>
              <a
                href={SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold transition-colors ${popular ? 'bg-primaryOrange hover:bg-toOrange text-white' : 'border-2 border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white'}`}
              >
                Start free trial <ArrowRight size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ReviewYourDoctorLanding() {
  return (
    <ServiceDetail
      slug="review-your-doctor"
      path="/review-your-doctor"
      parent={{ label: 'Products', href: '/product' }}
      crumb="Review Your Doctor"
      h1="More 5-star Google reviews"
      h1Accent="for your clinic."
      intro="Review Your Doctor makes it quick and easy for every patient to leave a Google review, and lets you hear about any problem privately before it goes public."
      ctaLabel="Start your free trial"
      ctaHref={SIGNUP_URL}
      visual={<ReviewPhoneVisual />}
      ticks={['Free for 30 days', 'No card needed', 'Live in minutes']}
      secondary={
        <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange">
          See it live <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      }
      pains={{ title: 'Why good clinics end up with too few reviews', items: pains }}
      gets={{ eyebrow: 'What it does', title: 'Everything you need to grow your reputation', items: gets }}
      steps={{ title: 'From sign-up to more reviews in minutes', items: steps }}
      faqs={faqs}
      faqEyebrow="Questions about getting more reviews"
      finalTitle="Grow your clinic’s reputation, the fair way"
      finalText="Start your free 30-day trial today. Put one poster at reception and watch the reviews come in."
      service={{
        name: 'Review Your Doctor: Google review software for UK private clinics',
        type: 'Review management software',
        description: 'Patient review software that helps UK private clinics get more 5-star Google reviews and handle problems privately first.',
      }}
      extraSchema={[
        {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Review Your Doctor',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          url: LIVE_URL,
          description: 'Google review and patient feedback software for UK private clinics.',
          offers: plans.map(({ name, price }) => ({
            '@type': 'Offer',
            name,
            price: price.replace('£', ''),
            priceCurrency: 'GBP',
          })),
          publisher: { '@id': 'https://shiftdeploy.com/#organization' },
        },
      ]}
    >
      <Pricing />
    </ServiceDetail>
  );
}
