import { ArrowRight, ArrowDown, Check } from 'lucide-react';
import Link from 'next/link';
import HeroAnimation, { heroFixes } from './HeroAnimation';

export default function Hero() {
  return (
    <section className="bg-gray-50 text-textColor flex items-center pt-24 pb-14 sm:pt-28 lg:min-h-[100svh] lg:pt-20 lg:pb-0">
      <div className="w-full max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <p className="text-sm sm:text-base font-semibold text-primaryOrange mb-4">
              For busy business owners
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-primaryBlue text-balance">
              <span className="xl:whitespace-nowrap">Stop losing customers</span>
              <span className="block text-primaryOrange xl:whitespace-nowrap">you never knew you had.</span>
            </h1>
            <p className="text-lg sm:text-xl mt-6 max-w-xl leading-relaxed text-gray-700">
              Call answering, websites and automation for service businesses. We find where
              you’re losing work, fix it, and show you what came back.
            </p>
            <nav aria-label="What we fix" className="mt-6 flex flex-wrap gap-2">
              {heroFixes.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-primaryBlue hover:border-primaryOrange hover:text-primaryOrange"
                >
                  {label} <ArrowDown size={14} aria-hidden="true" />
                </a>
              ))}
            </nav>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
              <Link href="/ContactUs" prefetch={false} className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg">
                Get your free check <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link href="/missions" prefetch={false} className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center hover:shadow-xl transition-colors">
                See what we’ve fixed
              </Link>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm sm:text-base text-gray-600">
              {['Free, no obligation', 'Plain English, no jargon', 'Honest if we can’t help'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-green-700" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
