import { Info } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

const CATEGORY_IMAGES = [
  images.products.furniture,
  images.products.kitchen,
  images.products.chandelier,
  images.products.appliances,
];

export function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="section-pad bg-secondary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center">{t.products.eyebrow}</p>
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            {t.products.title}
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">{t.products.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.products.categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-sm">
                <SmartImage
                  src={CATEGORY_IMAGES[i]}
                  alt={cat.title}
                  label={cat.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-base font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-start gap-3 rounded-sm border border-accent/25 bg-accent/5 p-5">
            <Info size={20} className="mt-0.5 shrink-0 text-accent" />
            <p className="text-sm leading-relaxed text-primary/80">{t.products.disclaimer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
