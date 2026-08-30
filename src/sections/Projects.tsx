import { MapPin, Ruler, Clock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SmartImage } from "../components/SmartImage";
import { projects } from "../data/projects";

/**
 * Hidden entirely until real project data is added to src/data/projects.ts —
 * no empty state, no "coming soon" placeholder card.
 */
export function Projects() {
  const { t } = useLanguage();

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="section-pad bg-secondary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.projects.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{t.projects.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08}>
              <div className="group overflow-hidden rounded-sm bg-secondary-muted shadow-sm">
                <div className="h-56 overflow-hidden">
                  <SmartImage
                    src={project.coverImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    label={project.title}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-primary">{project.title}</h3>
                  <div className="mt-3 space-y-1.5 text-xs text-text-muted">
                    <p className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" /> {project.location}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Ruler size={14} className="text-accent" /> {project.area}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Clock size={14} className="text-accent" /> {project.duration}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.scope.map((s) => (
                      <span key={s} className="rounded-full bg-accent/10 px-2.5 py-1 text-[0.65rem] text-accent-dark">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
