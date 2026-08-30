import { Quote } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { testimonials } from "../data/testimonials";

/**
 * Hidden entirely until real client testimonials are added to
 * src/data/testimonials.ts — no empty state, no placeholder quotes.
 */
export function Testimonials() {
  const { t } = useLanguage();

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.testimonials.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{t.testimonials.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-sm border border-primary/10 bg-secondary p-7">
                <Quote size={24} className="text-accent/60" />
                <p className="mt-4 text-sm leading-relaxed text-primary/80">{item.quote}</p>
                <div className="mt-5 border-t border-primary/10 pt-4">
                  <p className="font-heading text-sm font-semibold text-primary">{item.name}</p>
                  {(item.role || item.project) && (
                    <p className="mt-0.5 text-xs text-text-muted">
                      {[item.role, item.project].filter(Boolean).join(" — ")}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
