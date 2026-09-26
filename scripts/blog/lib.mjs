/**
 * Shared helpers for the scheduled blog programme (see scripts/blog/schedule.mjs).
 * Content lives in scripts/blog/posts-*.mjs; each file exports an array of post specs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const root = path.resolve(__dirname, '..', '..');

export function sanity() {
  const env = {};
  for (const line of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/)) {
    const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
    if (m) env[m[1]] = m[2];
  }
  if (!env.SANITY_API_TOKEN) throw new Error('SANITY_API_TOKEN is empty in .env.local.');
  return createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    useCdn: false,
    token: env.SANITY_API_TOKEN,
  });
}

let k = 0;
export const key = () => `b${(k++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** Minimal markdown -> Portable Text: ## headings, - bullets, 1. numbers, **bold**, [links](/x). */
export function md(text) {
  const blocks = [];
  let para = [];
  const inline = (s) => {
    const children = [];
    const markDefs = [];
    const linkRe = /\[([^\]]+)\]\(([^)\s]+)\)/g;
    let last = 0;
    const segs = [];
    let m;
    while ((m = linkRe.exec(s)) !== null) {
      if (m.index > last) segs.push({ text: s.slice(last, m.index) });
      segs.push({ text: m[1], href: m[2] });
      last = m.index + m[0].length;
    }
    if (last < s.length) segs.push({ text: s.slice(last) });
    for (const seg of segs) {
      let linkKey;
      if (seg.href) {
        linkKey = key();
        markDefs.push({ _type: 'link', _key: linkKey, href: seg.href });
      }
      for (const part of seg.text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)) {
        const marks = linkKey ? [linkKey] : [];
        let t = part;
        if (part.startsWith('**') && part.endsWith('**')) { marks.push('strong'); t = part.slice(2, -2); }
        children.push({ _type: 'span', _key: key(), text: t, marks });
      }
    }
    if (!children.length) children.push({ _type: 'span', _key: key(), text: '', marks: [] });
    return { children, markDefs };
  };
  const flush = () => {
    if (!para.length) return;
    const t = para.join(' ').trim();
    para = [];
    if (t) blocks.push({ _type: 'block', _key: key(), style: 'normal', ...inline(t) });
  };
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    const h = /^(#{2,4})\s+(.*)$/.exec(line);
    const b = /^[-*]\s+(.*)$/.exec(line);
    const n = /^\d+[.)]\s+(.*)$/.exec(line);
    if (h) { flush(); blocks.push({ _type: 'block', _key: key(), style: `h${h[1].length}`, ...inline(h[2]) }); }
    else if (b) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, ...inline(b[1]) }); }
    else if (n) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'normal', listItem: 'number', level: 1, ...inline(n[1]) }); }
    else para.push(line);
  }
  flush();
  return blocks;
}

/* Body pieces. A post body is an array of strings (markdown) and these objects. */
export const table = (caption, rows) => ({
  _type: 'table', _key: key(), caption, hasHeaderRow: true,
  rows: rows.map((cells) => ({ _key: key(), _type: 'row', cells })),
});
export const note = (title, content, variant = 'info') => ({ _type: 'callout', _key: key(), variant, showIcon: true, title, content });
export const cta = (description, label = 'Get your free check') => ({
  _type: 'cta', _key: key(), label, url: '/ContactUs', description, placement: 'inline',
});
export const expandBody = (parts) => parts.flatMap((p) => (typeof p === 'string' ? md(p) : [{ ...p, _key: key() }]));

