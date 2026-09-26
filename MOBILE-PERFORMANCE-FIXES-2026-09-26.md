# Mobile layout and loading fixes

## Confirmed causes

- The homepage combined all lower sections behind one client-side lazy/Suspense boundary. Several other public routes used a full-screen loader for the same pattern, including their hero content.
- Homepage content, footer columns and service comparison cards depended on entry animations. Translated comparison cards produced horizontal overflow before their animation ran.
- The old mobile homepage hero was 958px tall at a 390px viewport; its fixed-width metric column squeezed the gauge and wrapped its supporting text awkwardly.
- Mobile navigation used a full-viewport panel below an already visible navigation bar. Long expanded menus could exceed the screen.
- Fixed overlays in the homepage solution cards could clip longer text.
- At 360x640, the "Clarity wins projects" block on Inside ShiftDeploy remained transparent after scrolling. Its translated IntersectionObserver target and negative root margin made the reveal unreliable.

## Changes

- Server-rendered page composition replaces lazy whole-page section gates on the homepage, four service routes, services/toolkit, inside, missions, protocol and plumbers pages. Interactive children remain client components; quote selection and enquiry handling are preserved.
- Static homepage copy, portfolio, process, technology strip and footer no longer require animation hydration to become visible. Main service headings render immediately too.
- Compact responsive homepage hero with a small CSS-driven gauge, no React animation-frame counters, and readable service labels instead of unsupported illustrative revenue percentages.
- Tighter mobile spacing and typography; comparison cards start in their final position. The ShiftSpeed gauge centring no longer conflicts with Motion's transform.
- Scrollable, viewport-bounded mobile navigation; Escape, route changes and desktop resizing release its body scroll lock. Tablet navigation uses the mobile menu until the full desktop navigation fits.
- In-flow expandable solution text replaces fixed card overlays. Keyboard-accessible buttons expose expanded state.
- Responsive Cloudinary variants for homepage posters and project images. Technology logos render locally as SVG icons; the infinite marquee and remote logo requests were removed.
- Broad navigation/footer prefetching is disabled to avoid downloading unrelated routes during initial loading. The homepage email library loads only when an enquiry is submitted.
- The confirmed Inside ShiftDeploy observer-dependent text now renders normally, without a visibility gate.

## Measured results

Controlled local Chromium sample, 390x844, 4x CPU throttling, configured 150ms latency and 200,000 bytes/s download throughput. Analytics requests were blocked. Measurements cover the first 15 seconds after DOMContentLoaded; they include script prefetch traffic. This is not a Lighthouse score or UK field data.

| Measurement | Before | Final |
| --- | ---: | ---: |
| Initial script requests | 31 | 15 |
| Encoded script bytes | 199,172 | 153,028 |
| First receptionist poster bytes | 149,084 | 36,443 |
| Homepage hero height | 958px | 692px |
| Observed LCP | 1,316ms | 1,324ms |
| Observed CLS | 0.00052 | 0.00031 |
| Long-task time above 50ms, summed over sample | 133ms | 284ms |

Script transfer fell about 23%; the sampled mobile poster fell about 76%. LCP was effectively unchanged. CPU blocking did **not** improve in this sample, so this is not an across-the-board Core Web Vitals improvement claim. Consolidating rendering removes visible loading gates but can concentrate hydration work. Further CPU profiling and real-user GSC/CrUX monitoring remain appropriate; no field INP or UK-network TTFB improvement is claimed.

## Verification

- Production build passed.
- No-JavaScript homepage checks at 360, 390, 768 and 1365px: headings and navigation remain visible. All four service H1s are visible without JavaScript.
- Responsive controls checked at 320, 360, 390, 768, 1024 and 1365px: no horizontal page overflow, mobile menu fits, scroll lock releases, solution text is not clipped.
- Main route checks: 11 routes at desktop and mobile sizes, including tailored quote selection.
- Scroll visibility scanned across ten key routes, including a separate 360x640 check reproducing and then fixing the Inside ShiftDeploy issue.
- Sitemap crawl: 31 public pages, one H1 each, 188 image instances loaded, no missing alt attributes. Bundled SVG technology logos are not included in the image count.
- Ten SEO unit tests and mocked successful/failed enquiry browser checks passed. No real enquiry emails were delivered; no Sanity content or analytics configuration was changed.
- Screenshots and raw measurements are in ignored `test-results/`. Preview: http://localhost:3101.

## Guidance consulted

- [Next.js lazy loading](https://nextjs.org/docs/app/guides/lazy-loading): code splitting is useful for optional interactions; hiding the public page behind a lazy dependency is not necessary.
- [Next.js server and client components](https://nextjs.org/docs/app/getting-started/server-and-client-components): keep static composition outside the client module boundary.
- [Google LCP optimisation](https://web.dev/articles/optimize-lcp): avoid rendering delays and deliver appropriately sized images; measure results rather than assuming fewer bytes guarantees a faster LCP.

Production deployment status is reported separately after the release is published and verified.
