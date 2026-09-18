# Abadi Makmur Aluminium

Production-oriented marketing website for **Abadi Makmur Aluminium (CV Kristian Abadi)**, focused on aluminium & glass fabrication/installation in Tangerang.

## Stack
- Next.js 15 + React 19 + TypeScript
- Framer Motion for scroll/micro-interactions
- Headless WordPress REST API for articles
- Static export (`out/`) so the marketing site can be deployed to standard shared hosting/CDN
- CSS-first design system with no heavy UI framework

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Production configuration
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: defaults to the verified business WhatsApp `628131909449`; override only if the number changes.
- `NEXT_PUBLIC_SITE_URL`: final canonical website origin.
- `WORDPRESS_API_URL`: WordPress site origin or full `/wp-json/wp/v2` REST base.

Business address currently used by the website:
`Jl. H. Buang, RT/RW 03/03, Kelurahan Cipete, Kecamatan Pinang, Kota Tangerang`.

## WordPress article workflow
WordPress acts only as the CMS. The public article listing remains at `/artikel/` and detail pages remain at `/artikel/[slug]/`.

At build time the website reads published posts from the WordPress REST API, creates static article pages, and includes those slugs in the sitemap. When an article is published or updated, trigger a new website build/deployment so the static export receives the latest CMS content.

## SEO focus
Dedicated routes target:
- pintu aluminium Tangerang
- jendela aluminium Tangerang
- kusen aluminium Tangerang
- partisi kaca Tangerang
- shower box Tangerang

The service hub lives at `/layanan/`, with SEO detail pages at `/layanan/[slug]/`.

## Asset policy
Visual references use Unsplash-hosted photography selected for relevant aluminium/glass architecture contexts. Replace reference imagery with genuine project photography as soon as final project documentation is available so the portfolio reflects completed work accurately.

## Deployment
Run `npm run build`. The static site is generated in `out/` and can be uploaded to a static host or shared-hosting public web root.

## Dependency security

The project keeps Next.js on the current 15.5 maintenance line and overrides its nested PostCSS dependency to `8.5.24`, which includes the 2026 PostCSS security fixes. CI runs `npm run audit:prod` before type-check and build, so high-severity production dependency regressions fail the quality gate.

`npm fund` only lists sponsorship links for open-source dependencies; it is informational and not a vulnerability report. Install-time funding notices are disabled through `.npmrc`.
