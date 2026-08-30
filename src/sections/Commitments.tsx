import { Award, CalendarClock, ClipboardCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

const ICONS = [Award, CalendarClock, ClipboardCheck];

export function Commitments() {
  const { t } = useLanguage();

  return (
    <section id="commitments" className="section-pad bg-secondary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.commitments.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">
            {t.commitments.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {t.commitments.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-sm border border-primary/10 bg-secondary-muted p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
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
