import { UseCase } from "@/app/types";

export const useCases: UseCase[] = [
  {
    id: "saas-b2b",
    clientType: "SaaS B2B",
    problem: "El equipo de ventas perdía 12 horas semanales en data entry y seguimiento de leads.",
    solution: "Workflow de prospección automática: enriquecimiento de contactos, scoring, secuencias de email y sincronización con HubSpot.",
    metrics: [
      { label: "horas ahoradas / semana", value: 12, suffix: "h" },
      { label: "aumento en respuesta", value: 34, suffix: "%" },
    ],
  },
  {
    id: "marketing-agency",
    clientType: "Agencia de Marketing",
    problem: "10 clientes, 10 reportes manuales. El equipo no escalaba.",
    solution: "Pipeline de reporting automatizado: extracción de datos de Meta Ads, Google Ads y Analytics, generación de PDF y envío programado.",
    metrics: [
      { label: "reportes automatizados / mes", value: 120, suffix: "" },
      { label: "reducción de tiempo", value: 85, suffix: "%" },
    ],
  },
  {
    id: "ecommerce",
    clientType: "E-commerce",
    problem: "Abandono de carrito sin recuperación. Stock desactualizado entre canales.",
    solution: "Workflow de recuperación de carrito + sincronización de inventario entre Shopify, Amazon y ERP en tiempo real.",
    metrics: [
      { label: "recuperación de carrito", value: 18, suffix: "%" },
      { label: "errores de stock", value: 0, suffix: "" },
    ],
  },
];
