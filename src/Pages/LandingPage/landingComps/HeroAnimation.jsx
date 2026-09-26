import { Gauge, LayoutTemplate, ShieldCheck } from 'lucide-react';

const capabilities = [
  { icon: Gauge, title: 'Fast websites', detail: 'Speed & usability', colour: 'text-primaryOrange' },
  { icon: LayoutTemplate, title: 'Web & mobile apps', detail: 'Built around your users', colour: 'text-primaryBlue' },
  { icon: ShieldCheck, title: 'Ongoing support', detail: 'Reliable day to day', colour: 'text-emerald-600' },
];

export default function HeroAnimation() {
  return (
    <div className="hero-performance w-full max-w-xl grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-3 sm:gap-5">
      <svg viewBox="0 0 240 180" className="w-full block" aria-hidden="true">
        <defs>
          <linearGradient id="hero-speed-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="45%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path d="M 25 110 A 95 95 0 0 1 215 110" fill="none" stroke="#e5e7eb" strokeWidth="10" strokeLinecap="round" />
        <path d="M 25 110 A 95 95 0 0 1 215 110" fill="none" stroke="url(#hero-speed-arc)" strokeWidth="10" strokeLinecap="round" />
        <g className="hero-speed-needle">
          <path d="M 116 110 L 120 35 L 124 110 Z" fill="#f76707" />
        </g>
        <circle cx="120" cy="110" r="11" fill="#0b1d30" />
        <circle cx="120" cy="110" r="4" fill="#f76707" />
        <text x="120" y="153" textAnchor="middle" fontSize="18" fontWeight="800" fill="#0b1d30">Built for speed</text>
      </svg>
      <div className="grid gap-2 sm:gap-3 min-w-0">
        {capabilities.map(({ icon: Icon, title, detail, colour }) => (
          <div key={title} className="flex items-center gap-2 sm:gap-3 border border-gray-200 bg-white rounded-lg p-2.5 sm:p-4 min-w-0">
            <Icon className={`size-5 sm:size-6 shrink-0 ${colour}`} aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold text-primaryBlue leading-snug">{title}</p>
              <p className="hidden sm:block text-xs text-gray-600 mt-1">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
