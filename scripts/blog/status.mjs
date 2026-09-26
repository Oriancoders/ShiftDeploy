/**
 * Prints the blog programme from Sanity: what is live and what is still scheduled.
 *   node scripts/blog/status.mjs
 */
import { sanity } from './lib.mjs';

const client = sanity();
const cal = await client.fetch(`*[_id == "content-calendar-2026"][0]{
  title, cadence,
  entries[]{ order, date, slug, focusKeyword, "status": post->status, "publishedAt": post->publishedAt }
}`);
if (!cal) {
  console.log('No calendar found. Run scripts/blog/schedule.mjs --apply first.');
  process.exit(0);
}
const now = Date.now();
let live = 0;
for (const e of cal.entries) {
  const state = e.status !== 'published' ? 'DRAFT' : Date.parse(e.publishedAt) <= now ? 'LIVE' : 'queued';
  if (state === 'LIVE') live++;
  console.log(`${String(e.order).padStart(2)}  ${e.date}  ${state.padEnd(6)}  ${e.slug}  (${e.focusKeyword})`);
}
console.log(`\n${cal.title}: ${live} live, ${cal.entries.length - live} still to come. ${cal.cadence}.`);
