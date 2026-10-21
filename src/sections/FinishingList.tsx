import { useState } from "react";
import {
  AppWindow,
  ChefHat,
  DoorOpen,
  Droplets,
  Fence,
  Layers,
  LayoutGrid,
  Lightbulb,
  Plug,
  Sofa,
  Sun,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { Modal } from "../components/ui/Modal";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";
import { scrollToId } from "../lib/scroll";

const ICONS: Record<string, typeof DoorOpen> = {
  cabinetry: ChefHat,
  doors: DoorOpen,
  windows: AppWindow,
  skylight: Sun,
  flooring: LayoutGrid,
  sanitary: Droplets,
  electrical: Plug,
  lighting: Lightbulb,
  stairs: Layers,
  outdoor: Fence,
  furniture: Sofa,
};

export function FinishingList() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = t.finishing.items.find((item) => item.id === activeId) ?? null;

  return (
    <section id="finishing" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.finishing.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.finishing.title}</h2>
          <p className="mt-4 text-base text-text-muted">{t.finishing.subtitle}</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {t.finishing.items.map((item, i) => {
            const Icon = ICONS[item.id] ?? DoorOpen;
            return (
              <Reveal key={item.id} delay={Math.min(i, 6) * 0.04}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="group block w-full overflow-hidden rounded-sm border border-primary/10 bg-secondary text-start transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary-muted">
                    {images.finishing[item.id] && (
                      <SmartImage
                        src={images.finishing[item.id]}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-3 md:px-4">
                    <Icon size={16} strokeWidth={1.6} className="shrink-0 text-accent" />
                    <span className="text-sm font-semibold text-primary transition-colors group-hover:text-accent-dark">
                      {item.title}
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
          <Reveal delay={0.24}>
            <button
              type="button"
              onClick={() => scrollToId("measure")}
              className="flex h-full min-h-[10rem] w-full flex-col justify-end rounded-sm bg-primary p-4 text-start transition-colors hover:bg-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:p-5"
            >
              <span className="font-heading text-lg font-bold text-white">{t.finishing.askTitle}</span>
              <span className="mt-1 text-sm text-white/70">{t.finishing.askText}</span>
            </button>
          </Reveal>
        </div>
      </div>

      <Modal isOpen={!!activeItem} onClose={() => setActiveId(null)} title={activeItem?.title}>
        {activeItem && (
          <ul className="space-y-2.5">
            {activeItem.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2.5 text-sm text-primary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </section>
  );
}
