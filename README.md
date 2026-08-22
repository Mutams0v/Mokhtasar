# Mokhtasar | Fit-Out — Marketing Website

A bilingual (Arabic/English) marketing site for Mokhtasar Fit-Out, a luxury
residential interior fit-out company based in Dammam, Eastern Province,
Saudi Arabia.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, CSS-based `@theme` tokens)
- Framer Motion for scroll reveals and micro-interactions
- lucide-react for iconography
- A custom React Context i18n layer (`src/i18n`) — no external i18n library

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
  components/       shared UI (Header, Footer, SmartImage, Reveal, ui/*)
  data/             centralized image URLs
  hooks/            scroll-spy / scroll-position hooks
  i18n/             LanguageContext + full AR/EN translation dictionary
  sections/         one component per landing-page section
```

## Sections (in page order)

Hero → About → Services → Finishing List → Process → China Sourcing Trip →
Products → Why Us → FAQ → Who We Serve → Coverage → Contact → Footer

## Language & RTL

The site defaults to Arabic (RTL) and toggles to English (LTR) via the
language switcher in the header. Direction is applied to
`<html dir lang>` and persisted to `localStorage`. All layout uses Tailwind
logical properties (`ps-`, `pe-`, `start-`, `end-`) so it mirrors correctly
in both directions.

## Deployment

This is a static Vite build — `npm run build` outputs a `dist/` folder that
can be deployed to any static host (GitHub Pages, Netlify, Vercel, etc.).
