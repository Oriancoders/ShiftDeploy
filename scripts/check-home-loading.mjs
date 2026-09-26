import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
try {
  for (const width of [360, 390, 768, 1365]) {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width, height: 844 } });
    const page = await context.newPage();
    await page.route('**/*', route => /google-analytics|googletagmanager|doubleclick|emailjs/.test(new URL(route.request().url()).hostname) ? route.abort() : route.continue());
    await page.goto(process.env.SEO_TEST_URL || 'http://localhost:3101', { waitUntil: 'domcontentloaded' });
    assert.equal(await page.locator('h1').count(), 1);
    assert.equal(await page.getByRole('link', { name: 'Get Free Audit', exact: true }).last().getAttribute('href'), '/ContactUs');
    const hidden = await page.locator('main h1, main h2, main h3, footer h3').evaluateAll(headings => headings.filter(heading => {
      for (let element = heading; element; element = element.parentElement) {
        const style = getComputedStyle(element);
        if (style.opacity === '0' || style.visibility === 'hidden' || style.display === 'none') return true;
      }
      return false;
    }).map(heading => heading.textContent));
    assert.deepEqual(hidden, [], 'Public headings remain visible before JavaScript loads');
    assert.ok(await page.locator('nav').evaluate(nav => nav.getBoundingClientRect().top >= 0));
    const height = await page.locator('main > section').first().evaluate(section => section.offsetHeight);
    if (width <= 390) assert.ok(height < 844, `Mobile hero is compact: ${height}px`);
    console.log(JSON.stringify({ width, withoutJavaScript: true, hiddenHeadings: hidden, heroHeight: height }));
    await context.close();
  }
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 360, height: 640 } });
  await context.route('**/*', route => /google-analytics|googletagmanager|doubleclick|emailjs/.test(new URL(route.request().url()).hostname) ? route.abort() : route.continue());
  const page = await context.newPage();
  for (const service of ['shiftspeed', 'shiftbuild', 'shiftconvert', 'shiftflow']) {
    await page.goto(`${process.env.SEO_TEST_URL || 'http://localhost:3101'}/services/${service}`, { waitUntil: 'domcontentloaded' });
    assert.ok(await page.locator('h1').evaluate(heading => {
      for (let element = heading; element; element = element.parentElement) {
        const style = getComputedStyle(element);
        if (style.opacity === '0' || style.display === 'none' || style.visibility === 'hidden') return false;
      }
      return true;
    }), `${service} heading visible without waiting for JavaScript`);
    console.log(`${service}: heading visible without JavaScript`);
  }
  await context.close();
} finally {
  await browser.close();
}
