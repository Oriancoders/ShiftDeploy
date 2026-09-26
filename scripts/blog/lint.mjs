/**
 * Flags phrasing that makes posts read as machine-written.
 *   node scripts/blog/lint.mjs
 */
import p1 from './posts-01-costs.mjs';
import p2 from './posts-02-receptionist-health.mjs';
import p3 from './posts-03-receptionist-trades.mjs';
import p4 from './posts-04-booking.mjs';
import p5 from './posts-05-more-customers.mjs';
import p6 from './posts-06-google.mjs';
import p7 from './posts-07-crm.mjs';
import { withExtras } from './extras.mjs';

const BANNED = [
  '—', 'delve', 'leverage', 'utilize', 'utilise', 'robust', 'seamless', 'streamline', 'game-changer', 'game changer',
  'landscape', 'pivotal', 'crucial', 'unlock', 'elevate', 'embark', 'testament', 'foster', 'realm', 'navigate the',
  "in today's", 'in today’s', 'moreover', 'furthermore', 'it’s worth noting', "it's worth noting", 'in conclusion',
  'whether you’re', "whether you're", 'cutting-edge', 'revolutionise', 'revolutionize', 'supercharge', 'empower',
  'harness', 'tapestry', 'ever-evolving', 'look no further', 'let’s dive', "let's dive", 'dive into', 'at the end of the day',
  'plays a vital role', 'vital role', 'a myriad', 'myriad of', 'holistic', 'synergy', 'transformative',
];

const text = (p) => [p.title, p.excerpt, p.direct.join(' '), ...p.takeaways, ...p.faqs.flat(),
  ...withExtras(p.slug, p.body).map((b) => (typeof b === 'string' ? b : JSON.stringify(b)))].join('\n');

let issues = 0;
for (const p of [...p1, ...p2, ...p3, ...p4, ...p5, ...p6, ...p7]) {
  const t = text(p);
  const lower = t.toLowerCase();
  const hits = BANNED.filter((w) => lower.includes(w.toLowerCase()));
  const inlineHeaders = (t.match(/^- \*\*[^*]+[.:]\*\*/gm) || []).length;
  const words = t.split(/\s+/).length;
  const notes = [];
  if (hits.length) notes.push(`words: ${hits.join(', ')}`);
  if (inlineHeaders > 4) notes.push(`${inlineHeaders} inline-header bullets`);
  if (words < 500) notes.push(`short (${words} words)`);
  if (notes.length) { issues++; console.log(`${p.slug}: ${notes.join('; ')}`); }
}
console.log(issues ? `\n${issues} posts to review.` : 'No AI-writing patterns found.');
