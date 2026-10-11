import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { AccordionItem } from "../components/ui/Accordion";
import { features } from "../data/site";

type CategoryKey = "pricing" | "quality" | "trip" | "delivery";
const CATEGORY_ORDER: CategoryKey[] = ["pricing", "quality", "trip", "delivery"];

export function FAQ() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return t.faq.items.filter((item) => {
      if (item.id === "q4" && !features.shippingBreakageConfirmed) return false;
      const matchesCategory = activeCategory === "all" || item.categoryKey === activeCategory;
      const matchesQuery =
        !q || item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [t.faq.items, activeCategory, query]);

  return (
    <section id="faq" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-primary md:text-4xl">{t.faq.title}</h2>
                  </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl">
          <div className="relative">
            <Search size={18} className="pointer-events-none absolute top-1/2 start-4 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.faq.searchPlaceholder}
              className="w-full rounded-full border border-primary/15 bg-secondary py-3 ps-11 pe-5 text-sm text-primary placeholder:text-text-muted/60 outline-none transition-colors focus:border-accent"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 flex flex-wrap justify-center gap-2.5">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
              activeCategory === "all"
                ? "border-primary bg-primary text-white"
                : "border-primary/15 text-text-muted hover:border-accent/50"
            }`}
          >
            {t.faq.allLabel}
          </button>
          {CATEGORY_ORDER.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                activeCategory === key
                  ? "border-primary bg-primary text-white"
                  : "border-primary/15 text-text-muted hover:border-accent/50"
              }`}
            >
              {t.faq.categories[key]}
            </button>
          ))}
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={Math.min(i * 0.04, 0.3)}>
              <AccordionItem
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
              />
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-text-muted">{t.faq.empty}</p>
          )}
        </div>
      </div>
    </section>
  );
}
