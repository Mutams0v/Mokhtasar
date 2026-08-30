import { Plane } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

export function ChinaTrip() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="china-trip" className="section-pad bg-primary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Plane size={26} strokeWidth={1.7} />
          </div>
          <p className="eyebrow mt-5">{t.chinaTrip.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-white md:text-4xl">{t.chinaTrip.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{t.chinaTrip.subtitle}</p>
          <p className="mt-3 inline-block rounded-full border border-accent/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent">
            {t.chinaTrip.durationNote}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-8 max-w-2xl rounded-sm border-s-2 border-accent bg-white/5 p-6 text-start">
          <p className="text-sm leading-relaxed text-white/80">{t.chinaTrip.note}</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.chinaTrip.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <div className="h-full rounded-sm border border-white/10 p-6 transition-colors hover:border-accent/50">
                <span className="font-heading text-2xl font-bold text-accent">{step.step}</span>
                <h3 className="font-heading mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <button type="button" onClick={scrollToContact} className="btn-primary">
            {t.chinaTrip.ctaText}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
