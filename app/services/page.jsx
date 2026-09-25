export const revalidate = 3600;
import Toolkit_Landing from '../../src/Pages/DeployToolkit/Toolkit_Landing';

export const metadata = {
  title: 'Web Development & Optimisation Services UK',
  description:
    'Website development, speed optimisation, conversion improvements and ongoing maintenance for UK businesses. Request a tailored quote.',
  alternates: { canonical: 'https://shiftdeploy.com/services' },
  openGraph: {
    title: 'Web Development & Optimisation Services UK',
    description:
      'Website development, speed optimisation, conversion improvements and ongoing maintenance for UK businesses. Request a tailored quote.',
    url: 'https://shiftdeploy.com/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function ServicesPage() {
  return <Toolkit_Landing />;
}

