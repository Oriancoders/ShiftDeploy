const KEY = 'sd-cookie-consent';
export const CONSENT_EVENT = 'sd-consent-change';
export const OPEN_SETTINGS_EVENT = 'sd-open-cookie-settings';

export function getConsent() {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // Storage can be blocked; the choice still applies for this page view.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}
