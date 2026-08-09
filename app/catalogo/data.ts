import {
  Briefcase,
  Calculator,
  Headphones,
  Megaphone,
  PenLine,
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
};

export type Category = {
  id: string;
  name: string;
  description: string;
  employees: Employee[];
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
        starterPrice: 129,
        proPrice: 349,
        icon: Briefcase,
        featured: true,
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
        starterPrice: 99,
        proPrice: 279,
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
        starterPrice: 99,
        proPrice: 279,
        icon: Megaphone,
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
        name: "IA Influencer",
        tagline:
          "Genera videos, Reels, UGC y contenido con avatar humano realista para todas tus redes.",
        skills: [
          "Videos para redes",
          "Reels y Shorts",
          "UGC",
          "TikTok / IG / YouTube",
          "Avatar humano realista",
          "Guiones y locuciones",
        ],
        starterPrice: 149,
        proPrice: 429,
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
        starterPrice: 109,
        proPrice: 229,
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
        starterPrice: 89,
        proPrice: 299,
        icon: Calculator,
      },
    ],
  },
];