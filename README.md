# LumenIA — Programmatic SEO Landing Pages

Three example landing pages for **LumenIA's programmatic SEO project**, built as a Vite + React + TypeScript + Tailwind v4 prototype.

Each landing follows the same template (one shared `LandingTemplate` driving every section) but is populated with **sector-specific dynamic content** — pain points, workflow, ROI numbers, integrations, case studies, FAQ — pulled from a typed data file per page.

## Live preview routes

The three pilot landings:

| Sector × Function | Route |
|---|---|
| **Ristorazione** × Prenotazioni WhatsApp 24/7 | `/soluzioni/ristorazione/prenotazioni-whatsapp` |
| **Edilizia** × Consuntivi vocali da cantiere | `/soluzioni/edilizia/preventivi-vocali` |
| **Vino & Horeca** × Inoltro fatture + report agenti | `/soluzioni/vino-horeca/intermediazione-ordini-clienti` |

Hub index: `/`

## Stack

- **Vite 8** + **React 19** + **TypeScript** + **React Router 7**
- **Tailwind v4** with `@tailwindcss/vite` plugin
- **Framer Motion 12** — spring physics, scroll-driven reveals, isolated `useInView`
- **@phosphor-icons/react** — duotone icons (no emojis per brand)
- **Work Sans** (body) + **Caladea** (display) — official LumenIA typefaces from brand kit
- Official palette: `brand-500 #FF9500`, `ink-900 #151718`, `ink-50 #F7F7F3`

## What's "programmatic" about it

- All pages share **10 reusable components** (`Hero`, `ChatMockup`, `PainPointsBlock`, `WorkflowBlock`, `GestionaliStrip`, `RoiBlock`, `CaseStudyBlock`, `PricingTeaser`, `FaqBlock`, `FinalCta`).
- Per-page content lives in a single `LandingData` object — see [`src/types.ts`](src/types.ts).
- Adding a new sector × function = a new `src/data/*.ts` file + one `<Route>` in `src/main.tsx`. ~30 lines of work.
- When porting to WordPress, each `data/*.ts` becomes a row in a Notion DB and a Python pipeline generates pages via WP REST API.

## Layout patterns applied

Following the `design-taste-frontend` rules: DESIGN_VARIANCE 8, MOTION_INTENSITY 6, VISUAL_DENSITY 4.

- Asymmetric hero (no centered headline) with phone mock tilted -2°
- Pain Points as **bento asimmetric**: 1 large dark card with hero stat + sparkline + 3 small light cards
- Workflow with floating step badges + dashed connector line
- ROI hierarchy: 1 hero metric ~96px + 3 secondary stacked
- Case study with giant decorative quote mark + hero metric
- Final CTA = mini-chat coherent with hero phone

## Local development

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # production build to dist/
```

## Brand assets

- Logo as React component: [`src/components/LumeniaLogo.tsx`](src/components/LumeniaLogo.tsx)
- PNG variants in [`public/brand/`](public/brand/) (Brandmark Yellow/White/Black + Logo Natural/White)
- Palette + typefaces from the official Lumenia brand kit on Drive

## Status

Pilot prototype to validate visual direction and content patterns before porting to WordPress. The 30-page production rollout is documented in the approved programmatic SEO plan.
