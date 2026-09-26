export const revalidate = 3600;
import ProductsPage from '../../src/Pages/ProductsPage';

const title = 'Our Products: AI Receptionist & Review Software';
const description =
  'Ready-made tools that work while you don’t: an AI receptionist that answers every call, and Google review software for UK private clinics.';

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
