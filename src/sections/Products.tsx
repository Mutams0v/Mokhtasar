import {
  Sofa,
  ChefHat,
  Lightbulb,
  Package,
  DoorOpen,
  AppWindow,
  GlassWater,
  Layers,
  Droplets,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { PlaceholderImage } from "../components/PlaceholderImage";

const ICONS = [Sofa, ChefHat, Lightbulb, Package, DoorOpen, AppWindow, GlassWater, Layers, Droplets];

export function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.products.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.products.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{t.products.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {t.products.categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={cat.title} delay={(i % 5) * 0.06}>
                <div className="group overflow-hidden rounded-sm bg-secondary shadow-sm">
                  <div className="h-44 overflow-hidden">
                    <PlaceholderImage
                      icon={Icon}
                      label={cat.title}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-semibold text-primary">{cat.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{cat.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
