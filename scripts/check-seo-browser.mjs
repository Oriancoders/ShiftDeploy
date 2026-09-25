import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const base = process.env.SEO_TEST_URL || 'http://localhost:3101';
const browser = await chromium.launch({ headless: true });
try {
  const context = await browser.newContext({ viewport: { width: 1365, height: 900 } });
  let deliveryStatus = 200;
  // Keep test traffic out of analytics and never deliver a test enquiry.
  await context.route('**/*', (route) => {
    const url = new URL(route.request().url());
    if (url.hostname.includes('emailjs.com')) {
      return route.fulfill({ status: deliveryStatus, contentType: 'text/plain', headers: { 'access-control-allow-origin': '*' }, body: deliveryStatus === 200 ? 'OK' : 'Test failure' });
    }
    if (/google-analytics|googletagmanager|doubleclick/.test(url.hostname)) return route.abort();
    return route.continue();
  });
  const page = await context.newPage();
  const waitForForm = () => page.waitForFunction(() => {
    const input = document.querySelector('input[name="websiteInput"]');
    return input && Object.keys(input).some((key) => key.startsWith('__reactProps'));
  });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
  await waitForForm();
  console.log(JSON.stringify({ page: '/', title: await page.title(), buttons: await page.getByRole('button').allTextContents() }));
  await page.getByPlaceholder('Enter your website', { exact: true }).fill('https://example.co.uk/');
  await page.getByPlaceholder('Enter your email', { exact: true }).fill('seo-test@example.com');
  await page.getByRole('button', { name: 'Audit Request Sending Button', exact: true }).click();
  await page.getByText('Website audit request sent successfully!', { exact: false }).waitFor().catch(async (error) => {
    console.log((await page.locator('#deploy-toolkit').innerText()).slice(-1800));
    throw error;
  });
  assert.equal(await page.evaluate(() => window.dataLayer?.filter((e) => e.event === 'generate_lead' && e.form_id === 'homepage_audit').length), 1);
  await mkdir('test-results', { recursive: true });
  await page.getByPlaceholder('Enter your website', { exact: true }).scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'test-results/seo-home-audit.png', fullPage: false });

  await page.goto(`${base}/insights`, { waitUntil: 'domcontentloaded' });
  const article = await page.locator('a[href^="/insights/"]:not([href*="/author/"])').first().getAttribute('href');
  assert.ok(article);
  const articleResponse = await page.goto(`${base}${article}`, { waitUntil: 'domcontentloaded' });
  assert.equal(articleResponse.status(), 200);
  assert.equal(await page.locator('h1').count(), 1);
  console.log(JSON.stringify({ article, status: articleResponse.status(), title: await page.title() }));

  const missing = await context.request.get(`${base}/insights/phase-one-missing-test-20260925`);
  const missingHtml = await missing.text();
  assert.equal(missing.status(), 404);
  assert.match(missingHtml, /noindex/);

  const sitemap = await context.request.get(`${base}/sitemap.xml`);
  assert.equal(sitemap.status(), 200);
  const sitemapText = await sitemap.text();
  assert.match(sitemapText, /<urlset/);
  const homeEntry = sitemapText.match(/<url>\s*<loc>https:\/\/shiftdeploy\.com<\/loc>([\s\S]*?)<\/url>/);
  assert.ok(homeEntry);
  assert.doesNotMatch(homeEntry[1], /lastmod/);
  const robots = await context.request.get(`${base}/robots.txt`);
  assert.equal(robots.status(), 200);
  const llms = await context.request.get(`${base}/llms.txt`);
  assert.equal(llms.status(), 200);

  // A rejected delivery must not be counted as a generated lead.
  deliveryStatus = 500;
  await page.goto(`${base}/`, { waitUntil: 'domcontentloaded' });
  await waitForForm();
  await page.getByPlaceholder('Enter your website', { exact: true }).fill('example.co.uk');
  await page.getByPlaceholder('Enter your email', { exact: true }).fill('seo-test@example.com');
  await page.getByRole('button', { name: 'Audit Request Sending Button', exact: true }).click();
  await page.getByText('Failed to send. Please try again.', { exact: false }).waitFor().catch(async (error) => {
    console.log((await page.locator('#deploy-toolkit').innerText()).slice(-650));
    throw error;
  });
  assert.equal(await page.evaluate(() => (window.dataLayer || []).filter((e) => e.event === 'generate_lead').length), 0);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByPlaceholder('Enter your website', { exact: true }).scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'test-results/seo-home-mobile.png', fullPage: false });
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ passed: ['UK homepage enquiry success event', 'failed delivery excluded', 'article 200 and h1', 'missing article 404/noindex', 'sitemap dates', 'robots', 'llms'], browserErrors: errors }));
} finally {
  await browser.close();
}
