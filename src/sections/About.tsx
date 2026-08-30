import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad bg-secondary">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2 className="font-heading mt-3 text-3xl font-bold leading-snug text-primary md:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted">{t.about.description}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-sm border-s-2 border-accent bg-secondary-muted p-6 text-start">
              <p className="eyebrow">{t.about.goalLabel}</p>
              <p className="mt-2 text-base leading-relaxed text-primary/80">{t.about.goalText}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-primary/10 pt-8">
            {t.about.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-2xl font-bold text-accent md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
