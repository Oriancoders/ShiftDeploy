'use client';
import { OPEN_SETTINGS_EVENT } from '../lib/cookieConsent';

export default function CookieSettingsButton({ className }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}>
      Cookie settings
    </button>
  );
}
