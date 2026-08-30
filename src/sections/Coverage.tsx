import { MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

export function Coverage() {
  const { t } = useLanguage();

  return (
    <section id="coverage" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.coverage.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold leading-snug text-primary md:text-4xl">
            {t.coverage.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{t.coverage.description}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          {t.coverage.regions.map((region, i) => (
            <Reveal key={region.name} delay={i * 0.1}>
              <div
                className={`h-full rounded-sm border p-7 text-center ${
                  i === 0 ? "border-accent bg-accent/5" : "border-primary/10 bg-secondary"
                }`}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin size={22} strokeWidth={1.7} />
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <h3 className="font-heading text-lg font-semibold text-primary">{region.name}</h3>
                  {i === 0 && (
                    <span className="rounded-full bg-accent px-2 py-0.5 text-[0.6rem] font-semibold text-white">
                      {t.coverage.primaryFocusBadge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{region.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
