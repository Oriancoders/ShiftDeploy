import { PhoneMissed, MessageSquareText, CalendarCheck } from 'lucide-react';

export const heroFixes = [
  { href: '#calls', label: 'Every call answered' },
  { href: '#website', label: 'More enquiries coming in' },
  { href: '#admin', label: 'Your evenings back' },
];

const steps = [
  {
    icon: PhoneMissed,
    tone: 'bg-red-50 text-red-600',
    time: '2:14 pm',
    title: 'Missed call',
    body: 'You were with a customer.',
  },
  {
    icon: MessageSquareText,
    tone: 'bg-blue-50 text-primaryBlue',
    time: '2:14 pm',
    title: 'Text sent for you',
    body: '“Sorry we missed you. Pick a time that suits you here.”',
  },
  {
    icon: CalendarCheck,
    tone: 'bg-green-50 text-green-700',
    time: '2:21 pm',
    title: 'New booking',
    body: 'Thursday, 10:00 am. Added to your diary.',
  },
];

export default function HeroAnimation() {
  return (
    <figure className="w-full max-w-sm mx-auto lg:ml-auto lg:mr-0">
      <div className="rounded-[2rem] bg-primaryBlue p-3 shadow-2xl">
        <div className="rounded-[1.5rem] bg-gray-100 px-4 pt-5 pb-6">
          <p className="text-center text-xs font-semibold text-gray-500 mb-4">Your phone, while you work</p>
          <ol className="grid gap-3">
            {steps.map(({ icon: Icon, tone, time, title, body }) => (
              <li key={title} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${tone}`}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-bold text-primaryBlue">{title}</p>
                    <p className="text-xs text-gray-500 shrink-0">{time}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5 leading-snug">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-gray-600">
        One example of work that no longer slips away.
      </figcaption>
    </figure>
  );
}
