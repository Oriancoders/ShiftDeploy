'use client';
import { useEffect } from 'react';
import { getConsent, CONSENT_EVENT } from '../lib/cookieConsent';

const GTM_ID = 'GTM-MQPM36RX';

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function grantAnalytics() {
  gtag('consent', 'update', { analytics_storage: 'granted' });
}

// Consent Mode v2: the banner only asks about analytics, so advertising stays denied.
function loadGTM() {
  if (window.gtmLoaded) return;
  window.gtmLoaded = true;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  });
  if (getConsent() === 'granted') grantAnalytics();
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

// Tag Assistant preview adds gtm_debug to the URL. Loading early lets it connect,
// while analytics storage stays denied until the visitor accepts.
function isTagAssistantPreview() {
  return /[?&]gtm_debug=/.test(window.location.search) || document.referrer.includes('tagassistant.google.com');
}

// Analytics cookies need prior consent under PECR, so GTM only loads after "Accept".
const LazyGTM = () => {
  useEffect(() => {
    if (isTagAssistantPreview()) {
      loadGTM();
    } else if (getConsent() === 'granted') {
      const idle = window.requestIdleCallback
        ? (cb) => window.requestIdleCallback(cb, { timeout: 2000 })
        : (cb) => setTimeout(cb, 1000);
      idle(loadGTM);
    }

    const onChange = (e) => {
      if (e.detail !== 'granted') return;
      if (window.gtmLoaded) grantAnalytics();
      else loadGTM();
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  return null;
};

export default LazyGTM;
