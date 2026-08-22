import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

const PHONE_RE = /^(\+?9665|05)\d{8}$|^\+?\d{8,14}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormState {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

const EMPTY: FormState = { name: "", phone: "", email: "", projectType: "", message: "" };

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = t.contact.errorRequired;
    if (!form.phone.trim()) next.phone = t.contact.errorRequired;
    else if (!PHONE_RE.test(form.phone.replace(/\s/g, ""))) next.phone = t.contact.errorPhone;
    if (!form.email.trim()) next.email = t.contact.errorRequired;
    else if (!EMAIL_RE.test(form.email.trim())) next.email = t.contact.errorEmail;
    if (!form.projectType) next.projectType = t.contact.errorRequired;
    if (!form.message.trim()) next.message = t.contact.errorRequired;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(EMPTY);
    }, 900);
  };

  const inputClass =
    "w-full rounded-sm border border-primary/15 bg-secondary px-4 py-3 text-sm text-primary placeholder:text-text-muted/60 outline-none transition-colors focus:border-accent";

  return (
    <section id="contact" className="section-pad bg-secondary">
      <div className="container-x grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold leading-snug text-primary md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{t.contact.subtitle}</p>

          <ul className="mt-10 space-y-4 text-sm text-text-muted">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{t.contact.phonePlaceholderValue}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{t.contact.emailPlaceholderValue}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{t.contact.address}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-sm border border-accent/30 bg-accent/5 p-10 text-center">
              <CheckCircle2 size={40} className="text-accent" />
              <p className="mt-4 text-base font-medium text-primary">{t.contact.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-muted">{t.contact.nameLabel}</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                  className={inputClass}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-text-muted">{t.contact.phoneLabel}</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder={t.contact.phonePlaceholder}
                    className={inputClass}
                    dir="ltr"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-text-muted">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    className={inputClass}
                    dir="ltr"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-muted">{t.contact.projectTypeLabel}</label>
                <select
                  value={form.projectType}
                  onChange={(e) => update("projectType", e.target.value)}
                  className={inputClass}
                >
                  <option value="">—</option>
                  {t.contact.projectTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.projectType && <p className="mt-1 text-xs text-red-500">{errors.projectType}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-text-muted">{t.contact.messageLabel}</label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  rows={4}
                  className={inputClass}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
                {submitting ? t.contact.submitting : t.contact.submitButton}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
