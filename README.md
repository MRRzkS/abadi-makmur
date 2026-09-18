# Abadi Makmur Aluminium

Production-oriented marketing website for **Abadi Makmur Aluminium (CV Kristian Abadi)**, focused on aluminium & glass fabrication/installation in Tangerang.

## Stack
- Next.js 15 + React 19 + TypeScript
- Framer Motion for scroll/micro-interactions
- Static export (`out/`) so the marketing site can be deployed to standard shared hosting/CDN
- CSS-first design system with no heavy UI framework

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Required production configuration
Set these before production build:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: business WhatsApp number in international digits only.
- `NEXT_PUBLIC_SITE_URL`: final canonical website origin.

## SEO focus
Dedicated static service routes target:
- pintu aluminium Tangerang
- jendela aluminium Tangerang
- kusen aluminium Tangerang
- partisi kaca Tangerang
- shower box Tangerang

## Asset policy
Visual references use Unsplash-hosted photography selected for relevant aluminium/glass architecture contexts. Unsplash states its images can be used for commercial and non-commercial purposes under the Unsplash License. Replace reference imagery with genuine project photography as soon as final project documentation is available so the portfolio reflects completed work accurately.

## Deployment
Run `npm run build`. The static site is generated in `out/` and can be uploaded to a static host or shared-hosting public web root.
