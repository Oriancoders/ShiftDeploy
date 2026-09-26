import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';

const browser = await chromium.launch();
const base = process.env.SEO_TEST_URL || 'http://localhost:3101';
const results = [];
try {
  const page = await browser.newPage({ viewport: { width: Number(process.env.MOBILE_WIDTH || 390), height: Number(process.env.MOBILE_HEIGHT || 844) } });
  await page.route('**/*', route => /google-analytics|googletagmanager|doubleclick|emailjs/.test(new URL(route.request().url()).hostname) ? route.abort() : route.continue());
  for (const path of ['/', '/services', '/services/shiftspeed', '/services/shiftbuild', '/services/shiftconvert', '/services/shiftflow', '/insideShiftDeploy', '/missions', '/shift-protocol', '/plumbers']) {
    await page.goto(`${base}${path}`, { waitUntil: 'networkidle', timeout: 90000 });
    for (let y = 0; y < await page.evaluate(() => document.documentElement.scrollHeight); y += 550) {
      await page.evaluate(y => window.scrollTo({ top: y, behavior: 'instant' }), y);
      await page.waitForTimeout(150);
    }
    await page.waitForTimeout(1500);
    const hidden = await page.locator('section h2, section h3').evaluateAll(headings => headings.filter(heading => {
      let transparent = false;
      for (let element = heading; element; element = element.parentElement) {
        const style = getComputedStyle(element);
        if (style.display === 'none' || element.getAttribute('aria-hidden') === 'true') return false;
        if (style.opacity === '0' || style.visibility === 'hidden') transparent = true;
      }
      return transparent;
    }).map(heading => heading.textContent));
    results.push({ path, hidden });
    console.log(JSON.stringify(results.at(-1)));
  }
  await writeFile('test-results/scroll-visibility.json', JSON.stringify(results, null, 2));
  assert.ok(results.every(result => result.hidden.length === 0), 'Public sections must not stay blank after scrolling');
} finally {
  await browser.close();
}
