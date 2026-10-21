import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  Armchair,
  BedDouble,
  Briefcase,
  House,
  UtensilsCrossed,
  AppWindow,
  Check,
  ChefHat,
  DoorOpen,
  Droplets,
  Fence,
  LayoutGrid,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plug,
  Shirt,
  Sofa,
  Sun,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "../components/Reveal";
import { site } from "../data/site";

const ITEM_ICONS: Record<string, typeof DoorOpen> = {
  kitchen: ChefHat,
  wardrobes: Shirt,
  doors: DoorOpen,
  windows: AppWindow,
  skylight: Sun,
  flooring: LayoutGrid,
  sanitary: Droplets,
  electrical: Plug,
  lighting: Lightbulb,
  outdoor: Fence,
  furniture: Sofa,
  living: Sofa,
  majlis: Armchair,
  bedrooms: BedDouble,
  dining: UtensilsCrossed,
  office: Briefcase,
  whole: House,
};

const PHONE_RE = /^(\+?9665|05)\d{8}$|^\+?\d{8,14}$/;

interface FormState {
  kind: string;
  items: string[];
  city: string;
  property: string;
  stage: string;
  path: string;
  doors: string;
  windows: string;
  kitchen: string;
  timing: string;
  notes: string;
  name: string;
  phone: string;
  botcheck: string;
}

const EMPTY: FormState = {
  kind: "measure",
  items: [],
  city: "",
  property: "",
  stage: "",
  path: "",
  doors: "",
  windows: "",
  kitchen: "",
  timing: "",
  notes: "",
  name: "",
  phone: "",
  botcheck: "",
};

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<keyof FormState, string>>;

function makeRef() {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `MK-${ymd}-${rand}`;
}

