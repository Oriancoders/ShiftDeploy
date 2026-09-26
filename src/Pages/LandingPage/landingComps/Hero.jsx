import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  return (
    <section className="bg-gray-50 pt-20 pb-10 sm:pt-28 sm:pb-14 text-textColor">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 mb-5 sm:mb-7 bg-primaryBlue px-4 py-2 rounded-full text-white font-semibold text-xs sm:text-sm">
              Building <ArrowRight size={14} aria-hidden="true" /> Optimisation
              <ArrowRight size={14} aria-hidden="true" /> Succeed
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primaryBlue">
              Web &amp; App Development
              <span className="block text-primaryOrange"> for UK Businesses</span>
            </h1>
            <p className="text-base sm:text-xl mt-4 sm:mt-6 max-w-xl leading-relaxed text-gray-700">
              Websites, apps and digital products for UK businesses. We build, fix and
              optimise for speed, technical SEO and customer enquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
              <Link href="/ContactUs" prefetch={false} className="bg-primaryOrange border-2 border-primaryOrange hover:bg-toOrange text-white px-5 py-3 rounded-lg font-bold text-center">
                Get Free Audit
              </Link>
              <Link href="/services/shiftspeed" prefetch={false} className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white px-5 py-3 rounded-lg font-bold text-center">
                View ShiftSpeed
              </Link>
            </div>
          </div>
          <div className="min-w-0 flex items-center justify-center">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
