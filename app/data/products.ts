import { Product } from "@/app/types";

export const products: Product[] = [
  {
    id: "b2b",
    category: "b2b",
    title: "Automatización de ventas y prospección B2B",
    description:
      "Workflows que conectan CRM, email, LinkedIn y calendario. Leads que se mueven solos: prospección, scoring y seguimiento automatizado.",
    features: [
      "Enriquecimiento automático de leads",
      "Secuencias de email con condicionales",
      "Sincronización bidireccional CRM",
      "Alertas de oportunidad en tiempo real",
    ],
    tags: ["n8n", "HubSpot / Salesforce", "LinkedIn Automation", "Email Sequences", "CRM Sync"],
    ctaLabel: "Ver flujos B2B",
    ctaHref: "#pricing",
  },
  {
    id: "agency",
    category: "agency",
    title: "Automatización para agencias de marketing",
    description:
      "Reporting multi-cliente, contenido con IA, ads y social media — todo ejecutado por workflows. Tu equipo en estrategia, no en tareas repetitivas.",
    features: [
      "Dashboards de reporting automático",
      "Pipelines de contenido con IA",
      "Optimización de campañas programada",
      "Publicación cross-platform",
    ],
    tags: ["Meta Ads", "Google Ads", "Content Pipelines", "Reporting", "Social Posting"],
    ctaLabel: "Ver flujos para agencias",
    ctaHref: "#pricing",
  },
  {
    id: "openclaw",
    category: "openclaw",
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
    tags: ["OpenClaw", "AI Agent", "Telegram", "WhatsApp", "24/7", "One-Click"],
    ctaLabel: "Ver plan OpenClaw",
    ctaHref: "#pricing",
  },
];
