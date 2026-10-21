import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useScrolled } from "../hooks/useScrolled";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SECTION_IDS = ["home", "about", "specs", "how", "warranty", "library", "faq", "measure"];

export function Header() {
  const { t } = useLanguage();
  const scrolled = useScrolled(30);
  const activeId = useScrollSpy(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: string; label: string }[] = [
    { id: "about", label: t.nav.about },
    { id: "specs", label: t.nav.specs },
    { id: "how", label: t.nav.howWeWork },
    { id: "warranty", label: t.nav.warranty },
    { id: "library", label: t.nav.library },
    { id: "faq", label: t.nav.faq },
  ];

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const isDark = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isDark ? "bg-secondary/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          aria-label="Mokhtasar Fit-Out"
          className={`flex items-center gap-3 font-montserrat text-lg font-bold tracking-[0.15em] transition-colors ${
            isDark ? "text-primary" : "text-white"
          }`}
        >
          <img src="/brand/mark-gold.png" alt="" aria-hidden className="h-9 w-auto" />
          <span className="text-start">
            MOKHTASAR
            <span className={`block text-[0.6rem] font-normal tracking-[0.25em] ${isDark ? "text-text-muted" : "text-white/70"}`}>
              FIT-OUT
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`relative whitespace-nowrap text-sm font-medium transition-colors ${
                isDark ? "text-primary/80 hover:text-accent" : "text-white/90 hover:text-white"
              } ${activeId === item.id ? (isDark ? "text-accent" : "text-white") : ""}`}
            >
              {item.label}
              {activeId === item.id && (
                <span className="absolute -bottom-1.5 start-0 h-[2px] w-full bg-accent" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher dark={isDark} />
          <button
            type="button"
            onClick={() => handleNavClick("measure")}
            className="btn-primary text-sm"
          >
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher dark={isDark} />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
            className={isDark ? "text-primary" : "text-white"}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-primary/10 bg-secondary lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`rounded px-2 py-3 text-start text-sm font-medium transition-colors ${
                  activeId === item.id ? "text-accent" : "text-primary/80"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("measure")}
              className="btn-primary mt-2 text-sm"
            >
              {t.nav.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
