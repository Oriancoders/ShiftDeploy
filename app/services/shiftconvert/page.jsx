export const revalidate = 3600;
import ConvertPage from '../../../src/Pages/Services/ShiftConvert/ConvertPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Conversion Rate Optimisation: More Enquiries';
const description =
  'Website getting visitors but not enquiries? We find what puts people off and fix it, so more visitors call, book or enquire, without a full redesign.';

export const metadata = {
  title,
  description,
  keywords: ['conversion rate optimisation', 'website not getting enquiries', 'more website enquiries', 'increase website leads', 'CRO UK', 'improve enquiry form'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftconvert' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services/shiftconvert',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy conversion rate optimisation' }],
  },
};

export default function ShiftConvertPage() {
  return (
    <ConvertPage>
      <RelatedInsights
        tags={['Conversion rate', 'Forms', 'Booking pages', 'Lead capture', 'Lead response']}
        categories={['Conversion']}
        heading="Tips for getting more enquiries"
        subheading="Where booking and enquiry pages lose people, and how to fix it."
      />
    </ConvertPage>
  );
}
