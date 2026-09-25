import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const base = process.env.SEO_TEST_URL || 'http://localhost:3101';
const paths = ['/', '/services', '/services/shiftspeed', '/services/shiftbuild', '/services/shiftconvert', '/services/shiftflow', '/digital-receptionist', '/plumbers', '/service-growth-audit', '/privacy-policy', '/terms-of-services'];
const browser = await chromium.launch({ headless: true });
const errors = [];
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  await context.route('**/*', (route) => /google-analytics|googletagmanager|doubleclick|emailjs/.test(new URL(route.request().url()).hostname) ? route.abort() : route.continue());
  const page = await context.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  await mkdir('test-results', { recursive: true });
  for (const width of [1365, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    for (const path of paths) {
      const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle', timeout: 90000 });
      assert.equal(response.status(), 200, path);
      assert.equal(await page.locator('h1').count(), 1, path);
      const heading = await page.locator('h1').innerText();
      if (!path.includes('policy') && !path.includes('terms')) assert.match(heading, /UK/, path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      await page.screenshot({ path: `test-results/uk-${path.replaceAll('/', '-') || 'home'}-${width}.png` });
      if (overflow > 2) console.log(await page.evaluate(() => [...document.querySelectorAll('h1,h2,h3,p,button,section')].filter((el) => el.getBoundingClientRect().right > window.innerWidth).map((el) => ({ tag: el.tagName, text: el.textContent.slice(0,100), width: el.getBoundingClientRect().width }))));
      assert.ok(overflow <= 2, `${path}: ${overflow}px overflow at ${width}`);
      if (path === '/digital-receptionist') {
        assert.equal(await page.locator('img[src*="pravatar"]').count(), 0);
        assert.equal(await page.getByRole('button', { name: 'Request a quote', exact: true }).count(), 3);
        await page.getByRole('button', { name: 'Request a quote', exact: true }).first().click();
        assert.ok(await page.locator('input,select,textarea').count() > 0);
      }
      if (path === '/plumbers') {
        await page.getByRole('button', { name: 'Start Here', exact: true }).click();
        await page.waitForFunction(() => [...document.querySelectorAll('select')].at(-1)?.value === 'Starter - tailored quote');
        assert.equal(await page.locator('select').last().inputValue(), 'Starter - tailored quote');
      }
      console.log(JSON.stringify({ path, width, heading, overflow }));
    }
  }
  assert.deepEqual(errors, []);
  console.log('UK page checks passed');
} finally {
  await browser.close();
}
