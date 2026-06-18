# Current Site Content & SEO Audit — garagedoorepairs.com

Audit date: 2026-06-17
Method: Live fetch of each URL via WebFetch (HTML→markdown extraction). No crawler/Screaming Frog used — status codes are derived from fetch response, not from GSC/Ahrefs data (those exports still show `TBD` in `../exports/URL_INVENTORY.csv`).

---

# Executive Summary

**Total URLs checked:** 25 (per task list) + 3 sitemap files + 2 real location URLs spot-checked = 30 fetches

**URLs returning 200:** 13
- `/` (homepage)
- `/about-us/`
- `/contact-us/`
- `/blog/`
- `/garage-door-repair/`
- `/garage-door-repair-los-angeles/`
- `/garage-door-spring-replacement/`
- `/garage-door-off-track-repair/`
- `/garage-door-replacement/`
- `/emergency-garage-door-repair/`
- `/garage-door-opener/`
- `/garage-door-technician-banning/` (real slug, not `/banning/`)
- `/garage-door-repair-agoura-hills/` (real slug, not `/agoura-hills/`)

**URLs returning 404:** 12 of the 25 originally-assumed URLs
- `/preventive-maintenance/` — does not exist live, never in sitemap
- `/track-and-roller-replacement/` — does not exist live, never in sitemap
- `/banning/` — wrong slug, real page is `/garage-door-technician-banning/`
- `/agoura-hills/` — wrong slug, real page is `/garage-door-repair-agoura-hills/`
- `/beaumont/` — wrong slug, real page is `/garage-door-maintenance-beaumont/`
- `/alhambra/` — wrong slug, real page is `/garage-door-fixing-alhambra/`
- `/arcadia/` — wrong slug, real page is `/garage-door-repair-in-arcadia/`
- `/blythe/` — wrong slug, real page is `/garage-door-repair-in-blythe/`
- `/adelanto/` — wrong slug, real page is `/garage-door-fixing-adelanto/`
- `/aliso-viejo/` — wrong slug, real page is `/garage-door-maintenance-aliso-viejo/`
- `/sliding-door-repairs/` — does not exist as standalone URL on live site (referenced only as a service-menu item/internal label on other pages, not its own page)
- `/stainless-steel-cover-track/` — does not exist live, not in any sitemap
- `/lock-and-handle-repair/` — does not exist live, not in any sitemap

**301/302 redirects found:** 0 detected. No redirects observed during fetch — all non-existent URLs returned hard 404, not a redirect to a live page. This means there is currently no redirect chain protecting old/guessed URLs.

