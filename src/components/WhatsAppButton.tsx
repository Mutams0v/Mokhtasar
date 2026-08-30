import { MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { site } from "../data/site";

/**
 * Fixed floating WhatsApp button — the primary conversion path on this
 * site (more so than the contact form). Always visible, on every screen
 * size, above all other content.
 */
export function WhatsAppButton() {
  const { t } = useLanguage();
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.ariaLabel}
      className="fixed bottom-5 left-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle size={28} strokeWidth={2} />
    </a>
  );
}
