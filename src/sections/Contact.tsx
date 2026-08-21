import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";

interface FormState {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  city: string;
  area: string;
  serviceType: string;
  budget: string;
  notes: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  city: "",
  area: "",
  serviceType: "",
  budget: "",
  notes: "",
};

const PHONE_RE = /^(\+?9665|05)\d{8}$|^\+?\d{8,14}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { t } = useLanguage();
  const f = t.contact.form;

  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = f.required;
    if (!form.phone.trim()) next.phone = f.required;
    else if (!PHONE_RE.test(form.phone.replace(/[\s-]/g, ""))) next.phone = f.invalidPhone;
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim())) next.email = f.invalidEmail;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulated submission — wire this up to your backend / email service / CRM.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  };

  const inputClass = (hasError?: string) =>
    `w-full rounded-sm border bg-secondary px-4 py-3 text-sm text-primary placeholder:text-text-muted/60 transition-colors focus:outline-none focus:ring-1 focus:ring-accent ${
      hasError ? "border-red-400" : "border-primary/15 focus:border-accent"
    }`;

  return (
    <section id="contact" className="section-pad bg-secondary-muted">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 justify-center">{t.contact.eyebrow}</p>
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-heading text-3xl font-bold text-primary sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-sm bg-secondary p-6 shadow-sm sm:p-9">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle2 size={52} className="text-accent" strokeWidth={1.4} />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-primary">
                    {t.contact.successTitle}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{t.contact.successMsg}</p>
                  <button type="button" onClick={resetForm} className="btn-primary mt-7 text-sm">
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.name} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder={f.namePlaceholder}
                      className={inputClass(errors.name)}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.phone} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder={f.phonePlaceholder}
                      className={inputClass(errors.phone)}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.email}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder={f.emailPlaceholder}
                      className={inputClass(errors.email)}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.propertyType}
                    </label>
                    <select
                      value={form.propertyType}
                      onChange={update("propertyType")}
                      className={inputClass()}
                    >
                      <option value="">{f.selectOption}</option>
                      {f.propertyOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.city}
                    </label>
                    <select value={form.city} onChange={update("city")} className={inputClass()}>
                      <option value="">{f.selectOption}</option>
                      {f.cityOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.area}
                    </label>
                    <input
                      type="text"
                      value={form.area}
                      onChange={update("area")}
                      placeholder={f.areaPlaceholder}
                      className={inputClass()}
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.serviceType}
                    </label>
                    <select
                      value={form.serviceType}
                      onChange={update("serviceType")}
                      className={inputClass()}
                    >
                      <option value="">{f.selectOption}</option>
                      {f.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.budget}
                    </label>
                    <input
                      type="text"
                      value={form.budget}
                      onChange={update("budget")}
                      placeholder={f.budgetPlaceholder}
                      className={inputClass()}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-primary">
                      {f.notes}
                    </label>
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={update("notes")}
                      placeholder={f.notesPlaceholder}
                      className={`${inputClass()} resize-none`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          {f.submitting}
                        </>
                      ) : (
                        f.submit
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="h-full rounded-sm bg-primary p-8 text-white">
              <h3 className="font-heading text-lg font-semibold">{t.contact.infoTitle}</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="text-xs text-white/50">{t.contact.phoneLabel}</div>
                    <div className="mt-0.5 text-sm text-white/90">
                      {t.contact.phonePlaceholderValue}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="text-xs text-white/50">{t.contact.emailLabel}</div>
                    <div className="mt-0.5 text-sm text-white/90">
                      {t.contact.emailPlaceholderValue}
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="text-xs text-white/50">{t.contact.addressLabel}</div>
                    <div className="mt-0.5 text-sm text-white/90">{t.contact.address}</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <div className="text-xs text-white/50">{t.contact.hoursLabel}</div>
                    <div className="mt-0.5 text-sm text-white/90">{t.contact.hours}</div>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
