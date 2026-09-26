export const revalidate = 3600;
import WinJobsPage from '../../../src/Pages/Services/WinJobsPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Win More Jobs: Quote Follow-Ups & Online Booking';
const description =
  'Quotes going quiet or customers not turning up? Automatic follow-ups, reminders and online booking that win more jobs.';

export const metadata = {
  title,
  description,
  keywords: ['online booking system for small business UK', 'how to follow up on a quote', 'quote follow up email', 'reduce no-shows', 'appointment reminders', 'how to get more leads for my business', 'website not getting leads', 'conversion rate optimisation'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftconvert' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services/shiftconvert',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function Page() {
  return (
    <WinJobsPage>
      <RelatedInsights
        tags={['Conversion rate', 'Forms', 'Booking pages', 'Lead capture', 'Lead response']}
        categories={['Conversion']}
        heading="Tips for winning more jobs"
        subheading="Where enquiries and bookings slip away, and how to fix it."
      />
    </WinJobsPage>
  );
}
