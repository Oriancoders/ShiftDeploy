export const revalidate = 3600;
import Toolkit_Landing from '../../src/Pages/DeployToolkit/Toolkit_Landing';

export const metadata = {
  title: 'Our Services | Web Performance, CRO & Automation',
  description:
    'Explore ShiftDeploy\'s full deploy toolkit â€" ShiftSpeed, ShiftConvert, ShiftBuild, and ShiftFlow. Solutions built to grow your business.',
  alternates: { canonical: 'https://shiftdeploy.com/services' },
  openGraph: {
    title: 'Our Services | Web Performance, CRO & Automation',
    description:
      'Explore ShiftDeploy\'s full deploy toolkit â€" ShiftSpeed, ShiftConvert, ShiftBuild, and ShiftFlow.',
    url: 'https://shiftdeploy.com/services',
  },
};

export default function ServicesPage() {
  return <Toolkit_Landing />;
}

