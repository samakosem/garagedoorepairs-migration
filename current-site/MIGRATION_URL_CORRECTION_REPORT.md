# Migration URL Correction Report — garagedoorepairs.com

Report date: 2026-06-17
Trigger: Critical SEO migration issue found in `CURRENT_SITE_CONTENT_AUDIT.md` — 10 of the 13 location/questionable URLs in the original migration brief do not exist on the live WordPress site.

This report documents the exact correction. **No code, routes, or new-site files have been changed.** `../exports/URL_INVENTORY.csv` and `../redirect-map/REDIRECT_MAP.csv` have been updated with corrected data (see Section 6).

---

## 1. Exact Real Live WordPress URLs (confirmed via sitemap, re-verified this session)

### 1a. page-sitemap.xml — 20 URLs, all confirmed 200 except where noted

| # | Real URL | Lastmod | Status |
|---|---|---|---|
| 1 | `/` | 2025-12-29 | 200 |
| 2 | `/garage-door-maintenance-aliso-viejo/` | 2025-06-28 | 200 |
| 3 | `/garage-door-fixing-adelanto/` | 2025-06-28 | 200 |
| 4 | `/garage-door-repair-in-blythe/` | 2025-06-11 | 200 |
| 5 | `/garage-door-repair-in-arcadia/` | 2025-06-11 | 200 |
| 6 | `/garage-door-fixing-alhambra/` | 2025-05-30 | 200 |
| 7 | `/garage-door-maintenance-beaumont/` | 2025-05-30 | 200 |
| 8 | `/los-angeles-ca/` | 2025-05-26 | 200 |
| 9 | `/garage-door-technician-banning/` | 2025-05-26 | 200 |
| 10 | `/garage-door-repair-agoura-hills/` | 2025-05-25 | 200 |
| 11 | `/emergency-garage-door-repair/` | 2025-05-19 | 200 |
| 12 | `/garage-door-repair-los-angeles/` | 2025-05-06 | 200 |
| 13 | `/contact-us/` | 2025-05-04 | 200 |
| 14 | `/garage-door-repair/` | 2025-04-29 | 200 |
| 15 | `/about-us/` | 2025-04-24 | 200 |
| 16 | `/garage-door-replacement/` | 2025-04-24 | 200 |
| 17 | `/garage-door-off-track-repair/` | 2025-04-24 | 200 |
| 18 | `/thank-you/` | 2025-04-23 | 200 (new finding — not in original brief) |
| 19 | `/garage-door-spring-replacement/` | 2025-04-14 | 200 |
| 20 | `/blog/` | 2025-03-25 | 200 |

**Notably absent from this sitemap:** `/garage-door-opener/`, `/preventive-maintenance/`, `/track-and-roller-replacement/`, `/sliding-door-repairs/`, `/stainless-steel-cover-track/`, `/lock-and-handle-repair/`, and all 8 bare-city-slug location URLs (`/banning/`, `/agoura-hills/`, etc.). None of these exist on the live site.

### 1b. post-sitemap.xml — 5 real blog post URLs, all confirmed 200

| # | Real URL | Lastmod |
|---|---|---|
| 1 | `/garage-door-services-in-los-angeles-ca/` | 2025-12-29 (most recently updated content on the entire site) |
| 2 | `/garage-door-replacement-in-los-angeles/` | 2025-05-15 |
| 3 | `/comprehensive-guide-to-garage-door-repair-in-los-angeles-everything-you-need-to-know/` | 2025-05-15 |
| 4 | `/how-much-does-a-garage-door-repair-cost/` | 2025-05-15 |
| 5 | `/how-much-does-it-really-cost-to-repair-a-garage-door-spring/` | 2025-05-15 |

### 1c. category-sitemap.xml — 1 URL

| # | Real URL |
|---|---|
| 1 | `/category/blog/` |

---

## 2. Current Next.js Routes That Are Wrong Assumptions

These 10 routes exist in the new Next.js build at bare city slugs that **never existed on the live WordPress site:**

| Wrong Next.js route (404 on old site) | Real WordPress URL it should map to |
|---|---|
| `/banning/` | `/garage-door-technician-banning/` |
| `/agoura-hills/` | `/garage-door-repair-agoura-hills/` |
| `/beaumont/` | `/garage-door-maintenance-beaumont/` |
| `/alhambra/` | `/garage-door-fixing-alhambra/` |
| `/arcadia/` | `/garage-door-repair-in-arcadia/` |
| `/blythe/` | `/garage-door-repair-in-blythe/` |
| `/adelanto/` | `/garage-door-fixing-adelanto/` |
| `/aliso-viejo/` | `/garage-door-maintenance-aliso-viejo/` |

Additionally these 3 Next.js routes are NOT real WordPress URLs either — they were treated as "questionable existing pages needing review" in the original brief, but they are net-new:

