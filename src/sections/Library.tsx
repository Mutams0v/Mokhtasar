import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { Modal } from "../components/ui/Modal";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

export function Library() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = t.library.items.find((i) => i.id === activeId) ?? null;

  return (
    <section id="library" className="section-pad bg-secondary">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t.library.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.library.title}</h2>
        </Reveal>

        <div className="mt-10 grid border-t border-primary/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.library.items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className="group flex flex-col items-start gap-2 border-b border-primary/10 py-7 text-start transition-colors sm:pe-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {images.library[item.id] && (
                <SmartImage
                  src={images.library[item.id]}
                  alt=""
                  className="mb-3 aspect-[4/3] w-full rounded-sm object-cover transition-opacity group-hover:opacity-90"
                />
              )}
              <span className="text-xs font-medium text-text-muted">{item.summary}</span>
              <span className="font-heading text-xl font-semibold text-primary transition-colors group-hover:text-accent-dark">
                {item.title}
              </span>
              <span className="mt-1 text-sm font-semibold text-accent-dark">{t.library.readMore}</span>
            </button>
          ))}
        </div>
      </div>

      <Modal isOpen={!!active} onClose={() => setActiveId(null)} title={active?.title}>
        {active && (
          <div className="space-y-3">
            {active.body.map((p) => (
              <p key={p} className="text-sm leading-loose text-primary/85">
                {p}
              </p>
            ))}
          </div>
        )}
      </Modal>
    </section>
  );
}
