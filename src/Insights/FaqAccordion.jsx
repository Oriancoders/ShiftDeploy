'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ accordion with a real open/close transition.
 *
 * The previous version used native <details>, which cannot be animated - it
 * snaps. This keeps the one property that mattered about <details>: every
 * answer stays in the DOM whether or not it is expanded, so crawlers and AI
 * extractors read all of them without running any JavaScript. Collapsed
 * panels are hidden with max-height and aria-hidden, not unmounted.
 *
 * Height is measured from the content rather than animating to a guessed
 * value, because a fixed max-height either clips long answers or makes short
 * ones ease slowly through empty space.
 */

function FaqItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(defaultOpen ? 'auto' : 0);
  const panelRef = useRef(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (open) {
      setHeight(el.scrollHeight);
      // After the transition, release to auto so the panel reflows if the
      // viewport changes or the text wraps differently.
      const t = setTimeout(() => setHeight('auto'), 260);
      return () => clearTimeout(t);
    }

    // Going the other way needs a concrete starting height, or the browser
    // has nothing to animate from.
    setHeight(el.scrollHeight);
    requestAnimationFrame(() => requestAnimationFrame(() => setHeight(0)));
  }, [open]);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 bg-gray-50 px-5 py-4 text-left transition-colors hover:bg-gray-100"
      >
        <h3 className="m-0 text-base font-semibold text-primaryBlue">{item.question}</h3>
        <ChevronDown
          className={`size-5 flex-shrink-0 text-primaryOrange transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        ref={panelRef}
        style={{ height, transition: 'height 250ms cubic-bezier(0.4, 0, 0.2, 1)' }}
        aria-hidden={!open}
      >
        <div className="bg-white px-5 py-4 leading-relaxed text-gray-700">{item.answer}</div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <FaqItem
          key={item._key || idx}
          item={item}
          // The most-asked question opens by default; it is the answer a
          // reader most likely came for.
          defaultOpen={Boolean(item.isPrimary) || idx === 0}
        />
      ))}
    </div>
  );
}
