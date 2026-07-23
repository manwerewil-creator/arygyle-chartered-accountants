# Arygyle Chartered Accountants Zimbabwe

Official marketing website for **Arygyle Chartered Accountants Zimbabwe (Private) Limited** — an affordable, professionally qualified accountancy practice in Harare offering fast company formation (PBC & PLC), ZIMRA tax clearance, VAT & fiscalisation, capital gains tax advisory, monthly retainers and auditing services.

> _"No business is too small. Consult Professional Accountants at an affordable price."_

## Tech stack

- **React 19** + **TypeScript**
- **Vite 6** build tooling
- **Tailwind CSS v4** design tokens
- **Motion** (Framer Motion) for page transitions, scroll reveals, text & counter animations
- **lucide-react** icons

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deployment

Deployed on **Vercel** (Vite preset, output `dist/`). Configuration lives in [`vercel.json`](vercel.json). Pushes to `main` trigger automatic production deployments.

## Project structure

```
src/
  components/        Header, Footer, WhatsApp widget, modals
  components/motion/ Reusable animation primitives (Reveal, TextReveal, Counter, Magnetic, Marquee, ScrollProgress)
  views/             Home, About, Services, Pricing, Contact, FAQ
  data/firmData.ts   Single source of truth for all firm content & pricing
```
