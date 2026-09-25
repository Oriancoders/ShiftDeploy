export function websiteDomain(value) {
  try {
    const input = String(value || '').trim();
    if (!input || /\s/.test(input)) return null;
    const url = new URL(input.includes('://') ? input : `https://${input}`);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return null;
    const hostname = url.hostname.toLowerCase().replace(/\.$/, '');
    const labels = hostname.split('.');
    if (hostname.length > 253 || labels.length < 2 || /^\d+$/.test(labels.at(-1))) return null;
    if (labels.some((label) => !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label))) return null;
    return hostname;
  } catch {
    return null;
  }
}
