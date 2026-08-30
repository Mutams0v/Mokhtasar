import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { site } from "../data/site";

const PHONE_RE = /^(\+?9665|05)\d{8}$|^\+?\d{8,14}$/;

interface FormState {
  clientType: string;
  propertyType: string;
  area: string;
  scope: string[];
  readiness: string;
  notes: string;
  name: string;
  phone: string;
  botcheck: string;
}

const EMPTY: FormState = {
  clientType: "",
  propertyType: "",
  area: "",
  scope: [],
  readiness: "",
  notes: "",
  name: "",
  phone: "",
  botcheck: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const toggleScope = (option: string) => {
    setForm((f) => ({
      ...f,
      scope: f.scope.includes(option) ? f.scope.filter((s) => s !== option) : [...f.scope, option],
    }));
    setErrors((e) => ({ ...e, scope: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.clientType) next.clientType = t.contact.errorRequired;
    if (!form.propertyType) next.propertyType = t.contact.errorRequired;
    if (!form.area) next.area = t.contact.errorRequired;
    if (form.scope.length === 0) next.scope = t.contact.errorRequired;
    if (!form.readiness) next.readiness = t.contact.errorRequired;
    if (!form.name.trim()) next.name = t.contact.errorRequired;
    if (!form.phone.trim()) next.phone = t.contact.errorRequired;
    else if (!PHONE_RE.test(form.phone.replace(/\s/g, ""))) next.phone = t.contact.errorPhone;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot: if a bot filled this hidden field, quietly drop the submission.
    if (form.botcheck) {
      setStatus("success");
      setForm(EMPTY);
      return;
    }

    if (!validate()) return;
    setStatus("submitting");

    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: site.formAccessKey,
          subject: "طلب جديد من موقع مختصر",
          language: lang,
          client_type: form.clientType,
          property_type: form.propertyType,
          area: form.area,
          scope: form.scope.join(", "),
          readiness: form.readiness,
          notes: form.notes,
          name: form.name,
          phone: form.phone,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(EMPTY);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.whatsapp.message)}`;

  const inputClass =
    "w-full rounded-sm border border-primary/15 bg-secondary px-4 py-3 text-sm text-primary placeholder:text-text-muted/60 outline-none transition-colors focus:border-accent";
  const labelClass = "mb-1.5 block text-xs font-medium text-text-muted";

  const selectField = (
    id: string,
    label: string,
    value: string,
    options: readonly string[],
    onChange: (v: string) => void,
    error?: string,
  ) => (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass}>
        <option value="">{t.contact.selectPlaceholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );

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
              <a href={`tel:+${site.whatsapp}`} className="transition-colors hover:text-primary" dir="ltr">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary" dir="ltr">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{t.contact.address}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-sm border border-accent/30 bg-accent/5 p-10 text-center">
              <CheckCircle2 size={40} className="text-accent" />
              <p className="mt-4 text-base font-medium text-primary">{t.contact.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Honeypot — hidden from real users, catches simple bots */}
              <input
                type="text"
                name="botcheck"
                value={form.botcheck}
                onChange={(e) => update("botcheck", e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {selectField(
                  "clientType",
                  t.contact.clientTypeLabel,
                  form.clientType,
                  t.contact.clientTypeOptions,
                  (v) => update("clientType", v),
                  errors.clientType,
                )}
                {selectField(
                  "propertyType",
                  t.contact.propertyTypeLabel,
                  form.propertyType,
                  t.contact.propertyTypeOptions,
                  (v) => update("propertyType", v),
                  errors.propertyType,
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {selectField(
                  "area",
                  t.contact.areaLabel,
                  form.area,
                  t.contact.areaOptions,
                  (v) => update("area", v),
                  errors.area,
                )}
                {selectField(
                  "readiness",
                  t.contact.readinessLabel,
                  form.readiness,
                  t.contact.readinessOptions,
                  (v) => update("readiness", v),
                  errors.readiness,
                )}
              </div>

              <div>
                <span className={labelClass}>{t.contact.scopeLabel}</span>
                <div className="flex flex-wrap gap-2">
                  {t.contact.scopeOptions.map((opt) => {
                    const checked = form.scope.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleScope(opt)}
                        aria-pressed={checked}
                        className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                          checked
                            ? "border-accent bg-accent text-white"
                            : "border-primary/15 text-text-muted hover:border-accent/50"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {errors.scope && <p className="mt-1 text-xs text-red-500">{errors.scope}</p>}
              </div>

              <div>
                <label htmlFor="notes" className={labelClass}>
                  {t.contact.notesLabel}
                </label>
                <textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder={t.contact.notesPlaceholder}
                  rows={3}
                  className={inputClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder={t.contact.phonePlaceholder}
                    className={inputClass}
                    dir="ltr"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {status === "error" && (
                <div className="flex items-start gap-2.5 rounded-sm border border-red-200 bg-red-50 p-3.5 text-sm text-red-600">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p>{t.contact.errorMessage}</p>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-semibold underline"
                    >
                      {t.contact.whatsappFallback}
                    </a>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status === "submitting" ? t.contact.submitting : t.contact.submitButton}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
