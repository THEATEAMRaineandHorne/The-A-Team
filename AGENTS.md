# The A-Team Website — Project Guidance

## Purpose and scope

This repository is the live static website for Edita Andrijasevic – Raine & Horne at https://peterandedita.co.nz/.

- GitHub Pages deploys `main` to the live site. Treat every change to `main` as a production change.
- The site is primarily static HTML, CSS, JavaScript, images, fonts and XML. There is no package-based build process; do not add one unless Peter explicitly approves it.
- Work on one clearly defined task or page at a time unless Peter asks for a broader change.

## Approval and change safety

- Never merge, deploy, or push directly to `main` without Peter’s explicit approval in the current conversation.
- Make a dedicated branch and a tightly scoped draft pull request for every change.
- Do not change files, text, navigation, styling, tracking, schema, redirects, forms, assets, or pages outside the request.
- Before editing, identify the exact files affected and preserve all unrelated work.
- Do not delete a live page, rename a URL, change a canonical URL, alter `CNAME`, add redirects, or remove a sitemap entry without explicit approval.
- Do not add a new dependency, framework, CMS, paid service, or external script without explicit approval.
- Do not make legal, financial, sales-performance, ranking, testimonial, review, award, or “best agent” claims unless Peter supplied or approved the evidence and wording.


- Do not begin repository work unless Peter explicitly asks for that specific task in the current conversation.
- A request to review, explain, diagnose or suggest changes does not authorise edits, commits or pull requests.
- A draft pull request is for Peter’s review only and must never be treated as approval to merge.
- Before any live publication, wait for Peter’s clear instruction to merge the specific pull request.
- Never enable auto-merge or merge a pull request based on a previous, implied or general approval.

## Important production files

Handle these files with extra care:

- `CNAME` must remain `peterandedita.co.nz`.
- `sitemap.xml` must contain only indexable canonical URLs for `https://peterandedita.co.nz/`. Update a page’s `lastmod` only when that page materially changes, using ISO 8601 New Zealand time with the correct offset.
- `robots.txt` must retain the sitemap declaration and existing search/AI crawler policy unless Peter specifically requests a crawler-policy change.
- Keep the Google Analytics tag, Google and Bing site-verification tags, and other approved tracking in place.
- Preserve the free Formspree redirect implementation, including `/js/formspree-redirect.js` and the `generate_lead` event. Do not introduce a paid Formspree plan, alternative form platform, or replacement tracking without approval.
- Preserve the production canonical domain `https://peterandedita.co.nz/`; do not introduce GitHub Pages URLs into canonicals, schema, sitemap, Open Graph or internal links.

## SEO and content

- Use natural New Zealand English.
- Maintain one accurate, user-focused H1 per page and a unique title and meta description.
- Preserve canonical URLs, indexability, internal links, relevant Open Graph metadata, and existing breadcrumb/page schema.
- Service pages target commercial/local intent. Articles and market reports target informational intent. Do not make them compete for the same primary query without a clear reason.
- Keep suburb pages genuinely local and distinct. Avoid copied paragraphs, keyword stuffing, duplicate internal links, repeated menu entries, and thin boilerplate.
- Do not change brand/entity details casually. Follow the existing approved page context; when a task includes an entity update, keep the name, phone, email, URL and social links consistent across visible content, metadata and schema.
- Update `dateModified` only when the page is materially updated. Use an ISO 8601 New Zealand date/time.
- Do not add `aggregateRating` or invented reviews. Only use testimonial, sale, market or performance details that Peter has supplied or approved.

## Structured data

- Preserve valid JSON-LD and its existing `@id` relationships.
- Prefer appropriate `WebPage`, `BreadcrumbList`, `RealEstateAgent`, `Service` and `WebSite` schema only where the page supports them.
- Ensure schema URLs use the live canonical HTTPS domain.
- Do not expose private client, vendor, tenant or buyer information in schema or page source.
- After changing schema, validate its JSON syntax and check that visible facts and schema facts agree.

## Performance and images

- Preserve responsive design on desktop and mobile.
- Use WebP for new photographic raster assets where suitable. Reuse existing assets when they meet the requirement.
- Keep responsive image markup (`picture`/`srcset`) where it exists. Give content images explicit `width` and `height`.
- Prioritise only the actual above-the-fold hero/LCP image with preload and `fetchpriority="high"`. Do not preload every image.
- Lazy-load below-the-fold images and embeds. Avoid changing the existing lazy YouTube pattern unless requested.
- Do not replace local fonts with third-party web fonts or add render-blocking resources.
- Minimise CSS/JS changes. This repository uses inline CSS and page-level scripts; edit only the smallest relevant section and do not perform large formatting or refactor-only rewrites.
- For PageSpeed work, preserve content and layout unless Peter explicitly requests a content/design change. Report the exact image dimensions, file size and files changed.

## Navigation and links

- Preserve the existing menu and footer structure unless the task expressly concerns navigation.
- When changing a link, check the destination and surrounding navigation for duplicates or stale links.
- Use root-relative asset paths only where they are already the project convention and verify that they work on the live custom domain.
- Do not change all pages in bulk merely to standardise a link or style. Propose the scoped affected pages first.

## Verification and hand-off

Before opening a draft pull request:

1. Review the complete diff and confirm that every changed file is within scope.
2. Confirm that no unrelated wording, styles, scripts, metadata, schema, forms, tracking, `CNAME`, `robots.txt` or sitemap entries changed.
3. Check HTML/JSON/XML syntax for the changed content.
4. Check changed internal links, canonical URL, title, meta description, H1, image paths and image dimensions as relevant.
5. Check desktop and mobile behaviour for visual changes.
6. For PageSpeed work, compare the affected page before and after and report the expected improvement and any trade-off.
7. Open a draft pull request with a concise summary, affected URLs/files, verification performed, and any follow-up required.

In the final hand-off, state exactly what changed, what was checked, the draft PR link, and clearly say that it has not been merged.
