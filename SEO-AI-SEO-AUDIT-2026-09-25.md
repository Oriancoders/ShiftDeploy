# ShiftDeploy: SEO, AI Search aur UK Organic Leads Audit

Audit date: 25 September 2026.

## Faisla

Website ki SEO foundation maujood hai. Sab se bara commercial gap yeh hai ke aap broad development agency describe karte hain, lekin website aur articles mainly performance, conversion aur dental booking problems par focused hain. App development, digital product development aur dedicated SEO buying intent ke liye distinct landing pages missing hain.

Priority: publishing bugs dur karein, service descriptions consistent karein, clear buyer pages banayein, original evidence publish karein, aur qualified leads measure karein. Sirf mazeed schema, keywords ya AI-generated articles se yeh gaps solve nahi honge.

First-page ranking kisi ek website ka universal status nahi: har query, location aur competitor set alag hai. Google position 1, first-page placement, AI recommendation ya leads ki fixed quantity guarantee nahi ki ja sakti. Neeche 90-day execution plan hai, ranking deadline nahi.

## Scope aur confidence

- Repository: App Router pages, metadata, sitemap, robots, JSON-LD, Sanity reads/writes, custom editor, homepage, service templates, contact flow aur article renderer inspect kiye.
- Public Sanity API: configured default project `zan6neq8`, dataset `production` read kiya. 8 published posts, 1 author, 4 categories mile. Query ki gayi tamam posts published aur indexable thin; current draft leakage observe nahi hui.
- Public website: homepage search/browser text fetch se readable thi. Direct PowerShell requests ko homepage, robots, sitemap aur sampled routes par 403 mila. Yeh is audit client ki observation hai; verified Googlebot/OpenAI blocking ka proof nahi.
- Research: official Google, Bing, OpenAI, Sanity documentation; GEO research; Ahrefs ki original study; UK competitor service pages.
- Private Search Console, GA4, Bing Webmaster Tools, hosting logs, backlinks dataset aur authenticated Sanity project settings inspect nahi hue. Public configured dataset ka production deployment se exact environment match independently verify nahi hua.
- No Lighthouse/CrUX measurement, full rendered-browser crawl, form submission, email delivery test ya mobile visual QA performed. Actual CWV pass/fail, organic traffic, keyword volumes aur conversion rate unknown hain.
- Website code aur Sanity documents change nahi kiye. Yeh file audit deliverable hai.

## Jo pehle se achha hai

- Next.js metadata, self-canonical declarations on important routes, Open Graph/Twitter configuration aur `en-GB` language.
- Public pages ko source robots configuration mein crawl permission; admin/API exclusions.
- Service, organisation, article aur breadcrumb structured data.
- Sanity article rendering server-provided content leta hai. Sirf `'use client'` hona SEO failure ka proof nahi.
- Author pages, visible sources, direct answers, related posts aur service-to-article links already implemented hain.
- Sanity images ke liye responsive image helpers aur article-specific social metadata.
- Named projects aur testimonials available hain. Inhein measurable, independently checkable proof mein strengthen kiya ja sakta hai.
- Existing public posts mein SEO descriptions, FAQs aur three related-post references per post hain.

## P0: Publishing aur content integrity

### 1. Custom draft/unpublish status public queries enforce nahi kartin

Evidence: `src/lib/insightsData.js:5` aur `:24` queries document types/slug filter karti hain, `status == "published"` nahi. `app/sitemap.js:26` bhi status filter nahi karta. `app/admin/insights/actions.js:188` normal document par custom status save karta hai; `:296` unpublish ko status change se implement karta hai.

