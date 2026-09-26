'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Phone, Mail, Check } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import JsonLd from '../../components/JsonLd';
import { trackGeneratedLead } from '../../lib/leadTracking';

const problems = ['Missing calls or messages', 'Not enough customers', 'Quotes or no-shows', 'Too much admin', 'Something else'];

const nextSteps = [
  { title: 'We reply within 24 hours', body: 'From a real person, during UK working hours.' },
  { title: 'We do your free check', body: 'We look at where you’re losing customers. Nothing on your side changes.' },
  { title: 'You get a plain-English plan', body: 'What to fix first, what it costs, and no obligation to go ahead.' },
];

const faqs = [
  { q: 'Is the free check really free?', a: 'Yes. There’s no cost and no obligation. If we can’t help, we’ll tell you.' },
  { q: 'What happens after I send this?', a: 'A person replies within 24 hours to arrange your free check, usually by email or a short call.' },
  { q: 'Do I need to prepare anything?', a: 'No. Just tell us what’s going wrong. We don’t need access to anything for the free check.' },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ShiftDeploy',
    url: 'https://shiftdeploy.com/ContactUs',
    mainEntity: { '@id': 'https://shiftdeploy.com/#organization' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
];

const inputBase = 'mt-2 w-full rounded-xl border px-4 py-3.5 text-lg focus:outline-none focus:ring-2';
const inputOk = 'border-gray-300 focus:border-primaryOrange focus:ring-primaryOrange/30';
const inputBad = 'border-red-500 focus:ring-red-200';

export default function ContactUs() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', problem: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((x) => ({ ...x, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = {};
    if (!form.name.trim()) found.name = 'Please tell us your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) found.email = 'Enter your email address, like you@yourbusiness.co.uk';
    setErrors(found);
    if (found.name) return document.getElementById('contact-name')?.focus();
    if (found.email) return document.getElementById('contact-email')?.focus();

    setStatus('loading');
    const message = [form.problem && `Biggest problem: ${form.problem}`, form.message.trim()].filter(Boolean).join('\n\n') || 'No details given.';
    import('@emailjs/browser')
      .then(({ default: emailjs }) => emailjs.send(
        'service_jrpagw4',
        'template_scjrafd',
        { name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), company: form.company.trim(), message },
        'QvcGHkk74en4u55cN'
      ))
      .then(() => {
        trackGeneratedLead('contact');
        setStatus('success');
        router.push('/thankyou');
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="w-full">
      <JsonLd data={schema} />
      <Navigation />
      <main id="main-content">
        <section className="bg-gray-50 pt-28 pb-14 sm:pt-36 sm:pb-20">
          <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Contact us</p>
              <h1 className="text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] font-bold text-primaryBlue text-balance">
                Get your free check
              </h1>
              <p className="text-lg sm:text-xl mt-5 leading-relaxed text-gray-700">
                Tell us what’s going wrong, like missed calls, a quiet website, quotes going unanswered
                or too much admin. We’ll show you where you’re losing work and the simplest way to fix it.
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-start">
              <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white border border-gray-200 shadow-xl p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="font-semibold text-primaryBlue">Your name</label>
                    <input id="contact-name" autoComplete="name" value={form.name} onChange={update('name')} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} className={`${inputBase} ${errors.name ? inputBad : inputOk}`} />
                    {errors.name && <p id="contact-name-error" className="mt-2 text-sm font-semibold text-red-700">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-semibold text-primaryBlue">Email</label>
                    <input id="contact-email" type="email" autoComplete="email" value={form.email} onChange={update('email')} placeholder="you@yourbusiness.co.uk" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} className={`${inputBase} ${errors.email ? inputBad : inputOk}`} />
                    {errors.email && <p id="contact-email-error" className="mt-2 text-sm font-semibold text-red-700">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="font-semibold text-primaryBlue">Phone <span className="font-normal text-gray-500">(optional)</span></label>
                    <input id="contact-phone" type="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} className={`${inputBase} ${inputOk}`} />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="font-semibold text-primaryBlue">Business or website <span className="font-normal text-gray-500">(optional)</span></label>
                    <input id="contact-company" autoComplete="organization" value={form.company} onChange={update('company')} className={`${inputBase} ${inputOk}`} />
                  </div>
                </div>

                <fieldset className="mt-6">
                  <legend className="font-semibold text-primaryBlue">What’s the biggest problem? <span className="font-normal text-gray-500">(optional)</span></legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {problems.map((p) => (
                      <label key={p} className={`cursor-pointer min-h-[44px] inline-flex items-center rounded-full border px-4 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primaryOrange text-sm sm:text-base font-semibold transition-colors ${form.problem === p ? 'border-primaryOrange bg-orange-50 text-primaryBlue' : 'border-gray-300 text-gray-700 hover:border-primaryOrange'}`}>
                        <input type="radio" name="problem" value={p} checked={form.problem === p} onChange={update('problem')} className="sr-only" />
                        {p}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label htmlFor="contact-message" className="mt-6 block font-semibold text-primaryBlue">Tell us a bit more <span className="font-normal text-gray-500">(optional)</span></label>
                <textarea id="contact-message" rows={4} value={form.message} onChange={update('message')} placeholder="For example: we miss calls when we’re on jobs and lose work to other firms." className={`${inputBase} ${inputOk} resize-y`} />

                <button type="submit" disabled={status === 'loading'} className="mt-6 w-full bg-primaryOrange hover:bg-toOrange disabled:bg-gray-500 text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg">
                  {status === 'loading' ? (
                    <>Sending <span className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" /></>
                  ) : (
                    <>Get your free check <ArrowRight size={20} aria-hidden="true" /></>
                  )}
                </button>
                <p className="mt-3 text-center text-sm text-gray-600">Free, no obligation. We reply within 24 hours.</p>
                {status === 'error' && (
                  <p role="status" className="mt-4 rounded-xl p-4 font-semibold bg-red-50 text-red-700 border border-red-200">
                    Sorry, that didn’t send. Please try again, or call us on 07311 126710.
                  </p>
                )}
              </form>

              <aside className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primaryBlue">What happens next</h2>
                  <ol className="mt-5 space-y-5">
                    {nextSteps.map(({ title, body }, i) => (
                      <li key={title} className="flex gap-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primaryBlue text-white font-bold">{i + 1}</span>
                        <div>
                          <p className="font-bold text-primaryBlue text-lg">{title}</p>
                          <p className="text-gray-700">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h2 className="text-xl font-bold text-primaryBlue">Prefer to talk?</h2>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <a href="tel:+447311126710" className="min-h-[44px] inline-flex items-center gap-3 font-semibold text-primaryBlue hover:text-primaryOrange">
                        <Phone className="size-5 text-primaryOrange" aria-hidden="true" /> 07311 126710
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@shiftdeploy.com" className="min-h-[44px] inline-flex items-center gap-3 font-semibold text-primaryBlue hover:text-primaryOrange">
                        <Mail className="size-5 text-primaryOrange" aria-hidden="true" /> contact@shiftdeploy.com
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/shiftdeploy/" target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center gap-3 font-semibold text-primaryBlue hover:text-primaryOrange">
                        <FaLinkedin className="size-5 text-primaryOrange" aria-hidden="true" /> ShiftDeploy on LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>

                <ul className="space-y-2 text-gray-700">
                  {['Free, no obligation', 'Plain English, no jargon', 'Honest if we can’t help'].map((t) => (
                    <li key={t} className="flex items-center gap-2"><Check className="size-5 text-green-700" aria-hidden="true" /> {t}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 sm:py-20">
          <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primaryBlue">Straight answers.</h2>
            <dl className="mt-8 grid gap-6 md:grid-cols-3">
              {faqs.map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <dt><h3 className="text-lg font-bold text-primaryBlue">{q}</h3></dt>
                  <dd className="mt-2 text-gray-700">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
