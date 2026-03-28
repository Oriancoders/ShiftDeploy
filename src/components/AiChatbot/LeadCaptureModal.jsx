import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

const INITIAL_ERRORS = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function LeadCaptureModal({ isOpen, onClose, selectedPackage }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
      setErrors(INITIAL_ERRORS);
      setSubmitted(false);
      setIsSending(false);
      setSubmitError('');
      return;
    }

    if (selectedPackage) {
      setFormData({
        ...INITIAL_FORM,
        message: `I'm interested in ${selectedPackage}.`,
      });
    } else {
      setFormData(INITIAL_FORM);
    }

    setErrors(INITIAL_ERRORS);
    setSubmitError('');
    setSubmitted(false);
  }, [isOpen, selectedPackage]);

  if (!isOpen) return null;

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case 'name':
        if (!trimmedValue) return 'Full name is required.';
        if (trimmedValue.length < 2) return 'Please enter a valid full name.';
        return '';

      case 'email':
        if (!trimmedValue) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
          return 'Please enter a valid email address.';
        }
        return '';

      case 'phone':
        if (!trimmedValue) return 'Phone number is required.';
        if (!/^[+\d\s\-()]{7,20}$/.test(trimmedValue)) {
          return 'Please enter a valid phone number.';
        }
        return '';

      case 'company':
        if (trimmedValue && trimmedValue.length < 2) {
          return 'Please enter a valid company name.';
        }
        return '';

      case 'message':
        if (trimmedValue && trimmedValue.length > 1000) {
          return 'Message must be under 1000 characters.';
        }
        return '';

      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      company: validateField('company', formData.company),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));

    if (submitError) setSubmitError('');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSending(true);
    setSubmitError('');

    try {
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        message: formData.message.trim(),
        selected_package: selectedPackage || 'Not specified',
      };

      await emailjs.send(
        'service_x80c1hg',
        'template_1frdbt8',
        templateParams,
        'cDFV4myTzYdyZu09M'
      );

      setSubmitted(true);
    } catch (error) {
      setSubmitError('Something went wrong while sending your request. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  const inputBaseClass =
    'w-full border rounded-lg px-4 py-3 outline-none transition-colors';
  const getInputClass = (fieldName) =>
    `${inputBaseClass} ${
      errors[fieldName]
        ? 'border-red-500 focus:border-red-500'
        : 'border-gray-300 focus:border-primaryOrange'
    }`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center py-28 sm:p-4 px-4">
      <button
        type="button"
        aria-label="Close popup"
        className="absolute inset-0 bg-[#0C1F3A]/70 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl font-extrabold text-primaryBlue mb-2">
              Book Your Digital Receptionist Strategy Call
            </h3>
            <p className="text-gray-600 mb-6">
              Share your details and we will reach out to discuss fit, workflow, and website integration.
            </p>

            {selectedPackage ? (
              <div className="mb-5 inline-flex items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1.5 text-sm font-semibold text-orange-700">
                Selected Interest: {selectedPackage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Full name*"
                  className={getInputClass('name')}
                />
                {errors.name ? (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Email*"
                  className={getInputClass('email')}
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Phone*"
                  className={getInputClass('phone')}
                />
                {errors.phone ? (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                ) : null}
              </div>

              <div>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Clinic name"
                  className={getInputClass('company')}
                />
                {errors.company ? (
                  <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                ) : null}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={3}
                  placeholder="Tell us about your clinic, services, or what you want your digital receptionist to handle."
                  className={`${getInputClass('message')} resize-none`}
                />
                {errors.message ? (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                ) : null}
              </div>

              {submitError ? (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-primaryOrange hover:bg-toOrange disabled:opacity-70 disabled:cursor-not-allowed text-white py-3 rounded-lg font-bold"
              >
                {isSending ? 'Submitting...' : 'Submit Details'}
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <h3 className="text-2xl font-extrabold text-primaryBlue mb-2">Thank you!</h3>
            <p className="text-gray-600 mb-6">
              Your request has been submitted successfully. Our team will review it and reach out to you soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="bg-primaryBlue text-white px-6 py-3 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}