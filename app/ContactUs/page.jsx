export const revalidate = 3600;
import ContactUs from '../../src/Pages/ContactUsPage/ContactUs';

const title = 'Contact Us: Get Your Free Check';
const description =
  'Tell us what’s going wrong, like missed calls, a quiet website or too much admin. A person replies within 24 hours. Free, no obligation. 07311 126710.';

export const metadata = {
  title,
  description,
  alternates: { canonical: 'https://shiftdeploy.com/ContactUs' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/ContactUs',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact ShiftDeploy' }],
  },
  robots: { index: true, follow: true },
};

export default function ContactUsPage() {
  return <ContactUs />;
}
