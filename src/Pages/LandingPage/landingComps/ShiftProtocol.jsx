import { ArrowRight, Check, Phone } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: 'Free check',
    body: 'Tell us about your business. We look at your calls, messages, website and admin to find where work is slipping away.',
  },
  {
    title: 'A clear plan and quote',
    body: 'The simplest fix for your problem, whether that’s AI, WhatsApp, an app or a website, with a clear price. No pressure.',
  },
  {
    title: 'We fix it',
    body: 'We do the work and keep you updated along the way. No jargon, no disappearing.',
  },
  {
    title: 'You see what came back',
    body: 'We go through the results with you, like calls answered and enquiries won, and keep improving.',
  },
];

const ShiftProtocol = () => {
  return (
    <section id="the-shift-protocol" className="bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">How it works</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Four simple steps.
            <span className="block text-primaryOrange">No jargon, no surprises.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            Whether the answer is AI, WhatsApp, an app or a website, every project starts
            the same way: with your problem.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, body }, i) => (
            <li key={title} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <span className="flex size-10 items-center justify-center rounded-full bg-primaryBlue text-white font-bold">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-primaryBlue">{title}</h3>
              <p className="mt-2 text-gray-600 sm:text-lg">{body}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="bg-primaryBlue text-white px-4 py-14 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-balance">Ready to stop losing work?</h2>
        <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
          Get a free check of your calls, messages, website and admin. We’ll show you where the
          biggest leaks are and the simplest way to fix them.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="/ContactUs"
            prefetch={false}
            className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg"
          >
            Get your free check <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <a
            href="tel:+447311126710"
            className="border-2 border-white text-white hover:bg-white hover:text-primaryBlue text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Phone size={20} aria-hidden="true" /> Or call 07311 126710
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm sm:text-base text-white/85">
          {['Free, no obligation', 'Plain English, no jargon', 'Honest if we can’t help'].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-green-400" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ShiftProtocol;
