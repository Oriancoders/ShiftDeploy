import { Search, Zap, Smartphone, TrendingUp, FileText, ShieldCheck } from 'lucide-react';
import ServiceDetail from '../../../components/ServiceDetail';

const pains = [
  { title: 'People leave before it loads', body: 'If a page takes too long, visitors go back to Google and pick someone else.' },
  { title: 'It’s worst on a phone', body: 'Most of your customers are on a phone, often on patchy mobile data.' },
  { title: 'Google pushes slow sites down', body: 'Page speed is one of the things Google looks at when deciding who to show first.' },
  { title: 'You pay for clicks you lose', body: 'If you run ads, every visitor who leaves before the page loads is money wasted.' },
];

const gets = [
  { icon: Search, title: 'A free speed check', body: 'We test your key pages on a phone and show you exactly what’s slowing them down.' },
  { icon: Zap, title: 'Biggest fixes first', body: 'We fix what makes the most difference first, like heavy images and slow scripts.' },
  { icon: Smartphone, title: 'Faster on phones', body: 'Pages load quickly on a phone, even on slower mobile data.' },
  { icon: TrendingUp, title: 'Better for Google', body: 'A faster site helps you meet Google’s page experience standards.' },
  { icon: FileText, title: 'A before-and-after report', body: 'A plain-English report showing what we changed and how much faster it is.' },
  { icon: ShieldCheck, title: 'Kept fast', body: 'Optional ongoing checks so updates don’t slowly make it slow again.' },
];

const steps = [
  { title: 'Free speed check', body: 'We test your most important pages and find the real causes of the slowdown.' },
  { title: 'Plan and fixed quote', body: 'You get a short list of fixes, in order of impact, with a fixed price.' },
  { title: 'We fix it', body: 'No redesign and no downtime. Your website stays live while we work.' },
  { title: 'Report and keep it fast', body: 'You get a before-and-after report, and the option to keep it fast.' },
];

const faqs = [
  {
    q: 'Why is my website so slow?',
    a: 'The most common causes are large images, too many plugins or scripts, and cheap hosting. Our free speed check shows which ones are slowing your site down.',
  },
  {
    q: 'How fast should my website load?',
    a: 'Google recommends that the main content of a page appears within 2.5 seconds. On a phone, faster is always better, because every extra second loses visitors.',
  },
  {
    q: 'Does website speed affect Google rankings?',
    a: 'Yes. Page speed is part of Google’s page experience signals. It’s one factor among many, but a slow site makes it harder to rank and easier to lose visitors.',
  },
  {
    q: 'Do I need a new website to make it faster?',
    a: 'Usually not. Most sites can be made much faster without a redesign. If a rebuild really is the better option, we’ll explain why.',
  },
  {
    q: 'Will my website go offline while you work on it?',
    a: 'No. We make changes carefully so your website stays live for your customers the whole time.',
  },
  {
    q: 'Do you change anything during the free speed check?',
    a: 'No. The check only measures and reports. Nothing on your site changes until you’ve seen the findings and agreed to go ahead.',
  },
  {
    q: 'Can you work with my existing web developer?',
    a: 'Yes. We can make the changes ourselves or give your developer a clear list of fixes to follow.',
  },
];

function SpeedVisual() {
  return (
    <figure className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl space-y-6">
        <div>
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-gray-700">Slow website</span>
            <span className="text-red-600">Still loading…</span>
          </div>
          <div className="mt-2 h-3 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full w-[35%] rounded-full bg-red-500" />
          </div>
          <p className="mt-2 text-sm text-gray-600">Visitor gives up and goes back to Google.</p>
        </div>
        <div>
          <div className="flex justify-between text-sm font-semibold">
            <span className="text-gray-700">After our fixes</span>
            <span className="text-green-700">Loaded</span>
          </div>
          <div className="mt-2 h-3 rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full w-full rounded-full bg-green-600" />
          </div>
          <p className="mt-2 text-sm text-gray-600">Visitor sees your page and gets in touch.</p>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">Illustration: the same visitor, two different websites.</figcaption>
    </figure>
  );
}

export default function SpeedPage({ children }) {
  return (
    <ServiceDetail
      slug="shiftspeed"
      crumb="Website speed optimisation"
      h1="Stop losing customers"
      h1Accent="to a slow website."
      intro="If your website is slow on a phone, many visitors leave before they see what you offer. We find what’s slowing it down, fix it, and show you the difference."
      ctaLabel="Get your free speed check"
      visual={<SpeedVisual />}
      ticks={['Free, no obligation', 'No redesign needed', 'No downtime']}
      pains={{ title: 'What a slow website is costing you', items: pains }}
      gets={{ title: 'A faster website, without starting again', items: gets }}
      steps={{ title: 'From free speed check to a faster website', items: steps }}
      faqs={faqs}
      faqEyebrow="Questions about website speed"
      finalTitle="Is your website slowing you down?"
      finalText="Get a free speed check. We’ll show you what’s slowing your site and the quickest way to fix it."
      service={{
        name: 'Website speed optimisation',
        type: 'Website speed optimisation',
        description: 'Find and fix what makes a business website slow on phones, so fewer visitors leave and more get in touch.',
      }}
    >
      {children}
    </ServiceDetail>
  );
}
