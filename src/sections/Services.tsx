import { PenTool, Sofa, ChefHat, Lightbulb, Droplets, DoorOpen, SprayCan } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

const ICONS = [PenTool, Sofa, ChefHat, Lightbulb, Droplets, DoorOpen, SprayCan];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.services.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{t.services.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-sm border border-primary/10 bg-secondary p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <h3 className="font-heading mt-5 text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
