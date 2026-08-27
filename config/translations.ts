import type { Locale } from "./site";

/**
 * CCD Legal Group — translation dictionary.
 *
 * Spanish (es) is primary and written at native, professional level; English
 * (en) is a faithful legal/business translation. No marketing fluff — precise,
 * concise, authoritative. Every user-facing string resolves through this file.
 */

export const translations = {
  es: {
    meta: {
      homeTitle: "CCD Legal Group — Abogados en Madrid | Asesoría Legal y de Negocio",
      homeDescription:
        "CCD Legal Group · Cutilla Díaz & Cons Abogados. Despacho de abogados en Madrid, Príncipe de Vergara. Asesoría legal y de negocio en derecho civil, penal, familia y extranjería.",
      firmTitle: "El Despacho — CCD Legal Group | Abogados en Madrid",
      firmDescription:
        "Conozca CCD Legal Group, despacho de abogados boutique en Madrid. Consejo legal y de negocio con rigor, discreción y perspectiva estratégica.",
      practicesTitle: "Áreas de Práctica — CCD Legal Group | Abogados en Madrid",
      practicesDescription:
        "Derecho civil, penal, de familia, extranjería y asesoría legal y de negocio en Madrid. Conozca las áreas de práctica de CCD Legal Group.",
      peopleTitle: "Abogados — CCD Legal Group | Carolina Cutilla Díaz",
      peopleDescription:
        "Carolina Cutilla Díaz, abogada, criminóloga y fundadora de CCD Legal Group, despacho en Madrid.",
      insightsTitle: "Perspectivas — CCD Legal Group | Abogados en Madrid",
      insightsDescription:
        "Perspectivas sobre derecho, criminología y estrategia de negocio escritas desde la práctica de CCD Legal Group en Madrid.",
      contactTitle: "Contacto — CCD Legal Group | Abogados en Madrid",
      contactDescription:
        "Contacte con CCD Legal Group en Madrid, Príncipe de Vergara 132. Solicite una consulta, llámenos o escríbanos por email.",
      legalTitle: "Aviso Legal — CCD Legal Group",
      legalDescription: "Aviso legal del sitio web de CCD Legal Group.",
      privacyTitle: "Política de Privacidad — CCD Legal Group",
      privacyDescription: "Política de privacidad de CCD Legal Group.",
    },

    nav: {
      about: "El Despacho",
      practices: "Práctica",
      people: "Abogados",
      insights: "Perspectivas",
      contact: "Contacto",
      cta: "Contacto",
      menu: "Menú",
      close: "Cerrar",
      city: "Madrid",
      back: "Volver",
      search: "Buscar",
      openSearch: "Abrir búsqueda",
      closeSearch: "Cerrar búsqueda",
      searchPlaceholder: "Buscar prácticas, abogados, perspectivas…",
      searchHint: "Introduzca un término para buscar en el despacho.",
      searchResults: "Resultados",
      searchNone: "Sin resultados",
      searchNoneBody: "No hemos encontrado coincidencias. Pruebe con otro término o contacte con el despacho.",
      searchPractice: "Práctica",
      searchPeople: "Personas",
      searchInsight: "Perspectiva",
      searchPage: "Página",
      searchGo: "Abrir",
    },

    footer: {
      desc: "Despacho de abogados y asesoría de negocio en Madrid. Consejo riguroso, mirada estratégica y atención directa.",
      office: "Oficina",
      contactHeading: "Contacto",
      legalHeading: "Legal",
      addressLine1: "Príncipe de Vergara 132",
      addressLine2: "28002 Madrid, España",
      instagram: "Instagram",
      emailLabel: "Email",
      legalNote: "Despacho legal inscrito y sujeto a la normativa española de colegiación.",
      copyright: "CCD Legal Group — Cutilla Díaz & Cons Abogados.",
      rights: "Todos los derechos reservados.",
      legalNotice: "Aviso Legal",
      privacy: "Política de Privacidad",
      toTop: "Volver arriba",
      practiceAreas: [
        "Derecho Civil",
        "Derecho Penal",
        "Derecho de Familia",
        "Derecho de Extranjería",
        "Asesoría Legal y de Negocio",
      ],
    },

    hero: {
      eyebrow: "Abogados y Asesoría de Negocio — Madrid",
      headline1: "Consejo jurídico",
      headline2: "para asuntos complejos.",
      headlineAccent: "para asuntos complejos.",
      body: "CCD Legal Group presta consejo y representación estratégica en derecho civil, penal, de familia, extranjería y asesoría de negocio. Un despacho en Madrid con atención directa y rigurosa a cada cliente.",
      ctaPrimary: "Conocer las áreas de práctica",
      ctaSecondary: "Contactar con el despacho",
      location: "Príncipe de Vergara 132 · 28002 Madrid",
      scroll: "Descubrir",
    },

    firmIntro: {
      eyebrow: "El Despacho",
      heading: "Acerca de",
      headingAccent: "CCD Legal Group.",
      body1:
        "CCD Legal Group es un despacho de abogados y asesoría de negocio con sede en Madrid. Prestamos consejo jurídico y representación en asuntos de derecho civil, penal, de familia y extranjería, y acompañamos a personas, familias, profesionales y empresas en sus decisiones legales y de negocio.",
      body2:
        "Nuestra forma de trabajar combina el análisis jurídico con la visión estratégica y la atención cercana. Cada materia recibe un interlocutor directo y una respuesta clara y orientada a resultados.",
      metaTitle: "Madrid · España",
      meta1: "Legal",
      meta2: "Business",
      meta3: "& Advisory",
      cta: "Conocer el despacho",
      ctaHref: "/firm",
    },

    practices: {
      eyebrow: "Áreas de Práctica",
      heading: "Áreas de práctica",
      headingAccent: "principales",
      intro:
        "El trabajo del despacho se organiza en cinco áreas que responden a las necesidades reales de personas y empresas: civiles, penales, de familia, de extranjería y de negocio.",
      servicesLabel: "Ámbitos de actuación",
      consult: "Consultar un asunto",
      explore: "Explorar esta área",
      slideLabel: "Práctica",
      note:
        "Los ámbitos descritos son orientativos y pueden ajustarse a las circunstancias concretas de cada asunto.",
    },

    advisory: {
      eyebrow: "Asesoría de Negocio",
      heading: "El consejo legal",
      headingAccent: "con perspectiva de negocio.",
      body1:
        "CCD Legal Group combina el consejo jurídico con una lectura empresarial de cada situación. No nos limitamos a valorar la legalidad: entendemos la decisión, el riesgo y el contexto comercial.",
      body2:
        "Este enfoque permite anticipar problemas, estructurar mejor los acuerdos y tomar decisiones con mayor seguridad.",
      cta: "Plantear una cuestión de negocio",
      points: [
        { no: "01", title: "Decisiones de negocio", body: "Contrastamos la viabilidad jurídica con el impacto comercial antes de actuar." },
        { no: "02", title: "Contratos", body: "Redacción y revisión de contratos orientada a prevenir controversias." },
        { no: "03", title: "Asuntos mercantiles", body: "Acompañamiento en operaciones y relaciones comerciales." },
        { no: "04", title: "Riesgo legal", body: "Identificación temprana del riesgo para reducir incertidumbre." },
        { no: "05", title: "Consejo estratégico", body: "Una lectura a medio plazo de los asuntos legales y de negocio." },
        { no: "06", title: "Perspectiva transfronteriza", body: "Sensibilidad internacional para clientes y asuntos multinacionales." },
      ],
    },

    people: {
      eyebrow: "Abogados",
      heading: "Nuestro equipo",
      headingAccent: "de abogados.",
      sub: "Un despacho boutique se define por la calidad de sus profesionales. Conozca quién lidera CCD Legal Group.",
      name: "Carolina Cutilla Díaz",
      role: "Abogada · Criminóloga · Fundadora",
      roleLabel1: "Abogada",
      roleLabel2: "Criminóloga",
      roleLabel3: "Fundadora",
      practiceLabel: "Áreas",
      practiceValue: "Civil · Penal · Familia · Extranjería · Asesoría",
      locationLabel: "Ubicación",
      locationValue: "Madrid, España",
      bio:
        "Carolina Cutilla Díaz es abogada y criminóloga, fundadora de CCD Legal Group. Dirige el despacho con un enfoque en el consejo directo, el rigor técnico y la comprensión profunda de cada cliente.",
      bio2:
        "Su recorrido combina el ejercicio del derecho con la mirada criminológica, lo que aporta una lectura distinta de los conflictos y de la estrategia procesal.",
      cta: "Contactar con el despacho",
      profileNote:
        "Perfil profesional. Los datos de formación y colegiación se actualizarán de forma verificada.",
    },

    why: {
      eyebrow: "Por qué CCD",
      heading: "Cómo trabajamos",
      headingAccent: "con cada cliente.",
      intro:
        "La diferencia de un despacho no está en el número de asuntos, sino en la calidad del consejo y en la relación que establece con cada cliente. Estos son los principios que guían nuestra práctica.",
      note: "Valores del despacho. No publicamos cifras ni resultados que no estén verificados.",
      items: [
        { no: "01", title: "Consejo personalizado", body: "Cada asunto recibe una estrategia a medida, adaptada al cliente y a sus objetivos reales." },
        { no: "02", title: "Enfoque estratégico", body: "Anticipamos escenarios y planificamos la decisión antes de actuar." },
        { no: "03", title: "Consejo multidisciplinar", body: "Coordinamos las distintas ramas del derecho para ofrecer una solución integral." },
        { no: "04", title: "Comprensión del negocio", body: "Entendemos lo que está en juego más allá de lo jurídico para cuidar también los intereses comerciales." },
        { no: "05", title: "Acceso directo", body: "El cliente habla siempre con el abogado, sin intermediarios ni esperas." },
        { no: "06", title: "Confidencialidad", body: "Discreción absoluta en toda la información que nos confía." },
      ],
    },

    insights: {
      eyebrow: "Perspectivas",
      heading: "Perspectivas",
      headingAccent: "del despacho",
      viewAll: "Ver todas las perspectivas",
      categoryLabel: "Categoría",
      titleLabel: "Perspectiva",
      dateLabel: "Fecha",
      readLabel: "Leer",
      sourceNote: "Contenido editorial del despacho.",
      emptyTitle: "Perspectivas próximamente",
      emptyBody:
        "Publicaremos artículos y análisis sobre derecho, criminología y negocio escritos desde la práctica. Hasta entonces, puede conocer cómo trabajamos.",
      emptyCta: "Conocer el despacho",
    },

    madrid: {
      eyebrow: "Madrid",
      heading: "El despacho,",
      headingAccent: "en Madrid.",
      body:
        "Madrid forma parte de nuestra identidad. Desde Chamberí ofrecemos consejo local con sensibilidad internacional.",
      addressLabel: "Oficina",
      street: "Príncipe de Vergara 132",
      cityCountry: "28002 Madrid, España",
      phoneLabel: "Teléfono",
      emailLabel: "Email",
      ctaContact: "Contactar con el despacho",
      ctaMap: "Ver en el mapa",
      mapsUrl: "https://maps.google.com/?q=Príncipe+de+Vergara+132,+Madrid",
    },

    contact: {
      eyebrow: "Contacto",
      heading1: "Contacte con",
      heading2: "CCD Legal Group.",
      body:
        "Cuéntenos su asunto. Puede escribirnos mediante el formulario o contactar directamente con el despacho; responderemos con la máxima confidencialidad.",
      callLabel: "Teléfono",
      emailLabel: "Email",
      locationLabel: "Oficina",
      locationValue: "Príncipe de Vergara 132, 28002 Madrid",
      directLabel: "Contacto directo",
      cta: "Contactar con CCD Legal Group",
      ctaSecondary: "despacho@abogadoscutilladiaz.es",
      formTitle: "Envíe su consulta",
      note: "Sus datos se tratan de forma confidencial y únicamente para responder a su consulta.",
    },

    form: {
      nameLabel: "Nombre completo",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      matterLabel: "Tipo de asunto",
      messageLabel: "Mensaje",
      submit: "Enviar consulta",
      privacyNote: "Al enviar, acepta el tratamiento de sus datos conforme a nuestra política de privacidad.",
      disclaimer:
        "El envío de información a través de este formulario no crea una relación abogado-cliente. No facilite información confidencial hasta que no se haya constituido formalmente la relación profesional.",
    },

    firmPage: {
      eyebrow: "El Despacho",
      titleLines: ["Acerca de", "CCD Legal Group."],
      lead:
        "CCD Legal Group es un despacho de abogados y asesoría de negocio con sede en Madrid. Prestamos consejo jurídico y representación, combinando el análisis legal con la visión estratégica y la atención cercana.",
      philosophyHeading: "Una forma de ejercer",
      philosophyHeadingAccent: "la abogacía",
      philosophyIntro:
        "Nuestra manera de trabajar se apoya en principios sencillos que aplicamos a cada asunto.",
      philosophyItems: [
        { no: "01", title: "Rigor técnico", body: "Fundamento jurídico sólido en cada consejo y en cada escrito." },
        { no: "02", title: "Claridad", body: "Explicamos el asunto en un lenguaje que se entiende y se actúa." },
        { no: "03", title: "Discreción", body: "Confidencialidad y prudencia en toda relación profesional." },
        { no: "04", title: "Compromiso", body: "Asumimos cada asunto como propio y respondemos con celeridad." },
      ],
      cta: "Contactar con el despacho",
    },

    practicesPage: {
      eyebrow: "Áreas de Práctica",
      titleLines: ["Áreas de", "práctica principales."],
      lead:
        "El trabajo del despacho se organiza en cinco áreas que responden a las necesidades reales de personas y empresas en Madrid.",
    },

    peoplePage: {
      eyebrow: "Abogados",
      titleLines: ["Nuestro equipo", "de abogados."],
      lead:
        "Un despacho se define por la calidad de sus profesionales. Conozca quién lidera CCD Legal Group.",
    },

    insightsPage: {
      eyebrow: "Perspectivas",
      titleLines: ["Perspectivas", "del despacho."],
      lead:
        "Análisis y comentarios sobre derecho, criminología y negocio, escritos desde la práctica diaria.",
    },

    contactPage: {
      eyebrow: "Contacto",
      titleLines: ["Contacte con", "CCD Legal Group."],
      lead:
        "Cuéntenos su asunto. Complete el formulario o contacte directamente; atendemos su consulta con la máxima confidencialidad.",
      directLabel: "Contacto directo",
      callLabel: "Teléfono",
      emailLabel: "Email",
      locationLabel: "Oficina",
      mapTitle: "Encuéntrenos en Madrid",
      mapAddress: "Príncipe de Vergara 132, 28002 Madrid",
    },

    legal: {
      eyebrow: "Aviso Legal",
      titleLines: ["Aviso", "Legal"],
      bodyTitle: "Identificación",
      body1:
        "El presente aviso legal regula el uso del sitio web de CCD Legal Group — Cutilla Díaz & Cons Abogados.",
      bodyTitle2: "Datos del titular",
      body2:
        "Cutilla Díaz & Cons Abogados, con domicilio profesional en Príncipe de Vergara 132, 28002 Madrid, España.",
      bodyTitle3: "Propiedad intelectual",
      body3:
        "Todos los contenidos de este sitio web son titularidad del despacho y no pueden reproducirse sin autorización.",
      bodyTitle4: "Responsabilidad",
      body4:
        "La información publicada tiene carácter general y no constituye asesoramiento jurídico. No establece relación profesional entre abogado y cliente.",
    },

    privacy: {
      eyebrow: "Privacidad",
      titleLines: ["Política de", "Privacidad"],
      bodyTitle: "Responsable del tratamiento",
      body1:
        "Cutilla Díaz & Cons Abogados, Príncipe de Vergara 132, 28002 Madrid, España.",
      bodyTitle2: "Finalidad",
      body2:
        "Los datos recogidos a través de este sitio se utilizan únicamente para atender consultas y, en su caso, prestar los servicios solicitados.",
      bodyTitle3: "Legitimación",
      body3: "El tratamiento se basa en el consentimiento del interesado y, en su caso, en la relación contractual.",
      bodyTitle4: "Derechos",
      body4:
        "Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo al despacho.",
    },
  },

  en: {
    meta: {
      homeTitle: "CCD Legal Group — Law Firm in Madrid | Legal & Business Advisory",
      homeDescription:
        "CCD Legal Group · Cutilla Díaz & Cons Abogados. Law firm in Madrid, Príncipe de Vergara. Legal and business advisory across civil, criminal, family and immigration law.",
      firmTitle: "The Firm — CCD Legal Group | Law Firm in Madrid",
      firmDescription:
        "Meet CCD Legal Group, a boutique law firm in Madrid. Legal and business counsel delivered with rigour, discretion and strategic perspective.",
      practicesTitle: "Practice Areas — CCD Legal Group | Law Firm in Madrid",
      practicesDescription:
        "Civil, criminal, family and immigration law plus business and legal advisory in Madrid. Explore CCD Legal Group's practice areas.",
      peopleTitle: "Lawyers — CCD Legal Group | Carolina Cutilla Díaz",
      peopleDescription:
        "Carolina Cutilla Díaz, lawyer, criminologist and founder of CCD Legal Group, a law firm in Madrid.",
      insightsTitle: "Insights — CCD Legal Group | Law Firm in Madrid",
      insightsDescription:
        "Perspectives on law, criminology and business strategy written from the practice of CCD Legal Group in Madrid.",
      contactTitle: "Contact — CCD Legal Group | Law Firm in Madrid",
      contactDescription:
        "Contact CCD Legal Group in Madrid, Príncipe de Vergara 132. Request a consultation, call or email us.",
      legalTitle: "Legal Notice — CCD Legal Group",
      legalDescription: "Legal notice for the CCD Legal Group website.",
      privacyTitle: "Privacy Policy — CCD Legal Group",
      privacyDescription: "Privacy policy of CCD Legal Group.",
    },

    nav: {
      about: "About",
      practices: "Practices",
      people: "People",
      insights: "Insights",
      contact: "Contact",
      cta: "Contact us",
      menu: "Menu",
      close: "Close",
      city: "Madrid",
      back: "Back",
      search: "Search",
      openSearch: "Open search",
      closeSearch: "Close search",
      searchPlaceholder: "Search practices, lawyers, insights…",
      searchHint: "Enter a term to search across the firm.",
      searchResults: "Results",
      searchNone: "No results",
      searchNoneBody: "We found no matches. Try another term or contact the firm.",
      searchPractice: "Practice",
      searchPeople: "People",
      searchInsight: "Insight",
      searchPage: "Page",
      searchGo: "Open",
    },

    footer: {
      desc: "A law and business advisory firm in Madrid. Rigorous counsel, a strategic view and direct attention.",
      office: "Office",
      contactHeading: "Contact",
      legalHeading: "Legal",
      addressLine1: "Príncipe de Vergara 132",
      addressLine2: "28002 Madrid, Spain",
      instagram: "Instagram",
      emailLabel: "Email",
      legalNote: "A legal practice governed by Spanish professional regulations.",
      copyright: "CCD Legal Group — Cutilla Díaz & Cons Abogados.",
      rights: "All rights reserved.",
      legalNotice: "Legal Notice",
      privacy: "Privacy Policy",
      toTop: "Back to top",
      practiceAreas: [
        "Civil Law",
        "Criminal Law",
        "Family Law",
        "Immigration Law",
        "Business & Legal Advisory",
      ],
    },

    hero: {
      eyebrow: "Legal & Business Advisory — Madrid",
      headline1: "Legal counsel",
      headline2: "for complex matters.",
      headlineAccent: "for complex matters.",
      body: "CCD Legal Group provides strategic legal representation across civil, criminal, family and immigration law, together with business and legal advisory. A Madrid firm offering direct, rigorous attention to every client.",
      ctaPrimary: "Explore our practice areas",
      ctaSecondary: "Contact the firm",
      location: "Príncipe de Vergara 132 · 28002 Madrid",
      scroll: "Discover",
    },

    firmIntro: {
      eyebrow: "The Firm",
      heading: "About",
      headingAccent: "CCD Legal Group.",
      body1:
        "CCD Legal Group is a law and business advisory firm based in Madrid. We provide legal counsel and representation across civil, criminal, family and immigration law, and support individuals, families, professionals and companies in their wider legal and business decisions.",
      body2:
        "Our approach combines legal analysis with strategic thinking and close client attention. Every matter is handled by a direct contact, with a clear analysis and a response focused on outcomes.",
      metaTitle: "Madrid · Spain",
      meta1: "Legal",
      meta2: "Business",
      meta3: "& Advisory",
      cta: "About the firm",
      ctaHref: "/firm",
    },

    practices: {
      eyebrow: "Practice Areas",
      heading: "Practice areas",
      headingAccent: "principal",
      intro:
        "Our work is organised across five principal areas responding to the real needs of individuals and companies: civil, criminal, family, immigration and business.",
      servicesLabel: "Areas of work",
      consult: "Consult a matter",
      explore: "Explore this area",
      slideLabel: "Practice",
      note:
        "The areas described are indicative and can be adjusted to the specific circumstances of each matter.",
    },

    advisory: {
      eyebrow: "Business Advisory",
      heading: "Legal counsel",
      headingAccent: "with a business view.",
      body1:
        "CCD Legal Group combines legal counsel with a business reading of each situation. We do not simply assess legality — we understand the decision, the risk and the commercial context.",
      body2:
        "This approach lets us anticipate issues, structure agreements better and make decisions with greater confidence.",
      cta: "Raise a business question",
      points: [
        { no: "01", title: "Business decisions", body: "We weigh legal feasibility against commercial impact before acting." },
        { no: "02", title: "Contracts", body: "Drafting and review of contracts designed to prevent disputes." },
        { no: "03", title: "Commercial matters", body: "Support across transactions and commercial relationships." },
        { no: "04", title: "Legal risk", body: "Early identification of risk to reduce uncertainty." },
        { no: "05", title: "Strategic counsel", body: "A medium-term reading of legal and business matters." },
        { no: "06", title: "Cross-border perspective", body: "International sensitivity for clients and multinational matters." },
      ],
    },

    people: {
      eyebrow: "People",
      heading: "Our team",
      headingAccent: "of lawyers.",
      sub: "A boutique firm is defined by the calibre of its professionals. Meet who leads CCD Legal Group.",
      name: "Carolina Cutilla Díaz",
      role: "Lawyer · Criminologist · Founder",
      roleLabel1: "Lawyer",
      roleLabel2: "Criminologist",
      roleLabel3: "Founder",
      practiceLabel: "Practice",
      practiceValue: "Civil · Criminal · Family · Immigration · Advisory",
      locationLabel: "Location",
      locationValue: "Madrid, Spain",
      bio:
        "Carolina Cutilla Díaz is a lawyer and criminologist and the founder of CCD Legal Group. She leads the firm with a focus on direct counsel, technical rigour and a deep understanding of each client.",
      bio2:
        "Her career combines the practice of law with a criminological perspective, bringing a distinct reading of conflicts and of procedural strategy.",
      cta: "Contact the firm",
      profileNote:
        "Professional profile. Verified details of education and bar membership will be added as they are confirmed.",
    },

    why: {
      eyebrow: "Why CCD",
      heading: "How we work",
      headingAccent: "with each client.",
      intro:
        "A firm's difference lies not in the number of matters but in the quality of the counsel and the relationship it builds with each client. These are the principles that guide our practice.",
      note: "Firm values. We do not publish figures or outcomes that are not verified.",
      items: [
        { no: "01", title: "Personalised counsel", body: "Every matter receives a tailored strategy, adapted to the client and to their real objectives." },
        { no: "02", title: "Strategic approach", body: "We anticipate scenarios and plan the decision before acting." },
        { no: "03", title: "Multidisciplinary advice", body: "We coordinate across the branches of law to deliver an integrated solution." },
        { no: "04", title: "Business understanding", body: "We see beyond the legal to protect commercial interests as well." },
        { no: "05", title: "Direct client access", body: "The client always speaks with the lawyer — no intermediaries, no waiting." },
        { no: "06", title: "Confidentiality", body: "Absolute discretion in all information entrusted to us." },
      ],
    },

    insights: {
      eyebrow: "Insights",
      heading: "Insights",
      headingAccent: "from the firm",
      viewAll: "View all insights",
      categoryLabel: "Category",
      titleLabel: "Perspective",
      dateLabel: "Date",
      readLabel: "Read",
      sourceNote: "Editorial content of the firm.",
      emptyTitle: "Insights coming soon",
      emptyBody:
        "We will publish articles and analysis on law, criminology and business written from practice. In the meantime, you can learn how we work.",
      emptyCta: "About the firm",
    },

    madrid: {
      eyebrow: "Madrid",
      heading: "The firm,",
      headingAccent: "in Madrid.",
      body:
        "Madrid is part of our identity. From Chamberí we offer local counsel with an international sensibility.",
      addressLabel: "Office",
      street: "Príncipe de Vergara 132",
      cityCountry: "28002 Madrid, Spain",
      phoneLabel: "Telephone",
      emailLabel: "Email",
      ctaContact: "Contact the firm",
      ctaMap: "View on the map",
      mapsUrl: "https://maps.google.com/?q=Príncipe+de+Vergara+132,+Madrid",
    },

    contact: {
      eyebrow: "Contact",
      heading1: "Contact",
      heading2: "CCD Legal Group.",
      body:
        "Tell us about your legal matter. Complete the form or contact the firm directly; we respond with complete confidentiality.",
      callLabel: "Telephone",
      emailLabel: "Email",
      locationLabel: "Office",
      locationValue: "Príncipe de Vergara 132, 28002 Madrid",
      directLabel: "Direct contact",
      cta: "Contact CCD Legal Group",
      ctaSecondary: "despacho@abogadoscutilladiaz.es",
      formTitle: "Send your enquiry",
      note: "Your details are treated confidentially and used only to respond to your enquiry.",
    },

    form: {
      nameLabel: "Full name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      matterLabel: "Matter type",
      messageLabel: "Message",
      submit: "Send enquiry",
      privacyNote: "By sending, you accept the processing of your data in accordance with our privacy policy.",
      disclaimer:
        "Submitting information through this form does not create an attorney-client relationship. Do not send confidential information until a professional relationship has been formally established.",
    },

    firmPage: {
      eyebrow: "The Firm",
      titleLines: ["About", "CCD Legal Group."],
      lead:
        "CCD Legal Group is a law and business advisory firm based in Madrid. We provide legal counsel and representation, combining legal analysis with strategic thinking and close client attention.",
      philosophyHeading: "A way of practising",
      philosophyHeadingAccent: "the law",
      philosophyIntro:
        "Our way of working rests on simple principles applied to every matter.",
      philosophyItems: [
        { no: "01", title: "Technical rigour", body: "Solid legal foundation in every piece of advice and every submission." },
        { no: "02", title: "Clarity", body: "We explain the matter in language that is understood and acted upon." },
        { no: "03", title: "Discretion", body: "Confidentiality and prudence in every professional relationship." },
        { no: "04", title: "Commitment", body: "We treat each matter as our own and respond with speed." },
      ],
      cta: "Contact the firm",
    },

    practicesPage: {
      eyebrow: "Practice Areas",
      titleLines: ["Principal", "practice areas."],
      lead:
        "Our work is organised across five areas that respond to the real needs of individuals and companies in Madrid.",
    },

    peoplePage: {
      eyebrow: "People",
      titleLines: ["Our team", "of lawyers."],
      lead:
        "A firm is defined by the calibre of its professionals. Meet who leads CCD Legal Group.",
    },

    insightsPage: {
      eyebrow: "Insights",
      titleLines: ["Insights", "from the firm."],
      lead:
        "Analysis and commentary on law, criminology and business, written from daily practice.",
    },

    contactPage: {
      eyebrow: "Contact",
      titleLines: ["Contact", "CCD Legal Group."],
      lead:
        "Tell us about your legal matter. Complete the form or contact us directly; we handle your enquiry with complete confidentiality.",
      directLabel: "Direct contact",
      callLabel: "Telephone",
      emailLabel: "Email",
      locationLabel: "Office",
      mapTitle: "Find us in Madrid",
      mapAddress: "Príncipe de Vergara 132, 28002 Madrid",
    },

    legal: {
      eyebrow: "Legal Notice",
      titleLines: ["Legal", "Notice"],
      bodyTitle: "Identification",
      body1:
        "This legal notice governs the use of the website of CCD Legal Group — Cutilla Díaz & Cons Abogados.",
      bodyTitle2: "Owner details",
      body2:
        "Cutilla Díaz & Cons Abogados, registered at Príncipe de Vergara 132, 28002 Madrid, Spain.",
      bodyTitle3: "Intellectual property",
      body3:
        "All content on this website is owned by the firm and may not be reproduced without authorisation.",
      bodyTitle4: "Liability",
      body4:
        "The information published is general in nature and does not constitute legal advice. It creates no professional relationship between lawyer and client.",
    },

    privacy: {
      eyebrow: "Privacy",
      titleLines: ["Privacy", "Policy"],
      bodyTitle: "Data controller",
      body1:
        "Cutilla Díaz & Cons Abogados, Príncipe de Vergara 132, 28002 Madrid, Spain.",
      bodyTitle2: "Purpose",
      body2:
        "Data collected through this site is used solely to respond to enquiries and, where applicable, to provide the requested services.",
      bodyTitle3: "Legal basis",
      body3: "Processing is based on the data subject's consent and, where applicable, on the contractual relationship.",
      bodyTitle4: "Rights",
      body4:
        "You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to the firm.",
    },
  },
};

export type Dictionary = typeof translations.es;

export function getDictionary(locale: Locale): Dictionary {
  return translations[locale];
}
