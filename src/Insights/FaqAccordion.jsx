/**
 * FAQ list with every answer always visible.
 *
 * Answers used to sit in a collapsible accordion. They were still in the HTML,
 * but hidden with aria-hidden and zero height, which some AI extractors and
 * readers skip. An open list is what search engines and AI answers quote most
 * reliably, and it matches the FAQ on the rest of the site.
 */
export default function FaqAccordion({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item._key || idx} className="overflow-hidden rounded-lg border border-gray-200">
          <h3 className="m-0 bg-gray-50 px-5 py-4 text-base font-semibold text-primaryBlue">{item.question}</h3>
          <p className="m-0 bg-white px-5 py-4 leading-relaxed text-gray-700">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