| Next.js route | Reality |
|---|---|
| `/sliding-door-repairs/` | Never existed as a standalone URL. "Sliding Door Repairs" is only a service-menu label embedded in other live pages (homepage, Agoura Hills page). |
| `/stainless-steel-cover-track/` | Never existed. No reference to this term found anywhere on the live site. |
| `/lock-and-handle-repair/` | Never existed at this URL. BUT real, on-topic Lock & Handle Repair content does exist live, misfiled under `/garage-door-repair-los-angeles/`. |

And these 2 are also net-new (no old equivalent), despite being listed as "preserve" in the original brief:

| Next.js route | Reality |
|---|---|
| `/preventive-maintenance/` | Confirmed 404, not in any sitemap. |
| `/track-and-roller-replacement/` | Confirmed 404, not in any sitemap. |

**`/garage-door-opener/`** is a special case: the new Next.js route is correctly named, but the real live site returns 404 at this exact URL — the Opener-titled content appears to be live, but misfiled with a wrong title on `/garage-door-repair-los-angeles/` instead. Treat as net-new pending GSC verification.

---

## 3. URLs Returning 404 on Live WordPress Site (Full List)

- `/banning/`
- `/agoura-hills/`
- `/beaumont/`
- `/alhambra/`
- `/arcadia/`
- `/blythe/`
- `/adelanto/`
- `/aliso-viejo/`
- `/sliding-door-repairs/`
- `/stainless-steel-cover-track/`
- `/lock-and-handle-repair/`
- `/garage-door-opener/`
- `/preventive-maintenance/`
- `/track-and-roller-replacement/`

**None of these returned a 301/302 redirect.** All are hard 404s. There is currently no redirect infrastructure on the live site protecting any guessed/wrong URL.

---

## 4. Real Location URLs That Must Replace Current Bare Routes

See table in Section 2. Decision required (not yet made — flagged in CSVs as `PENDING DECISION`):

- **Option A — Adopt real slugs:** Change the 8 Next.js location routes to match the real WordPress slugs exactly (e.g. `/garage-door-technician-banning/`). No redirect needed since URL stays the same.
- **Option B — Keep clean slugs, redirect old into new:** Keep `/banning/` etc. as the new canonical, and 301 redirect the real old WordPress URLs (`/garage-door-technician-banning/` etc.) into them.

Both are valid SEO migration patterns. Recommendation in this report: **Option A is lower-risk** because it requires zero redirect infrastructure and exactly preserves the URLs Google has already indexed and any backlinks point to. Option B is viable if there's a strong UX/branding reason to prefer the shorter slugs, but requires implementing and testing 8 working 301s before launch, and dilutes the link equity transfer slightly (301s typically pass ~90-99% of value, not 100%).

**This decision is yours to make — implementation has not started.**

---

## 5. Blog Post URLs That Must Be Migrated or Redirected

All 5 are listed in Section 1b. None currently have any equivalent in the new Next.js `/blog/` (which is presently a zero-content placeholder). Per-post recommendation:

| Post | Recommendation |
|---|---|
| `/garage-door-services-in-los-angeles-ca/` | Most recently updated page on the whole site (Dec 2025) — likely actively maintained/valuable. Rebuild as a real post. |
| `/garage-door-replacement-in-los-angeles/` | Rebuild preferred; if not feasible pre-launch, 301 to `/garage-door-replacement/`. |
| `/comprehensive-guide-to-garage-door-repair-in-los-angeles-everything-you-need-to-know/` | Long-form guide, good rebuild candidate. |
| `/how-much-does-a-garage-door-repair-cost/` | High commercial-intent (cost query) — strong rebuild candidate, do not discard. |
| `/how-much-does-it-really-cost-to-repair-a-garage-door-spring/` | High commercial-intent (cost query) — strong rebuild candidate; could 301 to `/garage-door-spring-replacement/` if not rebuilt. |

**Do not let `/blog/` launch as an empty placeholder while these 5 URLs either 404 or sit unaddressed on the old install.**

---

## 6. Questionable/Contaminated Pages

**Confirmed contamination on the live site (per audit, reconfirmed here — none of this has been imported into the new build):**

- Florida city references on homepage: Clearwater, Homosassa Springs, Bradenton, Winter Haven, Lake Wales
- "Jess Flawless Sliding Doors" on `/garage-door-spring-replacement/`
- "Native Garage Doors" branding inconsistency on `/los-angeles-ca/`
- Sliding door / glass / window service-menu cross-contamination on `/los-angeles-ca/` and `/garage-door-repair-agoura-hills/`
- Outbound third-party link to `goldentouchgaragedoor.com` on `/garage-door-replacement/`
- Unverified Google Reviews block on homepage and `/los-angeles-ca/`
- Unverified promo/stat claims: "$299 OFF," "$99.99 OFF," "180+ Same Day Service," "90% Backed by a Warranty," "100% Satisfaction"

