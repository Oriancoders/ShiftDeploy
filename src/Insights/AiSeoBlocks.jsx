import React from "react";
import FaqAccordion from "./FaqAccordion.jsx";

/**
 * The visible counterparts to the AI-SEO schema fields.
 *
 * These are not decoration. The Speakable markup points at `.direct-answer`
 * and `.key-takeaways` by class name, and generative engines score visible
 * on-page text far higher than markup alone — a JSON-LD claim with no matching
 * rendered content is a spam signal. So the markup and the DOM have to agree.
 */

export const DirectAnswer = ({ value }) => {
  if (!value?.answer) return null;

  return (
    <section
      className="direct-answer mx-6 sm:mx-10 mt-8 rounded-xl border-l-4 border-primaryOrange bg-orange-50/60 p-6"
      aria-labelledby="direct-answer-heading"
    >
      {value.question && (
        <h2
          id="direct-answer-heading"
          className="text-lg font-bold text-primaryBlue mb-2"
        >
          {value.question}
        </h2>
      )}
      <p className="text-base leading-relaxed text-gray-800">{value.answer}</p>

      {value.supportingStat && (
        <p className="mt-3 text-sm text-gray-700">
          <span className="font-semibold">{value.supportingStat}</span>
          {value.statSource && (
            <span className="text-gray-500">
              {" "}
              &mdash;{" "}
              {value.statSourceUrl ? (
                <a
                  href={value.statSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primaryBlue"
                >
                  {value.statSource}
                </a>
              ) : (
                value.statSource
              )}
            </span>
          )}
        </p>
      )}
    </section>
  );
};

export const KeyTakeaways = ({ value }) => {
  const points = value?.points?.filter(Boolean) || [];
  if (!points.length) return null;

  return (
    <section
      className="key-takeaways mx-6 sm:mx-10 mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6"
      aria-labelledby="key-takeaways-heading"
    >
      <h2
        id="key-takeaways-heading"
        className="text-lg font-bold text-primaryBlue mb-3"
      >
        {value.title || "Key takeaways"}
      </h2>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-800">
            <span className="text-primaryOrange mt-1 flex-shrink-0">&#10003;</span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

/** Post-level FAQ, rendered after the body. Mirrors the FAQPage JSON-LD. */
export const FaqSection = ({ value }) => {
  const items = value?.items?.filter((i) => i?.question && i?.answer) || [];
  if (!items.length) return null;

  return (
    <section
      className="post-faq mx-6 sm:mx-10 mb-10 mt-4"
      aria-labelledby="post-faq-heading"
    >
      <h2
        id="post-faq-heading"
        className="text-2xl font-bold text-primaryBlue mb-4"
      >
        {value.title || "Frequently asked questions"}
      </h2>
      <FaqAccordion items={items} />
    </section>
  );
};

export const HowToSteps = ({ value }) => {
  const steps = value?.steps?.filter((s) => s?.name) || [];
  if (!steps.length) return null;

  return (
    <section className="how-to mx-6 sm:mx-10 mt-6" aria-labelledby="how-to-heading">
      <h2 id="how-to-heading" className="text-2xl font-bold text-primaryBlue mb-2">
        {value.title || "How to do it"}
      </h2>
      {value.description && (
        <p className="text-gray-700 mb-4">{value.description}</p>
      )}
      <ol className="space-y-4">
        {steps.map((step, idx) => (
          <li key={idx} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primaryBlue text-white font-bold flex items-center justify-center text-sm">
              {idx + 1}
            </span>
            <div>
              <h3 className="font-semibold text-primaryBlue">{step.name}</h3>
              <p className="text-gray-700 leading-relaxed">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

/** Sources. Visible citations are a trust signal for readers and engines alike. */
export const Citations = ({ value }) => {
  const items = value?.filter((c) => c?.title) || [];
  if (!items.length) return null;

  return (
    <section className="citations mx-6 sm:mx-10 mb-10" aria-labelledby="sources-heading">
      <h2 id="sources-heading" className="text-lg font-bold text-primaryBlue mb-3">
        Sources
      </h2>
      <ol className="space-y-2 text-sm text-gray-600 list-decimal list-inside">
        {items.map((c, idx) => (
          <li key={idx}>
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primaryBlue"
              >
                {c.title}
              </a>
            ) : (
              c.title
            )}
            {c.publisher && <span> &mdash; {c.publisher}</span>}
            {c.datePublished && (
              <span className="text-gray-400">
                {" "}
                ({new Date(c.datePublished).getFullYear()})
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
