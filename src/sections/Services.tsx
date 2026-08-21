import { PenTool, Sofa, ChefHat, Lightbulb, Droplets, SprayCan } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

const ICONS = [PenTool, Sofa, ChefHat, Lightbulb, Droplets, SprayCan];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-pad bg-primary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center">{t.services.eyebrow}</p>
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">{t.services.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="group h-full rounded-sm border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">{service.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
