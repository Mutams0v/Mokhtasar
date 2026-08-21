import { Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

interface LanguageSwitcherProps {
  dark?: boolean;
}

export function LanguageSwitcher({ dark = false }: LanguageSwitcherProps) {
  const { t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
        dark
          ? "border-primary/20 text-primary hover:bg-primary hover:text-secondary"
          : "border-white/30 text-white hover:bg-white hover:text-primary"
      }`}
      aria-label="Toggle language"
    >
      <Globe size={14} />
      {t.meta.langLabel}
    </button>
  );
}
