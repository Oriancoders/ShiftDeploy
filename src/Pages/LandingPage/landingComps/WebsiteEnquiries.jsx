import Link from 'next/link';
import { ArrowRight, Smartphone, MousePointerClick, Wrench } from 'lucide-react';

const fixes = [
  {
    icon: Smartphone,
    problem: 'Slow to load on a phone',
    fix: 'We make it load fast, so people don’t give up and go to a competitor.',
    href: '/services/shiftspeed',
    link: 'Website speed',
  },
  {
    icon: MousePointerClick,
    problem: 'People look, then leave',
    fix: 'Clear pages and simple enquiry forms that get people to call or book.',
    href: '/services/shiftconvert',
    link: 'More enquiries',
  },
  {
    icon: Wrench,
    problem: 'Out of date and hard to change',
    fix: 'A new website built to bring in work and show up on Google.',
    href: '/services/shiftbuild',
    link: 'New website',
  },
];

export default function WebsiteEnquiries() {
  return (
    <section id="website" className="w-full bg-gray-50 py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-semibold text-primaryOrange mb-4">
            Web design &amp; local SEO
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Your website looks fine.
            <span className="block text-primaryOrange">So why isn’t it ringing?</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            We build and fix websites for service businesses so they load fast, get found on
            Google and turn visitors into calls and bookings.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {fixes.map(({ icon: Icon, problem, fix, href, link }) => (
            <li key={problem} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-full bg-orange-50">
                <Icon className="size-6 text-primaryOrange" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-primaryBlue">{problem}</h3>
              <p className="mt-2 text-gray-600 sm:text-lg flex-1">{fix}</p>
              <Link
                href={href}
                prefetch={false}
                className="mt-6 inline-flex items-center gap-2 font-bold text-primaryBlue hover:text-primaryOrange"
              >
                {link} <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href="#deploy-toolkit"
            className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
          >
            Get your free website audit <ArrowRight size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
