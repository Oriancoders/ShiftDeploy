import Link from 'next/link';
import { Star, QrCode, ShieldCheck, BellRing, ArrowUpRight, ArrowRight } from 'lucide-react';

const LIVE_URL = 'https://reviewyourdoctor.shiftdeploy.com';

const steps = [
  {
    title: 'Customers scan a code at your front desk',
    body: 'One printed poster. No app to download, no staff training.',
  },
  {
    title: 'They rate their visit in seconds',
    body: 'Everyone can leave a Google review in two taps, or message you privately.',
  },
  {
    title: 'You hear about problems first',
    body: 'A low rating alerts you straight away, so you can put it right.',
  },
];

function FlowMock() {
  return (
    <figure className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0">
      <div className="relative rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
            <Star className="size-5 text-emerald-600" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-bold text-primaryBlue">Your business</p>
            <p className="text-xs text-gray-500">How was your visit today?</p>
          </div>
        </div>

        <div className="mb-5 flex justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="size-8 fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center">
            <p className="text-sm font-bold text-emerald-700">Leave a Google review</p>
            <p className="mt-0.5 text-xs text-emerald-700/80">Two taps</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center">
            <p className="text-sm font-bold text-primaryBlue">Tell you privately</p>
            <p className="mt-0.5 text-xs text-gray-500">Goes to the manager</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-primaryBlue px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <QrCode className="size-5 text-emerald-300" aria-hidden="true" />
            <span className="text-xs font-medium">Scan at the front desk</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-300">
            <BellRing className="size-4" aria-hidden="true" />
            <span className="text-xs font-semibold">Instant alert</span>
          </div>
        </div>
      </div>

      <div className="absolute right-0 -top-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-700 shadow-lg ring-1 ring-emerald-100">
        <ShieldCheck className="size-4" aria-hidden="true" />
        UK GDPR ready
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">What your customers see on their phone.</figcaption>
    </figure>
  );
}

const ReviewYourDoctor = () => {
  return (
    <section className="w-full overflow-hidden bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl 2xl:max-w-[80%] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-sm sm:text-base font-semibold text-primaryOrange mb-4">Get more Google reviews</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Happy customers rarely leave reviews.
            <span className="block text-primaryOrange">Now they will.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            Make leaving a Google review quick and easy for every customer, and hear about
            any problem before it goes public.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ol className="grid gap-6">
              {steps.map(({ title, body }, i) => (
                <li key={title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primaryBlue text-white font-bold">
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-1">
                    <p className="font-bold text-primaryBlue text-lg sm:text-xl leading-snug">{title}</p>
                    <p className="text-gray-600 sm:text-lg mt-1">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
              <Link
                href="/ContactUs"
                prefetch={false}
                className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg"
              >
                Get more reviews <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 hover:shadow-xl transition-colors"
              >
                See it live <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Already live for private clinics as{' '}
              <a href={`${LIVE_URL}/signup`} target="_blank" rel="noopener noreferrer" className="font-semibold text-primaryBlue underline underline-offset-2 hover:text-primaryOrange">
                Review Your Doctor
              </a>
              : free for 30 days, then from £49 a month.
            </p>
          </div>

          <FlowMock />
        </div>
      </div>
    </section>
  );
};

export default ReviewYourDoctor;
