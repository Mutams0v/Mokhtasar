import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

// Simplified, stylized Eastern Province map with an animated pulsing
// marker over Dammam (our primary focus city).
const CITY_POSITIONS: Record<string, { x: number; y: number }> = {
  "الدمام": { x: 46, y: 40 },
  Dammam: { x: 46, y: 40 },
  "الخبر": { x: 50, y: 48 },
  Khobar: { x: 50, y: 48 },
  "الظهران": { x: 44, y: 52 },
  Dhahran: { x: 44, y: 52 },
  "القطيف": { x: 40, y: 28 },
  Qatif: { x: 40, y: 28 },
  "الجبيل": { x: 34, y: 12 },
  Jubail: { x: 34, y: 12 },
  "الأحساء": { x: 68, y: 72 },
  "Al-Ahsa": { x: 68, y: 72 },
};

export function Coverage() {
  const { t } = useLanguage();
  const primaryCity = t.coverage.cities[0];

  return (
    <section id="coverage" className="section-pad bg-secondary-muted">
      <div className="container-x grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow">{t.coverage.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold leading-snug text-primary md:text-4xl">
            {t.coverage.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">{t.coverage.description}</p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {t.coverage.cities.map((city) => (
              <span
                key={city}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium ${
                  city === primaryCity
                    ? "border-accent bg-accent/10 text-accent-dark"
                    : "border-primary/15 text-text-muted"
                }`}
              >
                {city}
                {city === primaryCity && (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[0.6rem] font-semibold text-white">
                    {t.coverage.primaryFocusBadge}
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-sm border border-primary/10 bg-secondary mx-auto">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <rect x="0" y="0" width="100" height="100" fill="var(--color-secondary-muted)" />
              <path
                d="M20 15 L75 10 L88 30 L80 65 L60 88 L25 82 L12 55 L18 30 Z"
                fill="var(--color-secondary)"
                stroke="var(--color-accent)"
                strokeOpacity="0.3"
                strokeWidth="0.6"
              />
              {t.coverage.cities.map((city) => {
                const pos = CITY_POSITIONS[city] ?? { x: 50, y: 50 };
                const isPrimary = city === primaryCity;
                return (
                  <g key={city}>
                    {isPrimary && (
                      <circle cx={pos.x} cy={pos.y} r="3" fill="var(--color-accent)" fillOpacity="0.25">
                        <animate attributeName="r" values="3;7;3" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                    )}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isPrimary ? 2.2 : 1.4}
                      fill={isPrimary ? "var(--color-accent)" : "var(--color-primary)"}
                      fillOpacity={isPrimary ? 1 : 0.4}
                    />
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
