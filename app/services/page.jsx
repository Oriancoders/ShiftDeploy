export const revalidate = 3600;
import ServicesPage from '../../src/Pages/ServicesPage/ServicesPage';

const title = 'How We Help Service Businesses Win More Work';
const description =
  'Not found on Google, missing calls, quotes going quiet or buried in admin? Find your problem and the fix: AI receptionist, automation, apps or websites.';

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
