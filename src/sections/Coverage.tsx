import { MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

// Approximate relative positions for a stylized, non-geographic map of the
// Eastern Province + Riyadh, purely illustrative (not to scale).
const CITY_POSITIONS: Record<string, { x: number; y: number }> = {
  الدمام: { x: 68, y: 42 },
  Dammam: { x: 68, y: 42 },
  الخبر: { x: 74, y: 52 },
  Khobar: { x: 74, y: 52 },
  الظهران: { x: 70, y: 58 },
  Dhahran: { x: 70, y: 58 },
  القطيف: { x: 62, y: 28 },
  Qatif: { x: 62, y: 28 },
  الرياض: { x: 22, y: 70 },
  Riyadh: { x: 22, y: 70 },
};

export function Coverage() {
  const { t } = useLanguage();

  return (
    <section id="coverage" className="section-pad bg-primary">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-3">{t.coverage.eyebrow}</p>
          <div className="gold-line mb-5" />
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            {t.coverage.title}
          </h2>
          <p className="mt-5 leading-relaxed text-white/60">{t.coverage.subtitle}</p>

          <ul className="mt-8 space-y-3">
            {t.coverage.cities.map((city) => (
              <li key={city.name} className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className={city.primary ? "text-accent" : "text-white/40"}
                  fill={city.primary ? "currentColor" : "none"}
                />
                <span className={city.primary ? "font-semibold text-white" : "text-white/70"}>
                  {city.name}
                </span>
                {city.primary && (
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-accent">
                    {t.coverage.primaryFocusBadge}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-relaxed text-white/40">{t.coverage.note}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-white/10 bg-white/[0.03]">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
              <path
                d="M20,68 Q40,20 65,25 Q85,35 78,55 Q72,68 60,72 Q35,80 20,68 Z"
                fill="rgba(201,169,98,0.06)"
                stroke="rgba(201,169,98,0.25)"
                strokeWidth="0.6"
              />
              {t.coverage.cities.map((city) => {
                const pos = CITY_POSITIONS[city.name] ?? { x: 50, y: 50 };
                return (
                  <g key={city.name}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={city.primary ? 2.6 : 1.6}
                      fill={city.primary ? "#C9A962" : "rgba(255,255,255,0.5)"}
                    />
                    {city.primary && (
                      <circle cx={pos.x} cy={pos.y} r="5" fill="none" stroke="#C9A962" strokeWidth="0.5">
                        <animate attributeName="r" values="3;7;3" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <text
                      x={pos.x}
                      y={pos.y - 4}
                      fontSize="3.2"
                      textAnchor="middle"
                      fill={city.primary ? "#C9A962" : "rgba(255,255,255,0.55)"}
                      fontFamily="Montserrat, sans-serif"
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
