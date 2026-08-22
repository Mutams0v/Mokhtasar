import { ShieldCheck, Users, Eye, CalendarCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

const ICONS = [ShieldCheck, Users, Eye, CalendarCheck];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-pad bg-primary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.whyUs.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-white md:text-4xl">{t.whyUs.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyUs.reasons.map((reason, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={reason.title} delay={i * 0.08}>
                <div className="h-full rounded-sm border border-white/10 p-7 transition-colors hover:border-accent/50">
                  <Icon size={28} strokeWidth={1.6} className="text-accent" />
                  <h3 className="font-heading mt-5 text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">{reason.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
