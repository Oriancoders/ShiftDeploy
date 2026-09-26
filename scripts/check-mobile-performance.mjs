import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.SEO_TEST_URL || 'http://localhost:3101';
const label = process.env.PERF_LABEL || 'before';
const browser = await chromium.launch({ headless: true });
await mkdir('test-results', { recursive: true });
try {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 1 });
  await context.route('**/*', route => /google-analytics|googletagmanager|doubleclick|emailjs/.test(new URL(route.request().url()).hostname) ? route.abort() : route.continue());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    window.lab = { lcp: 0, cls: 0, longTasks: 0 };
    new PerformanceObserver(list => { for (const e of list.getEntries()) window.lab.lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver(list => { for (const e of list.getEntries()) if (!e.hadRecentInput) window.lab.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver(list => { for (const e of list.getEntries()) window.lab.longTasks += Math.max(0, e.duration - 50); }).observe({ type: 'longtask', buffered: true });
  });
  const cdp = await context.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 200000, uploadThroughput: 93750 });
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  await page.goto(base, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(15000);
  const metrics = await page.evaluate(() => ({
    ...window.lab,
    navigation: performance.getEntriesByType('navigation').map(e => ({ ttfb: e.responseStart, domReady: e.domContentLoadedEventEnd })),
    resources: performance.getEntriesByType('resource').map(e => ({ url: e.name, type: e.initiatorType, bytes: e.encodedBodySize, duration: e.duration })),
  }));
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 1 });
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  await page.screenshot({ path: `test-results/mobile-${label}-hero.png` });
  const hidden = [];
  for (let y = 0; y < await page.evaluate(() => document.documentElement.scrollHeight); y += 600) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(500);
    hidden.push(...await page.evaluate(() => [...document.querySelectorAll('h2,h3')].filter(e => {
      const r = e.getBoundingClientRect();
      if (r.top < 0 || r.bottom > innerHeight) return false;
      for (let p = e; p; p = p.parentElement) if (getComputedStyle(p).opacity === '0') return true;
      return false;
    }).map(e => ({ text: e.textContent, y: scrollY }))));
  }
  await page.screenshot({ path: `test-results/mobile-${label}-full.png`, fullPage: true });
  const sections = await page.locator('section').evaluateAll(sections => sections.map(s => ({ heading: s.querySelector('h1,h2')?.textContent, height: s.offsetHeight, top: s.offsetTop, padding: getComputedStyle(s).padding })));
  const report = { metrics, sections, hidden, errors };
  await writeFile(`test-results/performance-${label}.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ label, lcp: metrics.lcp, cls: metrics.cls, longTasks: metrics.longTasks, navigation: metrics.navigation, scripts: metrics.resources.filter(e => e.type === 'script').length, scriptBytes: metrics.resources.filter(e => e.type === 'script').reduce((n,e) => n+e.bytes,0), sections, hidden, errors }, null, 2));
} finally {
  await browser.close();
}
