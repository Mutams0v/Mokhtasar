import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad bg-secondary">
      <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-sm">
            <SmartImage
              src={images.about}
              alt={t.about.title}
              className="h-[420px] w-full object-cover md:h-[520px]"
              label="About"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold leading-snug text-primary md:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            {t.about.description}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-primary/10 pt-8">
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
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
