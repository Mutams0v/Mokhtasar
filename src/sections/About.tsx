import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad bg-secondary">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <SmartImage
              src={images.about}
              alt="Mokhtasar Fit-Out team"
              label="Mokhtasar Fit-Out"
              className="aspect-[4/5] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-6 start-6 grid w-[calc(100%-3rem)] grid-cols-3 divide-x rtl:divide-x-reverse divide-white/10 rounded-sm bg-primary px-4 py-6 shadow-xl sm:start-8 sm:w-auto sm:px-8">
              {t.about.stats.map((stat) => (
                <div key={stat.label} className="px-2 text-center">
                  <div className="font-heading text-2xl font-bold text-accent sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[0.65rem] leading-tight text-white/60 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow mb-3">{t.about.eyebrow}</p>
          <div className="gold-line mb-5" />
          <h2 className="font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 leading-relaxed text-text-muted">{t.about.story}</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                {t.about.visionTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{t.about.vision}</p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
                {t.about.missionTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{t.about.mission}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-accent">
              {t.about.valuesTitle}
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
              {t.about.values.map((value) => (
                <span key={value} className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle2 size={16} className="text-accent" />
                  {value}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
