import type { Locale } from "./site";

/**
 * Global translation dictionary.
 *
 * Spanish (es) is primary; English (en) is provided.
 * Everything user-facing — navigation, headings, CTAs, metadata, page content —
 * is resolved through this dictionary. Components never hard-code strings.
 */

export const translations = {
  es: {
    // ---------- Metadata / SEO ----------
    meta: {
      homeTitle: "CCD Legal Group — Legal & Business Advisory Firm en Madrid",
      homeDescription:
        "CCD Legal Group · Cutilla Díaz & Cons Abogados. Despacho de abogados y asesoría legal y de negocio en Madrid.",
      firmTitle: "The Firm — CCD Legal Group",
      firmDescription:
        "Conoce la filosofía de CCD Legal Group, una firma boutique de asesoría legal y de negocio en Madrid.",
      expertiseTitle: "Expertise — CCD Legal Group",
      expertiseDescription:
        "Servicios y áreas de práctica de CCD Legal Group: asesoría legal, accidentes laborales y accidentes de tráfico.",
      carolinaTitle: "Carolina Cutilla Díaz — Abogada · Criminóloga · Fundadora",
      carolinaDescription:
        "Carolina Cutilla Díaz, abogada, criminóloga y fundadora de CCD Legal Group, Madrid.",
      insightsTitle: "Insights — Perspectivas de CCD Legal Group",
      insightsDescription:
        "Perspectivas editoriales sobre derecho, criminología y estrategia de negocio.",
      contactTitle: "Contact — Solicita una consulta | CCD Legal Group",
      contactDescription:
        "Contacta con CCD Legal Group en Madrid. Solicita una consulta, llama o escribe por email.",
    },

    // ---------- Navigation ----------
    nav: {
      firm: "Firm",
      expertise: "Expertise",
      carolina: "Carolina",
      insights: "Insights",
      contact: "Contact",
      cta: "Solicitar Consulta",
      menu: "Menú",
      close: "Cerrar",
    },

    // ---------- Hero ----------
    hero: {
      eyebrow: "Madrid · Legal & Business Advisory",
      line1_1: "Legal",
      line1_2: "Clarity.",
      line2_1: "Strategic",
      line2_2: "Counsel.",
      bottom: "Cutilla Díaz & Cons",
      bottom2: "Abogados",
      ctaPrimary: "Solicitar Consulta",
      ctaSecondary: "Explorar la Firma",
      scroll: "Deslizar",
    },

    // ---------- Introduction ----------
    intro: {
      number: "01",
      statement: "Los asuntos legales rara vez existen de forma aislada.",
      body: "En CCD Legal Group afrontamos cada asunto con rigor jurídico y una perspectiva estratégica. Analizamos el contexto, entendemos el objetivo y diseñamos una respuesta clara, precisa y pensada para tu realidad.",
    },

    // ---------- The Firm (home) ----------
    firm: {
      label: "La Firma",
      title: "Carolina Cutilla Díaz",
      roles: "Abogada · Criminóloga",
      founder: "Fundadora",
      body: "Carolina Cutilla Díaz es abogada, criminóloga y fundadora de CCD Legal Group, una firma boutique de asesoría legal y de negocio con sede en Madrid. Su práctica combina el rigor del derecho con una lectura estratégica de cada asunto.",
      link: "Descubrir a Carolina",
    },

    // ---------- Positioning ----------
    positioning: {
      label: "Posición",
      heading1: "Legal Thinking.",
      heading2: "Business Perspective.",
      legalNo: "01",
      businessNo: "02",
      legalTitle: "Legal",
      businessTitle: "Business",
      body: "CCD no es un despacho genérico. Como firma de asesoría legal y de negocio, une el conocimiento jurídico con una perspectiva estratégica, para que lo legal nunca frene lo que quieres construir.",
      note: "Legal & Business Advisory Firm",
    },

    // ---------- Expertise ----------
    expertise: {
      label: "Áreas de Práctica",
      headingTop: "Areas of",
      headingBottom: "Expertise",
      intro: "Un asesoramiento claro, cercano y riguroso.",
    },

    // ---------- Matters ----------
    matters: {
      label: "Alcance",
      heading1: "Matters that require",
      heading2: "more than an answer.",
      legend:
        "Personal · Profesional · Business",
      col1Title: "Personal",
      col1Body: "Asuntos que tocan tu vida y tu tranquilidad.",
      col2Title: "Profesional",
      col2Body: "Cuestiones que afectan a tu ejercicio profesional.",
      col3Title: "Business",
      col3Body: "Decisiones que definen tu negocio.",
      footnote: "Cada asunto es tratado con profundidad estratégica.",
    },

    // ---------- Carolina - human authority ----------
    carolina: {
      label: "La Firma",
      titleLine1: "Carolina",
      titleLine2: "Cutilla Díaz",
      role1: "Abogada",
      role2: "Criminóloga",
      role3: "Fundadora",
      body: "Abogada, criminóloga y fundadora de CCD Legal Group. Carolina dirige una práctica boutique en Madrid donde la precisión jurídica se une a una comprensión humana de cada caso.",
      link: "Perfil completo",
    },

    // ---------- Trust ----------
    trust: {
      label: "Confianza",
      heading: "Precision builds trust.",
      principles: [
        {
          title: "Clarity",
          body: "Cada asunto comienza por la comprensión.",
        },
        {
          title: "Strategy",
          body: "Cada decisión necesita perspectiva.",
        },
        {
          title: "Commitment",
          body: "Cada cliente merece un asesoramiento centrado.",
        },
      ],
    },

    // ---------- Insights ----------
    insights: {
      label: "Insights",
      heading: "Latest perspectives",
      viewAll: "Ver todas",
      sourceNote: "Contenido editorial sobre derecho, criminología y estrategia.",
    },

    // ---------- Contact ----------
    contact: {
      label: "Contacto",
      heading1: "Let's Discuss",
      heading2: "What Matters.",
      sub: "Solicita una consulta con CCD Legal Group.",
      call: "Llamar",
      email: "Email",
      location: "Ubicación",
      ctaPrimary: "Solicitar Consulta",
      ctaSecondary: "Enviar Email",
    },

    // ---------- Footer ----------
    footer: {
      tagline: "Legal & Business Advisory Firm",
      firm: "Firm",
      expertise: "Expertise",
      carolina: "Carolina",
      insights: "Insights",
      contact: "Contact",
      city: "Madrid",
      country: "España",
      instagram: "@ccd_legalgroup",
      copyright: "© CCD Legal Group",
      legalNote: "Cutilla Díaz & Cons Abogados",
      privacy: "Privacidad",
      legalNotice: "Aviso Legal",
    },

    // ---------- Firm page ----------
    firmPage: {
      eyebrow: "La Firma",
      titleLines: ["La Firma &", "La Filosofía"],
      lead: "CCD Legal Group es una firma boutique de asesoría legal y de negocio con sede en Madrid. Pocas voces, claridad y estrategia: ese es el modo de trabajar.",
      philosophyNo: "01",
      philosophyTitle: "Menos ruido, más claridad",
      philosophyBody:
        "Creemos que el derecho, bien ejercido, aporta claridad. Cada asunto se aborda con rigor jurídico y una visión estratégica, entendiendo el contexto antes de responder.",
      approachNo: "02",
      approachTitle: "Estrategia antes que formulismos",
      approachBody:
        "Lo legal nunca debe frenar lo que quieres construir. Por eso combinamos conocimiento jurídico con una perspectiva de negocio, para que cada decisión tenga un fundamento sólido.",
      commitmentNo: "03",
      commitmentTitle: "Un compromiso centrado en ti",
      commitmentBody:
        "Cada asunto recibe una atención centrada y directa. Trabajamos con proximidad, discreción y una comunicación clara en cada etapa.",
      quote: "Legal clarity. Strategic counsel.",
      quoteLabel: "Filosofía",
      methodLabel: "Cómo trabajamos",
      methodHeading: "Claridad en cada etapa",
      methodSub: "Tres principios que definen cada asunto que asumimos.",
      ctaTitle: "¿Hablamos de tu asunto?",
      ctaBody: "Solicita una consulta con CCD Legal Group.",
      ctaLabel: "Solicitar Consulta",
    },

    // ---------- Expertise page ----------
    expertisePage: {
      eyebrow: "Expertise",
      titleLines: ["Areas of", "Expertise"],
      lead: "Un asesoramiento claro, cercano y riguroso. Áreas de práctica en constante evolución, pensadas para particulares y empresas.",
      note: "Los servicios se actualizan conforme se confirman nuevas áreas.",
      label: "Servicios",
      askLabel: "Consultar",
    },

    // ---------- Carolina page ----------
    carolinaPage: {
      eyebrow: "La Firma",
      titleLines: ["Carolina", "Cutilla Díaz"],
      lead: "Abogada, criminóloga y fundadora de CCD Legal Group. Un perfil que une el rigor del derecho con la comprensión humana de cada caso.",
      positioningLabel: "Posicionamiento",
      positioningTitle: "Legal & Business",
      rolesLabel: "Perfil",
      role1: "Abogada",
      role2: "Criminóloga",
      role3: "Fundadora",
      bioLabel: "Carolina",
      bioTitle: "Rigor jurídico, mirada humana",
      bioBody1:
        "Carolina Cutilla Díaz es abogada, criminóloga y fundadora de CCD Legal Group, una firma boutique de asesoría legal y de negocio con sede en Madrid.",
      bioBody2:
        "Su trabajo se caracteriza por una lectura estratégica de cada asunto: entender el contexto, identificar el objetivo y construir una respuesta clara, precisa y adecuada a la realidad de cada persona o empresa.",
      note: "Perfil profesional — contenidos verificados",
    },

    // ---------- Insights page ----------
    insightsPage: {
      eyebrow: "Insights",
      titleLines: ["Latest", "Perspectives"],
      lead: "Una mirada editorial sobre derecho, criminología y estrategia de negocio, desde la práctica.",
      emptyTitle: "Contenido en preparación",
      emptyBody:
        "Las primeras perspectivas se publicarán próximamente. Mientras tanto, puedes contactar con el despacho para cualquier consulta.",
      emptyCta: "Contactar",
    },

    // ---------- Contact page ----------
    contactPage: {
      eyebrow: "Contacto",
      titleLines: ["Let's Discuss", "What Matters"],
      lead: "Solicita una consulta con CCD Legal Group. Te responderemos con la mayor brevedad.",
      formName: "Nombre",
      formEmail: "Email",
      formPhone: "Teléfono (opcional)",
      formMessage: "¿Cómo podemos ayudarte?",
      formSubmit: "Enviar Consulta",
      formNote: "Al enviar, aceptas el tratamiento de tus datos para responder a tu consulta.",
      directLabel: "Contacto directo",
      callLabel: "Llamar",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      mailtoNote: "o escribe directamente a",
    },

    // ---------- Interstitial / UI ----------
    ui: {
      arrow: "Seguir",
    },
  },

    en: {
      meta: {
        homeTitle: "CCD Legal Group — Legal & Business Advisory Firm in Madrid",
      homeDescription:
        "CCD Legal Group · Cutilla Díaz & Cons Abogados. Legal and business advisory law firm in Madrid.",
      firmTitle: "The Firm — CCD Legal Group",
      firmDescription:
        "Discover the philosophy of CCD Legal Group, a boutique legal and business advisory firm in Madrid.",
      expertiseTitle: "Expertise — CCD Legal Group",
      expertiseDescription:
        "Services and practice areas of CCD Legal Group: legal advisory, workplace accidents and traffic accidents.",
      carolinaTitle: "Carolina Cutilla Díaz — Lawyer · Criminologist · Founder",
      carolinaDescription:
        "Carolina Cutilla Díaz, lawyer, criminologist and founder of CCD Legal Group, Madrid.",
      insightsTitle: "Insights — Perspectives from CCD Legal Group",
      insightsDescription:
        "Editorial perspectives on law, criminology and business strategy.",
      contactTitle: "Contact — Book a consultation | CCD Legal Group",
      contactDescription:
        "Contact CCD Legal Group in Madrid. Request a consultation, call or email us.",
    },
    nav: {
      firm: "The Firm",
      expertise: "Expertise",
      carolina: "Carolina",
      insights: "Insights",
      contact: "Contact",
      cta: "Request Consultation",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Madrid · Legal & Business Advisory",
      line1_1: "Legal",
      line1_2: "Clarity.",
      line2_1: "Strategic",
      line2_2: "Counsel.",
      bottom: "Cutilla Díaz & Cons",
      bottom2: "Abogados",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Explore the Firm",
      scroll: "Scroll",
    },
    intro: {
      number: "01",
      statement: "Legal matters rarely exist in isolation.",
      body: "At CCD Legal Group we approach every matter with legal rigour and a strategic perspective. We analyse the context, understand the objective and design a clear, precise response shaped around your reality.",
    },
    firm: {
      label: "The Firm",
      title: "Carolina Cutilla Díaz",
      roles: "Lawyer · Criminologist",
      founder: "Founder",
      body: "Carolina Cutilla Díaz is a lawyer, criminologist and founder of CCD Legal Group, a boutique legal and business advisory firm based in Madrid. Her practice combines the rigour of law with a strategic reading of every matter.",
      link: "Discover Carolina",
    },
    positioning: {
      label: "Positioning",
      heading1: "Legal Thinking.",
      heading2: "Business Perspective.",
      legalNo: "01",
      businessNo: "02",
      legalTitle: "Legal",
      businessTitle: "Business",
      body: "CCD is not a generic firm. As a legal and business advisory firm, it joins legal knowledge with a strategic perspective, so that the legal never holds back what you want to build.",
      note: "Legal & Business Advisory Firm",
    },
    expertise: {
      label: "Practice Areas",
      headingTop: "Areas of",
      headingBottom: "Expertise",
      intro: "Clear, close and rigorous counsel.",
    },
    matters: {
      label: "Scope",
      heading1: "Matters that require",
      heading2: "more than an answer.",
      legend: "Personal · Professional · Business",
      col1Title: "Personal",
      col1Body: "Matters that touch your life and your peace of mind.",
      col2Title: "Professional",
      col2Body: "Issues affecting your professional practice.",
      col3Title: "Business",
      col3Body: "Decisions that define your business.",
      footnote: "Every matter is handled with strategic depth.",
    },
    carolina: {
      label: "The Firm",
      titleLine1: "Carolina",
      titleLine2: "Cutilla Díaz",
      role1: "Lawyer",
      role2: "Criminologist",
      role3: "Founder",
      body: "Lawyer, criminologist and founder of CCD Legal Group. Carolina leads a boutique practice in Madrid where legal precision meets a human understanding of every case.",
      link: "Full profile",
    },
    trust: {
      label: "Trust",
      heading: "Precision builds trust.",
      principles: [
        { title: "Clarity", body: "Every matter begins with understanding." },
        { title: "Strategy", body: "Every decision needs perspective." },
        { title: "Commitment", body: "Every client deserves focused counsel." },
      ],
    },
    insights: {
      label: "Insights",
      heading: "Latest perspectives",
      viewAll: "View all",
      sourceNote: "Editorial content on law, criminology and strategy.",
    },
    contact: {
      label: "Contact",
      heading1: "Let's Discuss",
      heading2: "What Matters.",
      sub: "Request a consultation with CCD Legal Group.",
      call: "Call",
      email: "Email",
      location: "Location",
      ctaPrimary: "Request Consultation",
      ctaSecondary: "Send Email",
    },
    footer: {
      tagline: "Legal & Business Advisory Firm",
      firm: "The Firm",
      expertise: "Expertise",
      carolina: "Carolina",
      insights: "Insights",
      contact: "Contact",
      city: "Madrid",
      country: "Spain",
      instagram: "@ccd_legalgroup",
      copyright: "© CCD Legal Group",
      legalNote: "Cutilla Díaz & Cons Abogados",
      privacy: "Privacy",
      legalNotice: "Legal Notice",
    },
    firmPage: {
      eyebrow: "The Firm",
      titleLines: ["The Firm &", "The Philosophy"],
      lead: "CCD Legal Group is a boutique legal and business advisory firm based in Madrid. Few voices, clarity and strategy: that is how we work.",
      philosophyNo: "01",
      philosophyTitle: "Less noise, more clarity",
      philosophyBody:
        "We believe that law, well practised, brings clarity. Every matter is approached with legal rigour and a strategic view, understanding the context before responding.",
      approachNo: "02",
      approachTitle: "Strategy before formulas",
      approachBody:
        "The legal should never hold back what you want to build. That is why we combine legal knowledge with a business perspective, so every decision has a solid foundation.",
      commitmentNo: "03",
      commitmentTitle: "A commitment focused on you",
      commitmentBody:
        "Every matter receives focused, direct attention. We work with proximity, discretion and clear communication at every stage.",
      quote: "Legal clarity. Strategic counsel.",
      quoteLabel: "Philosophy",
      methodLabel: "How we work",
      methodHeading: "Clarity at every stage",
      methodSub: "Three principles that define every matter we take on.",
      ctaTitle: "Shall we discuss your matter?",
      ctaBody: "Book a consultation with CCD Legal Group.",
      ctaLabel: "Request Consultation",
    },
    expertisePage: {
      eyebrow: "Expertise",
      titleLines: ["Areas of", "Expertise"],
      lead: "Clear, close and rigorous counsel. Practice areas in constant evolution, designed for individuals and businesses.",
      note: "Services are updated as new areas are confirmed.",
      label: "Services",
      askLabel: "Enquire",
    },
    carolinaPage: {
      eyebrow: "The Firm",
      titleLines: ["Carolina", "Cutilla Díaz"],
      lead: "Lawyer, criminologist and founder of CCD Legal Group. A profile that joins the rigour of law with a human understanding of every case.",
      positioningLabel: "Positioning",
      positioningTitle: "Legal & Business",
      rolesLabel: "Profile",
      role1: "Lawyer",
      role2: "Criminologist",
      role3: "Founder",
      bioLabel: "Carolina",
      bioTitle: "Legal rigour, human view",
      bioBody1:
        "Carolina Cutilla Díaz is a lawyer, criminologist and founder of CCD Legal Group, a boutique legal and business advisory firm based in Madrid.",
      bioBody2:
        "Her work is defined by a strategic reading of every matter: understanding the context, identifying the objective and building a clear, precise response suited to the reality of each person or company.",
      note: "Professional profile — verified content",
    },
    insightsPage: {
      eyebrow: "Insights",
      titleLines: ["Latest", "Perspectives"],
      lead: "An editorial view on law, criminology and business strategy, seen from practice.",
      emptyTitle: "Content in preparation",
      emptyBody:
        "The first perspectives will be published shortly. In the meantime, you can contact the firm for any query.",
      emptyCta: "Contact us",
    },
    contactPage: {
      eyebrow: "Contact",
      titleLines: ["Let's Discuss", "What Matters"],
      lead: "Book a consultation with CCD Legal Group. We will reply as soon as possible.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone (optional)",
      formMessage: "How can we help you?",
      formSubmit: "Send Consultation",
      formNote: "By sending, you accept the processing of your data to respond to your query.",
      directLabel: "Direct contact",
      callLabel: "Call",
      emailLabel: "Email",
      locationLabel: "Location",
      mailtoNote: "or write directly to",
    },
    ui: {
      arrow: "Continue",
    },
  },
} as const;

export type Translation = typeof translations[Locale];

export function getDictionary(locale: Locale) {
  return translations[locale];
}
