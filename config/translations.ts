import type { Locale } from "./site";

/**
 * Global translation dictionary.
 *
 * Spanish (es) is primary and written at native level; English (en) is provided
 * as a faithful counterpart. Everything user-facing resolves through this
 * dictionary — components never hard-code strings.
 *
 * Voice: restrained, precise, human. No generic marketing fluff. The firm
 * speaks with the authority of a well-drafted document, never a sales pitch.
 */

export const translations = {
  es: {
    // ---------- Metadata / SEO ----------
    meta: {
      homeTitle: "CCD Legal Group — Abogados y Asesoría de Negocio en Madrid",
      homeDescription:
        "CCD Legal Group · Cutilla Díaz & Cons Abogados. Despacho boutique de asesoría legal y de negocio en Madrid. Rigor jurídico, mirada estratégica.",
      firmTitle: "El Despacho — CCD Legal Group",
      firmDescription:
        "La filosofía de CCD Legal Group: una firma boutique de asesoría legal y de negocio en Madrid. Pocas voces, claridad y estrategia.",
      expertiseTitle: "Áreas de Práctica — CCD Legal Group",
      expertiseDescription:
        "Áreas de práctica de CCD Legal Group: asesoría legal, accidentes de trabajo y accidentes de tráfico, con la mirada puesta en el negocio.",
      carolinaTitle: "Carolina Cutilla Díaz — Abogada · Criminóloga · Fundadora",
      carolinaDescription:
        "Carolina Cutilla Díaz, abogada, criminóloga y fundadora de CCD Legal Group, Madrid.",
      insightsTitle: "Perspectivas — CCD Legal Group",
      insightsDescription:
        "Perspectivas editoriales sobre derecho, criminología y estrategia de negocio, escritas desde la práctica.",
      contactTitle: "Contacto — Solicita una consulta | CCD Legal Group",
      contactDescription:
        "Contacta con CCD Legal Group en Madrid. Solicita una consulta, llama o escribe por email.",
    },

    // ---------- Navigation ----------
    nav: {
      firm: "El Despacho",
      expertise: "Áreas de Práctica",
      carolina: "Carolina",
      insights: "Perspectivas",
      contact: "Contacto",
      cta: "Hablar con el despacho",
      menu: "Menú",
      close: "Cerrar",
      city: "Madrid",
    },

    // ---------- Hero (case-file opening) ----------
    hero: {
      filed: "Expediente nº 001",
      city: "Madrid",
      district: "Chamberí · Serrano",
      est: "Despacho boutique",
      line1: "El derecho,",
      line2: "bien ejercido,",
      line3: "aporta",
      line4: "claridad.",
      ctaPrimary: "Solicitar una consulta",
      ctaSecondary: "Conocer el despacho",
      scroll: "Leer el expediente",
      legal: "Legal",
      business: "Business",
      advisory: "& Advisory Firm",
    },

    // ---------- Opening statement ----------
    intro: {
      number: "001",
      statement:
        "Los asuntos legales rara vez existen de forma aislada. Detrás de cada expediente hay una persona, una empresa y una decisión que importa.",
      body: "Afrontamos cada asunto con rigor jurídico y una lectura estratégica: entendemos el contexto, fijamos el objetivo y construimos una respuesta clara, precisa y a medida de tu realidad.",
      note: "Madrid — Legal & Business Advisory",
    },

    // ---------- The Firm / founder (home) ----------
    firm: {
      label: "El Despacho",
      title: "Carolina Cutilla Díaz",
      roles: "Abogada · Criminóloga",
      founder: "Fundadora",
      body: "Carolina Cutilla Díaz es abogada, criminóloga y fundadora de CCD Legal Group, un despacho boutique de asesoría legal y de negocio en Madrid. Une el rigor del derecho con la comprensión humana de cada caso.",
      link: "Perfil completo",
      rooms: "Pocas voces",
      roomsSub: "relación directa, sin intermediarios",
      chambers: "El despacho",
      chambersSub: "Chamberí · Madrid",
    },

    // ---------- Positioning ----------
    positioning: {
      label: "Posicionamiento",
      heading1: "Dos disciplinas,",
      heading2: "una sola respuesta.",
      legalNo: "01",
      businessNo: "02",
      legalTitle: "Legal · El rigor",
      businessTitle: "Business · La mirada",
      legalBody:
        "Un conocimiento jurídico sólido que convierte lo complejo en claro, en cada fase del asunto.",
      businessBody:
        "Una perspectiva de negocio que entiende lo que está en juego, más allá del papel.",
      note: "Legal & Business Advisory Firm",
      chambersNote:
        "Dirección, estrategia y conocimiento jurídico al servicio de tu decisión.",
    },

    // ---------- Expertise (clauses) ----------
    expertise: {
      label: "Áreas de Práctica",
      headingTop: "Áreas de",
      headingBottom: "Práctica",
      intro: "Un asesoramiento claro, cercano y riguroso, en constante evolución.",
      clauseLabel: "Cláusula",
      consult: "Consultar",
    },

    // ---------- Matters / scope (ledger) ----------
    matters: {
      label: "Alcance",
      heading1: "Asuntos que exigen",
      heading2: "más que una respuesta.",
      legend: "Personal · Profesional · Business",
      col1Title: "Personal",
      col1Body:
        "Asuntos que tocan tu vida, tu familia y tu tranquilidad. Tratados con discreción y cercanía.",
      col2Title: "Profesional",
      col2Body:
        "Cuestiones que afectan a tu ejercicio profesional y a las personas que trabajan contigo.",
      col3Title: "Business",
      col3Body:
        "Decisiones que definen tu negocio. Derecho al servicio de lo que quieres construir.",
      footnote: "Cada asunto se estudia con profundidad estratégica.",
    },

    // ---------- Carolina (human authority) ----------
    carolina: {
      label: "Fundadora",
      titleLine1: "Carolina",
      titleLine2: "Cutilla Díaz",
      role1: "Abogada",
      role2: "Criminóloga",
      role3: "Fundadora",
      body: "Abogada, criminóloga y fundadora de CCD Legal Group. Dirige una práctica boutique en Madrid donde la precisión jurídica se une a una comprensión humana de cada caso.",
      link: "Ver perfil",
    },

    // ---------- Process (how we work) ----------
    process: {
      label: "Método",
      heading1: "Cómo",
      heading2: "trabajamos.",
      intro: "Un proceso claro en cada etapa, para que siempre sepas en qué punto está tu asunto.",
      steps: [
        {
          no: "01",
          title: "Escuchamos",
          body: "Toda defensa comienza por entender. Primero el contexto y la persona, después la letra.",
        },
        {
          no: "02",
          title: "Estudiamos",
          body: "Analizamos el asunto a fondo: derecho aplicable, riesgos y las opciones reales sobre la mesa.",
        },
        {
          no: "03",
          title: "Decidimos juntos",
          body: "Fijamos juntos la estrategia y la comunicamos con claridad, en cada fase del expediente.",
        },
        {
          no: "04",
          title: "Respondemos",
          body: "Ejecutamos con rigor y presencia, manteniéndote informado hasta el desenlace.",
        },
      ] as const,
    },

    // ---------- Trust (credential ledger) ----------
    trust: {
      label: "Confianza",
      heading: "La confianza no se declara; se demuestra.",
      intro:
        "Lo que puedes verificar de nosotros, sin adornos: una formación dual, una práctica boutique y una relación directa y responsable.",
      rows: [
        {
          no: "01",
          title: "Abogada colegiada",
          body: "Ejercicio profesional del derecho, colegiada y en activo en Madrid.",
        },
        {
          no: "02",
          title: "Criminóloga",
          body: "Una formación que lee personas y situaciones, no solo expedientes.",
        },
        {
          no: "03",
          title: "Fundadora",
          body: "Un despacho propio: una sola firma, una sola responsabilidad, contigo enfrente.",
        },
      ] as const,
      footnote: "Datos verificables — sin estadísticas inventadas ni logotipos de clientes.",
    },

    // ---------- Insights ----------
    insights: {
      label: "Perspectivas",
      heading: "Últimas perspectivas",
      viewAll: "Ver todas",
      sourceNote: "Contenido editorial sobre derecho, criminología y estrategia.",
    },

    // ---------- Contact (footer band) ----------
    contact: {
      label: "Contacto",
      heading1: "Hablemos de",
      heading2: "tu asunto.",
      sub: "Solicita una consulta con CCD Legal Group. Te responderemos con la mayor brevedad.",
      call: "Llamar",
      email: "Email",
      location: "Madrid",
      ctaPrimary: "Solicitar una consulta",
      ctaSecondary: "Escribir un email",
    },

    // ---------- Footer ----------
    footer: {
      tagline: "Legal & Business Advisory Firm",
      firm: "El Despacho",
      expertise: "Áreas de Práctica",
      carolina: "Carolina",
      insights: "Perspectivas",
      contact: "Contacto",
      city: "Madrid",
      country: "España",
      instagram: "@ccd_legalgroup",
      copyright: "© CCD Legal Group",
      legalNote: "Cutilla Díaz & Cons Abogados",
      privacy: "Privacidad",
      legalNotice: "Aviso Legal",
      office: "El despacho",
      district: "Chamberí · Madrid",
    },

    // ---------- Firm page ----------
    firmPage: {
      eyebrow: "El Despacho",
      titleLines: ["El Despacho", "& su filosofía"],
      lead: "CCD Legal Group es un despacho boutique de asesoría legal y de negocio en Madrid. Pocas voces, claridad y estrategia: así trabajamos.",
      philosophyNo: "01",
      philosophyTitle: "Menos ruido, más claridad",
      philosophyBody:
        "Creemos que el derecho, bien ejercido, aporta claridad. Cada asunto se aborda con rigor y con una visión estratégica, entendiendo el contexto antes de responder.",
      approachNo: "02",
      approachTitle: "Estrategia antes que formulismos",
      approachBody:
        "Lo legal no debe frenar lo que quieres construir. Combinamos conocimiento jurídico con una perspectiva de negocio para que cada decisión tenga un fundamento sólido.",
      commitmentNo: "03",
      commitmentTitle: "Un compromiso centrado en ti",
      commitmentBody:
        "Cada asunto recibe una atención directa, discreta y responsable, con una comunicación clara en cada etapa.",
      quote: "El derecho, bien ejercido, aporta claridad.",
      quoteLabel: "Filosofía",
      methodLabel: "Cómo trabajamos",
      methodHeading: "Claridad en cada etapa",
      methodSub: "Tres principios que definen cada asunto que asumimos.",
      ctaTitle: "¿Hablamos de tu asunto?",
      ctaBody: "Solicita una consulta con CCD Legal Group.",
      ctaLabel: "Solicitar una consulta",
      chambersTitle: "Las salas",
      chambersIntro:
        "Un despacho boutique: una relación directa con la abogada que lleva tu asunto, de principio a fin.",
    },

    // ---------- Expertise page ----------
    expertisePage: {
      eyebrow: "Áreas de Práctica",
      titleLines: ["Áreas", "de Práctica"],
      lead: "Un asesoramiento claro, cercano y riguroso, pensado para personas y para empresas.",
      note: "Las áreas se actualizan conforme se confirman nuevas líneas de trabajo.",
      label: "Servicios",
      askLabel: "Consultar",
      indexLabel: "Índice",
    },

    // ---------- Carolina page ----------
    carolinaPage: {
      eyebrow: "El Despacho",
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
        "Carolina Cutilla Díaz es abogada, criminóloga y fundadora de CCD Legal Group, un despacho boutique de asesoría legal y de negocio en Madrid.",
      bioBody2:
        "Su trabajo se caracteriza por una lectura estratégica de cada asunto: entender el contexto, identificar el objetivo y construir una respuesta clara, precisa y adecuada a la realidad de cada persona o empresa.",
      note: "Perfil profesional — contenidos verificados",
      chambersTitle: "El despacho",
      chambersSub: "Rigor jurídico, cercanía y discreción en el centro de Madrid.",
    },

    // ---------- Insights page ----------
    insightsPage: {
      eyebrow: "Perspectivas",
      titleLines: ["Perspectivas", "recientes"],
      lead: "Una mirada editorial sobre derecho, criminología y estrategia de negocio, escrita desde la práctica.",
      emptyTitle: "Contenido en preparación",
      emptyBody:
        "Las primeras perspectivas se publicarán próximamente. Mientras tanto, puedes contactar con el despacho para cualquier consulta.",
      emptyCta: "Contactar",
    },

    // ---------- Contact page ----------
    contactPage: {
      eyebrow: "Contacto",
      titleLines: ["Hablemos", "de tu asunto"],
      lead: "Solicita una consulta con CCD Legal Group. Te responderemos con la mayor brevedad.",
      formName: "Nombre",
      formEmail: "Email",
      formPhone: "Teléfono (opcional)",
      formMessage: "¿En qué podemos ayudarte?",
      formSubmit: "Enviar consulta",
      formNote: "Al enviar, aceptas el tratamiento de tus datos para responder a tu consulta.",
      directLabel: "Contacto directo",
      callLabel: "Llamar",
      emailLabel: "Email",
      locationLabel: "Madrid",
      mailtoNote: "o escribe directamente a",
      officeLabel: "El despacho",
    },

    // ---------- Interstitial / UI ----------
    ui: {
      arrow: "Seguir",
      filed: "Expediente",
      pagedIn: "pág.",
    },
  },

  en: {
    // ---------- Metadata / SEO ----------
    meta: {
      homeTitle: "CCD Legal Group — Lawyers & Business Advisory in Madrid",
      homeDescription:
        "CCD Legal Group · Cutilla Díaz & Cons Abogados. Boutique legal and business advisory firm in Madrid. Legal rigour, a strategic view.",
      firmTitle: "The Chambers — CCD Legal Group",
      firmDescription:
        "The philosophy of CCD Legal Group: a boutique legal and business advisory firm in Madrid. Few voices, clarity and strategy.",
      expertiseTitle: "Practice Areas — CCD Legal Group",
      expertiseDescription:
        "Practice areas at CCD Legal Group: legal advisory, workplace accidents and traffic accidents, with a business view.",
      carolinaTitle: "Carolina Cutilla Díaz — Lawyer · Criminologist · Founder",
      carolinaDescription:
        "Carolina Cutilla Díaz, lawyer, criminologist and founder of CCD Legal Group, Madrid.",
      insightsTitle: "Perspectives — CCD Legal Group",
      insightsDescription:
        "Editorial perspectives on law, criminology and business strategy, written from practice.",
      contactTitle: "Contact — Book a consultation | CCD Legal Group",
      contactDescription:
        "Contact CCD Legal Group in Madrid. Request a consultation, call or email us.",
    },

    // ---------- Navigation ----------
    nav: {
      firm: "The Chambers",
      expertise: "Practice Areas",
      carolina: "Carolina",
      insights: "Perspectives",
      contact: "Contact",
      cta: "Talk to the firm",
      menu: "Menu",
      close: "Close",
      city: "Madrid",
    },

    // ---------- Hero (case-file opening) ----------
    hero: {
      filed: "File nº 001",
      city: "Madrid",
      district: "Chamberí · Serrano",
      est: "Boutique chambers",
      line1: "The law,",
      line2: "well practised,",
      line3: "brings",
      line4: "clarity.",
      ctaPrimary: "Request a consultation",
      ctaSecondary: "Meet the chambers",
      scroll: "Read the file",
      legal: "Legal",
      business: "Business",
      advisory: "& Advisory Firm",
    },

    // ---------- Opening statement ----------
    intro: {
      number: "001",
      statement:
        "Legal matters rarely exist in isolation. Behind every file there is a person, a business and a decision that matters.",
      body: "We approach every matter with legal rigour and a strategic reading: we understand the context, set the objective and build a clear, precise response shaped around your reality.",
      note: "Madrid — Legal & Business Advisory",
    },

    // ---------- The Firm / founder (home) ----------
    firm: {
      label: "The Chambers",
      title: "Carolina Cutilla Díaz",
      roles: "Lawyer · Criminologist",
      founder: "Founder",
      body: "Carolina Cutilla Díaz is a lawyer, criminologist and founder of CCD Legal Group, a boutique legal and business advisory firm in Madrid. She joins the rigour of law with a human understanding of every case.",
      link: "Full profile",
      rooms: "Few voices",
      roomsSub: "direct access, no intermediaries",
      chambers: "The chambers",
      chambersSub: "Chamberí · Madrid",
    },

    // ---------- Positioning ----------
    positioning: {
      label: "Positioning",
      heading1: "Two disciplines,",
      heading2: "one answer.",
      legalNo: "01",
      businessNo: "02",
      legalTitle: "Legal · The rigour",
      businessTitle: "Business · The view",
      legalBody:
        "A solid legal foundation that turns the complex into the clear, at every stage of the matter.",
      businessBody:
        "A business perspective that understands what is at stake, beyond the document.",
      note: "Legal & Business Advisory Firm",
      chambersNote:
        "Direction, strategy and legal knowledge in the service of your decision.",
    },

    // ---------- Expertise (clauses) ----------
    expertise: {
      label: "Practice Areas",
      headingTop: "Areas of",
      headingBottom: "Practice",
      intro: "Clear, close and rigorous counsel, in constant evolution.",
      clauseLabel: "Clause",
      consult: "Enquire",
    },

    // ---------- Matters / scope (ledger) ----------
    matters: {
      label: "Scope",
      heading1: "Matters that require",
      heading2: "more than an answer.",
      legend: "Personal · Professional · Business",
      col1Title: "Personal",
      col1Body:
        "Matters that touch your life, your family and your peace of mind. Handled with discretion and warmth.",
      col2Title: "Professional",
      col2Body:
        "Issues affecting your professional practice and the people who work with you.",
      col3Title: "Business",
      col3Body:
        "Decisions that define your business. Law in the service of what you want to build.",
      footnote: "Every matter is studied with strategic depth.",
    },

    // ---------- Carolina (human authority) ----------
    carolina: {
      label: "Founder",
      titleLine1: "Carolina",
      titleLine2: "Cutilla Díaz",
      role1: "Lawyer",
      role2: "Criminologist",
      role3: "Founder",
      body: "Lawyer, criminologist and founder of CCD Legal Group. She leads a boutique practice in Madrid where legal precision meets a human understanding of every case.",
      link: "View profile",
    },

    // ---------- Process (how we work) ----------
    process: {
      label: "Method",
      heading1: "How we",
      heading2: "work.",
      intro: "A clear process at every stage, so you always know where your matter stands.",
      steps: [
        {
          no: "01",
          title: "We listen",
          body: "Every case begins with understanding. First the person and the context, then the letter of the law.",
        },
        {
          no: "02",
          title: "We study",
          body: "We examine the matter in depth: applicable law, risk and the realistic options on the table.",
        },
        {
          no: "03",
          title: "We decide together",
          body: "We set the strategy together and communicate it clearly, at every stage of the file.",
        },
        {
          no: "04",
          title: "We act",
          body: "We execute with rigour and presence, keeping you informed to the resolution.",
        },
      ] as const,
    },

    // ---------- Trust (credential ledger) ----------
    trust: {
      label: "Trust",
      heading: "Trust is demonstrated, not declared.",
      intro:
        "What you can verify about us, without embellishment: a dual training, a boutique practice and a direct, accountable relationship.",
      rows: [
        {
          no: "01",
          title: "Practising lawyer",
          body: "Professional legal practice, registered and active in Madrid.",
        },
        {
          no: "02",
          title: "Criminologist",
          body: "Training that reads people and situations, not only files.",
        },
        {
          no: "03",
          title: "Founder",
          body: "Your own firm: one name, one responsibility, with you in front of us.",
        },
      ] as const,
      footnote: "Verifiable facts — no invented statistics or client logos.",
    },

    // ---------- Insights ----------
    insights: {
      label: "Perspectives",
      heading: "Latest perspectives",
      viewAll: "View all",
      sourceNote: "Editorial content on law, criminology and strategy.",
    },

    // ---------- Contact (footer band) ----------
    contact: {
      label: "Contact",
      heading1: "Let's discuss",
      heading2: "your matter.",
      sub: "Request a consultation with CCD Legal Group. We will reply as soon as possible.",
      call: "Call",
      email: "Email",
      location: "Madrid",
      ctaPrimary: "Request a consultation",
      ctaSecondary: "Send an email",
    },

    // ---------- Footer ----------
    footer: {
      tagline: "Legal & Business Advisory Firm",
      firm: "The Chambers",
      expertise: "Practice Areas",
      carolina: "Carolina",
      insights: "Perspectives",
      contact: "Contact",
      city: "Madrid",
      country: "Spain",
      instagram: "@ccd_legalgroup",
      copyright: "© CCD Legal Group",
      legalNote: "Cutilla Díaz & Cons Abogados",
      privacy: "Privacy",
      legalNotice: "Legal Notice",
      office: "The chambers",
      district: "Chamberí · Madrid",
    },

    // ---------- Firm page ----------
    firmPage: {
      eyebrow: "The Chambers",
      titleLines: ["The Chambers", "and its philosophy"],
      lead: "CCD Legal Group is a boutique legal and business advisory firm in Madrid. Few voices, clarity and strategy: that is how we work.",
      philosophyNo: "01",
      philosophyTitle: "Less noise, more clarity",
      philosophyBody:
        "We believe that law, well practised, brings clarity. Every matter is approached with rigour and a strategic view, understanding the context before responding.",
      approachNo: "02",
      approachTitle: "Strategy before formulas",
      approachBody:
        "The legal should not hold back what you want to build. We combine legal knowledge with a business perspective so every decision has a solid foundation.",
      commitmentNo: "03",
      commitmentTitle: "A commitment focused on you",
      commitmentBody:
        "Every matter receives direct, discreet and accountable attention, with clear communication at every stage.",
      quote: "The law, well practised, brings clarity.",
      quoteLabel: "Philosophy",
      methodLabel: "How we work",
      methodHeading: "Clarity at every stage",
      methodSub: "Three principles that define every matter we take on.",
      ctaTitle: "Shall we discuss your matter?",
      ctaBody: "Request a consultation with CCD Legal Group.",
      ctaLabel: "Request a consultation",
      chambersTitle: "The rooms",
      chambersIntro:
        "A boutique chambers: a direct relationship with the lawyer handling your matter, from start to finish.",
    },

    // ---------- Expertise page ----------
    expertisePage: {
      eyebrow: "Practice Areas",
      titleLines: ["Areas of", "Practice"],
      lead: "Clear, close and rigorous counsel, designed for individuals and businesses.",
      note: "Areas are updated as new lines of work are confirmed.",
      label: "Services",
      askLabel: "Enquire",
      indexLabel: "Index",
    },

    // ---------- Carolina page ----------
    carolinaPage: {
      eyebrow: "The Chambers",
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
        "Carolina Cutilla Díaz is a lawyer, criminologist and founder of CCD Legal Group, a boutique legal and business advisory firm in Madrid.",
      bioBody2:
        "Her work is defined by a strategic reading of every matter: understanding the context, identifying the objective and building a clear, precise response suited to the reality of each person or company.",
      note: "Professional profile — verified content",
      chambersTitle: "The chambers",
      chambersSub: "Legal rigour, warmth and discretion in the centre of Madrid.",
    },

    // ---------- Insights page ----------
    insightsPage: {
      eyebrow: "Perspectives",
      titleLines: ["Recent", "Perspectives"],
      lead: "An editorial view on law, criminology and business strategy, written from practice.",
      emptyTitle: "Content in preparation",
      emptyBody:
        "The first perspectives will be published shortly. In the meantime, you can contact the chambers for any query.",
      emptyCta: "Contact us",
    },

    // ---------- Contact page ----------
    contactPage: {
      eyebrow: "Contact",
      titleLines: ["Let's discuss", "your matter"],
      lead: "Request a consultation with CCD Legal Group. We will reply as soon as possible.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone (optional)",
      formMessage: "How can we help you?",
      formSubmit: "Send consultation",
      formNote: "By sending, you accept the processing of your data to respond to your query.",
      directLabel: "Direct contact",
      callLabel: "Call",
      emailLabel: "Email",
      locationLabel: "Madrid",
      mailtoNote: "or write directly to",
      officeLabel: "The chambers",
    },

    // ---------- Interstitial / UI ----------
    ui: {
      arrow: "Continue",
      filed: "File",
      pagedIn: "p.",
    },
  },
} as const;

export type Translation = typeof translations[Locale];

export function getDictionary(locale: Locale) {
  return translations[locale];
}
