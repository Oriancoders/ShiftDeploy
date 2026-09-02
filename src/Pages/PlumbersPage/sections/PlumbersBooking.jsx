'use client';
import React, { useEffect, useRef, useState } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Check from 'lucide-react/dist/esm/icons/check';
import Loader2 from 'lucide-react/dist/esm/icons/loader-2';
import { Button, Eyebrow, Section } from '../ui';
import { usePackageSelection } from '../PackageSelectionContext';
import { PACKAGE_OPTIONS } from '../packages';

/* Same EmailJS destination as src/Pages/ContactUsPage/ContactUs.jsx. */
const SERVICE_ID = 'service_jrpagw4';
const TEMPLATE_ID = 'template_scjrafd';
const PUBLIC_KEY = 'QvcGHkk74en4u55cN';

const RATE_LIMIT_KEY = 'sd_last_submit';
const RATE_LIMIT_MS = 60_000;

const CONTACT_EMAIL = 'contact@shiftdeploy.com';
const WHATSAPP_URL = 'https://wa.me/447311126710';

const SERVICE_TYPES = [
  'New Website (No website yet)',
  'Website Redesign (Outdated site)',
  'Local SEO: Rank on Google',
  'AI SEO: Found on ChatGPT/Gemini',
  'Google Ads Setup',
  'Full Growth Package',
  'Not Sure, Just Audit Me',
];

const TRUST = [
  'UK-focused. We know the trades market',
  'First website free. Zero risk to start',
  'Results in 30 days or we work for free',
  'No long contracts. Cancel anytime',
  'Real case studies, not invented claims',
  'WhatsApp support. Real person, fast replies',
];

const EMPTY = {
  from_name: '',
  business_name: '',
  city: '',
  phone: '',
  reply_to: '',
  website: '',
  service_type: '',
  message: '',
};

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primaryOrange focus:ring-2 focus:ring-primaryOrange/20 transition-colors bg-white text-gray-900 text-base';
const labelCls = 'block text-sm font-semibold text-gray-700 mb-2';

