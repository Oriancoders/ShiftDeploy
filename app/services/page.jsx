export const revalidate = 3600;
import ServicesPage from '../../src/Pages/ServicesPage/ServicesPage';

const title = 'AI Receptionist, Websites & Automation Services';
const description =
  'Missing calls, a quiet website or evening admin? Find your problem and the fix: AI receptionist, WhatsApp automation, web design, local SEO and apps.';

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
