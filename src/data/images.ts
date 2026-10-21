/**
 * Illustrative images (Unsplash License: free for commercial use, no
 * attribution required). Sources are listed in /public/image-credits.txt.
 *
 * These are for mood and explanation only. Never use them in the Projects,
 * before/after or testimonials sections — those must be real Mokhtasar work.
 */
const img = (name: string) => `/images/${name}.webp`;

export const images = {
  hero: img("hero"),
  about: img("about"),
  whyChina: img("why-china"),
  warranty: [img("warranty-measuring"), img("warranty-tape")],
  specs: {
    windows: img("spec-windows"),
    doors: img("spec-doors"),
    kitchen: img("spec-kitchen"),
    skylight: img("spec-skylight"),
  } as Record<string, string>,
  paths: {
    visit: img("path-visit"),
    remote: img("path-remote"),
  } as Record<string, string>,
  finishing: {
    cabinetry: img("item-cabinetry"),
    doors: img("item-doors"),
    windows: img("item-windows"),
    skylight: img("item-skylight"),
    flooring: img("item-flooring"),
    sanitary: img("item-sanitary"),
    electrical: img("item-electrical"),
    lighting: img("item-lighting"),
    stairs: img("item-stairs"),
    outdoor: img("item-outdoor"),
    furniture: img("item-furniture"),
  } as Record<string, string>,
  library: {
    plywood: img("lib-plywood"),
    quartz: img("lib-quartz"),
    stainless: img("lib-stainless"),
    "thermal-break": img("lib-thermal-break"),
    glass: img("lib-glass"),
    wpc: img("lib-wpc"),
  } as Record<string, string>,
};
