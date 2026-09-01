'use client';

import { m as motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { FOUNDERS } from '../../../data/founders';

/**
 * Founders.
 *
 * This exists because of a concrete failure: asked who runs ShiftDeploy, an AI
 * assistant answered from a third-party scraper, because the site itself named
 * nobody. Where you publish nothing, someone else speaks for you.
 *
 * Every claim here is checkable and every profile link resolves - a sameAs
 * pointing at a 404 or the wrong person is worse than no sameAs at all.
 */
export default function FoundersSection() {
  return (
    <section
      id="founders"
      className="bg-white py-20 sm:py-24"
      aria-labelledby="founders-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primaryOrange">
            Who you are working with
          </p>
          <h2
            id="founders-heading"
            className="text-3xl font-semibold leading-tight text-primaryBlue sm:text-4xl"
          >
            The people behind ShiftDeploy
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            No account managers, no handoffs. You talk to the people writing the
            code and running the audits.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {FOUNDERS.map((person, i) => (
            <motion.article
              key={person.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-primaryBlue/25 hover:shadow-md sm:p-8"
            >
              <div className="flex items-start gap-4">
                {person.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={person.image}
                    alt=""
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                    className="size-18 shrink-0 rounded-full object-cover ring-2 ring-primaryBlue/15"
                  />
                ) : (
                  // Initials rather than a broken image or a stock avatar.
                  <span
                    aria-hidden="true"
                    className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primaryBlue text-xl font-bold text-white"
                  >
                    {person.initials}
                  </span>
                )}

                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-primaryBlue">{person.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-primaryOrange">{person.role}</p>

                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-500 transition hover:text-primaryBlue"
                    >
                      <Linkedin className="size-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-gray-700">{person.bio}</p>

              {person.focus?.length > 0 && (
                <>
                  <p className="mt-6 text-xs font-bold uppercase tracking-wide text-gray-400">
                    Focus
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {person.focus.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primaryBlue"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
