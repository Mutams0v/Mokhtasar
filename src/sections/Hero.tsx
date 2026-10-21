import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { scrollToId } from "../lib/scroll";
import { images } from "../data/images";

export function Hero() {
  const { t, lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;


  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary" />
      </div>

      <div className="container-x relative z-10 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mx-auto max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl"
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
          <button type="button" onClick={() => scrollToId("measure")} className="btn-primary">
            {t.hero.ctaPrimary}
            <Arrow size={18} />
          </button>
          <button type="button" onClick={() => scrollToId("specs")} className="btn-secondary">
            {t.hero.ctaSecondary}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
