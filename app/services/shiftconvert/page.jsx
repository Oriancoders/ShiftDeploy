export const revalidate = 3600;
import WinJobsPage from '../../../src/Pages/Services/WinJobsPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Win More Jobs From Your Enquiries';
const description =
  'Quotes going quiet and customers not turning up? Automatic quote follow-ups, appointment reminders and online booking that turn enquiries into jobs.';

export const metadata = {
  title,
  description,
  keywords: ['follow up quotes', 'reduce no-shows', 'appointment reminders', 'online booking system', 'convert more leads', 'website not getting enquiries'],
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
