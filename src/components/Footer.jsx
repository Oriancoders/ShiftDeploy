import { Mail, Phone, Slack, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Services', href: '/services' },
      { name: 'Inside ShiftDeploy', href: '/insideShiftDeploy' },
      { name: 'Product', href: '/product' },
      { name: 'Missions Completed', href: '/missions' },
      { name: 'Insights', href: '/insights' },
      // The audit is the main lead magnet but had no inbound internal link at
      // all - it was reachable only by knowing the URL.
      { name: 'Free Growth Audit', href: '/service-growth-audit' },
    ],
    services: [
      { name: 'ShiftSpeed', href: '/services/shiftspeed' },
      { name: 'ShiftConvert', href: '/services/shiftconvert' },
      { name: 'ShiftBuild', href: '/services/shiftbuild' },
      { name: 'ShiftFlow', href: '/services/shiftflow' },
    ],
    caseStudies: [
      { name: 'Slacker IOT', href: '/CaseStudies/SlackerIOT' },
      { name: 'K2 Traders', href: '/CaseStudies/K2TradersCase' },
      { name: 'BullsEyes Investments', href: '/CaseStudies/BullseyesCase' },
    ],
  };

  return (
    <footer className="bg-primaryBlue text-white">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-4 py-6 sm:py-8 lg:py-10">
        <div



          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12"
        >
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="lg:max-w-60 sm:max-w-48 max-w-36">
              <img
                src="/shiftdeploy-logo-white.png"
                alt="ShiftDeploy"
                width={775}
                height={176}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 leading-relaxed text-xs sm:text-sm lg:text-base">
              Websites, apps and digital products for UK businesses, with ongoing
              performance and conversion support.
            </p>

            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <a
                href="mailto:contact@shiftdeploy.com"
                className="flex items-center gap-x-2 sm:gap-x-3"
              >
                <Mail className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-primaryOrange flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  contact@shiftdeploy.com
                </span>
              </a>

              <a href="tel:+447311126710" className="flex items-center gap-x-2 sm:gap-x-3">
                <Phone className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-primaryOrange flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  +44 7311 126710
                </span>
              </a>
              <hr />
              <a
                href="https://www.linkedin.com/company/shiftdeploy/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-x-2 sm:gap-x-3"
              >
                <Linkedin className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-primaryOrange flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  Follow us on LinkedIn
                </span>
              </a>

              <a
                href="https://x.com/shiftdeploy"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-x-2 sm:gap-x-3"
              >
                <FaXTwitter className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-primaryOrange flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  Join us on twitter
                </span>
              </a>

              <a
                href="https://join.slack.com/t/shiftdeployworkspace/shared_invite/zt-3gan3ow0g-OW0s3OJIJKIzQwQ0tB1V6A1"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-x-2 sm:gap-x-3"
              >
                <Slack className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-primaryOrange flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  Join us on slack
                </span>
              </a>
            </div>
          </div>

          {/* Company links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">
              Explore ShiftDeploy
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={link?.id ?? link?.slug ?? link?.title ?? link?.name ?? index}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">
              Services
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={link?.id ?? link?.slug ?? link?.title ?? link?.name ?? index}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case studies links */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg">
              Case Studies
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 lg:space-y-3">
              {footerLinks.caseStudies.map((link, index) => (
                <li key={link?.id ?? link?.slug ?? link?.title ?? link?.name ?? index}>
                  <Link prefetch={false}
                    href={link.href}
                    className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div



          className="mt-8 sm:mt-12 lg:mt-16 border-t border-gray-700 flex flex-col md:flex-row justify-center pt-6 items-center gap-y-3 sm:gap-y-4 lg:gap-y-6 md:gap-y-0"
        >
          <div className="flex flex-col sm:flex-row items-center gap-y-3 sm:gap-y-0 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 text-center sm:text-left">
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
              © {currentYear} ShiftDeploy. All rights reserved.
            </p>
            <div className="flex gap-x-3 sm:gap-x-4 lg:gap-x-6">
              <Link prefetch={false}
                href="/privacy-policy"
                className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
              >
                Privacy Policy
              </Link>
              <Link prefetch={false}
                href="/terms-of-services"
                className="text-gray-300 hover:text-primaryOrange transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
