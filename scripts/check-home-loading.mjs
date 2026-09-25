import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { chromium } from 'playwright';
import { setTimeout as delay } from 'node:timers/promises';

const chunkDirectory = '.next/static/chunks';
const blockedChunks = new Set();
for (const file of await readdir(chunkDirectory)) {
  if (file.endsWith('.js') && (await readFile(`${chunkDirectory}/${file}`, 'utf8')).includes('Website audit request sent successfully!')) blockedChunks.add(file);
}
assert.ok(blockedChunks.size, 'Find the built below-fold audit chunk');
let release;
const gate = new Promise((resolve) => { release = resolve; });
let blocked = false;
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    if (/google-analytics|googletagmanager|doubleclick|emailjs/.test(url.hostname)) return route.abort();
    if (blockedChunks.has(url.pathname.split('/').at(-1))) {
      blocked = true;
      await gate;
    }
    return route.continue();
  });
  await page.goto('http://localhost:3101', { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => {
    const nav = document.querySelector('nav');
    return nav && Object.keys(nav).some((key) => key.startsWith('__reactProps'));
  });
  for (let attempt = 0; !blocked && attempt < 100; attempt++) await delay(100);
  assert.ok(blocked, 'A below-fold chunk is still downloading');
  const unobscured = await page.locator('h1').evaluate((heading) => {
    const rect = heading.getBoundingClientRect();
    const top = document.elementFromPoint(rect.x + 5, rect.y + rect.height / 2);
    return top === heading || heading.contains(top);
  });
  assert.ok(unobscured, 'Hero remains readable while below-fold content loads');
  assert.equal(await page.getByRole('link', { name: 'Get Free Audit', exact: true }).last().getAttribute('href'), '/ContactUs');
  console.log('Slow below-fold chunk: hero unobscured and audit link available');
} finally {
  release();
  await browser.close();
}