/* Sources that are cited across several posts. Every URL was checked on 2026-09-26. */
export const SRC = {
  gbpGuidelines: { title: 'Guidelines for representing your business on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3038177' },
  gbpServiceArea: { title: 'Manage your service areas for your Business Profile', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/9157481' },
  gbpReviewTips: { title: 'Tips to get more reviews', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3474122' },
  gbpReviewLink: { title: 'Create a link or QR code to request reviews', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/16816815' },
  livingWage: { title: 'National Minimum Wage and National Living Wage rates', publisher: 'GOV.UK', url: 'https://www.gov.uk/national-minimum-wage-rates' },
  employerNi: { title: 'Rates and thresholds for employers', publisher: 'GOV.UK', url: 'https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027' },
  ico: { title: 'UK GDPR guidance and resources', publisher: 'Information Commissioner’s Office', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/' },
  metaPricing: { title: 'Pricing on the WhatsApp Business Platform', publisher: 'Meta for Developers', url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing' },
  gdcAds: { title: 'Guidance on advertising', publisher: 'General Dental Council', url: 'https://www.gdc-uk.org/standards-guidance/standards-and-guidance/gdc-guidance-for-dental-professionals/guidance-on-advertising' },
  asaBotox: { title: 'Botox and non-surgical cosmetic interventions', publisher: 'ASA | CAP', url: 'https://www.asa.org.uk/advice-and-resources/cap-bitesize/rules-for-advertising-botox.html' },
  hcpc: { title: 'The professions we regulate', publisher: 'Health and Care Professions Council', url: 'https://www.hcpc-uk.org/about-us/who-we-regulate/the-professions/' },
  gasSafe: { title: 'Gas Safe Register', publisher: 'Gas Safe Register', url: 'https://www.gassaferegister.co.uk/' },
  cwv: { title: 'Web Vitals', publisher: 'Google web.dev', url: 'https://web.dev/articles/vitals' },
};
export const cite = (...items) => items.map((c) => ({ _key: key(), ...c }));

/* Cover image: an on-brand card with the question the post answers. */
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function coverSvg({ eyebrow, lines, points }) {
  const title = lines.map((l, i) => `<text x="80" y="${250 + i * 78}" font-size="64" font-weight="700" fill="#0B2A4A">${esc(l)}</text>`).join('');
  const chips = points.map((p, i) => `<g transform="translate(${80 + i * 350},520)"><rect width="330" height="70" rx="35" fill="#FFF7ED" stroke="#F97316" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="24" font-weight="600" fill="#C2410C">${esc(p)}</text></g>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" role="img" aria-label="${esc(lines.join(' '))}">
<rect width="1200" height="675" fill="#ffffff"/><rect width="1200" height="14" fill="#F97316"/>
<g font-family="Segoe UI, system-ui, sans-serif">
<text x="80" y="150" font-size="28" font-weight="700" fill="#C2410C">${esc(eyebrow)}</text>
${title}${chips}
<text x="80" y="640" font-size="22" fill="#6B7280">shiftdeploy.com</text>
</g></svg>`;
}

export const AUTHOR_ID = '836dce1e-e110-4072-8f5f-9e6db71c4672';

/* Real people behind the posts. Bios stick to what they do; no invented credentials. */
export const AUTHORS = {
  ali: {
    _id: 'author-muhammad-ali',
    _type: 'author',
    name: 'Muhammad Ali',
    slug: { _type: 'slug', current: 'muhammad-ali' },
    jobTitle: 'Co-Founder, ShiftDeploy',
    bio: 'Muhammad Ali is a co-founder of ShiftDeploy and a full-stack engineer. He builds the AI receptionists, WhatsApp automation and booking systems that help clinics, trades and local service businesses answer every enquiry.',
    expertise: ['AI receptionists', 'WhatsApp automation', 'Business automation', 'Booking systems', 'Web development'],
    sameAs: ['https://www.linkedin.com/in/muhammad-ali-296943208/', 'https://shiftdeploy.com'],
    socialLinks: [{ _key: 'li', platform: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-ali-296943208/' }],
  },
  sami: {
    _id: 'author-samiullah',
    _type: 'author',
    name: 'Samiullah',
    slug: { _type: 'slug', current: 'samiullah' },
    jobTitle: 'Co-Founder, ShiftDeploy',
    bio: 'Samiullah is a co-founder of ShiftDeploy. He works with clinics, trades and local service businesses on getting found on Google, earning more reviews and turning more enquiries into booked work.',
    expertise: ['Local SEO', 'Google Business Profile', 'Google reviews', 'Marketing for service businesses', 'AI search'],
    sameAs: ['https://www.linkedin.com/in/sammiiiullah/', 'https://shiftdeploy.com'],
    socialLinks: [{ _key: 'li', platform: 'linkedin', url: 'https://www.linkedin.com/in/sammiiiullah/' }],
  },
};

/* Who writes which cluster. Anything not listed stays with the technical team. */
const CLUSTER_AUTHOR = {
  'AI receptionist': 'ali', WhatsApp: 'ali', Automation: 'ali',
  'Google Maps': 'sami', 'Local SEO': 'sami', Reviews: 'sami', 'AI search': 'sami', 'More customers': 'sami', Marketing: 'sami',
};
export const authorFor = (cluster) => AUTHORS[CLUSTER_AUTHOR[cluster]]?._id || AUTHOR_ID;
export const CAT = {
  local: 'category-websites-local-marketing',
  conversion: 'category-conversion',
  automation: 'category-automation',
};
