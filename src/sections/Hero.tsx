import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
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
          alt="Luxury villa interior"
          label="Luxury Villa Interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      <div className="container-x relative z-10 pt-24 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-5"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl font-heading text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl"
        >
          {t.hero.title}
          <span className="block text-accent">{t.hero.titleLine2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button type="button" onClick={() => scrollTo("contact")} className="btn-primary">
            {t.hero.ctaPrimary}
            <Arrow size={18} />
          </button>
          <button type="button" onClick={() => scrollTo("services")} className="btn-secondary">
            {t.hero.ctaSecondary}
          </button>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo("about")}
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 start-1/2 z-10 -translate-x-1/2 text-white/70 hover:text-accent"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  );
}
