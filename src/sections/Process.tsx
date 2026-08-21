import { MapPin, Compass, PackageSearch, Hammer, Sofa, KeyRound } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

const ICONS = [MapPin, Compass, PackageSearch, Hammer, Sofa, KeyRound];

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center">{t.process.eyebrow}</p>
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">{t.process.subtitle}</p>
        </Reveal>

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative grid grid-cols-6 gap-4">
            <div className="absolute inset-x-0 top-8 h-px bg-primary/15" />
            {t.process.steps.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={step.title} delay={i * 0.1} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-secondary-muted text-accent">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <span className="mt-4 font-heading text-xs font-bold text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 font-heading text-sm font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">{step.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="relative mt-14 space-y-8 lg:hidden">
          <div className="absolute top-2 bottom-2 start-8 w-px bg-primary/15" />
          {t.process.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={step.title} delay={i * 0.06} className="relative flex items-start gap-5 ps-0">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-secondary-muted text-accent">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <div className="pt-2">
                  <span className="font-heading text-xs font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-1 font-heading text-base font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
