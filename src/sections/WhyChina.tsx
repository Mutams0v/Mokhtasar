import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

export function WhyChina() {
  const { t } = useLanguage();

  return (
    <section id="why-china" className="section-pad bg-secondary-muted">
      <div className="container-x grid gap-12 md:grid-cols-[2fr_3fr] md:gap-20">
        <Reveal>
          <p className="eyebrow">{t.whyChina.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold leading-snug text-primary md:text-4xl">
            {t.whyChina.title}
          </h2>
          <div className="gold-line mt-6" />
        </Reveal>

        <div className="divide-y divide-primary/10 border-y border-primary/10">
          {t.whyChina.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.05}>
              <div className="grid gap-2 py-6 sm:grid-cols-[1fr_1.6fr] sm:gap-8">
                <h3 className="font-heading text-lg font-semibold text-primary">{point.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted md:text-base">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
