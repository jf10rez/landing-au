import {
  Briefcase,
  Calculator,
  Headphones,
  Megaphone,
  PenLine,
  ShoppingCart,
  SlidersHorizontal,
  Video,
  type IconComponent,
} from "./components/icons";

export type Employee = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
  skills: string[];
  starterFeatures: string[];
  proFeatures: string[];
  starterPrice: number;
  proPrice: number;
  icon: IconComponent;
  featured?: boolean;
  proBadge?: string;
  disclaimer?: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  employees: Employee[];
};

export const customPlan = {
  label: "Custom",
  value: "A medida",
  description:
    "Desarrollo de agentes a la medida: integraciones con tu stack, flujos exclusivos y modelos dedicados. Precio según alcance.",
};

export const customFeatures = [
  "Alcance y flujos definidos contigo",
  "Integraciones con tu stack actual",
  "Modelos dedicados y datos privados",
  "SLA y soporte prioritario",
];

export const categories: Category[] = [
  {
    id: "ventas",
    name: "Ventas y Desarrollo de Negocio",
    description:
      "Empleados especializados en generar oportunidades de negocio, prospectar empresas, conseguir clientes y apoyar el proceso comercial.",
    employees: [
      {
        slug: "b2b-ia",
        name: "B2B IA",
        tagline: "Prospecta empresas, califica oportunidades y agenda reuniones en tu calendario.",
        description: "Un motor de prospección B2B que trabaja mientras tu equipo duerme. Busca empresas que encajan con tu perfil ideal de cliente, las estudia, redacta mensajes personalizados y agenda reuniones directamente en tu calendario. Los leads llegan calificados y con contexto, listos para que un humano cierre.",
        idealFor: "Equipos de ventas B2B, SaaS y servicios profesionales que necesitan más reuniones sin ampliar plantilla.",
        skills: ["Prospectación B2B", "Calificación de leads", "CRM sync", "Agenda de reuniones"],
        starterFeatures: [
          "Hasta 100 leads prospectados al mes",
          "Enriquecimiento básico de empresas",
          "Emails personalizados listos para copiar-pegar y enviar desde tu correo (modo manual)",
          "Sincronización con tu CRM",
          "Sin suscripciones adicionales: pagas solo el plan",
        ],
        proFeatures: [
          "Prospección ilimitada",
          "Modelos avanzados de personalización",
          "Calificación predictiva de oportunidades",
          "Envío 100% automatizado multi-canal (email + LinkedIn)",
          "Agenda automática de reuniones",
          "Suscripciones incluidas: WarmUp, dominio espejo anti-spam, Workspace de envío y modelos IA",
        ],
        starterPrice: 199900,
        proPrice: 499900,
        icon: Briefcase,
        featured: true,
        proBadge: "Mejor valor por peso",
      },
      {
        slug: "asesor-comercial-ia",
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
          "Calificación y routing de leads",
          "Seguimiento automático post-venta",
          "Integración con tu catálogo y pagos",
          "Tono y guiones a medida",
        ],
        starterPrice: 49900,
        proPrice: 89900,
        icon: Headphones,
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Empleados especializados en diseñar estrategias de marketing, campañas publicitarias, SEO, email marketing, automatización y crecimiento de marca.",
    employees: [
      {
        slug: "marketing-ia",
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
        starterPrice: 199900,
        proPrice: 349900,
        icon: Megaphone,
        proBadge: "Mejor valor por peso",
      },
    ],
  },
  {
    id: "contenido",
    name: "Creación de Contenido",
    description:
      "Empleados especializados en crear contenido audiovisual y multimedia para impulsar la presencia digital de una empresa.",
    employees: [
      {
        slug: "tiktok-autopilot-ia",
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
          "Publicación diaria (hasta 20 videos/mes)",
          "Nicho a elección con re-entrenamiento",
          "Guiones y tendencias del nicho",
          "Programación automática",
        ],
        proFeatures: [
          "Videos generativos profesionales con IA",
          "Avatares y locuciones realistas",
          "Volumen ampliado en publicaciones",
          "A/B testing de ganchos y formatos",
          "Análisis de rendimiento por video",
        ],
        starterPrice: 89900,
        proPrice: 499900,
        icon: Video,
        featured: true,
      },
    ],
  },
  {
    id: "legal",
    name: "Legal",
    description:
      "Empleados especializados en apoyo jurídico, elaboración y revisión de documentos legales, consultas y procesos legales.",
    employees: [
      {
        slug: "abogado-ia",
        name: "Abogado IA",
        tagline:
          "Elabora y revisa contratos, políticas y documentos legales; resuelve consultas jurídicas.",
        description:
          "Un asistente jurídico disponible a toda hora. Redacta contratos y políticas a partir de plantillas colombianas e internacionales, revisa cláusulas riesgosas, y resuelve consultas jurídicas con referencias claras. Ideal para operaciones del día a día que no requieren firma de abogado.",
        idealFor:
          "Pymes, startups y equipos legales que necesitan liberar tiempo de trabajo repetitivo de documentos.",
        skills: ["Contratos", "Políticas y términos", "Consultas legales", "Compliance"],
        starterFeatures: [
          "Hasta 10 documentos al mes",
          "Plantillas de contratos y políticas",
          "Revisión de cláusulas básicas",
          "Consultas jurídicas ilimitadas",
        ],
        proFeatures: [
          "Documentos ilimitados",
          "Revisión profunda con matriz de riesgos",
          "Cumplimiento normativo (protección de datos)",
          "Alertas de vencimiento y renovación",
          "Flujos de aprobación con tu equipo",
        ],
        starterPrice: 49900,
        proPrice: 89900,
        icon: PenLine,
      },
    ],
  },
  {
    id: "finanzas",
    name: "Finanzas",
    description:
      "Empleados de IA que dominan el dinero: analizan mercados, controlan presupuestos y flujo de caja y convierten tus números en decisiones.",
    employees: [
      {
        slug: "financiero-ia",
        name: "Financiero IA",
        tagline:
          "Tu analista de mercados 24/7. Estudia acciones, criptomonedas y futuros, interpreta gráficos, tendencias e indicadores y detecta oportunidades potenciales de entrada y salida.",
        description:
          "Aplica análisis técnico real —tendencias, soportes y resistencias, velas, volumen e indicadores— sobre acciones, criptomonedas y futuros, y lo combina con contexto de mercado y gestión de riesgo para diseñar estrategias de trading e inversión de corto, mediano y largo plazo. No decide por ti: te entrega el análisis y el plan para que decidas con criterio.",
        idealFor:
          "Inversionistas y traders que quieren análisis riguroso y disciplina de riesgo sin pagar suscripciones caras ni un analista full-time.",
        skills: ["Análisis técnico", "Acciones", "Criptomonedas", "Futuros", "Trading", "Inversión", "Indicadores", "Gráficos y tendencias", "Gestión del riesgo"],
        starterFeatures: [
          "1 mercado a tu elección (acciones, cripto o futuros)",
          "Análisis técnico diario de tus activos",
          "Alertas de soportes, resistencias y rupturas",
          "Reporte semanal de mercado y oportunidades",
        ],
        proFeatures: [
          "Mercados y activos ilimitados",
          "Alertas en tiempo real de entradas y salidas",
          "Estrategias de corto, mediano y largo plazo",
          "Gestión de riesgo y tamaño de posición sugerido",
          "Reporte mensual de desempeño de tu portafolio",
        ],
        starterPrice: 49900,
        proPrice: 89900,
        icon: Calculator,
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description: "Empleados especializados en crear tiendas en línea, publicar productos, gestionar pedidos y acompañar al comprador durante toda la compra.",
    employees: [
      {
        slug: "ecommerce-ia",
        name: "Ecommerce IA",
        tagline: "Tu tienda online, montada y operada por un empleado digital: publica productos, procesa pedidos y atiende a tus compradores 24/7. Sin código, sin agencia, sin tocar el panel.",
        description: "Ecommerce IA es tu equipo de tienda en una sola persona. Te monta la tienda en Shopify o WooCommerce con la plantilla predeterminada o personalizada, te guia paso a paso en temas de hosting, dominio para montar tu tienda en la web, importa tu catálogo desde fotos, Excel o WhatsApp y redacta las fichas de producto con IA. Después opera la tienda por ti: publica productos, procesa pedidos, y atiende a cada comprador de principio a fin — dudas previas, asesoría de compra, seguimiento del envío y post-venta. Si tu producto necesita recomendación, la da; si el cliente se va sin comprar, lo recupera. Tú solo te concentras en tu negocio: el agente se encarga de la vitrina, la operación y los clientes.",
        idealFor: "Negocios físicos que quieren vender online sin tocar tecnología, emprendedores con catálogo en WhatsApp/Instagram que quieren una tienda real, y tiendas existentes que necesitan operación sin fricción.",
        skills: [
          "Creación de tiendas",
          "Shopify / WooCommerce",
          "Gestión de catálogo",
          "Pedidos y pagos",
          "Atención al comprador",
          "Seguimiento de envíos",
          "Recuperación de carritos",
          "Optimización de conversión"
        ],
        starterFeatures: [
          "Tienda online lista con los detalles de tu negocio",
          "Hasta 50 productos publicados con fichas de IA (texto + fotos)",
          "Importación de catálogo desde fotos, Excel o WhatsApp",
          "Reporte mensual de ventas",
          "Guia para pasarelas de pago colombianas (Wompi, PayU)",
        ],
        proFeatures: [
          "Todo lo de Starter, más:",
          "Catálogo ilimitado",
          "Procesamiento automático de pedidos (pago + confirmación)",
          "Atención 24/7 con seguimiento de envíos en WhatsApp y web",
          "Recuperación de carritos abandonados",
          "Optimización de conversión continua (fichas, precios y promos)",
          "Ventas por web + WhatsApp directo (multi-canal)",
          "Reportes de ventas, inventario y clientes en tiempo real"
        ],
        starterPrice: 89900,
        proPrice: 189900,
        icon: ShoppingCart
      }
    ]
  },
  {
    id: "autoservicio",
    name: "Autoservicio",
    description:
      "Agentes que configuras tú mismo, sin código y sin depender de nadie. La forma más económica de empezar con IA.",
    employees: [
      {
        slug: "agente-autoconfigurable",
        name: "Agente Autoconfigurable",
        tagline:
          "Arma tu propio agente IA en minutos: elige canales, herramientas y personalidad, y despliégalo tú mismo. El precio más bajo del catálogo.",
        description:
          "La puerta de entrada a los agentes IA. Tú eliges el nombre, la personalidad, los canales (WhatsApp, Telegram, web) y las herramientas que puede usar — calendario, hojas de cálculo, búsqueda — y el agente queda desplegado en minutos. Sin código, sin agencia, sin llamadas de ventas. Perfecto para aprender, probar ideas y automatizar tareas personales.",
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
          "1 agente, 1 canal",
          "Hasta 200 tareas al mes",
          "Plantillas preconfiguradas",
          "Despliegue autónomo en minutos",
        ],
        proFeatures: [
          "Agentes y canales ilimitados",
          "Almacenamiento ampliado",
          "Modelos avanzados de razonamiento",
          "Conexión con tus propias APIs",
          "Soporte prioritario",
        ],
        starterPrice: 9900,
        proPrice: 49900,
        icon: SlidersHorizontal,
        featured: true,
        disclaimer:
          "Starter con limitaciones: almacenamiento reducido, modelos estándar y menor volumen de tareas. Escala a Pro cuando lo necesites.",
      },
    ],
  },
];

export function getEmployeeBySlug(slug: string): Employee | undefined {
  return categories
    .flatMap((category) => category.employees)
    .find((employee) => employee.slug === slug);
}

export function getCategoryByEmployee(employee: Employee): Category | undefined {
  return categories.find((category) =>
    category.employees.some((e) => e.slug === employee.slug),
  );
}