No Bradenton/Hudson/Dunedin/Clearwater/St. Petersburg-as-a-dedicated-page, no lanai/patio-door/screen-door content, no broken WhatsApp links, and no Jess Flawless branding were found anywhere in the current Next.js codebase — confirmed via direct grep in a prior session and reconfirmed by comparison against this audit.

**Questionable URLs that are not real pages:** `/sliding-door-repairs/` and `/stainless-steel-cover-track/` — net-new placeholders, no live equivalent, no contamination risk from migration since there's nothing to migrate.

**Questionable URL with a real migration opportunity:** `/lock-and-handle-repair/` — real content exists, misfiled on `/garage-door-repair-los-angeles/`. Migrating it serves two goals: populates this page with real, on-topic content, and cleans up the LA repair page's focus.

---

## 7. Recommended Route Changes (Not Yet Implemented)

1. **Resolve location-URL strategy** (Option A or B, Section 4) before touching any code.
2. Once decided, either:
   - Rename the 8 Next.js location route folders to the real slugs (Option A), or
   - Add 8 redirect entries to `next.config.ts` `redirects()` from real slugs to current bare slugs (Option B).
3. Build 5 real blog post pages under `/blog/[slug]/` or equivalent, using the real post-sitemap URLs as the route slugs, OR add interim 301s if rebuild isn't ready for launch.
4. Decide GSC-history check for `/garage-door-opener/`, `/preventive-maintenance/`, `/track-and-roller-replacement/` before finalizing their net-new status.
5. Optionally migrate the Lock & Handle Repair content block into `/lock-and-handle-repair/` once past placeholder status.
6. Implement `/thank-you/` as a real (noindexed) page once the contact form has a backend — currently disallowed in robots.ts correctly, but the page itself doesn't exist yet in the new build.

**None of the above have been implemented. This report is documentation only, per your instruction to stop at the report stage.**

---

## 8. Recommended Redirect-Map Changes (Already Applied to CSV — Data Only, No Code)

`../redirect-map/REDIRECT_MAP.csv` has been updated to:
- Mark all 10 wrong bare-slug URLs as "Wrong assumed URL - do not use" with status 404
- Add 8 new rows for the real location URLs with `PENDING DECISION` redirect type, pending Section 4's decision
- Add 5 new rows for the real blog post URLs with "Needs decision: Rebuild or 301"
- Add a new row for `/thank-you/` (confirmed live, previously undocumented)
- Mark `/sliding-door-repairs/` and `/stainless-steel-cover-track/` as "Wrong assumed URL - not a real page"
- Mark `/lock-and-handle-repair/` as "Rebuild using real content found on live site"
- Mark `/garage-door-opener/`, `/preventive-maintenance/`, `/track-and-roller-replacement/` as "Rebuild as new page" with 404 status noted

`../exports/URL_INVENTORY.csv` received the equivalent corrections plus lastmod-sourced context per real URL.

---

## 9. High-Priority SEO Risks Before Launch

1. **Critical** — 8 location pages: current Next.js routes do not match any real indexed WordPress URL. Launching as-is, without resolving Section 4's decision, either fragments SEO value across two live URLs per city or permanently loses 8 real indexed pages' worth of equity when the WordPress install is decommissioned.
2. **High** — 5 real blog posts have no migration plan and no equivalent in the new build. `/garage-door-services-in-los-angeles-ca/` was updated as recently as 2025-12-29 — likely the single most actively-maintained piece of content on the entire old site, and it has zero counterpart in the new site currently.
3. **Medium** — `/garage-door-opener/`, `/preventive-maintenance/`, `/track-and-roller-replacement/` are confirmed 404/not-in-sitemap on the live site. Original brief assumed these needed preservation; they're net-new. Low risk if GSC confirms no prior indexing, but unverified — do not assume zero risk without checking GSC.
4. **Medium** — `/thank-you/` is a real, live, currently undocumented page. New build's robots.ts already disallows it correctly, but the actual page doesn't exist yet in the new Next.js app — a gap to close before the contact form goes live with a real backend.
5. **Low** — contamination avoidance is already correctly handled in the current build (verified) — no action needed there, just continued vigilance not to reintroduce any of it while building out blog posts or migrating the Lock & Handle content.

---

## Summary of File Changes This Session

- `../exports/URL_INVENTORY.csv` — rewritten with corrected real URLs, 404 status flags, new blog post rows, new `/thank-you/` row, wrong-assumed-URL flags
- `../redirect-map/REDIRECT_MAP.csv` — rewritten with corrected real URLs, pending-decision flags for location strategy, new blog post rows, new `/thank-you/` row
- `../current-site/MIGRATION_URL_CORRECTION_REPORT.md` — this file, newly created

**No Next.js code, routes, components, metadata, sitemap.ts, robots.ts, or schema were changed.**
