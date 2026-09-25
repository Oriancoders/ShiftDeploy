# UK content review and deployment

## Scope

Reviewed the 31 public sitemap routes, including all eight published Sanity articles and the author page. The automated inventory records rendered H1-H6 headings, paragraphs, image sources/alt text and CSS background images. Repeated navigation/footer elements are included. Admin screens and private analytics data are outside this public-content inventory.

## Changes

- Homepage now explicitly offers web and app development for UK businesses. Supporting copy includes digital products, technical SEO, speed and enquiry improvements without claiming a UK office or inventing locations.
- Service pages have distinct UK-focused titles, H1s and introductory copy. ShiftFlow metadata, service schema, organisation offer, social image and llms.txt now describe maintenance/support instead of a different automation offer.
- British spelling was standardised in the service and toolkit copy. The growth-audit calculator uses GBP for user-entered illustrative inputs; this is not a currency conversion of historical results.
- Owner selected tailored quotes. Active receptionist and plumber package journeys now show tailored quotes and preserve package selection into enquiry forms. Unverified discounts, free-website pricing and conflicting immediate-result promises were removed from these revised journeys. Separate third-party product subscriptions were not repriced.
- Removed placeholder customer portraits and an unsupported 5.0 rating on the receptionist hero. Removed unsupported numerical revenue/ROI promises in its comparison and hero cards, and unsupported result counters on the plumber hero.
- Legal pages now have one page H1 and proper section headings. Article body H1 styling is demoted where the shared renderer is used; empty CMS headings are skipped in the detail renderer.
- Navigation/footer use locally hosted copies of the existing brand logos. Broken React, ClickUp and Figma remote logos were replaced with bundled brand icons. Expiring LinkedIn portrait images were replaced with initials, preserving the existing attributed quotation.
- Video poster and technology-logo descriptions are meaningful. Generic article hero alt text such as "Hero Image" falls back to the article title. Decorative/adjacent-label thumbnails retain empty alt text intentionally.
- Homepage project cards now show existing actual project screenshots, not stock photos; images are uncropped. Informative case-study diagrams are HTML images with descriptions rather than CSS backgrounds.
- Mobile homepage headline sizing and receptionist comparison overflow were corrected. Existing routes and article slugs were preserved.

## Evidence and checks

- `npm.cmd run test:seo`: 10 tests cover publishing filters, safe Sanity save behaviour, URL policy, UK website validation and privacy-safe lead event payloads.
- `node scripts/check-uk-pages.mjs`: desktop 1365px and mobile 390px checks across 11 key routes, including one H1, UK commercial headings, overflow, and working quote selection controls.
- `node scripts/audit-uk-content.mjs`: sitemap-wide rendered inventory and assertions for response status, one H1, non-empty headings and alt attributes. It also records actual image load failures rather than treating lazy-loading as a failure.
- `node scripts/check-seo-browser.mjs`: mocked successful/failed enquiry events, article and missing-article status, sitemap, robots and llms checks. Test email requests are intercepted and analytics blocked.
- `node scripts/review-content-images.mjs`: image review sheets. Screenshots and full inventory are in ignored `test-results/`, not published as website content.
- Production build and targeted lint are checked before push. Existing image optimisation/hook lint warnings are not equivalent to a clean whole-repository lint run.

## Research used

- [Google regional targeting](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites): use truthful regional content and business signals. Existing en-GB/en_GB settings were retained; no fabricated city pages or regional variants were added.
- [Google image guidance](https://developers.google.com/search/docs/appearance/google-images): descriptive contextual alt text, relevant images and discoverable HTML image elements. No UK keyword stuffing in image descriptions.
- [Google AI feature guidance](https://developers.google.com/search/docs/appearance/ai-features): foundational search eligibility and useful content remain important; special AI files do not guarantee citations.

## Important remaining work

- Some Sanity articles contain USD examples, US-oriented terminology and numerical claims needing source/evidence review. Historical currency figures and client provenance were not silently relabelled as UK results. No live CMS documents were mutated in this deployment.
- Architecture illustrations and illustrative charts should not be presented as independently verified client outcomes. Case-study claims need underlying evidence and permission; published images and existing copy alone cannot prove them.
- The shared /services and /deploy-toolkit content still merits canonical/consolidation planning. New dedicated app/product/technical-SEO commercial pages need agreed scopes and real proof, not near-duplicate city pages.
- Author entity/schema truthfulness and product compliance/review-policy claims remain separate editorial checks from the original audit. Legal text was not certified as UK-law compliant; only heading hierarchy changed.
- Existing GSC, GA4/GTM and Bing accounts still need post-deploy baseline and conversion verification as listed in SEO-PHASE-1-IMPLEMENTATION.md. Accounts were not duplicated.
- Ranking first page, organic enquiry volume and AI recommendations cannot be guaranteed by these edits.

## Deployment route

The repository is Oriancoders/ShiftDeploy on master. Its native GitHub Vercel integration previously reported a successful deployment to the existing shift-deploy project under oriancodesolutions-5305s-projects. The locally logged-in Vercel account does not own that project, so deployment uses the repository integration, not a newly created project. The separate deploy-hook GitHub Actions workflow has historical failures; native Vercel status and live production content are checked independently.
