import { Product } from "@/app/types";
import { categories } from "@/app/catalogo/data";

const agentProducts: Product[] = categories.flatMap((category) =>
  category.employees.map((employee) => ({
    id: employee.slug,
    category: "empleado-ia",
    title: employee.name,
    description: employee.tagline,
    features: employee.starterFeatures.slice(0, 4),
    tags: employee.skills.slice(0, 4),
    ctaLabel: "Ver agente",
    ctaHref: `/catalogo/${employee.slug}`,
  })),
);

export const products: Product[] = [
  ...agentProducts,
  {
    id: "comercial",
    category: "comercial",
    title: "Más deals cerrados. Menos horas perdidas en pantallas.",
    description:
      "Leads que llegan enriquecidos, pipeline que se mueve solo, seguimiento automático. Tu equipo deja de copiar y pegar datos entre pantallas y empieza a vender de verdad.",
    features: [
      "Leads que llegan calificados — sin data entry manual",
      "Secuencias de email que se disparan en el momento exacto",
      "CRM que se actualiza solo — sin abrirlo",
      "Alertas que avisan solo cuando hay oportunidad real",
    ],
    tags: ["n8n", "HubSpot / Salesforce", "LinkedIn", "Email Sequences", "CRM Sync"],
    ctaLabel: "Ver para equipos comerciales",
    ctaHref: "#pricing",
  },
  {
    id: "marketing",
    category: "marketing",
    title: "Reportes que se escriben solos. Contenido que se publica solo.",
    description:
      "Conecta Meta Ads, Google Ads y Analytics en un workflow. Dashboards multi-cliente que se actualizan sin que nadie exporte CSVs a las 11 de la noche.",
    features: [
      "Dashboards multi-cliente que se refrescan en automático",
      "Contenido con IA que pasa de idea a publicación sin edición",
      "Campañas que se optimizan mientras tu equipo duerme",
      "Publicación cross-platform en un clic — sin loguearte en cada red",
    ],
    tags: ["Meta Ads", "Google Ads", "Content IA", "Reporting", "Social Posting"],
    ctaLabel: "Ver para agencias",
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
