import JsonLd from './JsonLd';

// BreadcrumbList for pages that don't use the shared service or case study templates.
export default function BreadcrumbSchema({ items }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [['Home', '/'], ...items].map(([name, path], i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name,
          item: `https://shiftdeploy.com${path === '/' ? '' : path}`,
        })),
      }}
    />
  );
}
