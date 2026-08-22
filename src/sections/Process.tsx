import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-pad bg-secondary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.process.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{t.process.subtitle}</p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="absolute inset-x-0 top-8 hidden h-px bg-primary/10 md:block" />
          {t.process.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-secondary font-heading text-xl font-bold text-accent">
                {step.step}
              </div>
              <h3 className="font-heading mt-5 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
