export const revalidate = 3600;
import InSide_Landing from '../../src/Pages/InsideShiftDeploy/InSide_Landing';

export const metadata = {
  title: 'Inside ShiftDeploy | Who We Are & How We Work',
  description:
    'Discover the story, mindset, and philosophy behind ShiftDeploy. Learn why we\'re different and how we deliver performance-first results.',
  alternates: { canonical: 'https://shiftdeploy.com/insideShiftDeploy' },
  openGraph: {
    title: 'Inside ShiftDeploy | Who We Are & How We Work',
    description:
      'Discover the story, mindset, and philosophy behind ShiftDeploy.',
    url: 'https://shiftdeploy.com/insideShiftDeploy',
  },
};

export default function InsideShiftDeployPage() {
  return <InSide_Landing />;
}

