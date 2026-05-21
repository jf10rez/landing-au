import { Product } from "@/app/types";

export const products: Product[] = [
  {
    id: "b2b",
    category: "b2b",
    title: "Flujos de ventas y operaciones",
    description:
      "Conectamos tu CRM, email, LinkedIn y calendario para que los leads se muevan solos. Prospecci\u00f3n, seguimiento y reporting sin intervenci\u00f3n manual.",
    features: [
      "Enriquecimiento autom\u00e1tico de leads",
      "Secuencias de email con condicionales",
      "Sincronizaci\u00f3n bidireccional CRM",
      "Alertas de oportunidad en tiempo real",
    ],
    tags: ["n8n", "HubSpot / Salesforce", "LinkedIn Automation", "Email Sequences", "CRM Sync"],
    ctaLabel: "Ver flujos B2B",
    ctaHref: "#pricing",
  },
  {
    id: "agency",
    category: "agency",
    title: "Operaciones para agencias",
    description:
      "Reporting multi-cliente, generaci\u00f3n de contenido, gesti\u00f3n de ads y social media \u2014 todo ejecutado por workflows programados. Tu equipo enfocado en estrategia, no en clicks.",
    features: [
      "Dashboards de reporting autom\u00e1tico",
      "Pipelines de contenido con IA",
      "Optimizaci\u00f3n de campa\u00f1as programada",
      "Publicaci\u00f3n cross-platform",
    ],
    tags: ["Meta Ads", "Google Ads", "Content Pipelines", "Reporting", "Social Posting"],
    ctaLabel: "Ver flujos para agencias",
    ctaHref: "#pricing",
  },
];
