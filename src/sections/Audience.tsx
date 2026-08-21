import { Crown, Building2, Hotel, TrendingUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

const ICONS = [Crown, Building2, Hotel, TrendingUp];

export function Audience() {
  const { t } = useLanguage();

  return (
    <section id="audience" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center">{t.audience.eyebrow}</p>
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            {t.audience.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.audience.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-sm bg-secondary p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 text-accent">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
