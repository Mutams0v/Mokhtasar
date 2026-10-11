import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

export function Audience() {
  const { t } = useLanguage();

  return (
    <section id="audience" className="bg-primary py-14">
      <div className="container-x grid items-center gap-8 md:grid-cols-[1fr_3fr]">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold text-white">{t.audience.title}</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {t.audience.segments.map((segment) => (
            <Reveal key={segment.title}>
              <div className="border-s-2 border-accent ps-4">
                <h3 className="font-heading text-base font-semibold text-white">{segment.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{segment.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
