import CloudinaryImage from '../../../components/CloudinaryImage';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'An EV charging platform, built from scratch',
    client: 'Slacker IoT',
    service: 'Web app development',
    image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764978775/ev_dashboard_lak5oh.png',
    imageAlt: 'Slacker IoT EV charging dashboard showing battery, power and session data',
    results: ['Live charger status for customers', 'Billing and payments that run themselves', 'One dashboard to manage it all'],
    url: '/CaseStudies/SlackerIOT',
  },
  {
    title: 'An online shop that’s quick and easy to buy from',
    client: 'K2 Traders',
    service: 'E-commerce website',
    image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764979152/k2_traders_vj05aq.png',
    imageAlt: 'K2 Traders website homepage and product navigation',
    results: ['Faster pages across the shop', 'Simple checkout on a phone', 'No monthly hosting bill'],
    url: '/CaseStudies/K2TradersCase',
  },
  {
    title: 'A website that makes a clear first impression',
    client: 'Bullseye Investments',
    service: 'Website design',
    image: 'https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764978786/bullseyes_x1ifpw.png',
    imageAlt: 'Bullseye Investments website homepage showing its financial services offer',
    results: ['Clear message from the first screen', 'Obvious next step on every page', 'Easy access to the client portal'],
    url: '/CaseStudies/BullseyesCase',
  },
];

const MissionsCompleted = () => {
  return (
    <section id="missions-completed" className="py-16 sm:py-24 bg-white text-primaryBlue scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Work we’ve done</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Real businesses.
            <span className="block text-primaryOrange">Real work, delivered.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            A few of the websites and web apps we’ve designed and built, from an online shop
            to a full EV charging platform.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, client, service, image, imageAlt, results, url }) => (
            <li key={client}>
              <Link
                href={url}
                prefetch={false}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-primaryOrange hover:shadow-lg transition"
              >
                <div className="aspect-[16/10] bg-gray-100">
                  <CloudinaryImage src={image} alt={imageAlt} className="size-full object-contain" width="960" height="600" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-sm font-semibold text-orange-700">
                    {client} · {service}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-primaryBlue">{title}</h3>
                  <ul className="mt-4 space-y-2 flex-1">
                    {results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-gray-700">
                        <Check className="size-5 mt-0.5 shrink-0 text-green-700" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 font-bold text-primaryBlue group-hover:text-primaryOrange">
                    Read the case study <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MissionsCompleted;
