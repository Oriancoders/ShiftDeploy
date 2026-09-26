'use client';
import { useState } from 'react';
import { ArrowRight, Check, Star } from 'lucide-react';
import { trackGeneratedLead } from '../../../lib/leadTracking';
import { websiteDomain } from '../../../lib/websiteDomain';

const checks = [
  'How fast it loads on a phone',
  'How easily people find you on Google',
  'What stops visitors calling or booking',
];

const DeployToolkit = () => {
  const [emailInput, setEmailInput] = useState('');
  const [websiteInput, setWebsiteInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setSent(false);

    const domain = websiteDomain(websiteInput);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const found = {};
    if (!domain) found.website = 'Enter your website address, like yourbusiness.co.uk';
    if (!emailRegex.test(emailInput.trim())) found.email = 'Enter your email address, like you@yourbusiness.co.uk';
    setErrors(found);
    if (found.website) return document.getElementById('audit-website')?.focus();
    if (found.email) return document.getElementById('audit-email')?.focus();

    setLoading(true);
    import('@emailjs/browser')
      .then(({ default: emailjs }) => emailjs.send(
        'service_jrpagw4',
        'template_scjrafd',
        {
          name: 'Free website audit request',
          email: emailInput.trim(),
          company: domain,
          message: `[Homepage audit] Please send a free website audit for ${domain} to ${emailInput.trim()}. Requested ${new Date().toLocaleDateString('en-GB')}.`,
        },
        'QvcGHkk74en4u55cN'
      ))
      .then(() => {
        trackGeneratedLead('homepage_audit');
        setSent(true);
        setMessage('Thanks. Your free website audit will be in your inbox within 24 hours.');
        setWebsiteInput('');
        setEmailInput('');
      })
      .catch(() => setMessage('Sorry, that didn’t send. Please try again.'))
      .finally(() => setLoading(false));
  };

  return (
    <section id="deploy-toolkit" className="w-full bg-gray-50 py-16 sm:py-24 text-textColor scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div>
          <p className="text-sm sm:text-base font-semibold text-orange-700 mb-4">Free website audit</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-[1.1] text-primaryBlue text-balance">
            Is your website losing you work?
            <span className="block text-primaryOrange">Find out for free.</span>
          </h2>
          <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-700">
            Send us your website and we’ll email you a plain-English report within 24 hours.
            We check:
          </p>
          <ul className="mt-6 grid gap-3">
            {checks.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg text-primaryBlue font-semibold">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <Check className="size-4 text-green-700" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <figure className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-5 text-amber-400 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-3 text-lg text-gray-700">
              “ShiftDeploy is highly recommended. They have consistently met deadlines, and their
              after-sales service is outstanding.”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span aria-hidden="true" className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-primaryBlue font-semibold">KA</span>
              <span className="text-sm">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7415328654185947136/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primaryBlue underline underline-offset-2 hover:text-primaryOrange"
                >
                  Kamran Abbas
                </a>
                <span className="block text-gray-600">Chief Strategist, Bullseye Investments</span>
              </span>
            </figcaption>
          </figure>
        </div>

        <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-white border border-gray-200 shadow-xl p-6 sm:p-8">
          <img
            srcSet="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_600/v1765189190/shiftdeploy_audit_ht8dlu.png 600w, https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_1200/v1765189190/shiftdeploy_audit_ht8dlu.png 1200w"
            sizes="(max-width: 1024px) 100vw, 600px"
            src="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto,w_1200/v1765189190/shiftdeploy_audit_ht8dlu.png"
            alt="Example of a ShiftDeploy website audit report"
            className="w-full aspect-video object-cover rounded-lg"
            width="1200"
            height="675"
            loading="lazy"
          />

          <label htmlFor="audit-website" className="block mt-6 font-semibold text-primaryBlue">Your website</label>
          <input
            id="audit-website"
            name="websiteInput"
            type="text"
            inputMode="url"
            autoComplete="url"
            value={websiteInput}
            onChange={(e) => { setWebsiteInput(e.target.value); setErrors((x) => ({ ...x, website: undefined })); }}
            aria-invalid={Boolean(errors.website)}
            aria-describedby={errors.website ? 'audit-website-error' : undefined}
            placeholder="yourbusiness.co.uk"
            className={`mt-2 w-full rounded-xl border px-4 py-3.5 text-lg focus:outline-none focus:ring-2 ${errors.website ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-primaryOrange focus:ring-primaryOrange/30'}`}
          />

          {errors.website && <p id="audit-website-error" className="mt-2 text-sm font-semibold text-red-700">{errors.website}</p>}

          <label htmlFor="audit-email" className="block mt-4 font-semibold text-primaryBlue">Where should we send it?</label>
          <input
            id="audit-email"
            name="emailInput"
            type="email"
            autoComplete="email"
            value={emailInput}
            onChange={(e) => { setEmailInput(e.target.value); setErrors((x) => ({ ...x, email: undefined })); }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'audit-email-error' : undefined}
            placeholder="you@yourbusiness.co.uk"
            className={`mt-2 w-full rounded-xl border px-4 py-3.5 text-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-primaryOrange focus:ring-primaryOrange/30'}`}
          />

          {errors.email && <p id="audit-email-error" className="mt-2 text-sm font-semibold text-red-700">{errors.email}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-primaryOrange hover:bg-toOrange disabled:bg-gray-500 text-white text-lg px-7 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 shadow-lg"
          >
            {loading ? (
              <>
                Sending
                <span className="size-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
              </>
            ) : (
              <>
                Send my free audit <ArrowRight size={20} aria-hidden="true" />
              </>
            )}
          </button>

          <p className="mt-3 text-center text-sm text-gray-600">Free, no obligation. We won’t share your details.</p>

          {message && (
            <p
              role="status"
              className={`mt-4 rounded-xl p-4 font-semibold ${sent ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default DeployToolkit;
