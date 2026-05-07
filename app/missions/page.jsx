export const revalidate = 3600;
import Mission_Landing from '../../src/Pages/MissionCompleted/Mission_Landing';

export const metadata = {
  title: 'Missions Completed | Client Results & Case Studies',
  description:
    'See the measurable results ShiftDeploy has delivered for real businesses — faster sites, higher conversions, and sustainable growth.',
  keywords: ['web agency case studies', 'CRO results', 'website performance results', 'client success stories', 'ShiftDeploy portfolio'],
  alternates: { canonical: 'https://shiftdeploy.com/missions' },
  openGraph: {
    title: 'Missions Completed | Client Results & Case Studies',
    description: 'See the measurable results ShiftDeploy has delivered for real businesses.',
    url: 'https://shiftdeploy.com/missions',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Missions Completed - ShiftDeploy Case Studies',
  description: 'Measurable results ShiftDeploy delivered for real businesses: faster sites, higher conversions, sustainable growth.',
  url: 'https://shiftdeploy.com/missions',
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
};

export default function MissionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Mission_Landing />
    </>
  );
}

