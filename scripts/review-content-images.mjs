import { readFile } from 'node:fs/promises';
import { chromium } from 'playwright';

const pages = JSON.parse(await readFile('test-results/uk-content-inventory.json', 'utf8'));
const images = [...new Map(pages.flatMap((page) => [...page.images, ...(page.backgroundImages || []).map((src) => ({ src, alt: `Background image: ${page.path}` }))]).filter((img) => !/logo|whiteV|coloredV|textures|worldvector|favicon/.test(img.src)).map((img) => [new URL(img.src).pathname, img])).values()];
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 1200 } });
  for (let offset = 0; offset < images.length; offset += 9) {
    await page.setContent('<html><body style="margin:16px;font:14px Arial;display:grid;grid-template-columns:repeat(3,1fr);gap:16px"></body></html>');
    await page.evaluate(async (items) => {
      for (const item of items) {
        const figure = document.createElement('figure');
        figure.style.margin = '0';
        const img = document.createElement('img');
        img.src = item.src;
        img.style.cssText = 'width:100%;height:300px;object-fit:contain;background:#eee';
        const caption = document.createElement('figcaption');
        caption.textContent = item.alt || '(decorative or adjacent-label image)';
        figure.append(img, caption);
        document.body.append(figure);
      }
      await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
    }, images.slice(offset, offset + 9));
    const file = `test-results/content-images-${offset / 9 + 1}.png`;
    await page.screenshot({ path: file });
    console.log(file);
  }
} finally {
  await browser.close();
}
