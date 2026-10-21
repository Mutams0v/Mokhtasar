import { Monitor, Plane } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { scrollToId } from "../lib/scroll";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

const ICONS: Record<string, typeof Plane> = { visit: Plane, remote: Monitor };

export function Paths() {
  const { t } = useLanguage();

  return (
    <section id="how" className="section-pad bg-secondary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.paths.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.paths.title}</h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {t.paths.items.map((path, i) => {
            const Icon = ICONS[path.id] ?? Plane;
            return (
              <Reveal key={path.id} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden border border-primary/10 bg-secondary-muted">
                  {images.paths[path.id] && (
                    <SmartImage
                      src={images.paths[path.id]}
                      alt={path.title}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-7 md:p-9">
                  <Icon size={26} strokeWidth={1.5} className="text-accent" />
                  <h3 className="font-heading mt-5 text-2xl font-bold text-primary">{path.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">{path.description}</p>

                  {path.trip.length > 0 && (
                    <div className="mt-6 flex overflow-hidden rounded-sm border border-primary/10 text-xs">
                      {path.trip.map((seg, j) => (
                        <div
                          key={seg.label}
                          className={`p-3 ${j === 0 ? "flex-[7] bg-primary text-white" : "flex-[3] bg-accent/15 text-primary"}`}
                        >
                          <p className="font-semibold">{seg.label}</p>
                          <p className={`mt-1 ${j === 0 ? "text-white/70" : "text-primary/70"}`}>{seg.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {path.extra && <p className="mt-4 text-sm text-primary/80">{path.extra}</p>}

                  <div className="mt-auto pt-7">
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent("mokhtasar:path", { detail: i }));
                        scrollToId("measure");
                      }}
                      className="text-sm font-semibold text-accent-dark underline-offset-4 hover:underline"
                    >
                      {t.paths.choose}
                    </button>
                  </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Journey />
      </div>
    </section>
  );
}

function Journey() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto mt-20 max-w-5xl">
      <Reveal>
        <h3 className="font-heading text-center text-2xl font-bold text-primary md:text-3xl">{t.journey.title}</h3>
      </Reveal>

      <ol className="relative mt-10 grid gap-0 md:grid-cols-7">
        {t.journey.steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-4 pb-8 md:block md:pb-0 md:text-center">
            {/* connector */}
            <span
              aria-hidden
              className="absolute top-9 bottom-0 start-[1.1rem] w-px bg-primary/25 md:top-[1.1rem] md:bottom-auto md:start-1/2 md:h-px md:w-full"
              style={{ display: i === t.journey.steps.length - 1 ? "none" : undefined }}
            />
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-secondary font-heading text-sm font-bold text-accent-dark md:mx-auto">
              {i + 1}
            </span>
            <div className="md:mt-4 md:px-1">
              <p className="font-heading text-base font-semibold text-primary">{step.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-text-muted">{step.description}</p>
              {step.duration && (
                <p className="mt-2 inline-block rounded-full bg-accent/15 px-2.5 py-1 text-[0.7rem] font-semibold text-accent-dark">
                  {step.duration}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-center text-sm font-medium text-primary/80">{t.journey.total}</p>
    </div>
  );
}
