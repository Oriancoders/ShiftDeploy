import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const browser = await chromium.launch();
const base = process.env.SEO_TEST_URL || 'http://localhost:3101';
await mkdir('test-results', { recursive: true });
try {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('**/*', route => /google-analytics|googletagmanager|doubleclick|emailjs/.test(new URL(route.request().url()).hostname) ? route.abort() : route.continue());
  for (const width of [320, 360, 390, 768, 1024, 1365]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(base, { waitUntil: 'networkidle', timeout: 90000 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `No horizontal overflow at ${width}`);
    if (width < 1280) {
      await page.getByRole('button', { name: 'Open navigation menu' }).click();
      await page.getByRole('button', { name: 'Services', exact: true }).click();
      await page.locator('#mobile-navigation').getByRole('link', { name: 'Get Free Audit' }).scrollIntoViewIfNeeded();
      const bottom = await page.locator('#mobile-navigation').evaluate(menu => menu.getBoundingClientRect().bottom);
      assert.ok(bottom <= 845, `Mobile menu stays inside viewport: ${bottom}`);
      assert.equal(await page.evaluate(() => document.body.style.overflow), 'hidden');
      await page.keyboard.press('Escape');
      assert.notEqual(await page.evaluate(() => document.body.style.overflow), 'hidden');
      if (width === 1024) {
        await page.getByRole('button', { name: 'Open navigation menu' }).click();
        await page.setViewportSize({ width: 1365, height: 844 });
        await page.waitForFunction(() => document.body.style.overflow !== 'hidden');
        await page.setViewportSize({ width, height: 844 });
      }
    }
    for (const button of await page.locator('button[aria-controls^="tool-solution-"]').all()) {
      await button.click();
      const id = await button.getAttribute('aria-controls');
      await page.waitForFunction(id => !document.getElementById(id).hidden, id);
      assert.equal(await button.getAttribute('aria-expanded'), 'true');
      assert.ok(await page.locator(`#${id}`).isVisible());
      const fits = await page.locator(`#${id}`).evaluate(panel => panel.scrollHeight <= panel.clientHeight + 1 && panel.scrollWidth <= panel.clientWidth + 1);
      assert.ok(fits, `Solution text is not clipped at ${width}`);
      await button.click();
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.screenshot({ path: `test-results/mobile-fix-${width}.png` });
    console.log(`Layout, menu and solution controls passed at ${width}px`);
  }
  assert.deepEqual(errors, []);
} finally {
  await browser.close();
}
