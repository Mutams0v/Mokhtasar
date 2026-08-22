import { useState } from "react";
import {
  DoorOpen,
  AppWindow,
  Lock,
  Droplets,
  GlassWater,
  LayoutGrid,
  PaintBucket,
  Layers,
  Sparkles,
  Package,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { Modal } from "../components/ui/Modal";

const ICONS: Record<string, typeof DoorOpen> = {
  doors: DoorOpen,
  windows: AppWindow,
  locks: Lock,
  sanitary: Droplets,
  "aluminum-glass": GlassWater,
  flooring: LayoutGrid,
  walls: PaintBucket,
  ceilings: Layers,
  accessories: Sparkles,
  cabinetry: Package,
};

export function FinishingList() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = t.finishingList.items.find((item) => item.id === activeId) ?? null;

  return (
    <section id="finishing-list" className="section-pad bg-secondary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.finishingList.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">
            {t.finishingList.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{t.finishingList.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {t.finishingList.items.map((item, i) => {
            const Icon = ICONS[item.id] ?? Package;
            return (
              <Reveal key={item.id} delay={(i % 5) * 0.06}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="group relative flex h-full w-full flex-col items-center gap-3 overflow-hidden rounded-xl border border-[rgba(201,169,98,0.2)] bg-secondary p-6 text-center shadow-[0_4px_20px_rgba(26,26,26,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(26,26,26,0.1)]"
                >
                  <span className="absolute inset-x-0 top-0 h-[3px] scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-primary">{item.title}</h3>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Modal isOpen={!!activeItem} onClose={() => setActiveId(null)} title={activeItem?.title}>
        {activeItem && (
          <div>
            <p className="text-sm leading-relaxed text-text-muted">{activeItem.shortDesc}</p>
            <ul className="mt-5 space-y-2.5">
              {activeItem.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2.5 text-sm text-primary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </section>
  );
}
