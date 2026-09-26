import Link from 'next/link';
import { ArrowRight, BellRing, MessageSquareReply, ReceiptPoundSterling } from 'lucide-react';

const jobs = [
  {
    icon: BellRing,
    title: 'Appointment reminders',
    body: 'Customers get a text before they’re due, so fewer people forget to turn up.',
  },
  {
    icon: MessageSquareReply,
    title: 'Enquiry follow-ups',
    body: 'Every enquiry gets a reply on WhatsApp, text or email, and a nudge later.',
  },
  {
    icon: ReceiptPoundSterling,
    title: 'Invoices and payment chasers',
    body: 'Invoices go out and polite reminders follow, without you chasing.',
  },
];

export default function AdminAutomation() {
  return (
    <section id="admin" className="w-full bg-white py-16 sm:py-24 border-y border-gray-100 scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">
            Business automation
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Still doing admin at 9pm?
            <span className="block text-primaryOrange">Let it run itself.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            We automate the repetitive jobs that eat into your evenings, so they happen on
            time without you.
          </p>
        </div>

        <ul className="-mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:grid md:gap-6 md:overflow-visible md:pb-0 md:grid-cols-3">
          {jobs.map(({ icon: Icon, title, body }) => (
            <li key={title} className="snap-start shrink-0 w-[82%] md:w-auto rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <span className="flex size-12 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon className="size-6 text-primaryOrange" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-primaryBlue">{title}</h3>
              <p className="mt-2 text-gray-600 sm:text-lg">{body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link
            href="/ContactUs"
            prefetch={false}
            className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
          >
            Get your free check <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
