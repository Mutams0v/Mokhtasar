export type Lang = "ar" | "en";

export const translations = {
  ar: {
    meta: {
      dir: "rtl" as "rtl" | "ltr",
      langLabel: "EN",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      process: "مراحل العمل",
      products: "المنتجات",
      whyUs: "لماذا نحن",
      audience: "عملاؤنا",
      coverage: "نطاق التغطية",
      contact: "تواصل معنا",
      cta: "استشارة مجانية",
    },
    hero: {
      eyebrow: "تأثيث سكني فاخر — الدمام والمنطقة الشرقية",
      title: "تأثيث سكني فاخر",
      titleLine2: "من الفكرة حتى المفتاح",
      subtitle:
        "جهة تنفيذ واحدة للقصور والفلل والشقق في الدمام والمنطقة الشرقية",
      ctaPrimary: "اطلب استشارة مجانية",
      ctaSecondary: "تعرف على خدماتنا",
    },
    about: {
      eyebrow: "من نحن",
      title: "جهة واحدة، مسؤولية واحدة، نتيجة واحدة",
      story:
        "بدأنا لأن السوق يعاني من تعدد الأطراف — مصمم، مورد، مقاول تركيب، فريق تنظيف — وكل طرف يتحمل جزءاً صغيراً من المسؤولية بينما تبقى النتيجة النهائية بلا صاحب واضح. في Mokhtasar Fit-Out، نحن الجهة الوحيدة المسؤولة عن مشروعك من رفع المقاسات وحتى تسليم المفتاح.",
      visionTitle: "رؤيتنا",
      vision: "أن نكون الخيار الأول للتأثيث السكني الفاخر في المنطقة الشرقية.",
      missionTitle: "رسالتنا",
      mission: "تجربة تأثيث سلسة — جهة واحدة، مسؤولية واحدة، نتيجة واحدة.",
      valuesTitle: "قيمنا",
      values: ["الشفافية", "الجودة", "الالتزام", "الحصرية"],
      stats: [
        { value: "25+", label: "مشروع منجز" },
        { value: "10+", label: "سنوات خبرة" },
        { value: "100%", label: "رضا العملاء" },
      ],
    },
    services: {
      eyebrow: "خدماتنا",
      title: "كل ما يحتاجه مشروعك تحت سقف واحد",
      subtitle:
        "من التصميم إلى التسليم، نغطي كل خطوة بمسؤولية كاملة عن الجودة والالتزام.",
      items: [
        {
          title: "تصميم داخلي 2D",
          desc: "مخططات توزيع أثاث دقيقة مبنية على مقاسات موقعك الفعلية.",
        },
        {
          title: "توريد الأثاث",
          desc: "اختيار وتوريد قطع أثاث فاخرة تناسب مساحتك وذوقك.",
        },
        {
          title: "المطابخ",
          desc: "تصميم وتوريد وتركيب مطابخ عصرية متكاملة.",
        },
        {
          title: "الإنارة والثريات",
          desc: "حلول إضاءة وثريات تضفي طابعاً فاخراً على كل مساحة.",
        },
        {
          title: "مواد السباكة والإكسسوارات",
          desc: "تجهيزات حمامات ومطابخ عالية الجودة تدوم طويلاً.",
        },
        {
          title: "التركيب والتنظيف النهائي",
          desc: "تركيب كامل، ترتيب الديكور، وتسليم نظيف جاهز للسكن.",
        },
      ],
    },
    process: {
      eyebrow: "مراحل العمل",
      title: "٦ خطوات من الفكرة حتى المفتاح",
      subtitle: "عملية واضحة ومنظمة تمنحك راحة البال من أول يوم.",
      steps: [
        { title: "زيارة الموقع", desc: "زيارة الموقع ورفع مقاسات دقيقة." },
        {
          title: "التصميم الداخلي",
          desc: "تصميم 2D يوضح مخططات توزيع الأثاث.",
        },
        {
          title: "الاختيار والتوريد",
          desc: "اختيار وتوريد الأثاث والمطابخ والإكسسوارات.",
        },
        { title: "التركيب", desc: "التركيب الكامل في الموقع." },
        {
          title: "تنسيق الديكور",
          desc: "ترتيب الأثاث وتنسيق الديكور النهائي.",
        },
        {
          title: "التسليم",
          desc: "التنظيف النهائي وتسليم المفتاح جاهزاً للسكن.",
        },
      ],
    },
    products: {
      eyebrow: "نورّد لك الأفضل",
      title: "نماذج من المنتجات المتاحة",
      subtitle:
        "نماذج من المنتجات المتاحة من شركائنا — كل قطعة تُختار خصيصاً لمشروعك.",
      disclaimer:
        "نماذج من المنتجات المتاحة — نتحمل مسؤولية الجودة بالكامل.",
      categories: [
        { title: "أثاث فاخر", query: "luxury-furniture" },
        { title: "مطابخ عصرية", query: "modern-kitchen" },
        { title: "إنارة وثريات", query: "luxury-chandelier" },
        { title: "أجهزة مطبخ", query: "kitchen-appliances" },
      ],
    },
    whyUs: {
      eyebrow: "لماذا نحن",
      title: "الفرق يظهر في التفاصيل",
      items: [
        {
          title: "جهة تنفيذ واحدة",
          desc: "لا تعدد أطراف — نحن مسؤولون عن مشروعك بالكامل.",
        },
        {
          title: "شفافية تامة",
          desc: "شفافية تامة في المنتجات والأسعار من البداية.",
        },
        {
          title: "مسؤولية 100%",
          desc: "نتحمل بالكامل أي عيب مصنعي أو توريدي.",
        },
        {
          title: "تصميم مخصص",
          desc: "حسب مقاساتك بالضبط — لا أثاث جاهز مخزن.",
        },
        {
          title: "تسليم نظيف ومرتب",
          desc: "استلم المفتاح وادخل — كل شيء جاهز.",
        },
        {
          title: "نطاق واسع",
          desc: "يغطي الدمام والمنطقة الشرقية إلى الرياض.",
        },
      ],
    },
    audience: {
      eyebrow: "عملاؤنا",
      title: "نصمم حسب طبيعة مشروعك",
      items: [
        {
          title: "أصحاب القصور والفلل",
          desc: "تأثيث فاخر مخصص يعكس طابع منزلكم الخاص.",
        },
        {
          title: "المطوّرون العقاريون",
          desc: "حلول تأثيث متكاملة للمشاريع السكنية والتجميعات العقارية.",
        },
        {
          title: "أصحاب الفنادق والشقق المفروشة",
          desc: "تجهيز يجمع بين الفخامة والعملية لاستثمارك الفندقي.",
        },
        {
          title: "المستثمرون العقاريون",
          desc: "رفع قيمة العقار عبر تأثيث احترافي يلبي معايير السوق.",
        },
      ],
    },
    coverage: {
      eyebrow: "نطاق التغطية",
      title: "نخدمك أينما كنت",
      subtitle:
        "نخدمك أينما كنت في المنطقة الشرقية — والرياض حسب المشروع.",
      cities: [
        { name: "الدمام", primary: true },
        { name: "الخبر", primary: false },
        { name: "الظهران", primary: false },
        { name: "القطيف", primary: false },
        { name: "الرياض", primary: false },
      ],
      note: "الدمام (التركيز الرئيسي) · الخبر، الظهران، القطيف (المنطقة الشرقية) · الرياض (بالتنسيق)",
      primaryFocusBadge: "التركيز الرئيسي",
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "ابدأ مشروعك اليوم",
      subtitle: "أرسل تفاصيل مشروعك وسنتواصل معك خلال ٢٤ ساعة.",
      form: {
        name: "الاسم الكامل",
        namePlaceholder: "اكتب اسمك الكامل",
        phone: "رقم الجوال / واتساب",
        phonePlaceholder: "05xxxxxxxx",
        email: "البريد الإلكتروني",
        emailPlaceholder: "example@email.com",
        propertyType: "نوع العقار",
        propertyOptions: ["قصر", "فيلا", "شقة", "فندق", "أخرى"],
        city: "المدينة",
        cityOptions: ["الدمام", "الخبر", "الظهران", "الرياض", "أخرى"],
        area: "المساحة التقريبية",
        areaPlaceholder: "مثال: ٤٠٠ م²",
        serviceType: "نوع الخدمة المطلوبة",
        serviceOptions: ["تصميم فقط", "تأثيث كامل", "مطبخ", "ترميم"],
        budget: "ميزانية تقديرية (اختياري)",
        budgetPlaceholder: "اختياري",
        notes: "ملاحظات إضافية",
        notesPlaceholder: "أخبرنا بأي تفاصيل إضافية عن مشروعك...",
        submit: "أرسل الطلب",
        submitting: "جاري الإرسال...",
        required: "هذا الحقل مطلوب",
        invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
        invalidPhone: "يرجى إدخال رقم جوال صحيح",
        selectOption: "اختر",
      },
      successTitle: "تم استلام طلبك بنجاح",
      successMsg: "سنتواصل معك خلال ٢٤ ساعة.",
      sendAnother: "إرسال طلب آخر",
      infoTitle: "معلومات التواصل",
      phoneLabel: "رقم الجوال / واتساب",
      phonePlaceholderValue: "[أدخل رقم الجوال هنا]",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholderValue: "[أدخل البريد الإلكتروني هنا]",
      addressLabel: "العنوان",
      address: "الدمام، المنطقة الشرقية، المملكة العربية السعودية",
      hoursLabel: "أوقات العمل",
      hours: "السبت - الخميس | ٩ ص - ٦ م",
    },
    footer: {
      tagline: "تأثيث سكني فاخر — من الفكرة حتى المفتاح",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات التواصل",
      rights: "© ٢٠٢٦ Mokhtasar Fit-Out. جميع الحقوق محفوظة.",
    },
  },
  en: {
    meta: {
      dir: "ltr" as "rtl" | "ltr",
      langLabel: "AR",
    },
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      process: "Process",
      products: "Products",
      whyUs: "Why Us",
      audience: "Clients",
      coverage: "Coverage",
      contact: "Contact",
      cta: "Free Consultation",
    },
    hero: {
      eyebrow: "Luxury Residential Fit-Out — Dammam & Eastern Province",
      title: "Luxury Residential Fit-Out",
      titleLine2: "From Concept to Key",
      subtitle:
        "One execution partner for palaces, villas, and apartments in Dammam and the Eastern Province",
      ctaPrimary: "Request a Free Consultation",
      ctaSecondary: "Explore Our Services",
    },
    about: {
      eyebrow: "About Us",
      title: "One Partner, One Responsibility, One Result",
      story:
        "We started because the market suffers from too many parties — a designer, a supplier, an installation contractor, a cleaning crew — each carrying a small fraction of the responsibility while the final result has no clear owner. At Mokhtasar Fit-Out, we are the single party accountable for your project, from measurement to key handover.",
      visionTitle: "Our Vision",
      vision:
        "To be the first choice for luxury residential fit-out in the Eastern Province.",
      missionTitle: "Our Mission",
      mission: "A seamless fit-out experience — one partner, one responsibility, one result.",
      valuesTitle: "Our Values",
      values: ["Transparency", "Quality", "Commitment", "Exclusivity"],
      stats: [
        { value: "25+", label: "Projects Delivered" },
        { value: "10+", label: "Years of Experience" },
        { value: "100%", label: "Client Satisfaction" },
      ],
    },
    services: {
      eyebrow: "Our Services",
      title: "Everything Your Project Needs, Under One Roof",
      subtitle:
        "From design to delivery, we cover every step with full accountability for quality and commitment.",
      items: [
        {
          title: "2D Interior Design",
          desc: "Precise furniture layout plans built on your site's actual measurements.",
        },
        {
          title: "Furniture Supply",
          desc: "Selecting and supplying luxury furniture pieces suited to your space and taste.",
        },
        {
          title: "Kitchens",
          desc: "Design, supply, and installation of fully integrated modern kitchens.",
        },
        {
          title: "Lighting & Chandeliers",
          desc: "Lighting solutions and chandeliers that give every space a luxurious character.",
        },
        {
          title: "Plumbing Fixtures & Accessories",
          desc: "High-quality bathroom and kitchen fittings built to last.",
        },
        {
          title: "Installation & Final Cleaning",
          desc: "Full installation, décor styling, and a spotless, move-in-ready handover.",
        },
      ],
    },
    process: {
      eyebrow: "Our Process",
      title: "6 Steps From Concept to Key",
      subtitle: "A clear, structured process that gives you peace of mind from day one.",
      steps: [
        { title: "Site Visit", desc: "Site visit and precise measurement survey." },
        { title: "Interior Design", desc: "2D design outlining furniture layout plans." },
        {
          title: "Selection & Supply",
          desc: "Selecting and supplying furniture, kitchens, and accessories.",
        },
        { title: "Installation", desc: "Full on-site installation." },
        {
          title: "Styling",
          desc: "Furniture arrangement and final décor styling.",
        },
        {
          title: "Handover",
          desc: "Final cleaning and a move-in-ready key handover.",
        },
      ],
    },
    products: {
      eyebrow: "We Source The Best",
      title: "Sample Products Available",
      subtitle:
        "Sample products available through our partners — every piece chosen specifically for your project.",
      disclaimer:
        "Sample products available — we take full responsibility for quality.",
      categories: [
        { title: "Luxury Furniture", query: "luxury-furniture" },
        { title: "Modern Kitchens", query: "modern-kitchen" },
        { title: "Lighting & Chandeliers", query: "luxury-chandelier" },
        { title: "Kitchen Appliances", query: "kitchen-appliances" },
      ],
    },
    whyUs: {
      eyebrow: "Why Us",
      title: "The Difference Is in the Details",
      items: [
        {
          title: "Single Execution Partner",
          desc: "No multiple parties — we are accountable for your entire project.",
        },
        {
          title: "Full Transparency",
          desc: "Complete transparency on products and pricing from day one.",
        },
        {
          title: "100% Responsibility",
          desc: "We fully cover any manufacturing or supply defect.",
        },
        {
          title: "Custom Design",
          desc: "Designed exactly to your measurements — no stock furniture.",
        },
        {
          title: "Clean, Move-in Ready Handover",
          desc: "Take the key and walk in — everything is ready.",
        },
        {
          title: "Wide Coverage",
          desc: "Covering Dammam and the Eastern Province up to Riyadh.",
        },
      ],
    },
    audience: {
      eyebrow: "Our Clients",
      title: "We Design Around Your Project",
      items: [
        {
          title: "Palace & Villa Owners",
          desc: "Custom luxury fit-out that reflects the character of your home.",
        },
        {
          title: "Real Estate Developers",
          desc: "Integrated fit-out solutions for residential and multi-unit developments.",
        },
        {
          title: "Hotel & Serviced Apartment Owners",
          desc: "Fit-out that balances luxury and practicality for your hospitality investment.",
        },
        {
          title: "Real Estate Investors",
          desc: "Boosting property value through professional, market-ready fit-out.",
        },
      ],
    },
    coverage: {
      eyebrow: "Coverage Area",
      title: "We Serve You, Wherever You Are",
      subtitle:
        "We serve you anywhere in the Eastern Province — and Riyadh depending on the project.",
      cities: [
        { name: "Dammam", primary: true },
        { name: "Khobar", primary: false },
        { name: "Dhahran", primary: false },
        { name: "Qatif", primary: false },
        { name: "Riyadh", primary: false },
      ],
      note: "Dammam (primary focus) · Khobar, Dhahran, Qatif (Eastern Province) · Riyadh (by arrangement)",
      primaryFocusBadge: "PRIMARY FOCUS",
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Start Your Project Today",
      subtitle: "Send us your project details and we'll get back to you within 24 hours.",
      form: {
        name: "Full Name",
        namePlaceholder: "Enter your full name",
        phone: "Mobile / WhatsApp Number",
        phonePlaceholder: "05xxxxxxxx",
        email: "Email Address",
        emailPlaceholder: "example@email.com",
        propertyType: "Property Type",
        propertyOptions: ["Palace", "Villa", "Apartment", "Hotel", "Other"],
        city: "City",
        cityOptions: ["Dammam", "Khobar", "Dhahran", "Riyadh", "Other"],
        area: "Approximate Area",
        areaPlaceholder: "e.g. 400 sqm",
        serviceType: "Service Needed",
        serviceOptions: ["Design Only", "Full Fit-Out", "Kitchen", "Renovation"],
        budget: "Estimated Budget (Optional)",
        budgetPlaceholder: "Optional",
        notes: "Additional Notes",
        notesPlaceholder: "Tell us more about your project...",
        submit: "Send Request",
        submitting: "Sending...",
        required: "This field is required",
        invalidEmail: "Please enter a valid email address",
        invalidPhone: "Please enter a valid phone number",
        selectOption: "Select",
      },
      successTitle: "Your Request Has Been Received",
      successMsg: "We'll get back to you within 24 hours.",
      sendAnother: "Send Another Request",
      infoTitle: "Contact Information",
      phoneLabel: "Mobile / WhatsApp",
      phonePlaceholderValue: "[Enter phone number here]",
      emailLabel: "Email",
      emailPlaceholderValue: "[Enter email address here]",
      addressLabel: "Address",
      address: "Dammam, Eastern Province, Kingdom of Saudi Arabia",
      hoursLabel: "Working Hours",
      hours: "Saturday - Thursday | 9 AM - 6 PM",
    },
    footer: {
      tagline: "Luxury Residential Fit-Out — From Concept to Key",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      rights: "© 2026 Mokhtasar Fit-Out. All rights reserved.",
    },
  },
};

export type TranslationShape = typeof translations.ar;
