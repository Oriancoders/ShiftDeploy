// Renders JSON-LD <script> tags. Data is JSON.stringify'd by us, so it's safe;
// the lint rule below is acknowledged for this specific known-safe usage.
// Arrays become one script per item so every script has a top-level @type.
export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return items.map((item, i) => (
    <script
      key={i}
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
    />
  ));
}
