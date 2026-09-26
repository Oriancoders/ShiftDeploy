import Link from 'next/link';
import { ArrowRight, PhoneCall, LayoutTemplate, Gauge, MousePointerClick, ShieldCheck, Workflow } from 'lucide-react';

const services = [
  {
    icon: PhoneCall,
    title: 'AI receptionist & call answering',
    body: 'A virtual receptionist that answers every call and books it in, even when you’re closed.',
    href: '/digital-receptionist',
  },
  {
    icon: LayoutTemplate,
    title: 'Web design & development',
    body: 'A new website, with local SEO built in, so nearby customers find you on Google.',
    href: '/services/shiftbuild',
  },
  {
    icon: Gauge,
    title: 'Website speed optimisation',
    body: 'Pages that load fast on a phone, so visitors don’t give up and leave.',
    href: '/services/shiftspeed',
  },
  {
    icon: MousePointerClick,
    title: 'Conversion rate optimisation',
    body: 'More calls and bookings from the visitors you already get.',
    href: '/services/shiftconvert',
  },
  {
    icon: ShieldCheck,
    title: 'Website maintenance & support',
    body: 'We keep your site secure, up to date and working, month after month.',
    href: '/services/shiftflow',
  },
  {
    icon: Workflow,
    title: 'Business automation',
    body: 'Reminders, follow-ups and invoices that go out without you chasing.',
    href: '/ContactUs',
    cta: 'Ask us about it',
  },
];

const InsideShiftDeploy = () => {
  return (
    <section id="inside-shiftdeploy" className="py-16 sm:py-24 text-textColor bg-white scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-semibold text-primaryOrange mb-4">Our services</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Everything that wins you more work.
            <span className="block text-primaryOrange">One team to sort it.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            Web design, SEO, AI call answering and automation for service businesses. No
            juggling different suppliers.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, href, cta = 'Find out more' }) => (
            <li key={title}>
              <Link
                href={href}
                prefetch={false}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 hover:border-primaryOrange hover:bg-white hover:shadow-lg transition"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="size-6 text-primaryOrange" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-primaryBlue">{title}</h3>
                <p className="mt-2 text-gray-600 sm:text-lg flex-1">{body}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-primaryBlue group-hover:text-primaryOrange">
                  {cta} <ArrowRight size={18} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default InsideShiftDeploy;
