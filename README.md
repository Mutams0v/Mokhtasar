# Mokhtasar | Fit-Out

Marketing web app for Mokhtasar Fit-Out — a single-execution luxury
residential fit-out company based in Dammam, Eastern Province, Saudi Arabia.
Covers palaces, villas, apartments, and hotels/serviced apartments from
measurement survey to key handover.

## Tech Stack

- **React 19 + TypeScript** — component architecture, strict typing
- **Vite** — dev server & build tooling
- **Tailwind CSS v4** — utility-first styling (via `@tailwindcss/vite`, no
  separate config file needed — theme tokens live in `src/index.css`)
- **Framer Motion** — scroll-triggered fade/slide-in animations
- **lucide-react** — icon set (a few social/brand marks are hand-drawn SVGs
  in `src/components/SocialIcons.tsx`, since lucide dropped brand icons)

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
npm run lint       # oxlint
```

## Project Structure

```
src/
  components/       Header, Footer, LanguageSwitcher, Reveal (scroll-fade
                     wrapper), SmartImage (image w/ graceful fallback),
                     SocialIcons (hand-drawn Instagram/X/LinkedIn marks)
  sections/         One file per landing-page section (Hero, About,
                     Services, Process, Products, WhyUs, Audience,
                     Coverage, Contact)
  i18n/
    translations.ts   All AR + EN copy, one object per language
    LanguageContext.tsx  React context providing t (current translations),
                          lang, toggleLang() — also flips <html dir>/<lang>
  hooks/            useScrollSpy (active nav section), useScrolled (header
                     background swap on scroll)
  data/images.ts    Central place for the Unsplash placeholder image URLs
  App.tsx           Assembles all sections inside LanguageProvider
  index.css         Tailwind v4 import + design tokens (@theme) + a few
                     hand-rolled utility classes (.btn-primary, .container-x, …)
```

## Bilingual / RTL Support

- Arabic is the default language; a globe button in the header toggles
  AR ⇄ EN and updates `<html lang>` / `<html dir>` live.
- The choice is remembered in `localStorage` between visits.
- Layout uses Tailwind's logical properties (`ps-`, `pe-`, `start-`, `end-`,
  etc.) so it mirrors correctly in both directions instead of needing
  separate RTL/LTR stylesheets.
- Headings switch font family automatically with the language (Cairo for
  Arabic, Montserrat for English) via the `.font-heading` utility in
  `index.css`; the "MOKHTASAR" brand wordmark always stays in Montserrat.

## Images

All photography is **Unsplash placeholder imagery** (see `src/data/images.ts`)
standing in for real project photos — replace these URLs (or swap in your
own hosted images / a proper asset pipeline) before going live. Every image
goes through `<SmartImage>`, which shows an on-brand gradient placeholder
with a label instead of a broken-image icon if a URL ever fails to load, so
the layout never looks broken even before real photography is in place.

The Products section deliberately never claims these are the company's own
completed work — copy always reads "sample products available" per the
brief, since there is no project gallery yet.

## Contact Form

The form in the Contact section validates client-side (required name +
phone, phone-format and email-format checks) and currently **simulates**
submission with a short delay before showing the success state — there is
no backend wired up yet. To make it live, replace the `window.setTimeout`
block in `src/sections/Contact.tsx`'s `handleSubmit` with a real call
(e.g. POST to your CRM / a serverless function / an email API).

**Before launch, fill in the real contact details** — search for
`[أدخل رقم الجوال هنا]` / `[Enter phone number here]` and the matching email
placeholder in `src/i18n/translations.ts` (`contact.phonePlaceholderValue`,
`contact.emailPlaceholderValue`) and swap in the real WhatsApp/phone number
and email address. The same values also feed the footer.

## SEO

`index.html` includes descriptive `<title>`, `<meta name="description">`,
Open Graph and Twitter card tags in Arabic (the default locale). Update the
`og:image` / social preview image once real photography exists.

## Notes

- No project gallery exists by design (the brief explicitly scopes this
  company to custom, made-to-measure work — "no showroom, every project is
  custom to the client's exact measurements").
- Restaurants and offices are handled by the company commercially but are
  intentionally **not** shown in this app, per the brief.
