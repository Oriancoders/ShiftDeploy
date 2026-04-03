import React, { useEffect, useMemo, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  HelpCircle,
  Mail,
  MessageSquareQuote,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react';

const Footer = lazy(() => import('../components/Footer'));
const BlobCursor = lazy(() => import('../components/react-bits/BlobCursor'));
const Magnet = lazy(() => import('../components/react-bits/Magnet'));
const AnimateList = lazy(() => import('../components/react-bits/AnimateList'));

import { Helmet } from 'react-helmet-async';

const faqItems = [
  {
    title: 'How long is the demo?',
    content: 'The live demo is planned for 10 minutes, with a few extra minutes at the end for questions if needed.',
  },
  {
    title: 'Do I need to prepare anything?',
    content: 'No long prep is needed. Just bring your website link and a quick idea of your current booking or front-desk process.',
  },
  {
    title: 'Will this be tailored to my business?',
    content: 'Yes. The demo is framed around your business type, your website, and the kind of enquiries you want your digital receptionist to handle.',
  },
  {
    title: 'What happens after I book?',
    content: 'You get instant confirmation on the page, and your selected slot is treated as the requested live demo time.',
  },
];

const timeSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  business: '',
  website: '',
  notes: '',
};

function formatDayLabel(date) {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

function toDateValue(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function buildAvailability() {
  const days = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);

  while (days.length < 8) {
    cursor.setDate(cursor.getDate() + 1);
    const day = cursor.getDay();
    if (day === 0 || day === 6) continue;

    days.push({
      value: toDateValue(cursor),
      label: formatDayLabel(cursor),
      shortLabel: new Intl.DateTimeFormat('en-GB', { month: 'short', day: 'numeric' }).format(cursor),
      slots: timeSlots,
    });
  }

  return days;
}

function formatReadableDate(dateValue) {
  const date = new Date(`${dateValue}T00:00:00`);
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export default function AiChatbotDemo() {
  const availability = useMemo(buildAvailability, []);
  const [formData, setFormData] = useState(initialForm);
  const [selectedDate, setSelectedDate] = useState(availability[0]?.value || '');
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[1]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [shouldLoadRest, setShouldLoadRest] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleInteraction = () => {
      setShouldLoadRest(true);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const selectedDay = availability.find((day) => day.value === selectedDate) || availability[0];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) return 'Please enter a valid email.';
    if (formData.phone.replace(/\D/g, '').length < 7) return 'Please add a valid phone number.';
    if (!formData.business.trim()) return 'Please add your business or clinic name.';
    if (!selectedDate || !selectedSlot) return 'Please choose a date and time slot.';
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setConfirmation(null);
      setError(validationError);
      setStatus('error');
      return;
    }

    setError('');
    setStatus('loading');

    const payload = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      business: formData.business.trim(),
      website: formData.website.trim(),
      notes: formData.notes.trim(),
      demo_date: selectedDate,
      demo_slot: selectedSlot,
    };

    await new Promise((resolve) => setTimeout(resolve, 600));

    setConfirmation(payload);
    setStatus('success');
    setFormData(initialForm);
  };

  const closeSuccess = () => {
    setStatus('idle');
    setConfirmation(null);
  };

  return (
    <>
      <Helmet>
        <title>Book a Digital Receptionist Demo | ShiftDeploy</title>
        <meta
          name="description"
          content="Book a live digital receptionist demo with ShiftDeploy. See how bookings, missed enquiries, FAQs, and front-desk workflows can be handled in one simple walkthrough."
        />
        <meta
          name="keywords"
          content="book digital receptionist demo, digital receptionist demo, clinic demo booking, live receptionist walkthrough, booking automation demo, ShiftDeploy"
        />
        <meta property="og:title" content="Book a Digital Receptionist Demo | ShiftDeploy" />
        <meta
          property="og:description"
          content="Choose a time slot and book a live ShiftDeploy demo to see how a digital receptionist can support bookings, enquiries, and customer communication."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/digital-receptionist/demo" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Book a Digital Receptionist Demo | ShiftDeploy" />
        <meta
          name="twitter:description"
          content="Book a live demo and see how ShiftDeploy's digital receptionist handles bookings, FAQs, and enquiries."
        />
        <link rel="canonical" href="https://www.shiftdeploy.com/digital-receptionist/demo" />
      </Helmet>
      
      <Suspense fallback={null}>
        {shouldLoadRest && <BlobCursor />}
      </Suspense>

      <div className="min-h-screen overflow-x-hidden bg-white text-textColor">
        <section className="relative overflow-hidden bg-primaryBlue pt-10 pb-14 text-white md:pt-24 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue via-toBlue to-primaryBlue" />
          <div className="absolute inset-x-0 top-10 mx-auto h-64 w-64 rounded-full bg-secondaryBlue/20 blur-3xl" />
          <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-primaryOrange/20 blur-3xl" />

          <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-8">
            <Link to="/digital-receptionist" className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back to Digital Receptionist
            </Link>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4 text-primaryOrange" />
                Live Demo Booking
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
                Book a live demo for your digital receptionist.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80 md:text-xl md:leading-8">
                Pick a date, choose a time, and send your details. The page is built to be quick and clear on mobile.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryOrange">Length</div>
                  <div className="mt-2 text-lg font-bold text-white">10 minutes</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryOrange">Focus</div>
                  <div className="mt-2 text-lg font-bold text-white">Booking flow</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryOrange">Finish</div>
                  <div className="mt-2 text-lg font-bold text-white">Q&A at end</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-8 px-4 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="rounded-[2rem] border border-primaryBlue/10 bg-white p-5 shadow-[0_18px_60px_rgba(12,31,58,0.08)] md:p-8">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primaryBlue text-white md:h-12 md:w-12">
                  <CalendarDays className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-primaryBlue md:text-3xl">Choose your slot</h2>
                  <p className="mt-1 text-sm leading-6 text-textColor/70">Start with the date dropdown, then tap a time.</p>
                </div>
              </div>

              <div className="mt-7 rounded-[1.5rem] border border-primaryBlue/10 bg-gray-50 p-4 md:p-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.18em] text-primaryOrange">Date</span>
                  <div className="relative">
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full appearance-none rounded-2xl border border-primaryBlue/10 bg-white px-4 py-4 pr-12 text-base font-semibold text-primaryBlue outline-none transition focus:border-primaryOrange"
                    >
                      {availability.map((day) => (
                        <option key={day.value} value={day.value}>
                          {day.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primaryBlue/60" />
                  </div>
                </label>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryOrange">Times for {selectedDay?.shortLabel}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {selectedDay?.slots.map((slot) => {
                    const isActive = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`rounded-2xl border px-3 py-4 text-center transition-all ${
                          isActive
                            ? 'border-primaryOrange bg-primaryOrange text-white'
                            : 'border-primaryBlue/10 bg-white text-primaryBlue hover:border-primaryOrange hover:text-primaryOrange'
                        }`}
                      >
                        <div className="text-sm font-bold md:text-base">{slot}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 rounded-[1.75rem] bg-primaryBlue p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryOrange">Selected slot</p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-base font-bold">{selectedDay?.label}</div>
                    <div className="mt-1 text-sm text-white/70">{selectedSlot}</div>
                  </div>
                  <Clock3 className="h-5 w-5 text-primaryOrange" />
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-primaryBlue/10 bg-primaryBlue p-5 text-white shadow-[0_18px_60px_rgba(12,31,58,0.14)] md:p-8">
              <h2 className="text-2xl font-extrabold md:text-3xl">Book your live demo</h2>
              <p className="mt-3 max-w-lg text-sm leading-7 text-white/80 md:text-base">
                Add your details below and lock in the slot you want. You will get an instant confirmation on the page as soon as you submit.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                      <UserRound className="h-4 w-4 text-primaryOrange" />
                      Full name
                    </span>
                    <input name="name" value={formData.name} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-textColor outline-none transition focus:border-primaryOrange" placeholder="Your full name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                      <Mail className="h-4 w-4 text-primaryOrange" />
                      Email
                    </span>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-textColor outline-none transition focus:border-primaryOrange" placeholder="name@business.com" />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                      <Phone className="h-4 w-4 text-primaryOrange" />
                      Phone
                    </span>
                    <input name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-textColor outline-none transition focus:border-primaryOrange" placeholder="Best number for follow-up" />
                  </label>
                  <label className="block">
                    <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                      <Sparkles className="h-4 w-4 text-primaryOrange" />
                      Business or clinic
                    </span>
                    <input name="business" value={formData.business} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-textColor outline-none transition focus:border-primaryOrange" placeholder="Your business name" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">Website</span>
                  <input name="website" value={formData.website} onChange={handleChange} className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-textColor outline-none transition focus:border-primaryOrange" placeholder="Optional website link" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-white">Anything you want covered?</span>
                  <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-textColor outline-none transition focus:border-primaryOrange" placeholder="Optional notes for the demo" />
                </label>

                {status === 'error' && error ? <p className="rounded-2xl border border-primaryOrange/40 bg-primaryOrange/10 px-4 py-3 text-sm text-white">{error}</p> : null}

                <Magnet className="w-full">
                  <button type="submit" disabled={status === 'loading'} className="w-full rounded-2xl bg-primaryOrange px-6 py-4 text-base font-bold text-white transition hover:bg-toOrange disabled:cursor-not-allowed disabled:bg-primaryOrange/70">
                    {status === 'loading' ? 'Booking your demo...' : 'Book Live Demo'}
                  </button>
                </Magnet>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white pb-20">
          <div className="container mx-auto max-w-6xl gap-10 px-4 md:px-8">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryOrange">FAQs</p>
                  <h2 className="text-3xl font-extrabold text-primaryBlue">Short answers before you book</h2>
                </div>
              </div>
              <AnimateList items={faqItems} />
            </div>
          </div>
        </section>

        {status === 'success' && confirmation ? (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-primaryBlue/75 backdrop-blur-sm" onClick={closeSuccess} />
            <div className="relative w-full max-w-lg rounded-[2rem] bg-white p-6 text-center shadow-[0_30px_80px_rgba(12,31,58,0.24)] md:p-8">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primaryOrange/10 text-primaryOrange">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.24em] text-primaryOrange">Booked</p>
              <h3 className="mt-3 text-3xl font-extrabold text-primaryBlue">Your live demo is locked in.</h3>
              <p className="mt-4 text-base leading-7 text-textColor/75">
                Nice. We will meet you on <span className="font-bold text-primaryBlue">{formatReadableDate(confirmation.demo_date)}</span> at <span className="font-bold text-primaryBlue">{confirmation.demo_slot}</span>.
              </p>
              <div className="mt-6 rounded-[1.5rem] bg-gray-50 px-4 py-4 text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primaryOrange">What happens next</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-textColor/80">
                  <li>We have captured your preferred time slot</li>
                  <li>You are all set for a focused 10-minute walkthrough</li>
                  <li>Bring your questions and we will cover them live</li>
                </ul>
              </div>
              <Link
                
                to={"/digital-receptionist"}
                className="mt-6 w-full rounded-2xl bg-primaryBlue px-6 py-4 text-base font-bold text-white transition hover:bg-toBlue"
              >
                Awesome, got it
              </Link>
            </div>
          </div>
        ) : null}
      </div>
      <Suspense fallback={<div className="h-40 bg-primaryBlue" />}>
        {shouldLoadRest && <Footer />}
      </Suspense>
    </>
  );
}
