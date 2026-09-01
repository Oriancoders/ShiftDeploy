'use client';

import { m as motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { FOUNDERS } from '../../../data/founders';

/**
 * Founders.
 *
 * The first version of this was a two-up card grid with initials avatars and
 * skill chips, which is how you present an employee. The strong agency and B2B
 * about pages do the opposite for founders: a large portrait, a dedicated
 * narrative block rather than a cell in a grid, and copy about the conviction
 * that made the company exist rather than a list of daily duties.
 *
 * So each founder gets a full-width row, alternating sides so the page has
 * rhythm rather than repetition, with the belief pulled forward as a quote in
 * their own voice - the thing a reader remembers.
 */
export default function FoundersSection() {
  return (
    <section
      id="founders"
      className="bg-white py-20 sm:py-28"
      aria-labelledby="founders-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primaryOrange">
            Founders
          </p>
          <h2
            id="founders-heading"
            className="text-3xl font-semibold leading-tight text-primaryBlue sm:text-4xl lg:text-5xl"
          >
            Two people decided this should exist
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            No account managers, no handoffs, no junior passed your project after
            the sales call. You talk to the people writing the code and running
            the audits.
          </p>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">
          {FOUNDERS.map((person, i) => {
            const flipped = i % 2 === 1;

            return (
              <motion.article
                key={person.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14"
              >
                {/* ---------- portrait ---------- */}
                <div
                  className={`lg:col-span-4 ${
                    flipped ? 'lg:order-2 lg:col-start-9' : 'lg:order-1'
                  }`}
                >
                  <div className="relative w-44 sm:w-56 lg:w-full">
                    {/* Offset block behind the portrait: gives the photo weight
                        without needing a bigger source image than we have. */}
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-2xl bg-primaryBlue/10 ${
                        flipped ? '-translate-x-3 translate-y-3' : 'translate-x-3 translate-y-3'
                      }`}
                    />
                    {person.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={person.image}
                        alt={`${person.name}, ${person.role} of ShiftDeploy`}
                        width={400}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="relative aspect-square w-full rounded-2xl object-cover shadow-sm"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="relative flex aspect-square w-full items-center justify-center rounded-2xl bg-primaryBlue text-5xl font-bold text-white"
                      >
                        {person.initials}
                      </span>
                    )}
                  </div>

                  {person.proof?.length > 0 && (
                    <dl className="mt-6 flex gap-8">
                      {person.proof.map((p) => (
                        <div key={p.label}>
                          <dt className="sr-only">{p.label}</dt>
                          <dd>
                            <span className="block text-2xl font-bold text-primaryBlue">
                              {p.value}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                              {p.label}
                            </span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>

                {/* ---------- narrative ---------- */}
                <div
                  className={`lg:col-span-7 ${
                    flipped ? 'lg:order-1 lg:col-start-1 lg:row-start-1' : 'lg:order-2'
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-primaryBlue sm:text-3xl">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-primaryOrange">
                    {person.role}
                  </p>

                  {person.belief && (
                    <blockquote className="mt-6 border-l-4 border-primaryOrange pl-5">
                      <p className="text-xl font-medium leading-snug text-gray-900 sm:text-2xl">
                        &ldquo;{person.belief}&rdquo;
                      </p>
                    </blockquote>
                  )}

                  <div className="mt-6 space-y-4">
                    {person.story.split('\n\n').map((para) => (
                      <p key={para.slice(0, 32)} className="leading-relaxed text-gray-700">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer me"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primaryBlue transition hover:text-primaryOrange"
                      >
                        <Linkedin className="size-4" />
                        Connect on LinkedIn
                      </a>
                    )}

                    {person.focus?.length > 0 && (
                      <p className="text-sm text-gray-500">
                        {person.focus.join(' · ')}
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
