import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { InstagramIcon, XIcon, LinkedInIcon } from "./SocialIcons";

export function Footer() {
  const { t } = useLanguage();

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-secondary">
      <div className="container-x grid gap-10 py-16 md:grid-cols-4">
        <div>
          <div className="font-montserrat text-lg font-bold tracking-[0.15em] text-white">
            MOKHTASAR
          </div>
          <p className="mt-1 text-[0.65rem] tracking-[0.25em] text-white/50">
            FIT-OUT
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            {t.footer.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <InstagramIcon width={16} height={16} />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <XIcon width={16} height={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedInIcon width={16} height={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-accent">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-accent">
            {t.footer.contactInfo}
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{t.contact.phonePlaceholderValue}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{t.contact.emailPlaceholderValue}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{t.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-center gap-2 py-5 text-center text-xs text-white/40">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