export function Measure() {
  const { t, lang } = useLanguage();
  const e = t.estimate;
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [ref, setRef] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  // "Choose this way" buttons in the Paths section pre-select the preferred path.
  useEffect(() => {
    const onPath = (ev: Event) => {
      const index = (ev as CustomEvent<number>).detail;
      const value = e.pathOptions[index];
      if (value) setForm((f) => ({ ...f, path: value }));
    };
    const onKind = (ev: Event) => {
      const kind = (ev as CustomEvent<string>).detail;
      setForm((f) => ({ ...f, kind, items: [] }));
      setStep(0);
    };
    window.addEventListener("mokhtasar:path", onPath);
    window.addEventListener("mokhtasar:kind", onKind);
    return () => {
      window.removeEventListener("mokhtasar:path", onPath);
      window.removeEventListener("mokhtasar:kind", onKind);
    };
  }, [e.pathOptions]);

  const update = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const toggleItem = (id: string) => {
    setForm((f) => ({
      ...f,
      items: f.items.includes(id) ? f.items.filter((x) => x !== id) : [...f.items, id],
    }));
    setErrors((er) => ({ ...er, items: undefined }));
  };

  const itemLabel = (id: string) =>
    [...e.items, ...e.designSpaces].find((i) => i.id === id)?.label ?? id;
  const isDesign = form.kind === "design";
  const kindLabel = e.kinds.find((k) => k.id === form.kind)?.label ?? "";
  const stepItems = isDesign ? e.designSpaces : e.items;

  const validateStep = (s: number): boolean => {
    const next: Errors = {};
    if (s === 0 && form.items.length === 0) next.items = e.errorItems;
    if (s === 1) {
      if (!form.city) next.city = e.errorRequired;
      if (!form.property) next.property = e.errorRequired;
    }
    if (s === 3) {
      if (!form.name.trim()) next.name = e.errorRequired;
      if (!form.phone.trim()) next.phone = e.errorRequired;
      else if (!PHONE_RE.test(form.phone.replace(/\s/g, ""))) next.phone = e.errorPhone;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const focusPanel = () => {
    requestAnimationFrame(() => panelRef.current?.focus({ preventScroll: true }));
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, 3));
    focusPanel();
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    focusPanel();
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (step < 3) {
      goNext();
      return;
    }
    if (form.botcheck) {
      setStatus("success");
      return;
    }
    if (!validateStep(3)) return;

    const reference = makeRef();
    setRef(reference);
    setStatus("submitting");

    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.formAccessKey,
          subject: `${isDesign ? "طلب تصميم واختيار أثاث" : "طلب رفع مقاسات"} ${reference}`,
          from_name: "موقع مختصر",
          رقم_الطلب: reference,
          نوع_الطلب: isDesign ? "تصميم واختيار أثاث" : "رفع مقاسات وتشطيب",
          اللغة: lang,
          البنود: form.items.map(itemLabel).join("، "),
          المدينة: form.city,
          نوع_العقار: form.property,
          مرحلة_المبنى: form.stage || "-",
          الطريقة_المفضلة: form.path || "-",
          عدد_الأبواب: form.doors || "-",
          الشبابيك: form.windows || "-",
          طول_المطبخ: form.kitchen || "-",
          موعد_البدء: form.timing || "-",
          ملاحظات: form.notes || "-",
          الاسم: form.name,
          الجوال: form.phone,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const summaryText = [
    e.whatsappIntro,
    ref ? `${e.whatsappRef}: ${ref}` : "",
    `${e.kindLabel}: ${kindLabel}`,
    form.items.length ? `${e.whatsappItems}: ${form.items.map(itemLabel).join("، ")}` : "",
    form.city ? `${e.cityLabel}: ${form.city}` : "",
    form.name ? `${e.nameLabel}: ${form.name}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(summaryText)}`;
  const directWhatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.whatsapp.message)}`;

  const reset = () => {
    setForm(EMPTY);
    setStep(0);
    setStatus("idle");
    setRef("");
    setErrors({});
  };

  const inputClass =
    "w-full rounded-sm border border-primary/15 bg-secondary px-4 py-3 text-sm text-primary placeholder:text-text-muted/60 outline-none transition-colors focus:border-accent";
  const labelClass = "mb-1.5 block text-xs font-medium text-text-muted";

  const chips = (field: "city" | "property" | "stage" | "path" | "timing", label: string, options: readonly string[]) => (
    <fieldset>
      <legend className={labelClass}>{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const on = form[field] === opt;
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={on}
              onClick={() => update(field, on ? "" : opt)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                on ? "border-primary bg-primary text-white" : "border-primary/15 text-primary/80 hover:border-accent"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {errors[field] && <p className="mt-1.5 text-xs text-red-600">{errors[field]}</p>}
    </fieldset>
  );

  return (
    <section id="measure" className="section-pad bg-secondary-muted">
      <div className="container-x grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">{e.eyebrow}</p>
          <h2 className="font-heading mt-3 text-3xl font-bold leading-snug text-primary md:text-4xl">{e.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">{e.subtitle}</p>

          <p className="mt-10 text-sm font-semibold text-primary">{e.contactWhatsapp}</p>
          <ul className="mt-4 space-y-3 text-sm text-text-muted">
            <li className="flex items-center gap-3">
              <MessageCircle size={18} className="shrink-0 text-accent" />
              <a href={directWhatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-primary" dir="ltr">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-accent" />
              <a href={`tel:+${site.whatsapp}`} className="hover:text-primary" dir="ltr">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-primary" dir="ltr">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-accent" />
              <span>{e.address}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-primary/10 bg-secondary p-6 shadow-[0_1px_0_rgba(26,26,26,0.04)] md:p-9">
            {status === "success" ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                  <Check size={28} strokeWidth={2.2} />
                </div>
                <h3 className="font-heading mt-5 text-2xl font-bold text-primary">{e.successTitle}</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-text-muted">{e.successText}</p>
                {ref && (
                  <div className="mx-auto mt-6 inline-block border border-primary/10 px-6 py-3">
                    <p className="text-xs text-text-muted">{e.refLabel}</p>
                    <p className="mt-1 font-montserrat text-lg font-bold tracking-wider text-primary" dir="ltr">
                      {ref}
                    </p>
                  </div>
                )}
                <div className="mt-8 flex flex-col items-center gap-3">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <MessageCircle size={18} />
                    {e.sendPlan}
                  </a>
                  <button type="button" onClick={reset} className="text-sm text-text-muted underline-offset-4 hover:underline">
                    {e.newRequest}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="botcheck"
                  value={form.botcheck}
                  onChange={(ev) => update("botcheck", ev.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Progress */}
                <ol className="grid grid-cols-4 gap-2" aria-label={e.stepOf.replace("{n}", String(step + 1))}>
                  {e.stepLabels.map((label, i) => (
                    <li key={label}>
                      <div className={`h-1 rounded-full ${i <= step ? "bg-accent" : "bg-primary/10"}`} />
                      <p className={`mt-2 text-[0.7rem] font-medium ${i === step ? "text-primary" : "text-text-muted"}`}>
                        {i + 1}. {label}
                      </p>
                    </li>
                  ))}
                </ol>

                <div ref={panelRef} tabIndex={-1} className="mt-8 outline-none">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={step}
                      initial={reduce ? false : { opacity: 0, x: lang === "ar" ? -16 : 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      {step === 0 && (
                        <div>
                          <p className="text-xs font-semibold text-text-muted">{e.kindLabel}</p>
                          <div role="radiogroup" aria-label={e.kindLabel} className="mt-2 mb-7 grid grid-cols-2 gap-2">
                            {e.kinds.map((k) => {
                              const on = form.kind === k.id;
                              return (
                                <button
                                  key={k.id}
                                  type="button"
                                  role="radio"
                                  aria-checked={on}
                                  onClick={() => setForm((f) => (f.kind === k.id ? f : { ...f, kind: k.id, items: [] }))}
                                  className={`border px-3 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                                    on ? "border-accent bg-accent/15 text-primary" : "border-primary/12 bg-secondary text-text-muted hover:border-accent"
                                  }`}
                                >
                                  {k.label}
                                </button>
                              );
                            })}
                          </div>
                          <h3 className="font-heading text-xl font-bold text-primary">{isDesign ? e.designTitle : e.itemsTitle}</h3>
                          <p className="mt-1 text-sm text-text-muted">{isDesign ? e.designHint : e.itemsHint}</p>
                          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                            {stepItems.map((item) => {
                              const Icon = ITEM_ICONS[item.id] ?? DoorOpen;
                              const on = form.items.includes(item.id);
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  aria-pressed={on}
                                  onClick={() => toggleItem(item.id)}
                                  className={`relative flex flex-col items-start gap-3 border p-4 text-start text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                                    on
                                      ? "border-primary bg-primary text-white"
                                      : "border-primary/12 bg-secondary text-primary hover:border-accent"
                                  }`}
                                >
                                  <Icon size={22} strokeWidth={1.5} className={on ? "text-accent" : "text-primary/60"} />
                                  {item.label}
                                  {on && (
                                    <Check size={16} className="absolute top-3 end-3 text-accent" strokeWidth={2.4} />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                          {errors.items && <p className="mt-2 text-xs text-red-600">{errors.items}</p>}
                        </div>
                      )}

                      {step === 1 && (
                        <>
                          <h3 className="font-heading text-xl font-bold text-primary">{e.projectTitle}</h3>
                          {chips("city", e.cityLabel, e.cityOptions)}
                          {chips("property", e.propertyLabel, e.propertyOptions)}
                          {chips("stage", e.stageLabel, e.stageOptions)}
                          {chips("path", e.pathLabel, e.pathOptions)}
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <h3 className="font-heading text-xl font-bold text-primary">{e.detailsTitle}</h3>
                          <div className="grid gap-4 sm:grid-cols-3">
                            {(form.items.includes("doors") || form.items.length === 0) && (
                              <div>
                                <label htmlFor="m-doors" className={labelClass}>{e.doorsLabel}</label>
                                <input id="m-doors" inputMode="numeric" value={form.doors} onChange={(ev) => update("doors", ev.target.value)} className={inputClass} />
                              </div>
                            )}
                            {(form.items.includes("windows") || form.items.length === 0) && (
                              <div>
                                <label htmlFor="m-windows" className={labelClass}>{e.windowsLabel}</label>
                                <input id="m-windows" value={form.windows} onChange={(ev) => update("windows", ev.target.value)} className={inputClass} />
                              </div>
                            )}
                            {(form.items.includes("kitchen") || form.items.length === 0) && (
                              <div>
                                <label htmlFor="m-kitchen" className={labelClass}>{e.kitchenLabel}</label>
                                <input id="m-kitchen" inputMode="decimal" value={form.kitchen} onChange={(ev) => update("kitchen", ev.target.value)} className={inputClass} />
                              </div>
                            )}
                          </div>
                          {chips("timing", e.timingLabel, e.timingOptions)}
                          <div>
                            <label htmlFor="m-notes" className={labelClass}>{e.notesLabel}</label>
                            <textarea
                              id="m-notes"
                              rows={3}
                              value={form.notes}
                              onChange={(ev) => update("notes", ev.target.value)}
                              placeholder={e.notesPlaceholder}
                              className={inputClass}
                            />
                          </div>
                          <p className="text-xs text-text-muted">{e.planNote}</p>
                        </>
                      )}

                      {step === 3 && (
                        <>
                          <h3 className="font-heading text-xl font-bold text-primary">{e.contactTitle}</h3>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="m-name" className={labelClass}>{e.nameLabel}</label>
                              <input
                                id="m-name"
                                autoComplete="name"
                                value={form.name}
                                onChange={(ev) => update("name", ev.target.value)}
                                placeholder={e.namePlaceholder}
                                className={inputClass}
                              />
                              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                            </div>
                            <div>
                              <label htmlFor="m-phone" className={labelClass}>{e.phoneLabel}</label>
                              <input
                                id="m-phone"
                                type="tel"
                                autoComplete="tel"
                                value={form.phone}
                                onChange={(ev) => update("phone", ev.target.value)}
                                placeholder={e.phonePlaceholder}
                                className={inputClass}
                                dir="ltr"
                              />
                              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                            </div>
                          </div>
                          {status === "error" && (
                            <div className="flex items-start gap-2.5 border border-red-200 bg-red-50 p-3.5 text-sm text-red-700">
                              <AlertCircle size={18} className="mt-0.5 shrink-0" />
                              <div>
                                <p>{e.errorSend}</p>
                                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold underline">
                                  {e.sendPlan}
                                </a>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-primary/10 pt-6">
                  {step > 0 ? (
                    <button type="button" onClick={goBack} className="text-sm font-medium text-text-muted hover:text-primary">
                      {e.back}
                    </button>
                  ) : (
                    <span />
                  )}
                  {step < 3 ? (
                    <button type="button" onClick={goNext} className="btn-primary">
                      {e.next}
                    </button>
                  ) : (
                    <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
                      {status === "submitting" ? e.submitting : e.submit}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
