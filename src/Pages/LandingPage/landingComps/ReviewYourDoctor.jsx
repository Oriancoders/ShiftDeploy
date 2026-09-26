import { Star, QrCode, ShieldCheck, BellRing, ArrowUpRight } from 'lucide-react';

const LIVE_URL = 'https://reviewyourdoctor.shiftdeploy.com';

const benefits = [
  {
    title: 'More 5-star Google reviews',
    desc: 'Happy patients are guided to leave a public review in two taps.',
  },
  {
    title: 'Catch unhappy patients privately',
    desc: 'Low ratings open a private feedback form, the manager is alerted instantly.',
  },
  {
    title: 'GDPR & Google-policy compliant',
    desc: 'Every patient gets the same review choice, no gating, DPA + consent built in.',
  },
  {
    title: 'Win back unhappy patients',
    desc: 'Automated follow-up emails, then a one-click review invite once the problem is fixed.',
  },
  {
    title: 'Billing and receipts built in',
    desc: 'No billing system? Add a patient, click send, they get a branded PDF receipt by email.',
  },
  {
    title: 'Live in minutes, zero hardware',
    desc: 'Print one branded QR poster for reception. No app, no staff training.',
  },
];

// A self-contained, animated "phone" mock of the patient flow (no external asset).
function FlowMock() {
  return (
    <div

      className="relative mx-auto w-full max-w-sm"
    >
      {/* glow */}

      <div className="relative rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl shadow-emerald-900/10">
        {/* clinic header */}
        <div className="mb-5 flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
            <img
              src="/products/review-your-doctor/icon.png"
              alt=""
              className="size-6 object-contain" width="24" height="24" loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-primaryBlue">Smile Dental Care</p>
            <p className="text-xs text-gray-500">How was your visit?</p>
          </div>
        </div>

        {/* animated stars */}
        <div className="mb-5 flex justify-center gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}



            >
              <Star className="size-8 fill-amber-400 text-amber-400 drop-shadow-sm" />
            </span>
          ))}
        </div>

        {/* split into two compliant choices */}
        <div className="grid grid-cols-2 gap-3">
          <div



            className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center"
          >
            <p className="text-[13px] font-bold text-emerald-700">Leave a Google review</p>
            <p className="mt-0.5 text-[11px] text-emerald-600/80">Public, in two taps</p>
          </div>
          <div



            className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center"
          >
            <p className="text-[13px] font-bold text-primaryBlue">Share privately</p>
            <p className="mt-0.5 text-[11px] text-gray-500">Manager alerted</p>
          </div>
        </div>

        {/* QR + alert chips */}
        <div className="mt-5 flex items-center justify-between rounded-xl bg-primaryBlue px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <QrCode className="size-5 text-emerald-300" />
            <span className="text-xs font-medium">Scan at reception</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-300">
            <BellRing className="size-4" />
            <span className="text-xs font-semibold">Real-time alert</span>
          </div>
        </div>
      </div>

      {/* floating compliance badge */}
      <div



        className="absolute right-0 -top-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-emerald-600 shadow-lg ring-1 ring-emerald-100"
      >
        <ShieldCheck className="size-4" />
        UK GDPR ready
      </div>
    </div>
  );
}

const ReviewYourDoctor = () => {


  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div




          className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* LEFT: copy + value */}
          <div>
            <span

              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100"
            >
              <img
                src="/products/review-your-doctor/icon.png"
                alt="Review Your Doctor logo"
                className="size-5 object-contain" width="20" height="20" loading="lazy"
              />
              SaaS product for healthcare
            </span>

            <h2

              className="mt-5 text-3xl font-bold leading-tight text-primaryBlue sm:text-5xl"
            >
              Review Your Doctor
              <br />
              <span className="text-primaryOrange">turn happy patients into 5-star reviews</span>
            </h2>

            <p

              className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600"
            >
              A QR-powered patient feedback platform for UK private clinics. Patients scan,
              rate, and are guided, compliantly, to a public Google review or private feedback,
              so reputations grow and problems get fixed before they go public.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <span className="mt-1 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">{b.title}</p>
                    <p className="text-sm text-gray-600">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`${LIVE_URL}/signup`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primaryOrange px-8 py-4 font-bold text-white transition-colors hover:bg-toOrange sm:w-fit"
              >
                Start free trial
              </a>
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primaryBlue bg-white px-8 py-4 font-bold text-primaryBlue transition-colors hover:bg-primaryBlue hover:text-white sm:w-fit"
              >
                Visit the live site
                <ArrowUpRight className="size-5" />
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Free 30-day trial, then plans from £49/month. No card required to start.
            </p>
          </div>

          {/* RIGHT: animated flow mock */}
          <FlowMock />
        </div>
      </div>
    </section>
  );
};

export default ReviewYourDoctor;
