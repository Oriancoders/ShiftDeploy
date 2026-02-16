import { useEffect } from 'react';

const GTM_ID = 'GTM-MQPM36RX'; // Your ID from index.html

const LazyGTM = () => {
  useEffect(() => {
    const loadGTM = () => {
      if (window.gtmLoaded) return;
      window.gtmLoaded = true;

      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer',GTM_ID);
    };

    // Strategy: Load 4 seconds after page load OR on first user interaction
    const timer = setTimeout(loadGTM, 4000);

    const activityEvents = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(event => 
      window.addEventListener(event, loadGTM, { once: true, passive: true })
    );

    return () => {
      clearTimeout(timer);
      activityEvents.forEach(event => window.removeEventListener(event, loadGTM));
    };
  }, []);

  return null;
};

export default LazyGTM;