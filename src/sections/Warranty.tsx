import { PackageCheck, Ruler, SearchCheck, Wrench } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { features } from "../data/site";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

const ICONS: Record<string, typeof Wrench> = {
  maintenance: Wrench,
  inspection: SearchCheck,
  breakage: PackageCheck,
  measurements: Ruler,
};

export function Warranty() {
  const { t } = useLanguage();
  const items = t.warranty.items.filter((item) => item.id !== "breakage" || features.shippingBreakageConfirmed);

  return (
    <section id="warranty" className="section-pad bg-secondary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.warranty.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.warranty.title}</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <SmartImage
            src={images.warranty}
            alt={t.warranty.imageAlt}
            className="mx-auto mt-12 h-48 w-full max-w-5xl rounded-sm object-cover md:h-64"
          />
        </Reveal>

        <div
          className={`mx-auto mt-6 grid max-w-5xl gap-px overflow-hidden border border-primary/10 bg-primary/10 sm:grid-cols-2 ${
            items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {items.map((item) => {
            const Icon = ICONS[item.id] ?? Wrench;
            return (
              <div key={item.id} className="bg-secondary p-7">
                <Icon size={24} strokeWidth={1.5} className="text-accent" />
                <h3 className="font-heading mt-4 text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
