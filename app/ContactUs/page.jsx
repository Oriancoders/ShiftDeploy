export const revalidate = 3600;
import ContactUs from '../../src/Pages/ContactUsPage/ContactUs';

export const metadata = {
  title: 'Contact Us | Get Your Free Website Audit',
  description:
    'Ready to shift into high gear? Contact ShiftDeploy for a free website performance audit and discover how we can accelerate your growth.',
  alternates: { canonical: 'https://shiftdeploy.com/ContactUs' },
  openGraph: {
    title: 'Contact Us | Get Your Free Website Audit',
    description:
      'Ready to shift into high gear? Contact ShiftDeploy for a free website performance audit.',
    url: 'https://shiftdeploy.com/ContactUs',
  },
  robots: { index: true, follow: true },
};

export default function ContactUsPage() {
  return <ContactUs />;
}

