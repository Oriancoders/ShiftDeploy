export const revalidate = 3600;
import ProductsPage from '../../src/Pages/ProductsPage';

const title = 'Products: AI Receptionist & Review Software';
const description =
  'An AI receptionist that answers every call, and Google review software for UK private clinics. Ready to use.';

export const metadata = {
  title,
  description,
  alternates: { canonical: 'https://shiftdeploy.com/product' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/product',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy products' }],
  },
};

export default function Page() {
  return <ProductsPage />;
}
