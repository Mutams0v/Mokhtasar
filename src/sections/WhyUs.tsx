import { Users, Eye, ShieldCheck, Ruler, KeySquare, MapPinned } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

const ICONS = [Users, Eye, ShieldCheck, Ruler, KeySquare, MapPinned];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section-pad bg-primary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center">{t.whyUs.eyebrow}</p>
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.whyUs.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.title} delay={i * 0.07} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
