import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

const IMAGE_KEYS: (keyof typeof images.products)[] = ["furniture", "kitchen", "chandelier", "appliances"];

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.products.categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-sm bg-secondary shadow-sm">
                <div className="h-56 overflow-hidden">
                  <SmartImage
                    src={images.products[IMAGE_KEYS[i % IMAGE_KEYS.length]]}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    label={cat.title}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-primary">{cat.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{cat.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
