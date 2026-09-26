export const revalidate = 3600;
import AboutPage from '../../src/Pages/About/AboutPage';

const title = 'About Us';
const description =
  'A small remote team helping UK service businesses stop losing work, with AI receptionists, automation, apps and websites. Plain English, UK hours.';

export const metadata = {
  title,
  description,
  alternates: { canonical: 'https://shiftdeploy.com/about' },
  openGraph: {
    title: 'About Us | ShiftDeploy',
    description,
    url: 'https://shiftdeploy.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About ShiftDeploy' }],
  },
};

export default function Page() {
  return <AboutPage />;
}
