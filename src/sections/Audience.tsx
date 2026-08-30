import { Users } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { PlaceholderImage } from "../components/PlaceholderImage";

export function Audience() {
  const { t } = useLanguage();

  return (
    <section id="audience" className="section-pad bg-secondary">
      <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow">{t.audience.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold leading-snug text-primary md:text-4xl">
            {t.audience.title}
          </h2>

          <div className="mt-8 space-y-5">
            {t.audience.segments.map((segment) => (
              <div key={segment.title} className="border-s-2 border-accent ps-4">
                <h3 className="font-heading text-base font-semibold text-primary">{segment.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{segment.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-sm">
            <PlaceholderImage
              icon={Users}
              label={t.audience.eyebrow}
              className="h-[420px] w-full md:h-[480px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
