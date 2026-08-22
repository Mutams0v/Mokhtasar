// Centralized Unsplash placeholder images.
// These are stand-ins only — replace with real project photos when available.
// Each SmartImage gracefully falls back to an on-brand placeholder if a URL ever fails to load.

const unsplash = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const images = {
  hero: unsplash("photo-1600607687939-ce8a6c25118c", 2000, 80),
  about: unsplash("photo-1618219908412-a0158e8c9b4a", 1400, 80),
  services: unsplash("photo-1616486338812-3dadae4b4ace", 1200, 75),
  process: unsplash("photo-1600210492493-0946911123ea", 1400, 75),
  products: {
    furniture: unsplash("photo-1567538096630-e0c55bd6374c", 1000, 75),
    kitchen: unsplash("photo-1556911220-e15b29be8c8f", 1000, 75),
    chandelier: unsplash("photo-1524758631624-e2822e304c36", 1000, 75),
    appliances: unsplash("photo-1556909212-d5b604d0c90d", 1000, 75),
  },
  audience: unsplash("photo-1613977257363-707ba9348227", 1000, 75),
};
