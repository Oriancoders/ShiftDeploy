export const revalidate = 3600;
import Landing_Protocol from '../../src/Pages/ShiftProtocol/Landing_Protocol';
import JsonLd from '../../src/components/JsonLd';
import RelatedInsights from '../../src/components/RelatedInsights';

export const metadata = {
  title: 'The Shift Protocol | How We Work',
  description:
    'The five phases every ShiftDeploy engagement runs through, what we guarantee at each one, and how we keep you in control of the work.',
  alternates: { canonical: 'https://shiftdeploy.com/shift-protocol' },
  openGraph: {
    title: 'The Shift Protocol | How ShiftDeploy Works',
    description:
      'Five phases, clear guarantees, and communication rituals that keep you in control of the work.',
    url: 'https://shiftdeploy.com/shift-protocol',
    type: 'website',
  },
};

/**
 * HowTo describes the engagement as an ordered process. It is the honest schema
 * type here: the page is literally a sequence of named phases, and marking it
 * up lets an assistant answer "how does ShiftDeploy work" with the actual steps
 * rather than a paraphrase.
 */
const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': 'https://shiftdeploy.com/shift-protocol#howto',
  name: 'The Shift Protocol',
  description:
    'The five-phase process ShiftDeploy runs on every engagement, from discovery through to ongoing support.',
  url: 'https://shiftdeploy.com/shift-protocol',
  provider: { '@id': 'https://shiftdeploy.com/#organization' },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Discover & Align',
      text: 'Understand the business problem and agree what success actually looks like before any work starts.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Design & Blueprint',
      text: 'Map the solution and the scope so there are no surprises mid-build.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Engineer & Validate',
      text: 'Build it, then prove it works against the measures agreed in phase one.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Deploy & Safeguard',
      text: 'Ship to production with monitoring and rollback in place.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Evolve & Support',
      text: 'Keep improving it, with maintenance and long-term stability handled.',
    },
  ],
};

export default function ShiftProtocolPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Landing_Protocol />
      <RelatedInsights
        tags={['Audit', 'Core Web Vitals', 'Conversion rate']}
        categories={['Case Studies', 'Web Performance']}
        heading="The protocol in practice"
        subheading="Write-ups from real engagements run this way."
      />
    </>
  );
}
