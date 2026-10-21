import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AppWindow, ChefHat, DoorOpen, Sun } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

const ICONS: Record<string, typeof DoorOpen> = {
  windows: AppWindow,
  doors: DoorOpen,
  kitchen: ChefHat,
  skylight: Sun,
};

type Mode = "market" | "us";

export function SpecCompare() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<Mode>("market");
  const reduce = useReducedMotion();

  return (
    <section id="specs" className="section-pad bg-primary">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.specs.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold text-white md:text-5xl">{t.specs.title}</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label={t.specs.eyebrow}
            className="relative grid grid-cols-2 rounded-full border border-white/15 p-1"
          >
            {(["market", "us"] as const).map((m) => {
              const active = mode === m;
              return (
                <button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setMode(m)}
                  className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:px-10 ${
                    active ? (m === "us" ? "text-primary" : "text-primary") : "text-white/70 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="spec-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${m === "us" ? "bg-accent" : "bg-white"}`}
                      transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
                    />
                  )}
                  {m === "market" ? t.specs.toggleMarket : t.specs.toggleUs}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
          {t.specs.items.map((item) => {
            const Icon = ICONS[item.id] ?? DoorOpen;
            const lines = mode === "market" ? item.market : item.us;
            return (
              <div key={item.id} className="min-h-[15rem] bg-primary">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <SmartImage
                    src={images.specs[item.id] ?? images.hero}
                    alt={item.title}
                    className={`h-full w-full object-cover transition-[filter,opacity] duration-500 ${
                      mode === "us" ? "opacity-100" : "opacity-60 grayscale"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                </div>
                <div className="px-7 pb-7 md:px-9 md:pb-9">
                <div className="flex items-center gap-3">
                  <Icon size={22} strokeWidth={1.6} className={mode === "us" ? "text-accent" : "text-white/50"} />
                  <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.ul
                    key={mode}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-6 space-y-3"
                  >
                    {lines.map((line) => (
                      <li
                        key={line}
                        className={`flex items-start gap-3 text-sm leading-relaxed md:text-base ${
                          mode === "us" ? "text-white" : "text-white/55"
                        }`}
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${mode === "us" ? "bg-accent" : "bg-white/30"}`}
                        />
                        {line}
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-white/50">{t.specs.note}</p>
      </div>
    </section>
  );
}
