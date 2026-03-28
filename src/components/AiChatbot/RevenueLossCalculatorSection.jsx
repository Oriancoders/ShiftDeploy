import React, { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, PhoneCall, PoundSterling, TrendingDown } from 'lucide-react';

const formatGBP = (value) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(value);

const SliderField = ({ label, helper, value, min, max, step, unit = '', highlight = 'text-secondaryBlue', onChange }) => (
  <div className="rounded-[1.75rem] border border-primaryBlue/10 bg-white p-5 shadow-[0_14px_40px_rgba(12,31,58,0.06)]">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-base font-bold text-primaryBlue">{label}</p>
        <p className="mt-1 text-sm leading-6 text-textColor/65">{helper}</p>
      </div>
      <div className={`shrink-0 text-xl font-extrabold ${highlight}`}>
        {unit === 'GBP' ? formatGBP(value) : `${value}${unit}`}
      </div>
    </div>

    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="mt-5 w-full accent-primaryOrange"
    />

    <div className="mt-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.14em] text-primaryBlue/50">
      <span>{unit === 'GBP' ? formatGBP(min) : `${min}${unit}`}</span>
      <span>{unit === 'GBP' ? formatGBP(max) : `${max}${unit}`}</span>
    </div>
  </div>
);

export default function RevenueLossCalculatorSection({ onPrimaryAction }) {
  const [callsPerDay, setCallsPerDay] = useState(42);
  const [missedCallRate, setMissedCallRate] = useState(28);
  const [revenuePerAppointment, setRevenuePerAppointment] = useState(135);

  const stats = useMemo(() => {
    const workingDaysPerMonth = 22;
    const monthlyCalls = callsPerDay * workingDaysPerMonth;
    const lostCalls = Math.round(monthlyCalls * (missedCallRate / 100));
    const monthlyLostRevenue = lostCalls * revenuePerAppointment;
    const annualLostRevenue = monthlyLostRevenue * 12;
    const weeklyLostRevenue = monthlyLostRevenue / 4.33;
    const recoveredPercent = 100 - missedCallRate;

    return {
      lostCalls,
      monthlyLostRevenue,
      annualLostRevenue,
      weeklyLostRevenue,
      recoveredPercent,
    };
  }, [callsPerDay, missedCallRate, revenuePerAppointment]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primaryOrange">Missed Revenue Snapshot</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-primaryBlue md:text-5xl">
            Check what unanswered calls may be costing you in the UK.
          </h2>
          <p className="mt-4 text-base leading-7 text-textColor/75 md:text-lg">
            Designed for mobile-first visitors. One quick estimate, three simple inputs, and a clear next step if the number feels too expensive to ignore.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className=" space-y-4 md:space-y-5">
            <SliderField
              label="Daily incoming calls"
              helper="Approximate how many calls or booking enquiries reach your practice in a normal day."
              value={callsPerDay}
              min={5}
              max={100}
              step={1}
              highlight="text-secondaryBlue"
              onChange={setCallsPerDay}
            />

            <SliderField
              label="Missed call rate"
              helper="How many of those calls are not answered, delayed, or lost after hours?"
              value={missedCallRate}
              min={5}
              max={50}
              step={1}
              unit="%"
              highlight="text-primaryOrange"
              onChange={setMissedCallRate}
            />

            <SliderField
              label="Average appointment value"
              helper="Use your typical first appointment, consultation, or booking value in pounds."
              value={revenuePerAppointment}
              min={30}
              max={300}
              step={5}
              unit="GBP"
              highlight="text-secondaryBlue"
              onChange={setRevenuePerAppointment}
            />
          </div>

          <div className=" rounded-[2rem] bg-primaryBlue p-5 text-white shadow-[0_24px_80px_rgba(12,31,58,0.18)] md:p-7">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primaryOrange">Estimated Loss</p>
                  <h3 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                    {formatGBP(stats.monthlyLostRevenue)}
                    <span className="block text-lg font-semibold text-white/75 md:text-xl">per month slipping away</span>
                  </h3>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primaryOrange text-white shadow-[0_10px_30px_rgba(247,103,7,0.25)]">
                  <TrendingDown className="h-7 w-7" />
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-white px-4 py-4 text-primaryBlue">
                <div className="flex items-center justify-between gap-3 border-b border-primaryBlue/10 pb-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-primaryBlue/60">Lost calls each month</span>
                  <span className="text-2xl font-extrabold">{stats.lostCalls}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="rounded-2xl bg-primaryBlue/5 p-3">
                    <div className="flex items-center gap-2 text-primaryBlue/70">
                      <PoundSterling className="h-4 w-4 text-primaryOrange" />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em]">Weekly</span>
                    </div>
                    <div className="mt-2 text-xl font-extrabold text-primaryBlue">{formatGBP(stats.weeklyLostRevenue)}</div>
                  </div>
                  <div className="rounded-2xl bg-primaryBlue/5 p-3">
                    <div className="flex items-center gap-2 text-primaryBlue/70">
                      <PhoneCall className="h-4 w-4 text-primaryOrange" />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em]">Answered</span>
                    </div>
                    <div className="mt-2 text-xl font-extrabold text-primaryBlue">{stats.recoveredPercent}%</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Annual loss</div>
                  <div className="mt-2 text-2xl font-extrabold text-primaryOrange">{formatGBP(stats.annualLostRevenue)}</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Recovery angle</div>
                  <div className="mt-2 text-sm leading-6 text-white/80">
                    Even partial recovery can justify a digital receptionist much faster than most owners expect.
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onPrimaryAction(`to Recover ${formatGBP(stats.monthlyLostRevenue)} Per Month`)}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-[1.5rem] bg-primaryOrange px-5 py-4 text-base font-bold text-white transition-colors hover:bg-toOrange md:text-lg"
            >
              <CalendarDays className="h-5 w-5" />
              Book a Demo to Recover {formatGBP(stats.monthlyLostRevenue)}/month
              <ArrowRight className="h-5 w-5" />
            </button>

            <p className="mt-4 text-center text-sm leading-6 text-white/65">
              This is a directional estimate, not a financial forecast. It is here to show the scale of missed opportunity, not promise exact outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}