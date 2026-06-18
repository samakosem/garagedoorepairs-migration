@# Claude Instructions — garagedoorepairs.com

This is a critical SEO migration project for https://garagedoorepairs.com/.

The current website is WordPress. The new website is being rebuilt in Next.js.

This is not a normal redesign. This is an SEO migration where preserving existing SEO value is the highest priority.

## Main Goal

Build a premium, unique, fast, high-converting Next.js website for Garage Door Repair Los Angeles while protecting:

- Existing URLs
- Indexed pages
- Backlinks
- Rankings
- Domain authority
- SEO content
- Internal linking value

## Primary Keyword

Garage Door Repair Los Angeles

## Important Rule

Do not delete, rename, merge, or change existing URLs unless there is a confirmed 301 redirect decision.

Before changing any route, check the migration files in the parent project:

- ../docs/SEO_MIGRATION_RULES.md
- ../exports/URL_INVENTORY.csv
- ../redirect-map/REDIRECT_MAP.csv

## URLs That Must Be Preserved / Rebuilt

- /
- /about-us/
- /contact-us/
- /blog/
- /garage-door-repair/
- /garage-door-repair-los-angeles/
- /garage-door-spring-replacement/
- /garage-door-off-track-repair/
- /garage-door-replacement/
- /emergency-garage-door-repair/
- /garage-door-opener/
- /preventive-maintenance/
- /track-and-roller-replacement/
- /los-angeles-ca/

## Existing Location Pages To Review

- /banning/
- /agoura-hills/
- /beaumont/
- /alhambra/
- /arcadia/
- /blythe/
- /adelanto/
- /aliso-viejo/

## Questionable Pages

Do not delete these without review:

- /sliding-door-repairs/
- /stainless-steel-cover-track/
- /lock-and-handle-repair/

They may be sliding door related. They need SEO review before Keep / 301 / Noindex / Delete.

## Technical SEO Requirements

The site must include:

- Next.js App Router
- Server-rendered SEO pages
- Unique metadata per page
- Canonical tags
- XML sitemap
- robots.txt
- LocalBusiness schema
- Service schema
- FAQ schema where relevant
- Breadcrumb schema
- Clean H1/H2/H3 structure
- One H1 per page
- Internal links between service and location pages
- Optimized images
- Mobile-first design
- Fast Core Web Vitals
- Sticky mobile click-to-call CTA
- Noindex for thank-you, admin, test, staging, and private pages

## Design Direction

Create a premium, unique, modern Los Angeles garage door repair brand.

The design should feel:

- Professional
- Local
- Trustworthy
- Emergency-service focused
- Fast
- High-end
- Conversion-focused

Avoid generic contractor templates.

## Forbidden

Do not:

- Change important URLs without 301 redirects
- Delete pages without SEO review
- Build SPA-only SEO pages
- Remove SEO copy
- Replace SEO pages with thin generic content
- Add heavy animations that hurt performance
- Create fake locations
- Create duplicate thin city pages
- Forget metadata, schema, canonicals, sitemap, robots, or internal links

## Development Rule

Before making major changes, explain the plan.

After making changes, run:

npm run build

Do not leave TypeScript errors, lint errors, or broken routes.
