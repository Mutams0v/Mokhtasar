import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SmartImage } from "../components/SmartImage";
import { images } from "../data/images";

export function Hero() {
  const { t, lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <SmartImage
          src={images.hero}
          alt="Mokhtasar Fit-Out"
          className="h-full w-full object-cover opacity-50"
          label="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
      </div>

      <div className="container-x relative z-10 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          {t.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button type="button" onClick={() => scrollTo("contact")} className="btn-primary">
            {t.hero.ctaPrimary}
            <Arrow size={18} />
          </button>
          <button type="button" onClick={() => scrollTo("products")} className="btn-secondary">
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-16 flex max-w-md items-center justify-center gap-10 border-t border-white/15 pt-8"
        >
          <div>
            <p className="font-heading text-3xl font-bold text-accent">{t.hero.badgeYears}</p>
            <p className="mt-1 text-xs tracking-wide text-white/60">{t.hero.badgeYearsLabel}</p>
          </div>
          <div className="h-10 w-px bg-white/15" />
          <div>
            <p className="font-heading text-3xl font-bold text-accent">{t.hero.badgeProjects}</p>
            <p className="mt-1 text-xs tracking-wide text-white/60">{t.hero.badgeProjectsLabel}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