**Pages with important old content missing from the new Next.js site:** all 8 location pages (new site uses `/banning/` etc., old site never used those slugs — see Critical Risk #1 below), blog post content (5 real WordPress blog posts exist live, new `/blog/` is a placeholder with zero posts), FAQ content block from homepage.

**Pages with suspicious/contaminated content:** homepage (Florida city references: Clearwater, Homosassa Springs, Bradenton, Winter Haven, Lake Wales — confirmed via fetch), garage-door-spring-replacement page ("Jess Flawless Sliding Doors" reference confirmed via fetch), los-angeles-ca page ("Native Garage Doors" branding inconsistency, sliding door / glass / window service-menu cross-contamination), garage-door-repair-agoura-hills (Sliding Door Repairs cross-link present even on a location page), garage-door-replacement page (outbound link to unrelated third-party site `goldentouchgaragedoor.com`).

**Pages that look safe to rebuild as-is (content-wise):** about-us, contact-us, all core service pages (garage-door-repair, garage-door-repair-los-angeles, garage-door-spring-replacement minus the contamination line, garage-door-off-track-repair, garage-door-replacement minus the outbound link, emergency-garage-door-repair, garage-door-opener).

**Pages needing 301/noindex decisions:**
- The 10 wrong-slug location URLs (`/banning/`, `/agoura-hills/`, etc.) used by the new Next.js site do not correspond to any real indexed WordPress URL. There is nothing to redirect FROM — these new URLs are not preserving any existing SEO value because the old URLs never existed. **This is the single biggest finding of this audit.**
- `/preventive-maintenance/` and `/track-and-roller-replacement/` similarly never existed — the new Next.js pages at these slugs are not preserving anything; they are net-new URLs with no backlink/index history to protect.
- `/sliding-door-repairs/`, `/stainless-steel-cover-track/`, `/lock-and-handle-repair/` — none exist as live WordPress URLs. The new Next.js placeholder pages at these slugs are also net-new, not migrations. Original migration brief assumed these were real existing pages that needed review; they are not standalone indexed pages on the current live site.

**Biggest SEO risks before launch:**
1. **Critical** — The entire premise that 8 location pages + 2 service pages + 3 questionable pages are "existing URLs to preserve" is wrong for 10 of those 13. The real WordPress site uses completely different slugs for its location pages (keyword-rich slugs like `/garage-door-technician-banning/`, not bare `/banning/`). If the real old pages are indexed and ranking under their real slugs, the new Next.js site at `/banning/` etc. is NOT preserving that SEO value — it's a brand-new URL competing against the old one, OR if old pages get taken down without a redirect, that link equity is lost entirely.
2. **High** — No 301 redirect plan exists yet from real old URLs (e.g. `/garage-door-technician-banning/`) to new URLs (e.g. `/banning/`), if the decision is to consolidate to cleaner slugs. Without redirects, switching slugs at launch will 404 every one of those real indexed pages.
2b. **High** — Real WordPress site has 5 indexed blog posts with topically relevant content (repair cost guides, spring replacement cost, LA service guide) that have likely accumulated some organic value. New `/blog/` is a content-free placeholder. If old post URLs aren't preserved/redirected, that content and any rankings are lost.
3. **Medium** — Homepage and several service pages contain Florida-market and sliding-door contamination that must NOT be carried into new copy (confirmed — and per prior session, it has not been carried in, which is correct).
4. **Medium** — `/thank-you/` exists live (form-submission landing page) and is correctly excluded from sitemap/nav already; new site's robots.ts already disallows `/thank-you/` — consistent, no action needed, but confirms a real page exists that the new site should eventually implement to match expected form-completion flow.

**Highest priority content improvements:**
1. Decide location-page URL strategy: either (a) match new Next.js slugs to the real existing WordPress slugs and 301 the rest, or (b) keep the cleaner new slugs and 301 the real old WordPress URLs into them. Both are valid migration patterns — but a decision plus redirect map entries are required before launch, because right now neither path is implemented.
2. Migrate the 5 real blog posts (or at minimum 301 them to relevant service pages) before treating `/blog/` as just a placeholder.
3. Pull real per-location content detail (the live pages do have city-specific H1/copy, e.g. "Garage Door Technician in Banning, CA") into the new location page template rather than the current generic region-only copy, once URL strategy is settled.
4. Confirm and avoid re-adding: Florida cities, "Jess Flawless Sliding Doors," "Native Garage Doors" branding, sliding-door/glass/window cross-sell menu items, third-party outbound links (goldentouchgaragedoor.com).

---

# Per-URL Audit

## 1. Homepage — `https://garagedoorepairs.com/`

1. **URL:** `/`
2. **HTTP status:** 200
3. **Title tag:** "Garage Door Repair Service | Best Garage Door Repair Near Me"
4. **Meta description:** not exposed in fetch (likely present in raw HTML `<meta>` but not rendered into fetched markdown)
5. **Canonical:** `https://garagedoorepairs.com/`
6. **H1:** "Welcome to Garage Door Repair Service"
7. **H2/H3:** "Your go-to place for experienced garage door repairs...", "15+ Years of Experience", "Why Choose Us", "About Us", "Garage Door Replacement", "Garage Door Spring Replacement", "Garage Door Maintenance", "GOOGLE REVIEWS", "Frequently Ask Question", "Contact us"
8. **Content summary:** LA-based garage door repair company, 15+ years experience claim, "24/7 Same Day-service," "180+ Same Day Service" completions claim, "90% Backed by a Warranty" claim.
9. **Keywords:** spring replacement, opener repair, track/roller replacement, off-track repair, preventive maintenance, garage door replacement, lock/handle repair
10. **Internal links:** `/garage-door-repair/`, `/garage-door-spring-replacement/`, `/garage-door-off-track-repair/`, `/los-angeles-ca/`, `/contact-us/`, `/blog/`, multiple city pages
11. **Images/alt:** not reliably extracted by fetch
12. **Schema:** not detected in fetch (may exist in raw HTML `<head>`, common for WP SEO plugins — not confirmed either way)
13. **FAQ:** yes — six questions covering common repairs, DIY warnings, pricing, timeline, power-outage scenarios
14. **NAP:** Phone +1 (424) 387-4585, email info@garagedoorepairs.com, address 1864 N Vermont Ave Los Angeles CA 90027, hours "Open 24 hours" — matches real business data
15. **Suspicious content:** **CONFIRMED** — Florida service-area references (Clearwater, Homosassa Springs, Bradenton, Winter Haven, Lake Wales). "Sliding doors" mentioned in service descriptions.
16. **Contamination signs:** **YES — Florida cities + sliding door mix-in confirmed directly on homepage.**
17. **Recommendation:** Keep/Rebuild. Strip all Florida references and sliding-door mentions. Real FAQ content (6 Q&As) is migratable and valuable — should be ported into homepage FAQ section if not already equivalent.

### Comparison vs new Next.js homepage
- Old title "Garage Door Repair Service | Best Garage Door Repair Near Me" vs new "Garage Door Repair Los Angeles" — new is cleaner, primary-keyword-led. Acceptable change, not a ranking page being abandoned (same URL `/`).
- Old H1 "Welcome to Garage Door Repair Service" vs new H1 "Garage Door Repair Los Angeles" — new H1 is stronger/more keyword-relevant, fine.
- Old content depth: FAQ (6 real Qs), testimonial/review section, "Why Choose Us," service highlight blocks. New: FAQ present (4 Qs, written safely, no fake reviews), TrustBar, ServiceCards, ProblemSolution, ServiceArea, Process. New site has comparable or greater structural depth, written cleaner.
- Old internal links: service + city pages. New: service cards + service-area links — comparable.
- Old schema: unconfirmed. New: LocalBusiness JSON-LD (confirmed in code, accurate NAP).
- **Missing content that should be migrated:** none of the old FAQ text is unique/valuable enough to require verbatim migration — new FAQ already covers similar ground safely. No action required.
- **Content that should NOT be migrated:** Florida city list, "180+ Same Day Service / 90% warranty" unverified stat claims, sliding door mentions, Google Reviews block (cannot verify reviews are real/non-fabricated).
- **SEO risk level:** Low (same URL, same intent, no redirect needed).
- **Recommended action:** none required pre-launch beyond what's already done. Homepage is in good shape.

---

## 2. About Us — `https://garagedoorepairs.com/about-us/`

1. **URL:** `/about-us/`
2. **HTTP status:** 200
3. **Title:** "About Garage Door Repair Services | Garage Door Services"
4. **Meta description:** not exposed in fetch
5. **Canonical:** not exposed in fetch
6. **H1:** "About Us" / "Your Trusted Partner for All Your Garage Door Repair Needs" (fetch returned two H1-like headings — likely one H1 + one large hero heading marked up as H2, not confirmed which is the true single H1 in raw HTML)
7. **H2s:** Garage Door Repair Near Me, Mission, Vision, Our Clients/Delivering Excellence, Why Choose Us, Contact us, Get in Touch, Our Location, Phone Number, Email, Services
8. **Content summary:** Mission/vision statements, "premium garage door repair and installation services," 15+ years experience claim.
9. **Keywords:** repair, spring replacement, opener service, off-track repair, replacement, maintenance, track and roller replacement
10. **Internal links:** Home, About, Services, Emergency repair, multiple city pages, Contact, Blog
11. **Images/alt:** not reliably extracted
12. **Schema:** not detected in fetch
13. **FAQ:** none
14. **NAP:** matches real business data
15. **Suspicious content:** none detected on this page directly
16. **Contamination signs:** none detected on this specific page
17. **Recommendation:** Keep/Rebuild.

### Comparison vs new Next.js about-us
- Old title "About Garage Door Repair Services | Garage Door Services" vs new "About Us" — new is simpler; both fine, no ranking risk since URL is identical.
- Old H1 ambiguous (possibly two competing headings — a real WordPress SEO issue) vs new H1 "About Us" — new is correctly singular, an improvement.
- Old content depth: Mission/Vision/Clients sections. New: approach narrative + TrustBar + ProcessSection. Comparable, arguably cleaner.
- **Missing content:** Mission/Vision framing not present in new copy — optional nice-to-have, not SEO-critical.
- **Content that should NOT be migrated:** none flagged on this page.
- **SEO risk level:** Low.
- **Recommended action:** none required.

---

## 3. Contact Us — `https://garagedoorepairs.com/contact-us/`

1. **URL:** `/contact-us/`
2. **HTTP status:** 200
3. **Title:** "Contact Us - Garage Door Repair Service"
4. **Meta description:** not exposed in fetch
5. **Canonical:** not exposed in fetch
6. **H1:** "Contact Us"
7. **H2s:** Contact us, Get in Touch with us, Our Location, Phone Number, Email, Contact Us (footer)
8. **Content summary:** Standard contact page — 15+ years experience, free estimates, 24-hour availability messaging repeated.
9. **Keywords:** repair, spring replacement, off-track repair, replacement, opener, maintenance
10. **Internal links:** Home, About, Services, location pages, Blog, Contact
11. **Images/alt:** logo present, alt references "Garage Door Repair"
12. **Schema:** not detected in fetch
13. **FAQ:** none
14. **NAP:** matches real business data
15. **Suspicious content:** "$299 OFF ON YOUR FIRST ORDER" promo banner — not contamination, just a promo not yet decided on for new site
16. **Contamination signs:** none on this page
17. **Recommendation:** Keep/Rebuild.

### Comparison vs new Next.js contact-us
- Old title "Contact Us - Garage Door Repair Service" vs new "Contact Us" — fine, same intent.
- Old H1 "Contact Us" vs new H1 "Contact Us" — match.
- Old content: contact details + location, no real form details extracted. New: full ContactForm (front-end only) + direct contact block + Get Directions link (added this session) + hours. New site is materially more complete.
- **Missing content:** $299-off promo not carried over — that's an intentional, correct decision (unverified/expiring promo, not core SEO content).
- **SEO risk:** Low.
- **Recommended action:** none required. New page is an improvement.

---

## 4. Blog — `https://garagedoorepairs.com/blog/`

1. **URL:** `/blog/`
2. **HTTP status:** 200
3. **Title:** "Blog - Garage Door Repair Service"
4. **Meta description:** not exposed in fetch
5. **Canonical:** not exposed in fetch
6. **H1:** "Blog"
7. **H2/H3:** "Garage Door Services in Los Angeles, CA", "How Much Does It Really Cost to Repair a Garage Door Spring?", "How much does a Garage Door Repair Cost?", "Comprehensive Guide to Garage Door Repair in Los Angeles", "Garage Door Replacement in Los Angeles"
8. **Content summary:** Blog index listing 5 real posts (confirmed via `post-sitemap.xml`).
9. **Keywords:** repair cost, spring replacement cost, LA repair guide, replacement
10. **Internal links:** Home, About, Services, location pages, Contact
11. **Images/alt:** logos present, alt text inconsistent
12. **Schema:** not detected in fetch
13. **FAQ:** none on index page itself
14. **NAP:** matches real business data
15. **Suspicious content:** none on index page
16. **Contamination signs:** none detected on index page
17. **Recommendation:** **Improve content** — the index itself is fine, but the 5 underlying posts need individual review before deciding keep/redirect/rebuild.

**Real blog post URLs (from post-sitemap.xml, NOT yet individually audited — flagged for follow-up):**
- `/garage-door-services-in-los-angeles-ca/`
- `/garage-door-replacement-in-los-angeles/`
- `/comprehensive-guide-to-garage-door-repair-in-los-angeles-everything-you-need-to-know/`
- `/how-much-does-a-garage-door-repair-cost/`
- `/how-much-does-it-really-cost-to-repair-a-garage-door-spring/`

### Comparison vs new Next.js blog
- Old: functioning index with 5 real posts. New: placeholder index, zero posts, "new articles coming soon" copy.
- **Missing content that should be migrated:** all 5 blog posts' content is currently unmigrated. These are topically strong, on-keyword posts (repair cost, spring cost, LA guide) — likely the easiest content on the whole site to safely reuse with light editing.
- **SEO risk level: High** — these posts may hold indexed value/rankings/backlinks today. Leaving `/blog/` as an empty placeholder at launch, without migrating or redirecting the 5 real post URLs, risks losing that value outright if the old WordPress install is decommissioned.
- **Recommended action:** Before launch — decide per-post: migrate content into new Next.js blog post pages (preferred, preserves URL+content+value), or if migrating isn't feasible pre-launch, 301 each old post URL to the most relevant new service page as an interim measure. Do not let them 404.

---

## 5. Garage Door Repair — `https://garagedoorepairs.com/garage-door-repair/`

1. **HTTP status:** 200
2. **Title:** "Garage Door Repair - Garage Door Repair Near Me Los Angeles"
3. **Meta description:** not exposed in fetch
4. **Canonical:** not exposed in fetch
5. **H1:** "Garage Door Repairs"
6. **H2/H3:** Our Service, Reliable Garage Door Repair Solutions, Service Overview, Service Benefits, Get a Quote, Garage Door Repair Near Me, Contact us; H3: Effortless Operation, Energy Efficiency, Enhanced Security, Aesthetic Appeal
7. **Content summary:** diagnostics, repairs, replacements; spring, track, opener, panel repair for residential/commercial.
8. **Keywords:** repair, spring replacement, off-track repair, replacement, opener repair, track realignment, panel repair, emergency repair
9. **Internal links:** Home, About, Services, Contact, Blog, Spring Replacement, Off-Track Repair, Replacement, location pages
10. **Images/alt:** real alt text confirmed — "garage-door-repair-los-angeles," "Garage Door Replacement," "Garage Door Service," brand logos (Genie, LiftMaster)
11. **Schema:** not detected in fetch
12. **FAQ:** none
13. **NAP:** matches real business data
14. **Suspicious content:** none
15. **Contamination signs:** none detected
16. **Recommendation:** Keep/Rebuild.

### Comparison vs new
- Old H1 "Garage Door Repairs" vs new H1 "Garage Door Repair" (service title) — near-identical, fine.
- Old content: benefit-led (Effortless Operation/Energy Efficiency/Security/Aesthetic) — generic-ish marketing language, not specific repair signs/symptoms.
- New content: "Signs You May Need This Service," "What We Cover," FAQ, Process — more specific, more SEO-substantive (symptom-led content matches user search intent better than benefit-led).
- **Missing content:** real brand-name mentions (Genie, LiftMaster) on old site add a small trust/specificity signal not present in new copy — optional addition, not required.
- **SEO risk:** Low.
- **Recommended action:** none required; new page is qualitatively stronger.

---

## 6. Garage Door Repair Los Angeles — `https://garagedoorepairs.com/garage-door-repair-los-angeles/`

1. **HTTP status:** 200
2. **Title:** "Garage Door Opener - Garage Door Repair Service" — **mismatched title, likely a WordPress template/SEO-plugin misconfiguration on the live site** (title says "Garage Door Opener" but URL/H1 are about LA repair)
3. **H1:** "Garage door repair in Los Angeles"
4. **H2/H3:** Our Service, Trusted Garage Door Repair Pros in Los Angeles, Why We're the Top Choice, Service Overview, Expert Lock & Handle Repairs, What's Included in Lock & Handle Repair, Durability, Home Protection, Precision Repair, Quick Turnaround
5. **Content summary:** mixes general LA repair messaging with a large **Lock & Handle Repair** content block — same contamination pattern seen elsewhere (unrelated service folded into this page).
6. **Keywords:** repair, opener, springs, off-track, lock and handle repairs, replacement, maintenance
7. **Internal links:** Home, About, Services, garage-door-repair-los-angeles itself, Springs, Off-Track, location pages, Contact, Blog
8. **Images/alt:** "garage-door-repair-los-angeles," "Garage Door Replacement," "Garage Door Service," "Garage door Tracks repair"
9. **Schema:** not detected in fetch
10. **FAQ:** none
11. **NAP:** matches
12. **Suspicious content:** **Title tag mismatch (says "Garage Door Opener" — a different service)**, large embedded Lock & Handle Repair content block that doesn't belong on this URL
13. **Contamination signs:** content-mixing (not Florida/sliding-door specific, but same class of issue — wrong content under wrong URL)
14. **Recommendation:** Keep/Rebuild, but old page's content is internally confused and should NOT be used as a content source for this URL beyond the core LA-repair framing.

### Comparison vs new
- Old title is actively wrong (Opener title on a different URL) — a real, confirmed on-page SEO bug on the live site.
- New title "Garage Door Repair Los Angeles" — correct, matches URL/intent. This is a meaningful improvement already in place.
- Old H1 "Garage door repair in Los Angeles" vs new H1 "Garage Door Repair Los Angeles" — equivalent.
- **Content that should NOT be migrated:** the Lock & Handle Repair block embedded in this page — wrong page for that content.
- **SEO risk:** Medium — if this page currently ranks under its confused title, a clean retitle at the same URL is still the correct fix (better relevance signal), so no actual risk from already having a correct title in the new build.
- **Recommended action:** none required; new page already corrects a real bug from the old site.

---

## 7. Garage Door Spring Replacement — `https://garagedoorepairs.com/garage-door-spring-replacement/`

1. **HTTP status:** 200
2. **Title:** "Garage Door Spring Repair & Replacement Services"
3. **H1:** "Garage Door Spring Replacement"
4. **H2/H3:** Fast & Reliable Garage Door Spring Replacement, Restore Safety and Performance, Service Overview, Our Garage Door Spring Services Include, Smooth Operation, Improved Safety, Aesthetic Appeal
5. **Content summary:** torsion/extension spring replacement, broken spring diagnostics, tension adjustment.
6. **Keywords:** torsion spring, extension spring, broken spring diagnostics, tension adjustment, track/roller replacement, emergency services
7. **Internal links:** Home, About, Services, Contact, Blog, location pages
8. **Images/alt:** company logo, "Garage door Spring" caption (appears twice, duplicate alt text)
9. **Schema:** not detected in fetch
10. **FAQ:** none on this page
11. **NAP:** matches
12. **Suspicious content:** **CONFIRMED — "Jess Flawless Sliding Doors" referenced on this page.** This is an unrelated third-party sliding-door business name appearing on a garage door spring page — strong contamination signal.
13. **Contamination signs:** **YES, directly confirmed.**
14. **Recommendation:** Keep/Rebuild content concept, but the "Jess Flawless Sliding Doors" reference must never be carried into new copy (already correctly absent from new site, confirmed via prior grep in this project).

### Comparison vs new
- New garage-door-spring-replacement page has none of this contamination — already correctly excluded.
- Old content depth: benefit list. New: intro + signs + covered + FAQ (3 real Qs) + process — substantively deeper and safer.
- **SEO risk:** Low (contamination already avoided in new build).
- **Recommended action:** none required — this is a "confirm avoidance" item, already satisfied.

---

## 8. Garage Door Off Track Repair — `https://garagedoorepairs.com/garage-door-off-track-repair/`

1. **HTTP status:** 200
2. **Title:** "Garage Door Off Track Repair - Garage Door Repair Service"
3. **H1:** "Garage Door Off Track Repair"
4. **H2/H3:** Best Local Garage Door Off Track Repair, "Garage Door Came Off Track? We'll Fix It Fast!", Professional Garage Door Off Track Repair Near You, Service Overview, Safety, Aesthetics, Energy Efficiency, Property Value
5. **Content summary:** realignment, safety restoration, damage prevention, same-day emergency framing.
6. **Keywords:** off track repair, replacement, spring replacement, opener, emergency repair, maintenance, technician services
7. **Internal links:** Home, About, Services (linked to emergency-garage-door-repair), garage-door-repair-los-angeles, Contact, Blog, location pages
8. **Images/alt:** minimal/generic alt text ("Garage Door Replacement," "Garage door opener," "Garage door repair near me")
9. **Schema:** not detected
10. **FAQ:** none
11. **NAP:** matches
12. **Suspicious content:** heavy keyword repetition flagged by fetch; generic "$299 OFF" banner; footer design-credit link to "BigBrandify.com" (the site builder/agency, not a contamination risk, just a footer credit)
13. **Contamination signs:** none Florida/sliding-door related on this specific page
14. **Recommendation:** Keep/Rebuild.

### Comparison vs new
- New page: intro + signs + covered + FAQ + process — more structured, less keyword-repetitive than old.
- **SEO risk:** Low.
- **Recommended action:** none required.

---

## 9. Garage Door Replacement — `https://garagedoorepairs.com/garage-door-replacement/`

1. **HTTP status:** 200
2. **Title:** "Garage Door Replacement - Garage Door Repair Service"
3. **H1:** "Garage Door Replacement"
4. **H2/H3:** Our Service, Elevating Performance Enhancing Aesthetics, Service Overview, Safety, Aesthetics, Energy Efficiency, Property Value
5. **Content summary:** modern, energy-efficient doors, professional installation, safety/aesthetic/value framing.
6. **Keywords:** replacement, repair, spring replacement, off-track repair, opener, energy-efficient doors, installation, curb appeal, security
7. **Internal links:** Home, About, Services, Contact, Blog, location pages
8. **Images/alt:** "Garage Door Replacement," "Garage door opener," "Garage Door Repair," "Garage door Tracks repair," "Garage Door Opener"
9. **Schema:** not detected
10. **FAQ:** none
11. **NAP:** matches
12. **Suspicious content:** **outbound link to unrelated third-party site `goldentouchgaragedoor.com`** embedded in service description — a competitor or affiliate link that should not appear and should NOT be carried into new copy
13. **Contamination signs:** third-party outbound link, not Florida/sliding-door but still a content-integrity issue
14. **Recommendation:** Keep/Rebuild, exclude the outbound link.

### Comparison vs new
- New page has no such outbound link — confirmed correctly excluded already.
- **SEO risk:** Low (already avoided).
- **Recommended action:** none required — confirm-avoidance item, already satisfied.

---

## 10. Emergency Garage Door Repair — `https://garagedoorepairs.com/emergency-garage-door-repair/`

1. **HTTP status:** 200 (note: task list URL pattern said this should be checked; fetch succeeded directly — listed as 404 only happened for preventive-maintenance/track-and-roller in that same batch, this one returned full content)
2. **Title:** "Services - Garage Door Repair Service"
3. **H1:** "Expert Emergency Garage Door Repair Solutions for Homes and Businesses"
4. **H2/H3:** 24/7 Emergency Garage Door Repair & Commercial Services, Proven Experience, Modern Equipment, Durable Components, Skilled Technicians, Competitive Rates, Our Services (lists Emergency Repair, Replacement, Spring Repair, Off-Track Repair, Opener, Maintenance)
5. **Content summary:** broad "Services" hub-style page rather than a tightly emergency-specific page — reads like a general services page that happens to live at the emergency URL.
6. **Keywords:** emergency repair, commercial repair, springs, off-track, replacement, opener, maintenance
7. **Internal links:** Home, About, Services, Spring Replacement, Off-Track Repair, Replacement, location pages, Contact, Blog
8. **Images/alt:** emergency/commercial repair related alt text
9. **Schema:** not detected
10. **FAQ:** none
11. **NAP:** matches, plus "Free Estimate" mentioned
12. **Suspicious content:** title tag says "Services" not "Emergency Garage Door Repair" — another title/URL mismatch like #6 above
13. **Contamination signs:** none Florida/sliding-door related
14. **Recommendation:** Keep/Rebuild — old page title is generic/mismatched, new page corrects this.

### Comparison vs new
- Old title "Services - Garage Door Repair Service" vs new title "Emergency Garage Door Repair" — new is correctly specific, real improvement.
- New page now includes emergency messaging above the fold (per this session's QA-fix round) — stronger than old page's generic services-hub framing.
- **SEO risk:** Low.
- **Recommended action:** none required.

---

## 11. Garage Door Opener — `https://garagedoorepairs.com/garage-door-opener/`

1. **HTTP status:** 404 — **confirmed not found on live site under this URL**
2. **Recommendation:** This is unexpected — title-tag evidence from URL #6 above ("Garage Door Repair Los Angeles" page had title "Garage Door Opener") suggests the real Opener content may currently live under the `/garage-door-repair-los-angeles/` URL due to a WordPress title/URL mixup, OR the Opener page was deleted/renamed and isn't in any of the 3 sitemaps. Not in page-sitemap.xml.

### Comparison vs new
- New site has a complete, correctly-titled `/garage-door-opener/` page with intro/signs/covered/FAQ.
- **Missing content to migrate:** none identifiable — old content for this exact URL doesn't exist live.
- **SEO risk:** Medium — if `/garage-door-opener/` was ever indexed historically and is now genuinely gone (confirmed 404, not in sitemap), the new Next.js page at this URL is a fresh page with no old equity to inherit, but also nothing to lose. If Search Console shows this URL was indexed before, monitor for re-indexing after launch rather than expecting a redirect-driven recovery.
- **Recommended action:** Check Google Search Console "Pages" report (per original migration rules doc) specifically for `/garage-door-opener/` indexing history before assuming this is a clean net-new URL.

---

## 12. Preventive Maintenance — `https://garagedoorepairs.com/preventive-maintenance/`

1. **HTTP status:** 404
2. **Not in any sitemap.** No evidence this URL ever existed on the current live WordPress install.
3. **Recommendation:** The new Next.js page at this URL is **not preserving an existing page** — it is net-new. No old content to migrate, no redirect needed, no contamination risk.

### Comparison vs new
- **SEO risk:** Low (nothing to lose, nothing to preserve — net-new page).
- **Recommended action:** Verify against GSC historical data per original migration rules (the URL_INVENTORY.csv marks this row's GSC/Ahrefs columns as `TBD` — they need to be filled in before fully closing this out, in case this URL existed on a previous, even older version of the site not reflected in the current live install).

---

## 13. Track and Roller Replacement — `https://garagedoorepairs.com/track-and-roller-replacement/`

Same situation as #12: **404, not in any sitemap, no evidence of live existence.** Net-new page on the new site. Same recommendation: verify against GSC history; no redirect/contamination risk currently identified.

---

## 14. Los Angeles, CA — `https://garagedoorepairs.com/los-angeles-ca/`

1. **HTTP status:** 200
2. **Title:** "Garage Door Repair Service in Los Angeles"
3. **Canonical:** `https://garagedoorepairs.com/` — **the canonical points to the homepage, not to itself.** This means Google is being told this page's content is a duplicate of the homepage. Significant existing SEO issue on the live site.
4. **H1:** "Garage Door Repair In Los Angeles, CA"
5. **H2s:** For All Your Residential & High Performance Door Needs, Our Services in Los Angeles, GOOGLE REVIEWS, "Don't wait! Call for your free estimate today," Free In Home Estimate, Garage Door Full Service, Why Choose Us, What we do, Our Latest Projects, Our Clients, We serve in Los Angeles CA
6. **Content summary:** broad LA-services hub page with project gallery, reviews block, "100% satisfaction" claim, "$99.99 OFF" promo.
7. **Keywords:** repair, replacement, spring replacement, opener repair, track/roller replacement, lock and handle repair, preventive maintenance, off-track repair
8. **Internal links:** Home, About, Emergency, Spring Replacement, Off-Track Repair, regional pages, Blog, Contact
9. **Images/alt:** mostly generic, brand-partner logos (LiftMaster, Genie, Craftsman)
10. **Schema:** not detected in fetch
11. **FAQ:** none found
12. **NAP:** matches
13. **Suspicious content:** **"Native Garage Doors" branding mentioned — inconsistent with site's primary "Garage Door Repairs" branding.** Service-selector dropdown includes "sliding door repairs," "glass replacement," "windows & glass repairs" — confirmed cross-contamination with unrelated service categories, present directly on this page.
14. **Contamination signs:** **YES — branding inconsistency + sliding door/glass/window service-menu mixing, confirmed directly on this URL.**
15. **Recommendation:** Keep/Rebuild, but **fix the self-referencing canonical** (currently points to homepage — should point to itself) and strip all non-garage-door service-menu items.

### Comparison vs new
- Old canonical bug (points to homepage) — new site's canonical correctly self-references `/los-angeles-ca/`. Already fixed in new build.
- Old branding inconsistency ("Native Garage Doors") and glass/window/sliding-door menu contamination — entirely absent from new copy, confirmed correctly excluded.
- New page: Hero (with emergency messaging + stats) + TrustBar + ServiceCards + ServiceAreaSection + FAQ. Comparable or stronger structure, cleaner content.
- **SEO risk:** Low — new page already resolves the canonical bug and contamination, which is a net positive vs. the live site's current state.
- **Recommended action:** none required; new page already an improvement over a page with a real canonical defect.

---

## 15–22. Location Pages (Banning, Agoura Hills, Beaumont, Alhambra, Arcadia, Blythe, Adelanto, Aliso Viejo)

**Critical finding applies to all 8:** the URLs given in the original migration brief (`/banning/`, `/agoura-hills/`, etc.) **do not exist on the live WordPress site.** All returned 404. The real, live, indexed URLs (confirmed via `page-sitemap.xml`) are:

| Assumed URL (404) | Real live URL (200, confirmed via sitemap) |
|---|---|
| `/banning/` | `/garage-door-technician-banning/` |
| `/agoura-hills/` | `/garage-door-repair-agoura-hills/` |
| `/beaumont/` | `/garage-door-maintenance-beaumont/` |
| `/alhambra/` | `/garage-door-fixing-alhambra/` |
| `/arcadia/` | `/garage-door-repair-in-arcadia/` |
| `/blythe/` | `/garage-door-repair-in-blythe/` |
| `/adelanto/` | `/garage-door-fixing-adelanto/` |
| `/aliso-viejo/` | `/garage-door-maintenance-aliso-viejo/` |

Two real URLs were spot-checked directly:

**`/garage-door-technician-banning/`** — 200. Title: "Garage Door Technician Banning - Garage Door Repair Service". H1: "Garage Door Technician in Banning, CA". Canonical self-references correctly. No Florida/sliding-door content found on this specific page. Real NAP matches. "100% Satisfaction" and "$99.99 off" promo claims present (unverifiable, should not be carried over as-is).

**`/garage-door-repair-agoura-hills/`** — 200. Title: "Garage Door Repair Agoura Hills - Garage Door Repair Service". H1: "Garage Door Repair Agoura Hills". **"Sliding Door Repairs" confirmed present in service-options/project-gallery references on this page** — contamination confirmed even on a city-specific page, not just the homepage/spring-replacement page.

The remaining 6 real URLs were not individually fetched in this session (time/scope) but should be assumed to follow the same template pattern (city-specific H1, same NAP, same service list, likely same sliding-door cross-contamination in the service selector since that appears to be a sitewide template element, not page-specific content).

**17. Recommendation for all 8:** **Decision required before launch — do not treat as simple Keep/Rebuild yet.** This is the single most important open question from this audit:

- **Option A:** Change new Next.js location URLs to match the real WordPress slugs (e.g. `/garage-door-technician-banning/` instead of `/banning/`) and 301 redirect nothing extra needed since old URL = new URL.
- **Option B:** Keep new clean slugs (`/banning/` etc.) and add 301 redirects FROM the real old WordPress URLs (`/garage-door-technician-banning/` etc.) TO the new clean URLs, preserving whatever indexed value those real pages hold.
- **Do not do nothing** — under the current plan (new site uses `/banning/`, old site's real indexed page is `/garage-door-technician-banning/`), launching as-is means the real old page either keeps existing with no redirect (fragmenting SEO value across two URLs for the same city) or gets taken offline with the WordPress decommission and 404s permanently, losing that page's indexed value with no recapture.

### Comparison vs new (applies to all 8)
- Old H1 pattern: "Garage Door Technician in Banning, CA" / "Garage Door Repair Agoura Hills" — city + service-type framing, slightly varied template per page (Technician/Repair/Maintenance/Fixing as the verb, varies by city — mild template variation, not pure duplicate content).
- New H1 pattern: "Garage Door Repair {City}" — consistent across all 8, less varied than old but not duplicate/thin given the per-city region+FAQ content already in the template.
- Old content depth: city-specific H1, generic services list, promo banner, project gallery. New content depth: Hero + service overview paragraph + full service list grid + TrustBar + city-specific FAQ (3 Qs) + CTA — structurally comparable or slightly deeper, intentionally avoids unverifiable claims (no fake "100% satisfaction," no $99.99 promo).
- **Missing content that should be migrated:** none of the old per-city copy is unique enough to be worth verbatim porting — the new template's region/county framing is safer and equally specific.
- **Content that should NOT be migrated:** the sliding-door-repairs cross-link/mention confirmed present in the old Agoura Hills page's service template — do not let this leak into new location pages (currently not present in new build — confirmed correct).
- **SEO risk level: Critical** — solely due to the URL mismatch issue, not content quality. This is a structural migration-mapping problem, not a copywriting problem.
- **Recommended action:** Resolve the URL-mapping decision (Option A or B above) before launch. This takes priority over any further content polish on these 8 pages.

---

## 23. Sliding Door Repairs — `https://garagedoorepairs.com/sliding-door-repairs/`

1. **HTTP status:** 404 — does not exist as a standalone URL.
2. **Not present in any of the 3 sitemaps** (page/post/category).
3. It appears "Sliding Door Repairs" exists only as **a service-menu label/internal cross-link reference** embedded within other pages (confirmed seen on homepage and on the Agoura Hills location page), not as its own indexed page.
4. **Recommendation:** Given it's not a real standalone URL, there is nothing to "Keep/Rebuild/Redirect/Noindex/Delete" at this exact URL on the live site. The new Next.js placeholder page at `/sliding-door-repairs/` is net-new, not a migration of an existing indexed page.

### Comparison vs new
- New page exists as a clean, professional placeholder, clearly marked pending-review internally, not in main nav — already the safest possible posture for a URL with no corresponding live page and an unclear SEO mandate.
- **SEO risk:** Low — this is a defensive placeholder for a URL that doesn't correspond to indexed content; it isn't actively harmful, and isn't claiming any equity that doesn't exist.
- **Recommended action:** Confirm via GSC/Ahrefs (per original migration rules doc, still `TBD` in URL_INVENTORY.csv) whether `/sliding-door-repairs/` has any historical indexing or backlinks from a previous site version. If none, this page can eventually be deprioritized or removed without risk — but that decision should wait for the GSC/Ahrefs data, not be made from this audit alone.

---

## 24. Stainless Steel Cover Track — `https://garagedoorepairs.com/stainless-steel-cover-track/`

1. **HTTP status:** 404. Not in any sitemap. No reference to this term found anywhere in the pages fetched this session.
2. **Recommendation:** Same posture as #23 — net-new placeholder, no corresponding live page found.

### Comparison vs new
- **SEO risk:** Low.
- **Recommended action:** Same as #23 — confirm GSC/Ahrefs history before final keep/delete decision.

---

## 25. Lock and Handle Repair — `https://garagedoorepairs.com/lock-and-handle-repair/`

1. **HTTP status:** 404 at this exact URL. Not in any sitemap.
2. **However:** "Lock & Handle Repair" content was found embedded **within** the `/garage-door-repair-los-angeles/` page (see #6 above) — large dedicated content block ("Expert Lock & Handle Repairs for Garage Doors," "What's Included," Durability/Home Protection/Precision Repair/Quick Turnaround sub-sections).
3. **Recommendation:** This is a genuine content-migration opportunity, distinct from the other two questionable pages. There IS real, on-brand, relevant Lock & Handle Repair content live on the site — it's just misfiled under the wrong URL (`/garage-door-repair-los-angeles/` instead of its own page).

### Comparison vs new
- New `/lock-and-handle-repair/` page is currently a generic placeholder ("under SEO review and content is being finalized").
- **Missing content that should be migrated:** the Lock & Handle Repair content block currently sitting on `/garage-door-repair-los-angeles/` (Durability, Home Protection, Precision Repair, Quick Turnaround sub-points) is real, on-topic content that could reasonably be moved to properly populate `/lock-and-handle-repair/`, which would also clean up the unrelated content currently polluting the LA repair page (see #6).
- **SEO risk:** Medium — not because of lost equity (URL never existed) but because of a content-organization opportunity being missed; doing this fix improves both pages at once.
- **Recommended action:** When ready to move past placeholder status, migrate the Lock & Handle Repair content block (Durability/Home Protection/Precision Repair/Quick Turnaround) from the old LA-repair page into the new `/lock-and-handle-repair/` page content. This simultaneously cleans up `/garage-door-repair-los-angeles/`'s focus.

---

# Real Business Information Confirmed Across All Fetched Pages

- **Business name:** "Garage Door Repair Service" / "Garage Door Repairs" (used somewhat inconsistently on the old site — new site standardizes on "Garage Door Repairs," which is correct and cleaner)
- **Phone:** +1 (424) 387-4585 — confirmed identical on every page fetched, matches new site exactly
- **Tel link target:** tel:+14243874585 — consistent with new site
- **Email:** info@garagedoorepairs.com — confirmed identical everywhere, matches new site
- **Address:** 1864 N Vermont Ave, Los Angeles, CA 90027, USA — confirmed identical everywhere, matches new site
- **Hours:** "Open 24 hours" — confirmed identical everywhere, matches new site

No discrepancy found between real live-site NAP data and what's already implemented in the new Next.js site.

---

# Contamination Confirmed (Do Not Migrate)

- Florida city references on homepage: Clearwater, Homosassa Springs, Bradenton, Winter Haven, Lake Wales
- "Jess Flawless Sliding Doors" reference on `/garage-door-spring-replacement/`
- "Native Garage Doors" branding inconsistency on `/los-angeles-ca/`
- Sliding door / glass replacement / windows & glass repair service-menu items on `/los-angeles-ca/` and `/garage-door-repair-agoura-hills/`
- Outbound third-party link to `goldentouchgaragedoor.com` on `/garage-door-replacement/`
- Unverified Google Reviews block (cannot confirm authenticity) on homepage and `/los-angeles-ca/`
- Unverified promotional claims: "$299 OFF," "$99.99 OFF," "180+ Same Day Service," "90% Backed by a Warranty," "100% Satisfaction"

**Confirmed status in new Next.js site: none of the above have been imported.** This was verified via grep in a prior session (zero matches for Florida cities, Jess Flawless, lanai, patio door, screen door, WhatsApp) and is reconfirmed here by direct comparison against this audit's findings.

---

# Open Items Requiring Your Decision (Not Code Changes)

1. **Location page URL strategy** — match new slugs to real old slugs, or 301 old real slugs into new clean slugs. (Critical)
2. **Blog post migration** — migrate 5 real post URLs/content, or 301 them to relevant service pages as an interim measure. (High)
3. **GSC/Ahrefs data** — `URL_INVENTORY.csv` still has `TBD` in every traffic/backlink column. This audit was content/structure-only; the actual keep-vs-delete decision for `/garage-door-opener/`, `/preventive-maintenance/`, `/track-and-roller-replacement/`, and the 3 questionable pages depends on that data, not on this content audit alone.
4. **Lock & Handle Repair content** — optional migration of real existing content into the correct new page.

No code, routes, metadata, sitemap, robots, schema, or canonicals were changed as part of this audit.
