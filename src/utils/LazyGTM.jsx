'use client';
import { useEffect } from 'react';
import { getConsent, CONSENT_EVENT } from '../lib/cookieConsent';

const GTM_ID = 'GTM-MQPM36RX';

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
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
  gtag('consent', 'update', { analytics_storage: 'granted' });
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

// Analytics cookies need prior consent under PECR, so GTM only loads after "Accept".
const LazyGTM = () => {
  useEffect(() => {
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 2000));
    if (getConsent() === 'granted') idle(loadGTM);

    const onChange = (e) => {
      if (e.detail === 'granted') loadGTM();
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  return null;
};

export default LazyGTM;
