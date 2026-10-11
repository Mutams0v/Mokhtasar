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

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {t.finishing.items.map((item) => {
            const Icon = ICONS[item.id] ?? DoorOpen;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="flex items-center gap-2.5 rounded-full border border-primary/15 bg-secondary px-5 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <Icon size={18} strokeWidth={1.6} className="text-accent" />
                {item.title}
              </button>
            );
          })}
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
