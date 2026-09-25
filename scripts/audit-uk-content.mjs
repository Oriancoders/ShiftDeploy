import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.SEO_TEST_URL || 'http://localhost:3101';
const browser = await chromium.launch({ headless: true });
const results = [];
try {
  const context = await browser.newContext({ viewport: { width: 1365, height: 900 } });
  await context.route('**/*', (route) => /google-analytics|googletagmanager|doubleclick|emailjs/.test(new URL(route.request().url()).hostname) ? route.abort() : route.continue());
  const page = await context.newPage();
  const sitemap = await context.request.get(`${base}/sitemap.xml`);
  const xml = await sitemap.text();
  await page.goto(base);
  const paths = await page.evaluate((text) => [...new DOMParser().parseFromString(text, 'application/xml').querySelectorAll('loc')].map((el) => new URL(el.textContent).pathname), xml);
  for (const path of paths) {
    const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle', timeout: 90000 });
    await page.locator('footer').first().scrollIntoViewIfNeeded().catch(() => {});
    await page.evaluate(async () => {
      await Promise.all([...document.images].map((img) => {
        img.loading = 'eager';
        if (img.complete) return;
        return new Promise((resolve) => {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
          setTimeout(resolve, 10000);
        });
      }));
    });
    const data = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      lang: document.documentElement.lang,
      headings: [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((el) => ({ level: el.tagName, text: el.textContent.trim() })),
      paragraphs: [...document.querySelectorAll('p')].map((el) => el.textContent.trim()).filter(Boolean),
      images: [...document.images].map((el) => ({ src: el.currentSrc || el.src, alt: el.getAttribute('alt'), loaded: el.complete && el.naturalWidth > 0, loading: el.loading })),
      backgroundImages: [...new Set([...document.querySelectorAll('body *')].flatMap((el) => [...getComputedStyle(el).backgroundImage.matchAll(/url\(["']?(.*?)["']?\)/g)].map((match) => match[1])))],
    }));
    results.push({ path, status: response.status(), ...data });
    console.log(JSON.stringify({ path, status: response.status(), h1: data.headings.filter((h) => h.level === 'H1').map((h) => h.text), images: data.images.length, missingAlt: data.images.filter((i) => i.alt === null).length, unloaded: data.images.filter((i) => !i.loaded).map((i) => i.src) }));
  }
  await mkdir('test-results', { recursive: true });
  await writeFile('test-results/uk-content-inventory.json', JSON.stringify(results, null, 2));
  for (const result of results) {
    assert.equal(result.status, 200, result.path);
    assert.equal(result.headings.filter((heading) => heading.level === 'H1').length, 1, result.path);
    assert.ok(result.headings.every((heading) => heading.text), `Empty heading: ${result.path}`);
    assert.ok(result.images.every((img) => img.alt !== null), `Missing alt attribute: ${result.path}`);
  }
} finally {
  await browser.close();
}