Sanity `perspective: 'published'` Sanity draft documents ko handle karta hai, aapka arbitrary `status` field nahi. Is liye future custom-status draft ya unpublished normal-ID document public list/detail/sitemap mein aa sakta hai. Abhi queried dataset mein tamam 8 published hain, is liye yeh confirmed code defect hai, observed current leak nahi. [Sanity perspectives](https://www.sanity.io/docs/content-lake/perspectives)

Fix: ek shared public eligibility rule use karein: published status, valid slug, due publication date; sitemap mein additionally noindex/external-canonical exclusions. Detail, listing, authors, related-post dereferences aur llms feed ko consistent banayein. Legacy missing status ka migration explicit ho, automatic public fallback nahi.

Acceptance: draft direct URL public na ho; unpublished URL disappear ho; future-dated post scheduled time se pehle public na ho; sitemap sirf canonical indexable URLs de.

### 2. Editor existing SEO/content fields delete kar sakta hai

Evidence: `app/admin/insights/actions.js:273` uses `createOrReplace` with a newly assembled document. Payload mein existing `relatedPosts`, `internalLinks`, `primaryCta`, `theme` aur other unmapped top-level fields absent hain. `src/components/admin/PostEditor.jsx:514` passes `social: {}`. Existing social overrides bhi replace hote waqt lose ho sakte hain.

Impact: ordinary edit ke baad related links aur editorial settings silently disappear. Public dataset ke sab 8 posts mein related references hain, aur 6 mein primary CTA field hai; yeh hypothetical empty fields nahi.

Fix: current document preserve karke controlled patch karein, ya complete round-trip payload banayein. Deliberately clearing a field aur editor mein field unavailable hone ko distinguish karein. Revision check se concurrent edits protect karein.

Acceptance: isolated fixture par save/edit round-trip mein existing related posts, internal links, CTA, social overrides aur unknown fields unchanged rahen. Live content par destructive experiment na karein.

### 3. Slug edits ke liye redirect lifecycle missing hai

Editor slug change allow karta hai; inspected save flow old slug retain/redirect nahi karta. `next.config.mjs` mein redirect map nahi; `vercel.json` mein only `/flight-logs` redirect hai.

Fix: published slug lock ya old-slug history + permanent redirects, updated internal links and sitemap. Existing long/awkward slugs ko sirf cosmetic SEO ke liye bulk rename na karein.

## P1: Search clarity aur lead generation

### 4. ShiftFlow ka offer contradictory hai

Evidence: `app/services/shiftflow/page.jsx:7` business automation/AI workflows advertise karta hai. `src/Pages/Services/ShiftFlow/sections/FlowSolution.jsx` aur `FlowFaqs.jsx` uptime monitoring, updates, security aur monthly maintenance describe karte hain. Root organisation and llms feed automation repeat karte hain.

Impact: buyer aur search/AI systems ko ek hi service ke different meanings milte hain.

Fix: ShiftFlow ko maintenance/support service define karein aur metadata/schema align karein. Agar automation bhi actual offer hai to separate, useful automation page with integrations, workflows, examples aur deliverables banayein.

### 5. Services aur Deploy Toolkit largely duplicate hain

Evidence: `app/services/page.jsx:19` aur `app/deploy-toolkit/page.jsx:98` same `Toolkit_Landing` render karte hain; dono self-canonical. Toolkit additionally schema/related insights add karta hai, is liye byte-identical nahi, lekin main content same hai.

Fix: `/services` ko main hub rakh kar old toolkit URL permanently redirect karein, ya toolkit ko genuinely distinct process/resource page banayein. Internal links bhi canonical destination use karein. Yeh duplicate-content penalty ka claim nahi; consolidation aur clear page purpose ka issue hai.

### 6. Aapki actual services ke buying-intent pages incomplete hain

Dedicated routes mein web build, speed, CRO aur ShiftFlow hain. Native/mobile app development, digital product/MVP work aur dedicated SEO offer ke separate pages nahi mile. Homepage H1 `Your Technical Partner, We Fix What's Blocking Your Growth` memorable hai lekin literal offer aur UK audience clear nahi karta (`src/Pages/LandingPage/landingComps/Hero.jsx`).

Recommended homepage offer: `Web Development and Website Optimisation for UK Businesses`. Supporting copy mein apps/digital products tab add karein jab actual scope and proof available ho. Broader agency headline bhi possible hai, lekin initial SEO effort 1-2 proven services par concentrate karein.

Branded names ko retain kar sakte hain: `Website Speed Optimisation (ShiftSpeed)` is clearer than brand name alone. Existing URLs ko rename karna prerequisite nahi.

### 7. Blog ke CTA fields actual renderer use nahi karta

`src/lib/insightsData.js` primary CTA normalize karta hai, aur dataset mein 6/8 posts ka `primaryCta` set hai. `src/Insights/InsightDetail.jsx` mein field query mein hai lekin rendering reference nahi mila. Body CTA blocks separately supported hain; is finding ka matlab har article CTA-free nahi.

Fix: primary CTA ko configured position par render karein; each article ko relevant service aur proof page se connect karein. LCP article -> speed service -> relevant case study -> performance audit. App discovery article -> app service -> discovery call. Har intent ko same generic audit par force na karein.

### 8. Homepage evidence crawler text mein zeros hai

`src/Pages/LandingPage/landingComps/MissionsCompleted.jsx:159` renders `animatedNumbers[index] || 0`; initial values empty hain. Public homepage extraction mein projects, gains, years aur satisfaction sab zero aaye.

Fix: true final values initial/server HTML mein render karein, animation progressive enhancement ho. Counts/rating/gains ki evidence bhi maintain karein. 4.9/5 ko source aur review count ke baghair unexplained authority claim na banayein.

### 9. Proof quality ko strengthen karna hoga

Homepage project cards actual project screenshots ke bajaye Pexels URLs use karte hain. Real interface screenshots, dates, delivered scope aur client-approved outcomes zyada useful honge. Existing project names and testimonials useful starting points hain.

Each case study: business context -> baseline -> work -> result -> measurement method -> limitations -> client quote/source -> relevant service CTA. Performance improvement ko revenue improvement kehne se pehle conversion evidence chahiye.

Tech logos ka heading `Our Circle of Trust & Technology Excellence` hai aur alt values `logo-0` etc. (`src/components/TrustStrip.jsx`). Visible heading `Technologies we use` rakhein; tool logos ko partnerships/client endorsements imply na karne dein.

### 10. UK positioning consistent nahi

`app/llms.txt/route.js:21` says UK-based. Other text remote delivery and UK hours describe karta hai. UK clients ko serve karna aur UK-based organisation hona separate facts hain; actual operating setup ke mutabiq wording consistent karein.

`ContactUs.jsx` mein hello@ address aur root schema mein contact@ address hai. Dono valid aliases ho sakte hain; preferred sales contact visibly clear karein. Slack invitation organisation `sameAs` mein identity profile ka strong substitute nahi.

Local profile sirf actual eligibility par: online-only businesses Google Business Profile ke liye eligible nahi; remote delivery automatically service-area eligibility nahi banati. Root layout comments is distinction ko oversimplify karte hain. [Google eligibility](https://support.google.com/business/answer/13763036)

Do not invent UK office addresses or mass-create city pages. Real local work, team availability, relevant examples aur GBP eligibility verify karein.

## P2: Technical SEO correctness

### 11. Missing article server-level notFound use nahi karta

`app/insights/[slug]/page.jsx` missing post ko null renderer deta hai; `src/Insights/InsightDetail.jsx:662` displays `Insight not found.` Metadata noindex hai, lekin route server `notFound()` call nahi karta.

Fix: missing/unpublished item par server route `notFound()`; transient CMS failure ko deleted content se distinguish karein. Soft-404 risk source-confirmed hai; production response direct 403 restriction ki wajah se measure nahi hua.

### 12. Sitemap lastmod aur inclusion inaccurate ho sakte hain

`app/sitemap.js:33` uses current time for every static URL. Re-generation/content change same cheez nahi. Real meaningful modification dates use karein ya unknown lastmod omit karein. Priority/changeFrequency par ranking expectations na rakhein. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

Post sitemap noindex/canonical/status flags ignore karta hai. Abhi audited 8 posts noindex false aur no custom canonical hain, lekin future editorial settings contradictory signals create karengi.

### 13. CMS revalidation incomplete hai

`refreshInsights()` only insights/admin paths and an insights tag invalidate karta hai. Public client fetches inspected code mein tag options assign nahi karte. Sitemap, llms feed aur service related-insights surfaces explicitly invalidate nahi hote. `vercel.json` sitemap ko 24-hour cache header deta hai.

Fix: shared query caching/tag strategy define karein; publish/unpublish/delete/slug change par dependent surfaces invalidate karein. CDN, route and API caches ka actual deployment behavior test karein; immediate site-wide freshness currently established nahi.

### 14. Author schema wrong type aur disconnected IDs

Dataset author `ShiftDeploy Technical Team` hai. `src/lib/structuredData.js:75` usay Person emit karta hai. Article author ID `${articleUrl}#author` hai (`:50`); profile uses `https://shiftdeploy.com/#person-${slug}` (`app/insights/author/[slug]/page.jsx:96`). Code comments same ID claim karte hain, actual IDs different hain.

Fix: real named author ho to Person, team byline ho to appropriate Organization. Shared stable author ID use karein. Named author credentials truthful aur relevant hon; team authorship apne aap SEO violation nahi.

### 15. Other metadata cleanup

- Root title template appends ShiftDeploy; homepage and some author metadata already contain brand. Rendered title duplication verify and use bare title/absolute title intentionally.
- Root fallback canonical homepage hai; new routes par own canonical/noindex explicit karein. Existing major route canonicals already present hain.
- Meta-keyword fields content planning ke liye useful ho sakte hain; unko Google ranking lever na banayein.
- Article reading-time save field `readingTime` hai; main reads `minutes/readTime`. Detail body fallback estimate de sakta hai, listing often 5-minute fallback. One consistent field contract use karein.
- SVG social images par `format('png')` URL create ho jana successful raster output ka proof nahi. Two current covers SVG hain; content-type and rendered social preview verify karein.
- Mixed-case routes cleanup low priority hai. Existing ranking URLs migrate sirf clear reason, redirects and link updates ke saath.

### 16. Speed aur crawler access: measurement pending

Animation-heavy client components, repeating motion, Cloudinary assets aur third-party scripts performance review deserve karte hain, lekin source reading se CWV failure prove nahi hoti.

Measure home, speed service, build service, article and audit form on mobile. Record field CrUX/GSC where available, and separate repeatable Lighthouse lab results. Field targets: LCP <=2.5s, INP <=200ms, CLS <=0.1 at 75th percentile. Low traffic par field data unavailable ho sakta hai. [Core Web Vitals](https://web.dev/articles/vitals)

403 investigation: Search Console live URL inspection, Bing inspection, hosting firewall logs, genuine verified crawler requests and robots/sitemap availability. Merely spoofing User-Agent does not prove a real bot can enter. Robots permission alone cannot override a firewall challenge.

## Sanity content quality findings

Repository custom `/admin/insights` editor use karta hai; standalone Sanity Studio schema project nahi mila. Is liye validation ko custom server actions/editor mein implement karna hoga, sirf Studio configuration suggest karna incomplete hoga.

| Published article | Approximate body words | Recommended action |
| --- | ---: | --- |
| LCP Above 3.5 Seconds... | 1,691 | Booking LCP article se intent overlap assess; source/stat provenance repair |
| Why your dental website is losing patients... | 1,585 | Broad clinic diagnostic hub ban sakta hai; specific technical posts ko link karein |
| Google Ads Before Website Audit: A Dental Case | 1,222 | Actual audit exhibits, time period, scope and consent-backed proof add karein |
| How Slow Contact Form Submission Speed... | 1,820 | Own 12-28% statistic ka sample/method/source publish ya claim soften/remove |
| INP Above 200ms on Booking Flows... | 1,892 | Loading vs interaction vs network completion distinction accurately explain |
| Why Static Contact Forms Cannot Capture... | 1,344 | Overabsolute title soften; benchmark ka original denominator/context verify |
| Your Booking Page LCP Is a Revenue Number... | 954 | Older LCP post se different purpose establish ya evidence-led merge consider |
| Build an Image Pipeline... | 687 | Useful engineering experience; actual implementation measurements and relevant build CTA |

Word counts public `pt::text(body)` split se approximate hain; nested custom block text omit ho sakta hai. Minimum word target recommendation nahi.

Specific issues:

- All 8 use same team author. Profile claims 100+ UK practice audits and every figure coming from measured field data. Several article stats externally attributed hain; absolute biography wording reconcile karein and 100+ claim ka proof retain karein.
- 90% bounce-probability statistic `web.dev/articles/lcp` se linked hai; 53% abandonment claim `web.dev/articles/vitals` se. Relevant metric docs automatically exact statistics substantiate nahi karti. Original study URL/year/population link karein.
- 9.09% form figure Zuko homepage se attributed hai, exact report nahi. Source table and definition ke baghair benchmark ko universal rule na banayein.
- Clinical commercial examples mein USD/med-spa terminology hai; UK target buyer ke context mein GBP and relevant practices use karein. Foreign research ho to uska geography honestly retain karein.
- Four cover alts are generic `Hero Image`/`Hero`; actual visible image describe karein.
- One slug leading hyphen se start hota hai; an existing long LCP slug bhi hai. Ugly URL automatic ranking failure nahi. Only justified migration with redirects.
- Two newer articles have no `primaryCta`, aur current renderer baqi six ka field bhi use nahi karta.
- Some in-body links use www while canonical domain non-www hai. Canonical URL style standardise karein; redirect behavior verify karein.
- Similar LCP/dental posts keyword cannibalisation ka risk hain, confirmed ranking diagnosis nahi. GSC query/page overlap dekh kar merge or differentiate karein.

Editor readiness score presently fields/FAQ count/direct-answer word count check karta hai. Yeh search-engine score nahi. UI ka claim ke har unchecked item missed ranking/citation signal hai overconfident hai.

Better editorial workflow: Draft -> Evidence Review -> Business Review -> Published. Track main buyer question, target service, author/reviewer, evidence links, actual content review date, intended CTA and canonical. Gates title/body/slug integrity, valid source URLs and required contextual evidence par rakhein; arbitrary 3 FAQs/40-60 words sab topics par force na karein.

## Research ka practical matlab

1. Google ki July 2026 AI optimisation guidance original experience, clear structure and normal search eligibility ko emphasise karti hai. Special AI markup, exact chunk lengths aur llms.txt ko Google visibility shortcut nahi batati. Current llms feed keep kar sakte hain, lekin us par high implementation budget na lagayein. [Google AI optimisation guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
2. FAQ rich results Google mein 7 May 2026 se removed hain. FAQ content useful reh sakta hai; FAQ schema se enhanced Google listing promise ab outdated hai. [Google documentation changelog](https://developers.google.com/search/updates)
3. Google ne June 2026 mein dedicated generative-AI impression reports announce kiye; source ke August 31 note ke mutabiq worldwide rollout complete hai. Account mein report/inclusion settings inspect karein. Older AI-features page still overall Web reporting describe karta hai; current report documentation ko prefer karein. Impressions ko clicks/leads na samjhein. [Google announcement](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
4. OpenAI search discovery ka crawler OAI-SearchBot hai; GPTBot training ka control separate hai. Existing wildcard allow source mein search disallow nahi karta, lekin actual firewall/IP access verify karna hoga. Training allow karna search recommendation ki condition nahi. [Official OpenAI crawlers](https://developers.openai.com/api/docs/bots)
5. Bing AI Performance pages cited, citations and grounding-query information deta hai. Citation traffic ya ranking ke equal nahi. [Bing AI Performance](https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c)
6. Original GEO paper controlled benchmark mein visibility improvement report karta hai; yeh ShiftDeploy ko organic leads/40% boost guarantee nahi deta. [KDD 2024 GEO paper](https://arxiv.org/abs/2311.09735)
7. July 2026 critical survey, a preprint reviewing 45 studies, discoverability, citation and downstream outcomes ko separate rakhta hai; durable cross-platform causal evidence limited hai. Is liye experiments repeat karein aur earned revenue measure karein. [2026 critical survey](https://arxiv.org/abs/2607.14035)
8. Ahrefs ki 75k-brand observational study mein web/YouTube brand mentions AI visibility se associated hain. Correlation causation nahi; yeh useful authentic reputation work ka argument hai, bulk purchased mentions ka nahi. [Ahrefs original study](https://ahrefs.com/blog/ai-brand-visibility-correlations/)

## UK services aur content plan

Recommendation: initial acquisition focus website performance + bespoke web development. Existing material in dono ko support karta hai. Dental/service-business niche only tab primary banayein jab actual project evidence aur commercial fit ho; current blog concentration alone expertise proof nahi.

| Buyer intent | Recommended page/action | Proof and CTA |
| --- | --- | --- |
| Website speed optimisation UK | Existing ShiftSpeed page sharpen | Before/after metrics + scoped audit |
| Bespoke web development UK | Existing ShiftBuild page sharpen | Real builds + project discovery |
| Website maintenance UK | Correct ShiftFlow positioning | Support scope, response windows, onboarding |
| Conversion optimisation for service businesses | Existing ShiftConvert page sharpen | Funnel evidence + conversion review |
| Web app / mobile app development | Separate pages only for genuinely distinct supported offers | Relevant shipped app, supported platforms, ownership, discovery |
| MVP / digital product development | New page if commercial priority | Discovery/prototype/build boundaries and product example |
| Technical SEO services UK | New implementation-focused page if offered | Crawl/indexation fixes and measured evidence |
| Workflow automation | Separate from maintenance if offered | Actual CRM/booking workflows, failure handling, handover |
| Dental website optimisation | One evidence-rich niche page if supported | Clinic audit/case study + booking-flow review |

These are keyword hypotheses, not measured demand/difficulty estimates. Validate with UK GSC data, Keyword Planner or a keyword dataset before expanding. Do not create every page just to reach a page count.

Each commercial page should answer: who it is for; problem; deliverables; exclusions; process; indicative timeline; honest starting price/range or how scope is priced; relevant work; responsible people; FAQs arising from sales calls; clear next action. Avoid claiming all projects use same timeline or guaranteed conversion lift.

Competitor spot-check: [SpotDev audit page](https://www.spotdev.co.uk/services/website-audit) provides a narrowly scoped audit offer, explicit starting price and named work. [Delivix speed service](https://delivix.digital/services/website-speed-optimisation/) names supported platforms, process and turnaround. These are offer-clarity examples, not proof of ranking position, verified performance claims or endorsements.

Suggested first six new/rewritten pieces, adjusted to actual expertise:

1. What a UK website speed optimisation project includes and how pricing is decided -> ShiftSpeed.
2. Fix the existing website or rebuild? A decision guide with one real example -> ShiftBuild.
3. A measured booking-flow audit: baseline, changes, follow-up, limits -> niche page + speed/CRO.
4. Web app vs mobile app for a service business -> the relevant development page.
5. What changes a bespoke web app budget: integrations, roles, payments, maintenance -> discovery.
6. A Next.js or CMS performance case study based on work actually delivered -> build/speed.

Update old overlapping articles before publishing more copies. Put a useful original exhibit in each: annotated screenshot, waterfall, implementation example, anonymised funnel or decision table. Published numbers need date, method and context.

## Organic lead conversion and measurement

`src/utils/LazyGTM.jsx` loads GTM after interaction or four seconds. No explicit source-level generate_lead/qualified_lead tracking found. External GTM configuration may already provide events, so analytics absence is not established.

Define and QA these outcomes: confirmed audit submission, confirmed contact submission, actual booked call, qualified opportunity, proposal, won deal. Record originating page, service intent, source/medium and allowed attribution data. CTA clicks alone are secondary.

Contact flow currently presents a performance audit, which is narrower than app/product project enquiries. Add suitable enquiry paths and carry service context. Explain audit deliverable, expected turnaround and next step; avoid collecting fields unnecessary for that step. Confirm email/CRM receipt and error handling with an authorised test.

There are dormant service-pricing files with USD amounts and buttons without handlers. ShiftBuild does not mount BuildPricing, so this is NOT a confirmed live broken CTA or live USD pricing finding. If reactivating them, implement working links, approved GBP prices and appropriate tax wording.

Monthly scorecard: UK non-brand impressions/clicks per service; valid indexed commercial pages; organic confirmed leads; qualified lead rate; pipeline/won revenue; AI impressions/citations; AI referral visits and resulting leads. Review lead quality, not traffic alone.

Illustrative funnel only: 300 relevant organic visits x 3% enquiry rate = 9 enquiries; x 40% qualified = about 4 qualified leads. These are planning assumptions, not this site's measured performance or a forecast.

For AI monitoring, maintain 15-20 realistic buyer questions across actual services. Repeat runs, retain date/platform/query/cited URL, and separate mention, recommendation, citation and click. One favourable answer is not durable visibility. Combine manual samples with first-party reports.

## Authority and distribution

- Publish real team profiles and original project demonstrations, with accurate links and roles.
- Invite genuine clients to leave honest reviews on relevant legitimate profiles; do not fabricate or selectively buy endorsements.
- Seek a small number of relevant case-study mentions, technology-community contributions and industry partnerships. Client co-authored examples can substantiate what you did.
- Share useful technical walkthroughs on LinkedIn/YouTube and link to the full evidence. Do not claim that posting to a platform automatically makes AI recommend you.
- Keep brand name, actual operating model, primary contacts and service descriptions consistent across profiles.
- No current backlink count/quality score was available; weak backlink authority is a hypothesis to measure, not an audited metric.

## 90-day implementation order

| Period | Deliverable | Acceptance / measure |
| --- | --- | --- |
| Days 1-7 | Status filters, safe save round-trip, slug policy, missing-post handling, sitemap rules | Draft/unpublished/404 cases pass; saves preserve links/CTA |
| Days 1-14 | Hosting crawl verification and GSC/Bing/analytics baseline | Verified real crawl access; indexation and conversion baseline recorded |
| Days 8-21 | ShiftFlow clarity, service-hub consolidation, homepage offer, nonzero SSR stats | Metadata/body/schema consistent; canonical URLs and evidence readable |
| Days 15-30 | Repair existing 8 articles, evidence links, primary CTA rendering, truthful author | Claims traceable; article-to-service-to-enquiry path works |
| Days 22-45 | Improve two priority commercial pages and publish one strong case study | Useful scope/proof/CTA; impressions and qualified enquiries monitored |
| Days 31-60 | Add justified app/product/SEO page(s), publish buyer content | Distinct intent and actual proof; no copycat pages |
| Days 45-90 | Genuine reviews/mentions, project demos, iterative conversion changes | Track qualified pipeline, AI citations and source-specific conversions |

This schedule depends on developer availability, real project evidence and editorial review. Some organic effects may take several months; speed of crawling and rankings is outside your direct control.

## Remaining evidence for a measurable second pass

Search Console last 3-6 months (UK queries/pages, indexed URLs, selected canonicals and crawl issues); GA4 conversion/source reports; Bing AI/crawl reports; hosting bot logs; CrUX or PageSpeed reports; actual top services, margins and client outcomes. With these, prioritisation can move from code/content evidence to measured revenue opportunity.

Recommended first implementation batch: safe Sanity publishing/saving, matching ShiftFlow offer, service-hub consolidation, correct server-rendered stats and working article CTAs. New content and reputation work should build on that foundation.
