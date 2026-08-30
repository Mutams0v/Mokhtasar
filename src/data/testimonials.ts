export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  project?: string;
  quote: string;
}

// Empty until real client testimonials are supplied — the Testimonials
// section hides itself entirely while this array is empty (see
// src/sections/Testimonials.tsx).
export const testimonials: Testimonial[] = [];
