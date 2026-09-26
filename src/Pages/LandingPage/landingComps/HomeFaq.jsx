import JsonLd from '../../../components/JsonLd';

// Kept fully visible (no accordion) so search engines and AI assistants can read every answer.
const faqs = [
  {
    q: 'What is an AI receptionist, and how does it work?',
    a: 'An AI receptionist is a virtual receptionist that answers your business phone for you. It picks up every call, day or night, answers common questions, takes the caller’s details and books appointments, then sends you a text so you know what came in.',
  },
  {
    q: 'Will my callers know they’re speaking to an AI?',
    a: 'Yes, and they should. We set it up to say briefly that the caller is speaking to your assistant and that the call may be recorded. It speaks naturally and politely, and anything it can’t handle is passed to you as a message.',
  },
  {
    q: 'Can I keep my existing business phone number?',
    a: 'Yes. You keep your number. Calls you can’t answer are forwarded to the AI receptionist, so customers ring the same number they always have.',
  },
  {
    q: 'Is an AI receptionist cheaper than a telephone answering service or a receptionist?',
    a: 'Usually, yes. A full-time receptionist in the UK typically costs around £2,000 to £2,500 a month once National Insurance and pension are included. An AI receptionist costs a fraction of that and never takes a day off. We’ll give you an exact price in your quote.',
  },
  {
    q: 'Is it UK GDPR compliant?',
    a: 'We set everything up with UK GDPR in mind. Callers are told the call may be recorded, we only collect the details needed to help them, and we agree with you how long information is kept and how requests to delete it are handled.',
  },
  {
    q: 'Can it book appointments straight into my diary?',
    a: 'Yes. Bookings are added to your diary automatically and you get a text straight away. There’s nothing to write down or chase later.',
  },
  {
    q: 'Can you automate WhatsApp messages for my business?',
    a: 'Yes. We set up WhatsApp for your business so customers get instant replies, can book or ask questions at any hour, and receive appointment reminders automatically. Many of your customers already prefer WhatsApp to calling.',
  },
  {
    q: 'Why isn’t my website getting enquiries?',
    a: 'It’s usually one of three things: it loads slowly on a phone, people can’t find you on Google, or it isn’t clear what to do next. Our free website audit checks all three and tells you, in plain English, what to fix first.',
  },
  {
    q: 'Do I need a new website, or can you fix the one I have?',
    a: 'Often you don’t need a new one. Many websites only need to load faster, explain things more clearly and make it easier to call or book. If a rebuild really is the better option, we’ll tell you why.',
  },
  {
    q: 'How can I get more Google reviews for my business?',
    a: 'Ask at the right moment and make it quick. A QR code at your front desk lets happy customers leave a Google review in two taps, and anyone unhappy can tell you privately so you can put it right first.',
  },
  {
    q: 'How much does it cost to work with ShiftDeploy?',
    a: 'It depends on what fixes your problem, so every project starts with a free check. You then get a clear, fixed quote before any work begins. Review Your Doctor, our review software for clinics, starts from £49 a month.',
  },
  {
    q: 'How long does it take?',
    a: 'Simpler fixes, like call answering or WhatsApp replies, can often be live within days. A new website or app takes longer. You’ll get a clear timeline with your quote, before anything starts.',
  },
  {
    q: 'Do you work with businesses across the UK?',
    a: 'Yes. We work remotely with service businesses across the UK, from trades and clinics to salons and local firms, so it doesn’t matter where you’re based.',
  },
  {
    q: 'What happens after the free check?',
    a: 'We send you a plain-English summary of where you’re losing customers and the simplest way to fix it. There’s no obligation, and if we can’t help, we’ll say so.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function HomeFaq() {
  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-24 scroll-mt-20">
      <JsonLd data={faqSchema} />
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Questions we get asked</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Straight answers.
            <span className="block text-primaryOrange">No sales talk.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            What business owners ask us most about call answering, WhatsApp, websites and
            reviews.
          </p>
        </div>

        <dl className="grid gap-6 md:grid-cols-2">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <dt>
                <h3 className="text-lg sm:text-xl font-bold text-primaryBlue">{q}</h3>
              </dt>
              <dd className="mt-3 text-gray-700 sm:text-lg leading-relaxed">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
