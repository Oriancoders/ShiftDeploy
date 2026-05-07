'use client';
import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function LeadCaptureModal({ isOpen, onClose, selectedPackage }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const safeSelectedPackage = typeof selectedPackage === 'string' ? selectedPackage : '';

  useEffect(() => {
    if (!isOpen) return undefined;

    const onEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEsc);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setFormData(INITIAL_FORM);
      setSubmitted(false);
      return;
    }

    if (safeSelectedPackage) {
      setFormData({
        ...INITIAL_FORM,
        message: `I'm interested in the ${safeSelectedPackage} package.`,
      });
    }
  }, [isOpen, safeSelectedPackage]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <button type="button" aria-label="Close popup" className="absolute inset-0 bg-[#0C1F3A]/70 backdrop-blur-[2px]" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 sm:p-8">
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl font-extrabold text-primaryBlue mb-2">Get Your Free Audit</h3>
            <p className="text-gray-600 mb-6">Share your details and we will reach out shortly.</p>
            {safeSelectedPackage ? (
              <div className="mb-5 inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1.5 text-sm font-semibold text-orange-700">
                Selected Package: {safeSelectedPackage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" value={formData.name} onChange={handleChange} required placeholder="Full name*" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primaryOrange" />
              <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email*" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primaryOrange" />
              <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone*" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primaryOrange" />
              <input name="company" value={formData.company} onChange={handleChange} placeholder="Business name" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primaryOrange" />
              <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="What do you want help with?" className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-primaryOrange resize-none" />

              <button type="submit" className="w-full bg-primaryOrange hover:bg-toOrange text-white py-3 rounded-lg font-bold">
                Submit Details
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <h3 className="text-2xl font-extrabold text-primaryBlue mb-2">Thank you!</h3>
            <p className="text-gray-600 mb-6">Your details were captured. Our team will contact you soon.</p>
            <button type="button" onClick={onClose} className="bg-primaryBlue text-white px-6 py-3 rounded-lg font-semibold">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
