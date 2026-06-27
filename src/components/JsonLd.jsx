// Renders a JSON-LD <script> tag. Data is JSON.stringify'd by us, so it's safe;
// the lint rule below is acknowledged for this specific known-safe usage.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
