export const revalidate = 3600;
import ProductLanding from '../../src/Pages/ProductLanding';

export const metadata = {
  title: 'Our Products | Digital Receptionist & Review Your Doctor',
  description:
    'Explore ShiftDeploy products - the Digital Receptionist AI that captures and books leads 24/7, and Review Your Doctor, the GDPR-compliant patient review platform.',
  alternates: { canonical: 'https://shiftdeploy.com/product' },
  openGraph: {
    title: 'Our Products | Digital Receptionist & Review Your Doctor',
    description:
      'ShiftDeploy products that capture leads, book appointments, and grow your reputation around the clock.',
    url: 'https://shiftdeploy.com/product',
  },
};

export default function ProductPage() {
  return <ProductLanding />;
}
