'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, OPEN_SETTINGS_EVENT } from '../lib/cookieConsent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!getConsent()) setOpen(true);
    const show = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, show);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, show);
  }, []);

  if (!open) return null;

  const choose = (value) => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-20 lg:bottom-0 z-[60] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-2xl sm:flex sm:items-center sm:gap-6">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          We use essential cookies to run this site. With your permission, we&rsquo;d also like
          to use analytics cookies to see how the site is used, so we can improve it.{' '}
          <Link href="/privacy-policy" prefetch={false} className="font-semibold text-primaryBlue underline underline-offset-2">
            Read our privacy policy
          </Link>
          .
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-0 sm:flex sm:shrink-0">
          <button
            type="button"
            onClick={() => choose('denied')}
            className="rounded-xl border-2 border-primaryBlue px-5 py-3 font-bold text-primaryBlue hover:bg-primaryBlue hover:text-white transition-colors"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose('granted')}
            className="rounded-xl border-2 border-primaryBlue bg-primaryBlue px-5 py-3 font-bold text-white hover:bg-toBlue transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
