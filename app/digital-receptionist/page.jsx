export const revalidate = 3600;
import AiChatbotLanding from '../../src/Pages/AiChatbotLanding';

export const metadata = {
  title: 'Digital Receptionist | AI-Powered 24/7 Customer Engagement',
  description:
    "ShiftDeploy's Digital Receptionist is an AI chatbot that answers questions, captures leads, and books appointments 24/7 — so you never miss a customer.",
  keywords: [
    'AI receptionist', 'AI chatbot for business', '24/7 customer service bot',
    'lead capture chatbot', 'appointment booking AI', 'digital receptionist software',
  ],
  alternates: { canonical: 'https://shiftdeploy.com/digital-receptionist' },
  openGraph: {
    title: 'Digital Receptionist | AI-Powered 24/7 Customer Engagement',
    description: 'An AI chatbot that answers questions, captures leads, and books appointments 24/7.',
    url: 'https://shiftdeploy.com/digital-receptionist',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ShiftDeploy Digital Receptionist',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'AI-powered chatbot that handles customer questions, captures leads, and books appointments 24/7 for businesses.',
  url: 'https://shiftdeploy.com/digital-receptionist',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
};

export default function DigitalReceptionistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AiChatbotLanding />
    </>
  );
}

