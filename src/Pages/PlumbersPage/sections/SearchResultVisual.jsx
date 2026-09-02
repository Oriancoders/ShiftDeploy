'use client';
import React from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import Star from 'lucide-react/dist/esm/icons/star';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Search from 'lucide-react/dist/esm/icons/search';

/*
  Hero visual: a mock Google results page for "emergency plumber near me".

  This is the page's argument made visible - two competitors ranking, and the
  reader's own business sitting below the fold with no reviews. It is a
  drawing, not a screenshot of any real business: the competitor names are
  invented so the panel makes its point without naming a real company.

  Everything is text and CSS (no image), so it stays sharp at any width and
  costs no extra network request.
*/

const RESULTS = [
  {
    rank: 1,
    name: 'Northside Plumbing Co.',
    reviews: '127 reviews',
    rating: '4.9',
    blurb: 'Open 24 hours · Emergency callouts · Free quotes',
  },
  {
    rank: 2,
    name: 'Quickfix Heating Ltd.',
    reviews: '89 reviews',
    rating: '4.7',
    blurb: 'Open now · Boiler repair · Gas Safe registered',
  },
];

const SearchResultVisual = () => {
  const reduce = useReducedMotion();

  // Each row settles in turn, then the "you" row drops in last - the beat the
  // whole panel exists for.
  const row = (i) => ({
    initial: { opacity: 0, y: reduce ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: reduce ? 0 : 1.1 + i * 0.25 },
  });

  return (
    <div className="relative" aria-hidden="true">
      {/* Soft glow behind the card, purely decorative. */}
      <div
        className="absolute -inset-4 bg-primaryOrange/5 blur-2xl rounded-full"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-x-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <div className="flex-1 ml-2 flex items-center gap-x-2 bg-white rounded-md px-3 py-1.5 border border-gray-200">
            <Search className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
            <span className="text-xs text-gray-600 truncate">
              emergency plumber near me
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-3">
          {RESULTS.map((r, i) => (
            <motion.div
              key={r.name}
              {...row(i)}
              className="flex items-start gap-x-3 p-3 rounded-xl border border-gray-100 bg-white"
            >
              <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gray-500" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-primaryBlue text-sm truncate">
                  {r.name}
                </p>
                <div className="flex items-center gap-x-1.5 mt-0.5">
                  <span className="text-xs font-bold text-gray-700">
                    {r.rating}
                  </span>
                  <span className="flex" aria-hidden="true">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </span>
                  <span className="text-xs text-gray-500 truncate">
                    {r.reviews}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-1 truncate">
                  {r.blurb}
                </p>
              </div>
            </motion.div>
          ))}

          {/* The dividing line: everything above is winning the job. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: reduce ? 0 : 1.7 }}
            className="flex items-center gap-x-3 py-1"
          >
            <span className="flex-1 border-t border-dashed border-gray-300" />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
              Most callers stop here
            </span>
            <span className="flex-1 border-t border-dashed border-gray-300" />
          </motion.div>

          <motion.div
            {...row(3)}
            className="flex items-start gap-x-3 p-3 rounded-xl border-2 border-dashed border-primaryOrange/50 bg-primaryOrange/[0.03]"
          >
            <div className="w-7 h-7 rounded-lg bg-primaryOrange/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-primaryOrange" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-primaryBlue text-sm">
                Your business
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                No reviews yet · Not showing on Maps
              </p>
              <p className="text-[11px] text-primaryOrange font-bold mt-1">
                Nowhere to be found
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchResultVisual;
