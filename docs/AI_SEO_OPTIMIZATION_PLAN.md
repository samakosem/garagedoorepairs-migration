# AI SEO Optimization Plan — garagedoorepairs.com

Plan date: 2026-06-18
Scope: traditional Google SEO + AI Overviews/AI Mode + ChatGPT/Perplexity citation visibility + local lead gen.
Foundation rule: this plan extends the existing migration-corrected Next.js site. It does not touch migrated URLs, redirects, trailingSlash, or noindex decisions already in place.

---

## 1. Current Indexable URLs (29, confirmed via last sitemap build)

Core (5): `/`, `/about-us/`, `/contact-us/`, `/blog/`, `/los-angeles-ca/`
Service (9): `/garage-door-repair/`, `/garage-door-repair-los-angeles/`, `/garage-door-spring-replacement/`, `/garage-door-off-track-repair/`, `/garage-door-replacement/`, `/emergency-garage-door-repair/`, `/garage-door-opener/`, `/preventive-maintenance/`, `/track-and-roller-replacement/`
Real migrated location (8): `/garage-door-technician-banning/`, `/garage-door-repair-agoura-hills/`, `/garage-door-maintenance-beaumont/`, `/garage-door-fixing-alhambra/`, `/garage-door-repair-in-arcadia/`, `/garage-door-repair-in-blythe/`, `/garage-door-fixing-adelanto/`, `/garage-door-maintenance-aliso-viejo/`
Blog (5): the 5 real migrated post URLs
Legal (2): `/privacy-policy/`, `/terms-and-conditions/`

Non-indexable (noindex, excluded from sitemap, correct as-is): `/sliding-door-repairs/`, `/stainless-steel-cover-track/`, `/lock-and-handle-repair/`

## 2. Current Metadata Status

Every indexable page has unique title/description/canonical/OG — confirmed in prior sessions. Titles are functional but not optimized for CTR or urgency (e.g. homepage title is just "Garage Door Repair Los Angeles" with no differentiator like "24-Hour" or "Same-Day"). No metadata is broken; this is an enhancement pass, not a repair.

## 3. Current Sitemap Status

29 URLs, correctly excludes questionable pages and bare-city URLs. Healthy. Will grow to 49 after adding 20 new city pages (29 + 20).

## 4. Current Schema Status

- `localBusinessSchema()` — HomeAndConstructionBusiness, full NAP, hours, geo. Good. Missing `sameAs` (intentionally empty, no real profiles given).
- `serviceSchema()` — used on service + location pages. Good, consistent.
- `breadcrumbSchema()` — used on all inner pages. Good.
- **Missing:** FAQPage schema (FAQs are visible everywhere via `FAQSection` but never marked up — this is the single biggest schema gap), Article/BlogPosting schema on blog posts, WebSite/SearchAction (not implemented, optional), Organization schema (not present, optional given LocalBusiness already covers identity).

## 5. Current FAQ Coverage

Every service page has 3 FAQs, every location page has 3 FAQs (2 shared template Qs + 1 city-named Q), homepage has 4, blog posts have 0. Per the task's Phase 4 target (6-8 per service, 5-7 per city, FAQ schema everywhere visible), current depth is roughly half of target on services/locations and has a real gap on blog posts.

## 6. Current Internal Linking Structure

- `InternalLinks` — related services, used on service/location/about pages.
- `ServiceAreaSection` — links to all locations, used on homepage + los-angeles-ca.
- Footer — all services + all locations + legal, sitewide.
- Blog posts link to one related service each.
- **Gap:** no city→service deep links beyond the generic "Services Available" block, no service→blog links, no blog→blog (cost cluster) links, no city-to-city "nearby areas" linking.

## 7. Content-Depth Weaknesses

- Location pages are template-uniform: name/region swap only, no city-specific problems, no city-specific FAQ beyond name substitution. Acceptable for migrated pages (matches old site's depth, see migration audit) but not for new city pages — those need genuinely unique sections per Phase 7 rules.
- Blog posts are short (3 sections, ~50 words each) — thin for "comprehensive guide" framing on one post title specifically.
- No page has a quick-answer block, comparison table, or "when to call a technician" safety section — all net-new content types per this plan.

## 8. Pages Needing Stronger Question-Answer Content

Priority order: `/garage-door-repair-los-angeles/` (primary keyword target), `/emergency-garage-door-repair/`, `/garage-door-spring-replacement/`, `/garage-door-opener/`, `/garage-door-off-track-repair/` — these are Phase 8's five money pages. Homepage already has decent QA structure via FAQSection; needs QuickAnswerBlock added, not rebuilt.

## 9. Pages Needing Better Titles/Descriptions

All 9 service pages and `/` — apply Phase 2 title patterns. Location pages (8 real + 20 new) get `Garage Door Repair in [City], CA | Garage Door Repairs` pattern. Blog posts get question-style titles (already mostly are; will tighten).

## 10. Pages Needing Unique Local Content

20 new city pages (net-new, built unique per Phase 7 rules). The 8 real migrated location pages are intentionally template-based per migration-audit precedent (old site was template-based too) — light enhancement (expand FAQ count to 5-7, add nearby-areas) without claiming new uniqueness obligations the migrated pages were never audited to need.

## 11. Pages for AI Answer Extraction Optimization

All 5 Phase 8 money pages + homepage + all 20 new city pages get `QuickAnswerBlock`. Blog posts get a short answer near the top (reusing `QuickAnswerBlock` in a lighter variant). Service comparison table goes on homepage and `/garage-door-repair-los-angeles/` only — not every page, to avoid template fatigue.

## 12. Risks of Doorway/Thin City Pages

Real risk if 20 new pages are template clones. Mitigation built into Phase 7 requirements: unique H1, unique intro, unique "common problems in [city]" framing (drawing on real neighborhood character — e.g. Hollywood hillside homes vs. Long Beach coastal salt-air corrosion — not generic filler), unique FAQ set, unique nearby-areas list, varied service-order. No fake offices, explicit "service availability may vary" language throughout. This is the standard Google flags for doorway pages: identical content with only the city name swapped. We avoid it by varying the actual substance per city, not just the proper noun.

## 13. Recommended Implementation Plan

1. Schema: add `faqPageSchema()` and `articleSchema()` builders to `lib/schema.ts`.
2. Components: `QuickAnswerBlock`, upgrade `FAQSection` to optionally emit FAQPage JSON-LD (only when passed real visible FAQs — default behavior, no separate hidden data path), `ServiceComparisonTable`, `RelatedLinksBlock` (city↔service↔blog), "When to Call a Technician" safety block (folded into emergency-related templates rather than a generic standalone component, since the rules emphasize page-specific safety framing).
3. Expand FAQ data: 6-8 per service (was 3), 5-7 per real location (was 3), add FAQs to blog posts.
4. Add Article schema to `BlogPostTemplate`, expand blog post depth.
5. Build 20 new city pages with full unique-content requirements; add `newCityPages` registry separate from `locationPages` (keeps migrated vs. new cleanly separated in code, matching the task's explicit "do not confuse" instruction).
6. Update sitemap to include the 20 new pages (29 → 49).
7. Strengthen money-page templates (Phase 8) with QuickAnswerBlock + safety sections + comparison table where specified.
8. Update metadata titles per Phase 2 patterns across home/service/location pages.
9. Run build + lint, verify full Phase 13 QA checklist.

This plan does not alter any existing migrated route, redirect, canonical, or noindex flag. All additions are net-new content/components or in-place metadata/schema enrichment on existing pages.
