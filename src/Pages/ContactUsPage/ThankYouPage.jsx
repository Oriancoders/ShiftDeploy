import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const steps = [
  { title: 'We reply within 24 hours', body: 'A real person will get back to you, during UK working hours.' },
  { title: 'We do your free check', body: 'We look at where you’re losing customers. Nothing on your side changes.' },
  { title: 'You get a plain-English plan', body: 'What to fix first, what it costs, and no obligation to go ahead.' },
];

export default function ThankYouPage() {
  return (
    <div className="w-full">
      <Navigation />
      <main id="main-content" className="bg-gray-50 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle2 className="mx-auto size-16 text-green-700" aria-hidden="true" />
            <h1 className="mt-6 text-[2rem] leading-[1.15] sm:text-5xl font-bold text-primaryBlue text-balance">
              Thanks, we’ve got your message.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-700">
              You’ll hear from us within 24 hours. Here’s what happens next.
            </p>
          </div>

          <ol className="mt-10 space-y-5 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
            {steps.map(({ title, body }, i) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primaryBlue text-white font-bold">{i + 1}</span>
                <div>
                  <p className="font-bold text-primaryBlue text-lg">{title}</p>
                  <p className="text-gray-700">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-center text-gray-700">
            Something urgent? Call us on{' '}
            <a href="tel:+447311126710" className="font-bold text-primaryBlue underline underline-offset-2 hover:text-primaryOrange">07311 126710</a>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/missions" prefetch={false} className="bg-primaryOrange hover:bg-toOrange border-2 border-primaryOrange text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg">
              See our work <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link href="/" prefetch={false} className="bg-white hover:bg-primaryBlue border-2 border-primaryBlue text-primaryBlue hover:text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
