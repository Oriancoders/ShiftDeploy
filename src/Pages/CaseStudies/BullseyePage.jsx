import { ShieldCheck, Compass, UserPlus, FolderOpen, LayoutGrid, TrendingUp } from 'lucide-react';
import CaseStudyDetail from '../../components/CaseStudyDetail';

export default function BullseyePage() {
  return (
    <CaseStudyDetail
      slug="BullseyesCase"
      client="Bullseye Investments"
      service="Website design"
      h1="A website that makes"
      h1Accent="a clear first impression."
      intro="Bullseye Investments needed a website that felt trustworthy, explained several services simply, and guided new clients towards opening an account. We designed and built it, and still look after it."
      facts={[
        ['Client', 'Bullseye Investments'],
        ['Industry', 'Financial services'],
        ['What we did', 'Website design and build'],
        ['Ongoing', 'Support and maintenance'],
      ]}
      image="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1764978786/bullseyes_x1ifpw.png"
      imageAlt="Bullseye Investments website homepage showing its financial services offer"
      problem={{
        title: 'Visitors couldn’t tell what to do next',
        body: 'For a financial business, trust is everything. Visitors needed to understand the firm quickly, find the right service, and know exactly how to become a client.',
        needs: [
          'A website that looks credible on any device',
          'Investments, property and insurance explained clearly',
          'A simple path to opening an account',
          'One place for important documents',
        ],
      }}
      built={{
        title: 'A trustworthy website with an obvious next step',
        items: [
          { icon: ShieldCheck, title: 'Trust from the first screen', body: 'A professional design that makes the firm easy to understand and easy to trust.' },
          { icon: LayoutGrid, title: 'Every service explained', body: 'A clear section for each part of the business, without overwhelming visitors.' },
          { icon: UserPlus, title: 'Simpler onboarding', body: 'Step-by-step guidance for opening an account, with clear buttons at each stage.' },
          { icon: FolderOpen, title: 'Documents in one place', body: 'Disclosures and guides that are easy to find and easy to read on any device.' },
          { icon: TrendingUp, title: 'A market snapshot', body: 'A simple overview of market movement that visitors can scan quickly.' },
          { icon: Compass, title: 'Easy to get in touch', body: 'Enquiries and newsletter sign-ups that reach the team and stay organised.' },
        ],
      }}
      phases={{
        title: 'How the website came together',
        items: [
          { time: 'Phase 1', title: 'Planning', body: 'Agreed the goals, the key visitor journeys and how the website should be organised.' },
          { time: 'Phase 2', title: 'Design', body: 'Designed a clean, trustworthy look that works on phones and computers.' },
          { time: 'Phase 3', title: 'Build', body: 'Built the website with smooth pages and a structure that’s easy to grow.' },
          { time: 'Phase 4', title: 'Forms, documents and market data', body: 'Connected enquiries, the document library and the market overview.' },
          { time: 'Phase 5', title: 'Testing', body: 'Tested on different devices and checked every page for clarity.' },
        ],
      }}
      challenges={[
        { challenge: 'Building trust online', solution: 'We focused on clarity and credibility, so visitors understand the firm straight away and feel confident taking the next step.' },
        { challenge: 'Explaining several services clearly', solution: 'We gave each area its own clear section, so nothing feels crowded or confusing.' },
        { challenge: 'Making onboarding obvious', solution: 'We laid out the account-opening steps plainly, with one clear button at each stage.' },
        { challenge: 'Keeping documents easy to find', solution: 'We brought every important document into one library that’s easy to read on a phone.' },
      ]}
      results={{
        title: 'A website clients can trust',
        items: [
          'A clear message from the first screen',
          'An obvious next step on every page',
          'Easy access to the client portal and documents',
          'Ongoing support and improvements from our team',
        ],
      }}
      quote={{ text: 'Better than anything I’ve seen.', name: 'Farjad Abbas', role: 'Head of Business Development, Bullseye Investments' }}
      related={{ text: 'Want a website that turns visitors into clients?', href: '/services/shiftconvert', label: 'See how we help you win more work' }}
      cta={{ title: 'Does your website build trust?', text: 'Get a free check. We’ll show you what visitors see first, and how to make the next step obvious.' }}
    />
  );
}
