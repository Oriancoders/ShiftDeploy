'use client';
/*
  EXTRACTED DESIGN SYSTEM  (audited from the live codebase, nothing invented)
  ===========================================================================
  Source of truth: tailwind.config.js + app/globals.css + existing Services pages.

  Colors (tailwind.config.js theme.extend.colors):
    primaryBlue     #0C1F3A   headings, dark surfaces
    toBlue          #0B1D30   gradient partner for primaryBlue
    secondaryBlue   #4361EE
    toSecBlue       #1D4ED8
    primaryOrange   #F76707   accent / primary CTA / eyebrows
    toOrange        #D83A21   primary CTA hover
    textColor       #231F20
    Body copy uses stock text-gray-700 / text-gray-600, as the existing pages do.

  Fonts:
    Sans: Inter (next/font/google, loaded in app/layout.jsx; Tailwind
          fontFamily.sans = Inter, ui-sans-serif, system-ui)
    Mono: NONE. The brief asked for monospace `// Label` eyebrows, but this
          codebase has no mono family and no `//` convention anywhere. The real
          eyebrow pattern is used instead - see <Eyebrow> in ./ui.jsx.

  Font sizes (custom scale): md 16px · 3xl 2rem · 4xl 2.5rem · 5xl 3.5rem
    h1 -> text-4xl lg:text-5xl font-bold   (BuildHero.jsx:358)
    h2 -> text-3xl lg:text-4xl font-bold

  Spacing / layout:
    Section padding:  py-20            (dominant across Services sections)
    Container:        max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8
    Section bg cycle: white / gray-50, alternating

  Border radius: rounded-xl (inputs) · rounded-2xl (cards) ·
                 rounded-lg sm:rounded-xl lg:rounded-2xl (buttons)

  Button variants (copied verbatim into ./ui.jsx):
    Primary   bg-primaryOrange border-2 border-primaryOrange hover:border-toOrange
              text-white hover:bg-toOrange + shared padding/radius
              <- ShiftBuild/sections/BuildHero.jsx:395
    Secondary bg-white hover:bg-primaryBlue border-2 border-primaryBlue
              text-primaryBlue hover:text-white shadow-lg
              <- ShiftConvert sections (5 identical occurrences)
    Ghost     no site-wide precedent; built from the same base with
              border-gray-300, used only on the placeholder work cards.

  Components used:
    - Navigation  from src/components/Navigation.jsx
    - Footer      from src/components/Footer.jsx
    - Button / Card / Eyebrow / Section  from ./ui.jsx  (local primitives -
      the codebase has NO shared Button or Card component; ./ui.jsx only
      re-packages existing class strings, it introduces no new design values)

  Animation library: framer-motion ^12.38.0 (already installed).
    IMPORTANT: app/layout.jsx wraps the tree in <LazyMotion features={domAnimation}>,
    so every file here imports `{ m as motion }`, matching all 60+ existing
    files. Importing the full `motion` would defeat LazyMotion's bundle saving.
    GSAP and Lenis were NOT installed: framer-motion covers every animation in
    this page, and globals.css already sets `html { scroll-behavior: smooth }`,
    which Lenis would conflict with (and with src/components/ScrollToTop.jsx).

  Routing: Next.js App Router - NOT react-router. There is no src/App.jsx.
    Route added at app/plumbers/page.jsx (metadata + JSON-LD) rendering this
    component. Also registered in app/sitemap.js.

  EmailJS IDs (from src/Pages/ContactUsPage/ContactUs.jsx):
    serviceId:  service_jrpagw4
    templateId: template_scjrafd
    publicKey:  QvcGHkk74en4u55cN
    NOTE: that template only renders the ContactUs field names. See the
    mirrored hidden inputs in sections/PlumbersBooking.jsx.
*/
import React, { lazy, Suspense, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import PlumbersHero from './sections/PlumbersHero';
import { PackageSelectionProvider } from './PackageSelectionContext';

// Hero ships eagerly (it is the LCP element); everything below the fold is
// split out, matching the pattern in Services/ShiftBuild/ShiftBuild.jsx.
const PlumbersPain = lazy(() => import('./sections/PlumbersPain'));
const PlumbersServices = lazy(() => import('./sections/PlumbersServices'));
const PlumbersPackages = lazy(() => import('./sections/PlumbersPackages'));
const PlumbersWork = lazy(() => import('./sections/PlumbersWork'));
const PlumbersAudit = lazy(() => import('./sections/PlumbersAudit'));
const PlumbersBooking = lazy(() => import('./sections/PlumbersBooking'));

const PlumbersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full">
      <Navigation />

      <PlumbersHero />

      {/* Provider spans both the packages section and the booking form so a
          pricing CTA can preselect the enquiry dropdown. */}
      <PackageSelectionProvider>
        <Suspense fallback={<ShiftDeployLoader />}>
          <PlumbersPain />
          <PlumbersServices />
          <PlumbersPackages />
          <PlumbersWork />
          <PlumbersAudit />
          <PlumbersBooking />
        </Suspense>
      </PackageSelectionProvider>

      <Footer />
    </div>
  );
};

export default PlumbersPage;
