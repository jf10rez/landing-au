import type en from "./en";

const es: typeof en = {
  meta: {
    home: {
      title: "Ilaxus | Contrata empleados digitales con IA",
      description:
        "Empleados digitales con IA para ventas, marketing, finanzas y más. Incorpora especialistas que trabajan para tu negocio 24/7 y potencia tu equipo.",
      keywords: [
        "automatización con IA",
        "workflows n8n",
        "automatización ventas",
        "reporting automático marketing",
        "agentes de IA",
        "automatización para agencias",
        "pipeline de ventas automático",
      ],
    },
    catalog: {
      title: "Empleados Digitales IA — Ilaxus",
      description:
        "Catálogo de empleados digitales basados en IA por categoría: ventas, marketing, contenido, legal, finanzas, e-commerce, operaciones y más. Desde $3 USD/mes.",
      ogTitle: "Empleados Digitales IA — Ilaxus",
      ogDescription:
        "Contrata talento IA especializado desde $3 USD/mes. Agentes de ventas, marketing, contenido y más, operando 24/7. Precios en USD y COP.",
    },
  },
  nav: {
    links: [
      { href: "/#productos", label: "Productos" },
      { href: "/catalogo", label: "Catálogo" },
      { href: "/#como-funciona", label: "Cómo funciona" },
      { href: "/#casos", label: "Casos" },
      { href: "/#pricing", label: "Agendar" },
    ],
    cta: "Agendar llamada",
    ctaShort: "Agendar",
  },
  hero: {
    title: "Automatización de procesos sin plantillas.",
    subtitle:
      "Workflows con IA que se acoplan a tu arquitectura. n8n, agentes personalizados y APIs — sin forzar herramientas que no necesitas.",
    ctaPrimary: "Agendar una llamada",
    ctaSecondary: "Ver cómo funciona",
  },
  socialProof: {
    eyebrow: "Equipos que ya operan sin fricción",
  },
  productsSection: {
    eyebrow: "Productos",
    title: "Tres formas de recuperar tu tiempo. Elige la tuya.",
  },
  productCategories: {
    comercial: "Automatización comercial",
    marketing: "Marketing",
    openclaw: "Agente de IA",
    empleadoIa: "Empleado IA",
    b2b: "Automatización B2B",
    agency: "Automatización para Agencias",
  },
  carousel: {
    regionLabel: "Carrusel de productos",
    regionRole: "carrusel",
    prevAria: "Producto anterior",
    nextAria: "Siguiente producto",
    tablistLabel: "Seleccionar producto",
    slideRole: "diapositiva",
    slideAria: "{{title}} — diapositiva {{index}} de {{count}}",
  },
  products: {
    viewAgent: "Ver agente",
    comercial: {
      title: "Más deals cerrados. Menos horas perdidas en pantallas.",
      description:
        "Leads que llegan enriquecidos, pipeline que se mueve solo, seguimiento automático. Tu equipo deja de copiar y pegar datos entre pantallas y empieza a vender de verdad.",
      features: [
        "Leads que llegan calificados — sin data entry manual",
        "Secuencias de email que se disparan en el momento exacto",
        "CRM que se actualiza solo — sin abrirlo",
        "Alertas que avisan solo cuando hay oportunidad real",
      ],
      ctaLabel: "Ver para equipos comerciales",
    },
    marketing: {
      title: "Reportes que se escriben solos. Contenido que se publica solo.",
      description:
        "Conecta Meta Ads, Google Ads y Analytics en un workflow. Dashboards multi-cliente que se actualizan sin que nadie exporte CSVs a las 11 de la noche.",
      features: [
        "Dashboards multi-cliente que se refrescan en automático",
        "Contenido con IA que pasa de idea a publicación sin edición",
        "Campañas que se optimizan mientras tu equipo duerme",
        "Publicación cross-platform en un clic — sin loguearte en cada red",
      ],
      ctaLabel: "Ver para agencias",
    },
    openclaw: {
      title: "Agente de IA personal 24/7",
      description:
        "Tu asistente de IA privado, siempre activo y desplegable en 60 segundos. Se conecta a Telegram y WhatsApp para automatizar tus tareas diarias sin mantenimiento.",
      features: [
        "Despliegue en 1 clic — sin configuración técnica",
        "Integración con Telegram y WhatsApp",
        "Créditos de IA preinstalados",
        "Entorno privado y seguro por defecto",
        "Cero mantenimiento — actualizaciones automáticas",
        "Bandeja de entrada propia para tu agente",
      ],
      ctaLabel: "Ver plan OpenClaw",
    },
  },
  howItWorks: {
    eyebrow: "Proceso",
    title: "Cómo automatizamos tus procesos",
    steps: [
      {
        number: "01",
        title: "Diagnóstico Operativo",
        description:
          "Mapeamos tus procesos actuales. Identificamos los puntos donde el tiempo se pierde y el dinero se filtra.",
      },
      {
        number: "02",
        title: "Construcción del Workflow",
        description:
          "Diseñamos el flujo con n8n, agentes de IA y las APIs de tus herramientas. Cada nodo tiene un propósito medible.",
      },
      {
        number: "03",
        title: "Entrega y Monitoreo",
        description:
          "No te dejamos solo. Entregamos el sistema documentado, capacitamos a tu equipo y monitoreamos que los números mejoren.",
      },
    ],
  },
  stack: {
    eyebrow: "Stack Tecnológico",
    title: "Integramos las herramientas que ya usas",
    description:
      "Conectamos n8n, agentes de IA y las plataformas de tu negocio sin romper lo que funciona.",
    footer:
      "¿No ves tu herramienta? Si tiene API, la integramos. También trabajamos con conectores privados y endpoints personalizados.",
    categories: {
      Orchestration: "Orquestación",
      "AI Agent": "Agente IA",
      Automation: "Automatización",
      CRM: "CRM",
      Comms: "Comunicaciones",
      Database: "Base de datos",
      Workspace: "Espacio de trabajo",
    },
  },
  useCases: {
    eyebrow: "Resultados",
    title: "Números que importan",
    problemLabel: "Problema",
    solutionLabel: "Solución",
    items: [
      {
        id: "saas-b2b",
        clientType: "SaaS B2B",
        problem:
          "El equipo de ventas perdía 12 horas semanales en data entry y seguimiento de leads.",
        solution:
          "Workflow de prospección automática: enriquecimiento de contactos, scoring, secuencias de email y sincronización con HubSpot.",
        metrics: [
          { label: "horas ahorradas / semana", value: 12, suffix: "h" },
          { label: "aumento en respuesta", value: 34, suffix: "%" },
        ],
      },
      {
        id: "marketing-agency",
        clientType: "Agencia de Marketing",
        problem:
          "10 clientes, 10 reportes manuales. El equipo no escalaba.",
        solution:
          "Pipeline de reporting automatizado: extracción de datos de Meta Ads, Google Ads y Analytics, generación de PDF y envío programado.",
        metrics: [
          { label: "reportes automatizados / mes", value: 120, suffix: "" },
          { label: "reducción de tiempo", value: 85, suffix: "%" },
        ],
      },
      {
        id: "ecommerce",
        clientType: "E-commerce",
        problem:
          "Abandono de carrito sin recuperación. Stock desactualizado entre canales.",
        solution:
          "Workflow de recuperación de carrito + sincronización de inventario entre Shopify, Amazon y ERP en tiempo real.",
        metrics: [
          { label: "recuperación de carrito", value: 18, suffix: "%" },
          { label: "errores de stock", value: 0, suffix: "" },
        ],
      },
    ],
  },
  pricing: {
    eyebrow: "Primer paso",
    title: "Solicita un diagnóstico gratuito",
    description:
      "Cuéntanos qué proceso quieres automatizar y te contactaremos en menos de 24 horas.",
    cardTitle: "Diagnóstico gratuito",
    cardDescription:
      "Analizamos tus operaciones actuales y te entregamos un mapa de workflows automatizables con estimación de ROI.",
    list: [
      "Mapeo de procesos actuales",
      "Identificación de cuellos de botella",
      "Propuesta de workflows con estimación",
      "Roadmap de implementación",
    ],
    note: "Sin tarjeta de crédito. Sin compromiso.",
  },
  booking: {
    fields: {
      name: {
        label: "Nombre",
        placeholder: "Tu nombre",
      },
      email: {
        label: "Correo electrónico",
        placeholder: "tu@empresa.com",
      },
      phone: {
        label: "Teléfono",
        placeholder: "Opcional",
      },
      message: {
        label: "¿Qué proceso te gustaría automatizar?",
        placeholder:
          "Cuéntanos brevemente qué tareas repetitivas quieres eliminar...",
      },
    },
    submit: "Solicitar diagnóstico",
    sending: "Enviando...",
  },
  bookingFeedback: {
    rateLimited:
      "Has enviado demasiadas solicitudes. Por favor, espera un momento e intenta de nuevo.",
    success:
      "Mensaje enviado. Revisaremos tu solicitud y te contactaremos pronto.",
    errorSend:
      "No se pudo enviar la solicitud en este momento. Intenta de nuevo más tarde.",
    reviewFields: "Por favor, revisa los campos marcados.",
    errors: {
      name: "El nombre debe tener entre 2 y 100 caracteres.",
      email: "Por favor, introduce un correo electrónico válido.",
      phone: "El teléfono es demasiado largo.",
      message:
        "Cuéntanos un poco más sobre tu proceso (entre 10 y 2000 caracteres).",
    },
    emailSubject: "Nueva solicitud de diagnóstico — {{name}}",
    emailSentLabel: "Enviado el",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        id: "q1",
        question: "¿Qué herramientas de automatización usan?",
        answer:
          "n8n como orquestador principal, complementado con APIs de OpenAI, Make, Zapier y los CRMs que ya uses (HubSpot, Salesforce, Pipedrive). No imponemos stack: integramos lo que ya tienes.",
      },
      {
        id: "q2",
        question: "¿Cuánto tiempo toma implementar un workflow?",
        answer:
          "Depende de la complejidad. Un flujo de email automation tarda 3-5 días. Un sistema de prospección multi-canal puede llevar 2-3 semanas. Siempre entregamos con documentación y capacitación.",
      },
      {
        id: "q3",
        question: "¿Necesito saber programar para automatizar procesos?",
        answer:
          "No. Diseñamos, construimos y mantenemos los workflows. Tú recibes el sistema funcionando. Si querés hacer ajustes menores, te capacitamos.",
      },
      {
        id: "q4",
        question: "¿Y si una API cambia o falla?",
        answer:
          "Los workflows incluyen manejo de errores, reintentos automáticos y alertas por Slack/email. Monitoreamos fallos y ajustamos sin costo adicional durante el período de garantía.",
      },
      {
        id: "q5",
        question: "¿Cómo se cobra?",
        answer:
          "Por proyecto fijo tras diagnóstico inicial. Sin retainer ni costos ocultos. El precio depende de la cantidad de nodos, integraciones y complejidad lógica.",
      },
      {
        id: "q6",
        question: "¿Cuánto cuesta automatizar procesos empresariales?",
        answer:
          "El costo depende de la complejidad del flujo y las integraciones necesarias. Hacemos un diagnóstico gratuito de 30 minutos para mapear tus procesos y darte un presupuesto exacto. Los proyectos típicos arrancan desde USD $2,500 para workflows básicos hasta USD $15,000+ para arquitecturas multi-sistema.",
      },
      {
        id: "q7",
        question: "¿Con qué CRMs se integran sus workflows?",
        answer:
          "Trabajamos con HubSpot, Salesforce, Pipedrive, Zoho CRM, y cualquier CRM que tenga API REST. Si tu CRM no tiene API pública, podemos usar scraping controlado o integraciones vía Zapier/Make como puente intermedio.",
      },
    ],
  },
  footer: {
    ariaHome: "Ilaxus — Inicio",
    links: [
      { label: "Productos", href: "/#productos" },
      { label: "Cómo funciona", href: "/#como-funciona" },
      { label: "Casos", href: "/#casos" },
      { label: "Contacto", href: "/#pricing" },
    ],
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
    rights: "© {{year}} Ilaxus. Todos los derechos reservados.",
    tagline: "Diseñado para operar sin fricción.",
  },
  stickyCta: {
    label: "Solicitar diagnóstico",
  },
  jsonLd: {
    organizationDescription:
      "Workflows inteligentes con n8n y agentes de IA que automatizan ventas, marketing y operaciones. Resultados reales, no procesos. Para tu arquitectura.",
    websiteName:
      "Ilaxus — Automatización con IA que da resultados reales",
    websiteDescription:
      "Workflows con n8n y agentes de IA que llenan tu pipeline y actualizan tus dashboards solos. Sin plantillas.",
    productComercial: {
      name: "Automatización comercial con IA para equipos de ventas",
      description:
        "Leads enriquecidos, pipeline automático, CRM sincronizado. Tu equipo deja de copiar datos y empieza a cerrar deals. Integración con HubSpot, Salesforce, LinkedIn.",
      offerDescription: "Proyecto a medida según diagnóstico",
    },
    productMarketing: {
      name: "Automatización para agencias de marketing",
      description:
        "Dashboards multi-cliente que se actualizan solos, contenido con IA de idea a publicación, optimización de campañas programada y cross-platform en un clic.",
      offerDescription: "Proyecto a medida según diagnóstico",
    },
    serviceDescription:
      "Workflows con n8n y agentes de IA que dan resultados en ventas, marketing y operaciones. Sin plantillas. Hecho a la medida de tu arquitectura.",
    areaServed: [
      { "@type": "Country", name: "España" },
      { "@type": "Country", name: "México" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Chile" },
    ],
    navHome: "Home",
    navProducts: "Productos",
    navHowItWorks: "Cómo funciona",
    navCases: "Casos",
    navContact: "Contacto",
  },
  catalog: {
    currencyLabel: "Seleccionar moneda",
    perMonth: "/mes",
    hero: {
      badge: "Empleados IA · desde ",
      titleBefore: "Contrata un empleado IA",
      titleAccent: "por menos que un café al día",
      titleAfter: ".",
      descriptionStart:
        "Catálogo de agentes especializados organizados por área. Arranca con el plan ",
      descriptionPlan: "Starter desde ",
      descriptionEnd:
        " y escala a Pro o Custom cuando lo necesites. Sin contratos, sin setup fee. Precios en USD o COP.",
      ctaPrimary: "Ver catálogo",
      ctaSecondary: "Cómo trabajan",
    },
    stats: {
      labels: ["precio de entrada", "operativos", "de despliegue", "áreas cubiertas"],
    },
    categoryNavLabel: "Categorías:",
    grid: {
      eyebrow: "Catálogo",
      title: "Elige un área. Contrata un empleado.",
      description:
        "Cada empleado tiene tres planes: Starter para probar, Pro para producción y Custom para agentes a la medida.",
      popular: "Popular",
      planStarter: "Starter",
      planPro: "Pro",
      perMonth: "/mes",
      from: "Desde",
      hire: "Contratar",
      details: "Ver detalles",
      hireAria: "Contratar a {{name}} desde {{price}}/mes",
    },    pricingNote: {
      starter: {
        title: "Plan Starter",
        from: "Desde ",
        description:
          "Ideal para arrancar. El Asistente Personal es el punto de entrada más bajo del catálogo. Cero setup, cancela cuando quieras.",
      },
      pro: {
        title: "Plan Pro",
        from: "Desde ",
        description:
          "Volumen ilimitado, integraciones custom con tu stack, prioridad de soporte y modelos avanzados. Mucho más capacidad por menos de 2× el precio del Starter.",
      },
      custom: {
        title: "Plan Custom",
        description:
          "Desarrollo de agentes a la medida: integraciones con tu stack, flujos exclusivos y modelos dedicados. Precio según alcance.",
      },
      bookCall: "Agendar llamada",
      note: "Precios en USD. Convierte a COP con el selector de moneda — cálculo según TRM vigente ({{trm}}).",
    },
    custom: {
      label: "Custom",
      value: "A medida",
      description:
        "Desarrollo de agentes a la medida: integraciones con tu stack, flujos exclusivos y modelos dedicados. Precio según alcance.",
      features: [
        "Alcance y flujos definidos contigo",
        "Integraciones con tu stack actual",
        "Modelos dedicados y datos privados",
        "SLA y soporte prioritario",
      ],
    },
    howItWorks: {
      eyebrow: "Proceso",
      title: "Prueba barato. Escala cuando funcione.",
      steps: [
        {
          n: "01",
          t: "Elige el área",
          d: "Ventas, marketing, contenido, legal, finanzas, e-commerce, operaciones o autoservicio. Selecciona los roles que te faltan.",
        },
        {
          n: "02",
          t: "Arranca con Starter",
          d: "Desde $3/mes por empleado. Sin contratos, sin setup, activo en 60 segundos.",
        },
        {
          n: "03",
          t: "Escala a Pro",
          d: "Cuando validas el ROI, sube al plan Pro con volumen ilimitado, modelos avanzados e integraciones a medida.",
        },
        {
          n: "04",
          t: "O ve a la medida",
          d: "¿Ningún plan encaja? Con Custom desarrollamos agentes pensados 100% para tu operación.",
        },
      ],
    },
    cta: {
      badge: "Starter desde ",
      title: "Arma tu equipo digital hoy.",
      descriptionStart: "Empieza con un agente por ",
      descriptionEnd:
        ". Si funciona, escalas a Pro o sumas más roles. Si no, cancelas sin costo.",
      start: "Empezar por ",
      back: "Volver al catálogo",
    },
    categories: {
      ventas: {
        name: "Ventas y Desarrollo de Negocio",
        description:
          "Empleados especializados en generar oportunidades de negocio, prospectar empresas, conseguir clientes y apoyar el proceso comercial.",
      },
      marketing: {
        name: "Marketing",
        description:
          "Empleados especializados en diseñar estrategias de marketing, campañas publicitarias, SEO, email marketing, automatización y crecimiento de marca.",
      },
      contenido: {
        name: "Creación de Contenido",
        description:
          "Empleados especializados en crear contenido audiovisual y multimedia para impulsar la presencia digital de una empresa.",
      },
      legal: {
        name: "Legal",
        description:
          "Empleados especializados en apoyo jurídico, elaboración y revisión de documentos legales, consultas y procesos legales.",
      },
      finanzas: {
        name: "Finanzas",
        description:
          "Empleados de IA que dominan el dinero: analizan mercados, controlan presupuestos y flujo de caja y convierten tus números en decisiones.",
      },
      ecommerce: {
        name: "E-commerce",
        description:
          "Empleados especializados en crear tiendas en línea, publicar productos, gestionar pedidos y acompañar al comprador durante toda la compra.",
      },
      operaciones: {
        name: "Operaciones",
        description:
          "Empleados especializados en operaciones técnicas: identificación de repuestos, mantenimiento de equipos y soporte en campo.",
      },
      autoservicio: {
        name: "Autoservicio",
        description:
          "Agentes que configuras tú mismo, sin código y sin depender de nadie. La forma más económica de empezar con IA.",
      },
    },
    employees: {
      "b2b-ia": {
        name: "B2B IA",
        tagline:
          "Prospecta empresas, califica oportunidades y agenda reuniones en tu calendario.",
        description:
          "Un motor de prospección B2B que trabaja mientras tu equipo duerme. Busca empresas que encajan con tu perfil ideal de cliente, las estudia, redacta mensajes personalizados y agenda reuniones directamente en tu calendario. Los leads llegan calificados y con contexto, listos para que un humano cierre.",
        idealFor:
          "Equipos de ventas B2B, SaaS y servicios profesionales que necesitan más reuniones sin ampliar plantilla.",
        skills: [
          "Prospectación B2B",
          "Calificación de leads",
          "CRM sync",
          "Agenda de reuniones",
        ],
        starterFeatures: [
          "Hasta 100 leads prospectados al mes",
          "Enriquecimiento básico de empresas",
          "Emails personalizados listos para revisar y enviar con tu aprobación",
          "Sincronización con tu CRM",
          "Sin suscripciones adicionales: pagas solo el plan",
        ],
        proFeatures: [
          "Prospección ilimitada",
          "Modelos avanzados de personalización",
          "Calificación predictiva de oportunidades",
          "Envío 100% automatizado multi-canal (email + LinkedIn)",
          "Seguimiento automático de leads con secuencias",
          "Agenda automática de reuniones",
          "Suscripciones incluidas: WarmUp, dominio espejo anti-spam, Workspace de envío y modelos IA",
        ],
        disclaimer:
          "Starter es ideal para arrancar: tienes el control total de cada envío y seguimiento. Pro desbloquea la automatización completa — envío, calentamiento de correos y seguimiento de leads sin intervención.",
        proBadge: "Mejor valor",
      },
      "asesor-comercial-ia": {
        name: "Asesor Comercial IA",
        tagline:
          "Atiende a tus clientes 24/7, resuelve sus dudas, recomienda tus productos y convierte conversaciones en oportunidades de venta.",
        description:
          "Un vendedor digital que nunca duerme. Responde en WhatsApp y web en segundos, entiende qué necesita cada cliente, recomienda el producto correcto y entrega la conversación lista para cerrar cuando hay intención real de compra. Cada interacción queda registrada y clasificada.",
        idealFor:
          "Negocios con alto volumen de consultas: e-commerce, retail, servicios y pymes que venden por WhatsApp.",
        skills: [
          "Atención 24/7",
          "WhatsApp",
          "Calificación de leads",
          "Seguimiento",
          "Atención al cliente",
          "Conversión",
        ],
        starterFeatures: [
          "Atención 24/7 en WhatsApp y web",
          "Hasta 100 conversaciones al mes",
          "Recomendación de productos",
          "Registro de cada interacción",
        ],
        proFeatures: [
          "Conversaciones ilimitadas",
          "Respuesta instantánea con modelos avanzados",
          "Calificación y routing de leads",
          "Seguimiento automático post-venta",
          "Integración con tu catálogo y pagos",
          "Tono y guiones a medida",
        ],
disclaimer:
          "Starter incluye capacidad estándar para arrancar y validar el flujo con tu equipo. Pro desbloquea la máxima velocidad y calidad de conversación.",
      },

      "marketing-ia": {
        name: "Marketing IA",
        tagline:
          "Diseña estrategias, lanza campañas y automatiza el crecimiento de tu marca.",
        description:
          "Tu equipo de marketing completo en un solo agente. Conecta Meta Ads, Google Ads y Analytics, genera el contenido de cada campaña, lo publica y entrega reportes que se escriben solos. Los dashboards se refrescan sin que nadie exporte CSVs a las 11 de la noche.",
        idealFor:
          "Agencias, equipos de growth y marcas que necesitan ejecutar marketing consistente sin quemar a su gente.",
        skills: ["Estrategia", "SEO", "Email marketing", "Automatización"],
        starterFeatures: [
          "1 marca y hasta 3 canales",
          "Calendario de contenido semanal",
          "Reportes mensuales automáticos",
          "Publicación cross-platform",
        ],
        proFeatures: [
          "Marcas y canales ilimitados",
          "Dashboards multi-cliente en tiempo real",
          "Optimización automática de campañas",
          "Contenido IA de idea a publicación",
          "Reportes white-label para clientes",
        ],
        proBadge: "Mejor valor",
      },
      "tiktok-autopilot-ia": {
        name: "TikTok Autopilot IA",
        tagline:
          "Elige tu nicho y publica en TikTok todos los días: el agente crea el contenido, lo programa y lo sube en automático.",
        description:
          "Un creador de contenido que trabaja solo. Eliges el nicho — fitness, finanzas, humor, tu marca — y el agente se encarga del resto: detecta tendencias, escribe los guiones, genera los videos, los programa y los publica en tu cuenta de TikTok todos los días. Tú solo revisas y respondes comentarios.",
        idealFor:
          "Creadores, marcas personales y negocios que quieren presencia diaria en TikTok sin grabar un solo video.",
        skills: [
          "Nichos a elección",
          "Publicación automática",
          "Calendario de contenido",
          "Tendencias TikTok",
          "Guiones con IA",
          "Videos generativos (Pro)",
        ],
        starterFeatures: [
          "Hasta 2 videos al día (hasta 12 narrativos al mes)",
          "Videos narrativos con IA",
          "Velocidad de generación estándar",
          "Nicho a elección con re-entrenamiento",
          "Guiones y tendencias del nicho",
          "Programación automática",
        ],
        proFeatures: [
          "Hasta 30 videos al mes (narrativos + generativos)",
          "Generación ultrarrápida de video con IA",
          "Videos generativos profesionales con IA",
          "Avatares y locuciones realistas",
          "A/B testing de ganchos y formatos",
          "Análisis de rendimiento por video",
        ],
      },
      "abogado-ia": {
        name: "Abogado Laboral IA",
        tagline:
          "Resuelve consultas y documentos de derecho laboral: contratos de trabajo, liquidaciones, minutas y riesgos laborales.",
        description:
          "Un asistente jurídico especializado en derecho laboral, disponible a toda hora. Redacta y revisa contratos de trabajo, liquidaciones, cartas de despido y minutas a partir de plantillas colombianas, revisa cláusulas riesgosas y resuelve consultas laborales con referencias claras. Ideal para el día a día de RR.HH. y de los trabajadores, sin esperar consulta jurídica por cada duda.",
        idealFor:
          "Empresas, departamentos de RR.HH. y trabajadores que necesitan resolver temas exclusivamente laborales sin pagar asesoría jurídica por cada documento.",
        skills: [
          "Derecho laboral",
          "Contratos de trabajo",
          "Liquidaciones",
          "Riesgos laborales",
          "Consultas laborales",
          "Compliance laboral",
        ],
        starterFeatures: [
          "Hasta 10 documentos al mes",
          "Plantillas laborales: contratos de trabajo, minutas y cartas",
          "Revisión básica de cláusulas laborales",
          "Consultas laborales ilimitadas",
        ],
        proFeatures: [
          "Documentos ilimitados",
          "Cálculo y revisión de liquidaciones y prestaciones",
          "Matriz de riesgos laborales y cláusulas críticas",
          "Cumplimiento normativo (protección de datos + normativa laboral)",
          "Alertas de vencimiento y renovación",
          "Flujos de aprobación con tu equipo",
        ],
        disclaimer:
          "Enfocado exclusivamente en derecho laboral. Para otros temas jurídicos consulta con un profesional.",
      },
      "financiero-ia": {
        name: "Financiero IA",
        tagline:
          "Tu analista de mercados 24/7. Interpreta gráficos, tendencias e indicadores y detecta oportunidades de entrada y salida en bolsa de valores y criptomonedas.",
        description:
          "Aplica análisis técnico real —tendencias, soportes y resistencias, velas, volumen e indicadores— y lo combina con contexto de mercado y gestión de riesgo para diseñar estrategias de trading e inversión de corto, mediano y largo plazo. Starter analiza la bolsa de valores; Pro agrega criptomonedas. No decide por ti: te entrega el análisis y el plan para que decidas con criterio.",
        idealFor:
          "Inversionistas y traders que quieren análisis riguroso y disciplina de riesgo sin pagar suscripciones caras ni un analista full-time.",
        skills: [
          "Análisis técnico",
          "Bolsa de valores",
          "Criptomonedas",
          "Trading",
          "Inversión",
          "Indicadores",
          "Gráficos y tendencias",
          "Gestión del riesgo",
        ],
        starterFeatures: [
          "Análisis de bolsa de valores (acciones)",
          "Análisis técnico diario de tus acciones",
          "Alertas de soportes, resistencias y rupturas",
          "Reporte semanal de mercado y oportunidades",
        ],
        proFeatures: [
          "Bolsa de valores + criptomonedas",
          "Alertas en tiempo real de entradas y salidas",
          "Estrategias de corto, mediano y largo plazo",
          "Gestión de riesgo y tamaño de posición sugerido",
          "Reporte mensual de desempeño de tu portafolio",
        ],
        disclaimer:
          "Starter se enfoca en la bolsa de valores. Pro amplía tu análisis a criptomonedas.",
      },
      "ecommerce-ia": {
        name: "Ecommerce IA",
        tagline:
          "Tu tienda online, montada y operada por un empleado digital: publica productos, procesa pedidos y atiende a tus compradores 24/7. Sin código, sin agencia, sin tocar el panel.",
        description:
          "Ecommerce IA es tu equipo de tienda en una sola persona. Te monta la tienda en Shopify o WooCommerce con la plantilla predeterminada o personalizada, te guia paso a paso en temas de hosting, dominio para montar tu tienda en la web, importa tu catálogo desde fotos, Excel o WhatsApp y redacta las fichas de producto con IA. Después opera la tienda por ti: publica productos, procesa pedidos, y atiende a cada comprador de principio a fin — dudas previas, asesoría de compra, seguimiento del envío y post-venta. Si tu producto necesita recomendación, la da; si el cliente se va sin comprar, lo recupera. Tú solo te concentras en tu negocio: el agente se encarga de la vitrina, la operación y los clientes.",
        idealFor:
          "Negocios físicos que quieren vender online sin tocar tecnología, emprendedores con catálogo en WhatsApp/Instagram que quieren una tienda real, y tiendas existentes que necesitan operación sin fricción.",
        skills: [
          "Creación de tiendas",
          "Shopify / WooCommerce",
          "Gestión de catálogo",
          "Pedidos y pagos",
          "Atención al comprador",
          "Seguimiento de envíos",
          "Recuperación de carritos",
          "Optimización de conversión",
        ],
        starterFeatures: [
          "Tienda online lista con los detalles de tu negocio",
          "Hasta 200 productos publicados con fichas de IA (texto + fotos)",
          "Importación de catálogo desde fotos, Excel o WhatsApp",
          "Reporte mensual de ventas",
          "Guia para pasarelas de pago colombianas (Wompi, PayU)",
        ],
        proFeatures: [
          "Todo lo de Starter, más:",
          "Catálogo de hasta 1.000 productos",
          "Procesamiento automático de pedidos (pago + confirmación)",
          "Atención 24/7 con seguimiento de envíos en WhatsApp y web",
          "Recuperación de carritos abandonados",
          "Optimización de conversión continua (fichas, precios y promos)",
          "Ventas por web + WhatsApp directo (multi-canal)",
          "Reportes de ventas, inventario y clientes en tiempo real",
        ],
      },
      "referencista-ia": {
        name: "Referencista Cotizador IA",
        tagline:
          "Del taller al repuesto correcto en segundos — con evidencia del manual, no con suposiciones.",
        description:
          "El referencista que todo taller quisiera, disponible por WhatsApp. El técnico manda una foto o una descripción de la pieza y el agente consulta los manuales de tu empresa para identificar el número de parte exacto. Responde con la referencia, la sección del manual y la imagen de la página como evidencia; y si hay duda, ofrece hasta 3 opciones ordenadas por confianza. También arma cotizaciones completas —partes, desplazamiento y mano de obra— con los precios de tu ERP. Regla de oro: nunca inventa un código. Si no está en el manual, lo dice.",
        idealFor:
          "Talleres, distribuidores de repuestos y empresas de maquinaria industrial que ya tienen el conocimiento técnico guardado en manuales PDF y quieren que sus técnicos dejen de perder horas buscando referencias.",
        skills: [
          "Identificación por foto",
          "Manuales técnicos",
          "WhatsApp",
          "Evidencia con imagen",
          "Cotizaciones",
          "Anti-alucinación",
        ],
        starterFeatures: [
          "Hasta 100 identificaciones de parte al mes",
          "Foto o descripción → referencia exacta + sección del manual",
          "Imagen de la página del manual como evidencia",
          "Hasta 3 opciones ordenadas cuando hay duda",
          "Cotizaciones completas (partes + desplazamiento + mano de obra)",
        ],
        proFeatures: [
          "Identificaciones y cotizaciones ilimitadas",
          "Ingesta de los manuales de todos tus equipos",
          "Integración con tu ERP: precios reales y actualizados",
          "Cotizaciones en XLSX listas para enviar",
          "Entrenamiento en la jerga y códigos de tu negocio",
          "Soporte prioritario",
        ],
        disclaimer:
          "Starter incluye la ingesta de hasta 2 manuales y un catálogo de precios inicial. La integración de ERP en tiempo real se habilita en Pro.",
      },
      "agente-autoconfigurable": {
        name: "Asistente Personal IA",
        tagline:
          "Tu asistente personal de IA: elige canales, herramientas y personalidad, y despliégalo en minutos. Desde capacidad estándar hasta modelos avanzados.",
        description:
          "La puerta de entrada a los agentes IA. Tú eliges el nombre, la personalidad, los canales (WhatsApp, Telegram, web) y las herramientas que puede usar — calendario, hojas de cálculo, búsqueda — y queda desplegado en minutos. Sin código, sin agencia, sin llamadas de ventas. Perfecto para aprender, probar ideas y automatizar tareas personales y del día a día.",
        idealFor:
          "Emprendedores, freelancers y curiosos que quieren su primer agente IA sin depender de nadie.",
        skills: [
          "Sin código",
          "Canales a elección",
          "Herramientas a elección",
          "Plantillas listas",
          "Despliegue propio",
        ],
        starterFeatures: [
          "1 asistente, 1 canal",
          "Hasta 200 tareas al mes",
          "Modelos de capacidad estándar",
          "Memoria y almacenamiento estándar",
          "Plantillas preconfiguradas",
        ],
        proFeatures: [
          "Asistentes y canales ilimitados",
          "Modelos avanzados de razonamiento",
          "Memoria y almacenamiento ampliados",
          "Conexión con tus propias APIs",
          "Soporte prioritario",
        ],
        disclaimer:
          "Starter incluye capacidad estándar para arrancar sin fricción. Pro desbloquea modelos avanzados y amplía memoria y almacenamiento.",
      },
    },
  },
  employeePage: {
    from: "Desde",
    perMonth: "/mes",
    noContract: "Sin contratos. Cancela cuando quieras.",
    hire: "Contratar",
    metaStarter: "Plan Starter desde {{price}}.",
    whatItDoes: "Qué hace",
    idealFor: "Ideal para",
    plans: "Planes",
    plansTitle: "Empieza barato. Escala cuando funcione.",
    startStarter: "Empezar con Starter",
    startPro: "Empezar con Pro",
    bookCall: "Agendar llamada",
    note: "Precios en USD. Convierte a COP con el selector de moneda — cálculo según TRM vigente ({{trm}}).",
    ctaTitle: "Contrata a {{name}} hoy.",
    ctaDescription:
      "Empieza con el plan Starter. Si funciona, escalas a Pro o Custom. Si no, cancelas sin costo.",
    startWith: "Empezar por ",
    viewOthers: "Ver otros agentes",
    breadcrumbHome: "Inicio",
    breadcrumbCatalog: "Catálogo",
    breadcrumbAria: "Miga de pan",
  },
  whatsapp: {
    message:
      "Hola, me interesa contratar a {{name}} (plan {{plan}}) que vi en el catálogo de Ilaxus. ¿Me ayudan a empezar?",
  },
};

export default es;