const PlumbersBooking = () => {
  const { selectedPackage, clearPackage } = usePackageSelection();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [rateLimited, setRateLimited] = useState(false);
  const [formData, setFormData] = useState(EMPTY);
  // Held separately so the success message still greets them after the form
  // state is cleared.
  const [submittedName, setSubmittedName] = useState('');

  // A package CTA sets the choice from another section; reflect it here.
  // The user stays free to change it afterwards - this only runs when the
  // context value actually changes, not on every render.
  useEffect(() => {
    if (!selectedPackage) return;
    setFormData((prev) => ({ ...prev, service_type: selectedPackage }));
  }, [selectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Bots fill every field they can see, including display:none ones.
    if (formRef.current?.honeypot?.value) return;

    // localStorage throws in some privacy modes - a failed read must not block
    // a genuine submission, so it degrades to "not rate limited".
    let last = null;
    try {
      last = window.localStorage.getItem(RATE_LIMIT_KEY);
    } catch {
      last = null;
    }
    if (last && Date.now() - parseInt(last, 10) < RATE_LIMIT_MS) {
      setRateLimited(true);
      setTimeout(() => setRateLimited(false), 5000);
      return;
    }

    setRateLimited(false);
    setStatus('submitting');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      try {
        window.localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
      } catch {
        /* Storage blocked - rate limiting is best-effort, submission stands. */
      }
      setSubmittedName(formData.from_name);
      setStatus('success');
      setFormData(EMPTY);
      clearPackage();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const resetForm = () => {
    setFormData(EMPTY);
    clearPackage();
    setStatus('idle');
  };

  return (
    <Section id="booking" className="bg-white">
      <div className="mb-12">
        <Eyebrow className="mb-4">Book Your Slot</Eyebrow>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primaryBlue mb-4">
          Ready to Get More Plumbing Jobs?
        </h2>
        <p className="text-lg text-gray-700">
          2 minutes to fill. 24 hours to hear back.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl border-2 border-primaryOrange p-6 sm:p-10"
                role="status"
                aria-live="polite"
              >
                <div className="w-14 h-14 rounded-full bg-primaryOrange flex items-center justify-center mb-5">
                  <Check className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4">
                  You&apos;re in{submittedName ? `, ${submittedName}` : ''}!
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We&apos;ve got your details and will WhatsApp or email you
                  within 24 hours with your full audit results.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While you wait, check if your Google Business Profile is
                  claimed. If not, that&apos;s your first quick win.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-primaryOrange font-bold hover:text-toOrange underline underline-offset-4"
                >
                  Submit another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 sm:space-y-5"
                noValidate={false}
              >
                {/* Honeypot - hidden from humans, irresistible to bots. */}
                <input
                  type="text"
                  name="honeypot"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />

                {/* The live EmailJS template (template_scjrafd) was written for
                    the ContactUs form and only renders {{name}}, {{email}},
                    {{phone}}, {{company}} and {{message}}. Until it is updated,
                    these mirrors make sure the enquiry still arrives readable
                    instead of as a blank email. Safe to delete once the
                    template declares the plumbers fields. */}
                <input type="hidden" name="name" value={formData.from_name} readOnly />
                <input type="hidden" name="email" value={formData.reply_to} readOnly />
                <input type="hidden" name="company" value={formData.business_name} readOnly />
                <input
                  type="hidden"
                  name="enquiry_summary"
                  readOnly
                  value={`[/plumbers] ${formData.business_name}, ${formData.city} | Service: ${formData.service_type} | Website: ${formData.website || 'none'} | ${formData.message}`}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className={labelCls} htmlFor="from_name">
                      Full Name
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="business_name">
                      Business Name
                    </label>
                    <input
                      id="business_name"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleChange}
                      required
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls} htmlFor="city">
                      City / Area
                    </label>
                    <input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Manchester, Leeds, Hull..."
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+44..."
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls} htmlFor="reply_to">
                      Email
                    </label>
                    <input
                      id="reply_to"
                      name="reply_to"
                      type="email"
                      value={formData.reply_to}
                      onChange={handleChange}
                      required
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="website">
                      Website
                    </label>
                    <input
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Leave blank if none"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls} htmlFor="service_type">
                    What do you need?
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    required
                    className={inputCls}
                  >
                    <option value="">Select an option…</option>
                    <optgroup label="Packages">
                      {PACKAGE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Services">
                      {SERVICE_TYPES.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className={labelCls} htmlFor="message">
                    Anything else?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Anything else?"
                    className={`${inputCls} resize-y`}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'submitting'}
                  className="w-full !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2
                        className="w-5 h-5 animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>Send My Details, Get Free Audit</>
                  )}
                </Button>

                {rateLimited && (
                  <p
                    className="text-sm text-gray-700 bg-gray-100 rounded-xl px-4 py-3"
                    role="status"
                    aria-live="polite"
                  >
                    ⏳ Please wait before submitting again.
                  </p>
                )}

                {status === 'error' && (
                  <div
                    className="text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3"
                    role="alert"
                  >
                    <p className="text-red-800 font-semibold mb-1">
                      ❌ Something went wrong. Please contact us directly:
                    </p>
                    <p className="text-red-800">
                      <a
                        className="underline font-medium"
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                      {' · '}
                      <a
                        className="underline font-medium"
                        href={`mailto:${CONTACT_EMAIL}`}
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </div>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <aside className="order-last lg:order-none bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-primaryBlue mb-5">
            Why Plumbers Trust ShiftDeploy
          </h3>
          <ul className="space-y-3 mb-6">
            {TRUST.map((t) => (
              <li key={t} className="flex items-start gap-x-3">
                <Check
                  className="w-5 h-5 text-primaryOrange flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm leading-relaxed">
                  {t}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 pt-5 space-y-1">
            <p className="text-sm text-gray-700">
              🇬🇧 Serving plumbers across England, Scotland &amp; Wales
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center min-h-[44px] text-sm text-primaryOrange font-medium hover:text-toOrange"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center min-h-[44px] text-sm text-primaryOrange font-medium hover:text-toOrange"
            >
              WhatsApp us
            </a>
          </div>
        </aside>
      </div>
    </Section>
  );
};

export default PlumbersBooking;
