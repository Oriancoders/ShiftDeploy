export const revalidate = 3600;
import Toolkit_Landing from '../../src/Pages/DeployToolkit/Toolkit_Landing';
import JsonLd from '../../src/components/JsonLd';
import RelatedInsights from '../../src/components/RelatedInsights';

export const metadata = {
  title: 'Deploy Toolkit | What We Fix and How',
  description:
    'Slow sites, traffic that never converts, builds that need doing right, systems that quietly degrade. What we fix and what working with us involves.',
  alternates: { canonical: 'https://shiftdeploy.com/deploy-toolkit' },
  openGraph: {
    title: 'Deploy Toolkit | What ShiftDeploy Fixes',
    description:
      'The four problems we solve most often, and what working with us actually involves.',
    url: 'https://shiftdeploy.com/deploy-toolkit',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

/**
 * The page's own FAQ, marked up as FAQPage. These are questions real prospects
 * ask before engaging, which makes them exactly the queries an assistant is
 * fielding on someone's behalf.
 */
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://shiftdeploy.com/deploy-toolkit#webpage',
      url: 'https://shiftdeploy.com/deploy-toolkit',
      name: 'Deploy Toolkit | What We Fix and How',
      isPartOf: { '@id': 'https://shiftdeploy.com/#organization' },
      about: { '@id': 'https://shiftdeploy.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://shiftdeploy.com/deploy-toolkit#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How quickly can you start?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We begin with a free audit, which we typically turn around within a few days of getting access. Paid work starts once the scope is agreed off the back of that.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with our existing team or developer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We often hand findings and fixes to an in-house developer or an existing agency rather than replacing them. The audit is useful either way.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the audit shows no major issues?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Then we tell you that. A clean audit is a legitimate result and it means you can stop spending on the assumption that performance is the problem.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you make changes during the free audit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The audit is read-only. We measure and report; nothing changes on your site without agreement.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you handle access and security?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The initial audit needs no access at all, since it works from the public site. Where deeper access is needed later, we ask for the narrowest permissions that do the job and remove them when the work finishes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after optimization is complete?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Performance degrades over time as content and third-party scripts accumulate, so we offer ongoing monitoring and maintenance. It is optional, not a lock-in.',
          },
        },
      ],
    },
  ],
};

export default function DeployToolkitPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Toolkit_Landing />
      <RelatedInsights
        tags={['Core Web Vitals', 'Conversion rate', 'Forms', 'LCP']}
        categories={['Web Performance', 'Conversion']}
        heading="What we have found doing this"
        subheading="Audits, patterns and numbers from real client work."
      />
    </>
  );
}
