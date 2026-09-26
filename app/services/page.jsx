export const revalidate = 3600;
import ServicesPage from '../../src/Pages/ServicesPage/ServicesPage';

const title = 'Services: AI Receptionist, Automation & Web Design';
const description =
  'Not found on Google, missing calls or buried in admin? Find your problem and the fix: AI, automation, apps or websites.';

export const metadata = {
  title,
  description,
  alternates: { canonical: 'https://shiftdeploy.com/services' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy services' }],
  },
};

export default function Page() {
  return <ServicesPage />;
}
