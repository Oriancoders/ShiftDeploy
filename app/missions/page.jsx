export const revalidate = 3600;
import OurWorkPage from '../../src/Pages/MissionCompleted/OurWorkPage';

const title = 'Our Work: Client Projects & Case Studies';
const description =
  'Websites and web apps we’ve designed and built for real businesses, from an online shop to an EV charging platform. Read what we did and what changed.';

export const metadata = {
  title,
  description,
  alternates: { canonical: 'https://shiftdeploy.com/missions' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/missions',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy case studies' }],
  },
};

export default function Page() {
  return <OurWorkPage />;
}
