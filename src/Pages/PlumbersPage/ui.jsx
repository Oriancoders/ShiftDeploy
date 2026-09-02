'use client';
import React from 'react';
import Link from 'next/link';

/*
  Local design primitives for /plumbers.

  The codebase has no Button or Card component - those styles are repeated as
  Tailwind class strings across the service pages. Rather than invent new
  values, the class strings below are copied verbatim from the existing pages
  so this page is visually identical to the rest of the site:

    Button primary   <- ShiftBuild/sections/BuildHero.jsx:395
    Button secondary <- ShiftConvert/sections/*.jsx (5 identical occurrences)
    Card             <- the `bg-white rounded-2xl ... shadow-md` pattern used
                        across Services sections

  If a shared component library is ever extracted, these are the definitions
  to lift.
*/

const BTN_BASE =
  'px-5 sm:px-6 lg:px-8 xl:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-xl lg:rounded-2xl font-bold flex items-center justify-center gap-x-2 text-md transition-colors text-center leading-snug';

const VARIANTS = {
  primary:
    'bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange text-white hover:bg-toOrange',
  secondary:
    'bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white shadow-lg sm:hover:shadow-xl',
  ghost:
    'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-primaryBlue hover:text-primaryBlue',
};

/**
 * Renders as <a> for in-page anchors, <Link> for routes, <button> otherwise.
 * Anchor scrolling relies on `html { scroll-behavior: smooth }` already set
 * globally in app/globals.css - no scroll library needed.
 */
export function Button({
  variant = 'primary',
  href,
  type = 'button',
  children,
  className = '',
  ...props
}) {
  const cls = `${BTN_BASE} ${VARIANTS[variant]} ${className}`;

  if (href?.startsWith('#')) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  // Defaults to type="button" so a CTA never submits an enclosing form by
  // accident; the booking form passes type="submit" explicitly.
  return (
    <button type={type} className={cls} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Section eyebrow.
 *
 * The brief asked for a monospace `// Label` treatment, but this codebase has
 * no mono family (Tailwind defines only Inter) and the `//` convention appears
 * nowhere on the site. This is the eyebrow style the existing pages actually
 * use - see ShiftConvert:678 and ShiftSpeed:930.
 */
export function Eyebrow({ children, className = '' }) {
  return (
    <p
      className={`text-sm font-bold uppercase tracking-[0.18em] text-primaryOrange ${className}`}
    >
      {children}
    </p>
  );
}

/** Standard section shell: py-20 + max-w-7xl container, as used site-wide. */
export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
