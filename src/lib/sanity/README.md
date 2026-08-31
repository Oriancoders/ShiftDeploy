# Insights admin

The blog is written at **`/admin/insights`**, inside this app. There is no
Sanity Studio — the editor is custom, following the same pattern as the
reviewYourDoctor project.

## Setup (one time)

Three secrets go in `.env.local`. `NEXTAUTH_SECRET` is already generated;
the other two you create.

### 1. Sanity write token

manage.sanity.io → project **insights** (`zan6neq8`) → API → Tokens → Add token.
Name it "admin editor", give it **Editor** permission, copy the value into:

```
SANITY_API_TOKEN=sk...
```

Without it the editor loads but cannot save — every action returns
"SANITY_API_TOKEN is not set".

### 2. Google OAuth

console.cloud.google.com → APIs & Services → Credentials → Create credentials →
OAuth client ID → **Web application**.

Authorised redirect URIs — add both:

```
http://localhost:3000/api/auth/callback/google
https://shiftdeploy.com/api/auth/callback/google
```

Copy the client ID and secret into `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`.

### 3. Who can get in

```
ADMIN_EMAILS=you@example.com,someone@else.com
```

Only these Google accounts can sign in. The check runs in NextAuth's `signIn`
callback, so a non-listed account never gets a session at all — it is not a
page-level guard that could be bypassed. Two-factor auth is whatever those
Google accounts already enforce.

### 4. Production

Set every variable above in your host's environment, plus:

```
NEXTAUTH_URL=https://shiftdeploy.com
```

`NEXTAUTH_URL` must match the deployed origin exactly or the Google callback
fails.

## Writing a post

`/admin/insights` lists everything with a **Ready / Needs work** badge showing
whether the AI-SEO fields are filled in. The editor has four tabs:

**Write** — title, slug, excerpt, cover image, and the body. The body is built
from blocks: Text, Image, Callout, Statistics, Table, FAQ, Testimonial,
Pros & Cons, Video, CTA, Divider. Text blocks accept markdown (`## heading`,
`- bullet`, `**bold**`, `*italic*`, `***both***`, `[link](url)`) and are stored
as Portable Text, so the published HTML stays semantic.

**AI SEO** — the tab that does the work:

- **Direct answer** — 40-60 words answering the post's core question, written
  so it still makes sense quoted alone. Live word count included. This is the
  block most likely to be lifted verbatim into an AI answer.
- **Key takeaways** — one per line, each a standalone sentence.
- **FAQ** — 3+ questions in the words a person would actually use.
- **Sources**, **entities**, **how-to steps**.

**SEO** — meta title/description with character counts, keywords, search
intent, funnel stage, schema type, canonical, noindex, and a readiness
checklist.

**Details** — author, categories, tags, featured flag.

The header shows a **% ready** score from those checks, and Save draft /
Publish buttons.

## Structure

```
src/lib/sanity/
  config.js    project id, dataset, api version
  client.js    public read client (no token, published only)
  server.js    server-only write client (token, sees drafts)
  queries.js   GROQ for the admin views
  markdown.js  markdown <-> Portable Text
src/lib/auth.js               NextAuth options, isAdminEmail, assertAdmin
src/lib/structuredData.js     the JSON-LD @graph builder
src/components/admin/         editor, shell, image upload, managers
app/admin/insights/actions.js server actions (every one calls assertAdmin)
```

## Content safety

The markdown round-trip is verified lossless against all six existing posts —
text, block count, and block order all survive an edit-and-resave. Three things
make that work, and they are easy to break:

- **Existing field shapes are preserved.** Tables in the dataset use
  `header[]` + tab-separated `pastedData`; CTAs use `buttonText`/`buttonLink`;
  callout `content` is Portable Text, not a string. The editor reads and writes
  back whichever shape a document already used rather than converting it.
- **Unknown block types pass through untouched.** A block the editor has no UI
  for is held opaquely and rewritten exactly as read.
- **Markdown edge cases.** Empty spans carrying a `strong` mark, emphasis with
  trailing spaces, combined `***bold italic***`, and empty heading blocks all
  used to leak literal asterisks or `##` into the text. They are handled in
  `markdown.js` — the fixes have comments explaining why.

If you add a block type, add it to **both** `editorBlocksToBody` and
`bodyToEditorBlocks` in `src/components/admin/editorBlocks.js`, then re-run a
round-trip check before saving over real content.

## Notes

- `/admin` is `noindex` and blocked in `robots.txt`.
- Every server action calls `assertAdmin()` — the UI guard is not the security
  boundary.
- Images are uploaded straight to Sanity's CDN. Max 12 MB, JPEG/PNG/WebP/AVIF/GIF.
- Saving revalidates the `insights` tag and the public blog paths.
