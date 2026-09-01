import { Clock, Video, Globe2, ShieldCheck } from 'lucide-react';

/**
 * "How we work with UK clients."
 *
 * The site previously said nothing at all about where we are or how we
 * operate, which is the vacuum that makes a remote agency look evasive. The
 * fix is not a fabricated UK address - that is a Google Business Profile
 * violation and the actual scam signal. It is stating the arrangement plainly:
 * based in Karachi, working with UK clients remotely, meetings arranged when a
 * project warrants it.
 *
 * Research on trust signals is consistent that transparency about a
 * distributed model strengthens credibility rather than undermining it. What
 * damages it is the absence of any answer.
 */

const POINTS = [
  {
    icon: Clock,
    title: 'We work UK hours',
    body:
      'Our day overlaps yours. Enquiries get a reply within 24 hours, and during a project you have us in your working day, not the following morning.',
  },
  {
    icon: Video,
    title: 'Video by default, in person when it matters',
    body:
      'Most of this work happens in a shared screen and a shared document. When a project genuinely warrants meeting face to face, we arrange it.',
  },
  {
    icon: Globe2,
    title: 'Based in Karachi, working with UK practices',
    body:
      'We are a small remote team, not a UK office with a Pakistani back end. Saying so is deliberate: you should know exactly who you are hiring.',
  },
  {
    icon: ShieldCheck,
    title: 'Nothing changes without your say-so',
    body:
      'The initial audit is read-only and needs no access to your site. Where deeper access is needed later, we ask for the narrowest permissions that do the job and give them back when the work is done.',
  },
];

export default function HowWeWorkRemotely({ variant = 'light' }) {
  const dark = variant === 'dark';

  return (
    <section
      className={dark ? 'bg-primaryBlue py-16 sm:py-20' : 'bg-gray-50 py-16 sm:py-20'}
      aria-labelledby="how-we-work-remotely"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p
            className={`mb-3 text-sm font-bold uppercase tracking-wider ${
              dark ? 'text-primaryOrange' : 'text-primaryOrange'
            }`}
          >
            How we work
          </p>
          <h2
            id="how-we-work-remotely"
            className={`text-2xl font-semibold leading-tight sm:text-3xl ${
              dark ? 'text-white' : 'text-primaryBlue'
            }`}
          >
            A remote team, working with UK clients
          </h2>
          <p
            className={`mt-4 text-lg leading-relaxed ${
              dark ? 'text-white/70' : 'text-gray-600'
            }`}
          >
            We do not have a UK office, and we would rather tell you that than
            let you find out. Here is what working with us actually looks like.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {POINTS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className={`rounded-xl border p-6 ${
                dark
                  ? 'border-white/12 bg-white/5'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <Icon
                className="mb-3 size-5 text-primaryOrange"
                aria-hidden="true"
              />
              <h3
                className={`text-base font-semibold ${
                  dark ? 'text-white' : 'text-primaryBlue'
                }`}
              >
                {title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  dark ? 'text-white/65' : 'text-gray-600'
                }`}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        <p
          className={`mt-8 text-sm ${dark ? 'text-white/55' : 'text-gray-500'}`}
        >
          Registered and operating from Karachi, Pakistan. Serving clients
          across the United Kingdom.
        </p>
      </div>
    </section>
  );
}
