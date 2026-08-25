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
  name: string;
  tagline: string;
  skills: string[];
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

export const categories: Category[] = [
  {
    id: "ventas",
    name: "Ventas y Desarrollo de Negocio",
    description:
      "Empleados especializados en generar oportunidades de negocio, prospectar empresas, conseguir clientes y apoyar el proceso comercial.",
    employees: [
      {
        name: "B2B IA",
        tagline:
          "Prospecta empresas, califica oportunidades y agenda reuniones en tu calendario.",
        skills: ["Prospectación B2B", "Calificación de leads", "CRM sync", "Agenda de reuniones"],
        starterPrice: 199900,
        proPrice: 349900,
        icon: Briefcase,
        featured: true,
        proBadge: "Mejor valor por peso",
      },
      {
        name: "Asesor Comercial IA",
        tagline:
          "Atiende a tus clientes 24/7, resuelve sus dudas, recomienda tus productos y convierte conversaciones en oportunidades de venta.",
        skills: [
          "Atención 24/7",
          "WhatsApp",
          "Calificación de leads",
          "Seguimiento",
          "Atención al cliente",
          "Conversión",
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
        name: "Marketing IA",
        tagline:
          "Diseña estrategias, lanza campañas y automatiza el crecimiento de tu marca.",
        skills: ["Estrategia", "SEO", "Email marketing", "Automatización"],
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
        name: "TikTok Autopilot IA",
        tagline:
          "Elige tu nicho y publica en TikTok todos los días: el agente crea el contenido, lo programa y lo sube en automático.",
        skills: [
          "Nichos a elección",
          "Publicación automática",
          "Calendario de contenido",
          "Tendencias TikTok",
          "Guiones con IA",
          "Videos generativos (Pro)",
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
        name: "Abogado IA",
        tagline:
          "Elabora y revisa contratos, políticas y documentos legales; resuelve consultas jurídicas.",
        skills: ["Contratos", "Políticas y términos", "Consultas legales", "Compliance"],
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
      "Empleados especializados en análisis financiero, presupuestos, flujo de caja, reportes y apoyo en la toma de decisiones financieras.",
    employees: [
      {
        name: "Financiero IA",
        tagline:
          "Analiza finanzas, arma presupuestos y flujos de caja y entrega reportes para decidir.",
        skills: ["Análisis financiero", "Presupuestos", "Flujo de caja", "Reportes"],
        starterPrice: 49900,
        proPrice: 89900,
        icon: Calculator,
      },
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    description:
      "Empleados especializados en crear tiendas en línea, publicar productos, gestionar pedidos y acompañar al comprador durante toda la compra.",
    employees: [
      {
        name: "Ecommerce IA",
        tagline:
          "Crea tu tienda online desde cero y gestiónala en automático: publica productos, procesa pedidos y atiende a tus compradores 24/7.",
        skills: [
          "Creación de tiendas",
          "Shopify / WooCommerce",
          "Gestión de catálogo",
          "Pedidos y pagos",
          "Atención al comprador",
        ],
        starterPrice: 89900,
        proPrice: 149900,
        icon: ShoppingCart,
      },
    ],
  },
  {
    id: "autoservicio",
    name: "Autoservicio",
    description:
      "Agentes que configuras tú mismo, sin código y sin depender de nadie. La forma más económica de empezar con IA.",
    employees: [
      {
        name: "Agente Autoconfigurable",
        tagline:
          "Arma tu propio agente IA en minutos: elige canales, herramientas y personalidad, y despliégalo tú mismo. El precio más bajo del catálogo.",
        skills: [
          "Sin código",
          "Canales a elección",
          "Herramientas a elección",
          "Plantillas listas",
          "Despliegue propio",
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
