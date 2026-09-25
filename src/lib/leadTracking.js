const LEAD_FORMS = {
  contact: { lead_type: 'contact_enquiry', lead_source: 'contact_form' },
  homepage_audit: { lead_type: 'website_audit', lead_source: 'homepage_audit_form' },
  service_growth_audit: { lead_type: 'growth_audit', lead_source: 'growth_audit_form' },
  plumbers_booking: { lead_type: 'plumbing_website_enquiry', lead_source: 'plumbers_form' },
};

// Call only after delivery succeeds. Never include form values or personal data.
export function trackGeneratedLead(formId) {
  if (typeof window === 'undefined' || !LEAD_FORMS[formId]) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'generate_lead', form_id: formId, ...LEAD_FORMS[formId] });
  } catch {
    // Analytics must not turn a delivered enquiry into a form error.
  }
}
