import { Mail, Phone, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import CookieSettingsButton from './CookieSettingsButton';

const columns = [
  {
    heading: 'Services',
    links: [
      { name: 'AI receptionist & call answering', href: '/digital-receptionist' },
      { name: 'Get found by more customers', href: '/services/shiftbuild' },
      { name: 'Never miss a call or enquiry', href: '/services/shiftspeed' },
      { name: 'Win more jobs', href: '/services/shiftconvert' },
      { name: 'Automate your admin', href: '/services/shiftflow' },
      { name: 'All services', href: '/services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { name: 'About us', href: '/about' },
      { name: 'Our products', href: '/product' },
      { name: 'Work we’ve done', href: '/missions' },
      { name: 'Insights', href: '/insights' },
      { name: 'Free growth audit', href: '/service-growth-audit' },
      { name: 'Contact us', href: '/ContactUs' },
    ],
  },
  {
    heading: 'Client results',
    links: [
      { name: 'Slacker IoT', href: '/CaseStudies/SlackerIOT' },
      { name: 'K2 Traders', href: '/CaseStudies/K2TradersCase' },
      { name: 'Bullseye Investments', href: '/CaseStudies/BullseyesCase' },
    ],
  },
];

const linkClass = 'text-gray-300 hover:text-primaryOrange transition-colors text-sm sm:text-base';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primaryBlue text-white border-t border-white/10">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/shiftdeploy-logo-white.png"
              alt="ShiftDeploy"
              width={775}
              height={176}
              loading="lazy"
              decoding="async"
              className="w-44"
            />
            <p className="mt-5 text-gray-300 leading-relaxed max-w-sm">
              We help service businesses stop losing work, with the right fix for each problem:
              AI call answering, WhatsApp automation, apps, websites and automation.
            </p>

            <ul className="mt-6 space-y-3">
              <li>
                <a href="tel:+447311126710" className={`flex items-center gap-3 ${linkClass}`}>
                  <Phone className="size-5 text-primaryOrange shrink-0" aria-hidden="true" />
                  07311 126710
                </a>
              </li>
              <li>
                <a href="mailto:contact@shiftdeploy.com" className={`flex items-center gap-3 ${linkClass}`}>
                  <Mail className="size-5 text-primaryOrange shrink-0" aria-hidden="true" />
                  contact@shiftdeploy.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/shiftdeploy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ShiftDeploy on LinkedIn"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-primaryOrange transition-colors"
              >
                <Linkedin className="size-5" aria-hidden="true" />
              </a>
              <a
                href="https://x.com/shiftdeploy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ShiftDeploy on X"
                className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-primaryOrange transition-colors"
              >
                <FaXTwitter className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {columns.map(({ heading, links }) => (
            <nav key={heading} aria-label={heading}>
              <h2 className="font-semibold text-white text-base sm:text-lg">{heading}</h2>
              <ul className="mt-4 space-y-3">
                {links.map(({ name, href }) => (
                  <li key={href}>
                    <Link prefetch={false} href={href} className={linkClass}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>© {currentYear} ShiftDeploy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link prefetch={false} href="/privacy-policy" className="hover:text-primaryOrange">Privacy policy</Link>
            <Link prefetch={false} href="/terms-of-services" className="hover:text-primaryOrange">Terms of service</Link>
            <CookieSettingsButton className="hover:text-primaryOrange" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
