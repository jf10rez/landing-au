import { UseCase } from "@/app/types";

export const useCases: UseCase[] = [
  {
    id: "saas-b2b",
    clientType: "SaaS B2B",
    problem: "El equipo de ventas perd\u00eda 12 horas semanales en data entry y seguimiento de leads.",
    solution: "Workflow de prospecci\u00f3n autom\u00e1tica: enriquecimiento de contactos, scoring, secuencias de email y sincronizaci\u00f3n con HubSpot.",
    metrics: [
      { label: "horas ahoradas / semana", value: 12, suffix: "h" },
      { label: "aumento en respuesta", value: 34, suffix: "%" },
    ],
  },
  {
    id: "marketing-agency",
    clientType: "Agencia de Marketing",
    problem: "10 clientes, 10 reportes manuales. El equipo no escalaba.",
    solution: "Pipeline de reporting automatizado: extracci\u00f3n de datos de Meta Ads, Google Ads y Analytics, generaci\u00f3n de PDF y env\u00edo programado.",
    metrics: [
      { label: "reportes automatizados / mes", value: 120, suffix: "" },
      { label: "reducci\u00f3n de tiempo", value: 85, suffix: "%" },
    ],
  },
  {
    id: "ecommerce",
    clientType: "E-commerce",
    problem: "Abandono de carrito sin recuperaci\u00f3n. Stock desactualizado entre canales.",
    solution: "Workflow de recuperaci\u00f3n de carrito + sincronizaci\u00f3n de inventario entre Shopify, Amazon y ERP en tiempo real.",
    metrics: [
      { label: "recuperaci\u00f3n de carrito", value: 18, suffix: "%" },
      { label: "errores de stock", value: 0, suffix: "" },
    ],
  },
];
