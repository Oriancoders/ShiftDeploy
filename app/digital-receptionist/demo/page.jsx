export const dynamic = 'force-dynamic';
import BreadcrumbSchema from '../../../src/components/BreadcrumbSchema';
import AiChatbotDemo from '../../../src/Pages/AiChatbotDemo';

export const metadata = {
  title: 'Digital Receptionist Demo',
  description:
    'Try ShiftDeploy\'s Digital Receptionist AI chatbot live. See how it engages customers, answers questions, and captures leads in real time.',
  alternates: { canonical: 'https://shiftdeploy.com/digital-receptionist/demo' },
  openGraph: {
    title: 'Digital Receptionist Demo | ShiftDeploy',
    description:
      'Try ShiftDeploy\'s Digital Receptionist AI chatbot live.',
    url: 'https://shiftdeploy.com/digital-receptionist/demo',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function AiChatbotDemoPage() {
  return (
    <>
      <BreadcrumbSchema items={[['Products', '/product'], ['AI receptionist', '/digital-receptionist'], ['Demo', '/digital-receptionist/demo']]} />
      <AiChatbotDemo />
    </>
  );
}
