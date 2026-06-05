import { Product } from "@/app/types";

export const products: Product[] = [
  {
    id: "b2b",
    category: "b2b",
    title: "Automatizaci\u00f3n de ventas y prospecci\u00f3n B2B",
    description:
      "Workflows que conectan CRM, email, LinkedIn y calendario. Leads que se mueven solos: prospecci\u00f3n, scoring y seguimiento automatizado.",
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
    title: "Automatizaci\u00f3n para agencias de marketing",
    description:
      "Reporting multi-cliente, contenido con IA, ads y social media \u2014 todo ejecutado por workflows. Tu equipo en estrategia, no en tareas repetitivas.",
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
