export interface Project {
  id: string;
  title: string;
  location: string;
  area: string;
  scope: string[];
  duration: string;
  coverImage: string;
  images: string[];
}

// Empty until real project data is supplied — the Projects section hides
// itself entirely while this array is empty (see src/sections/Projects.tsx).
export const projects: Project[] = [];
