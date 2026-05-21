import { FAQItem } from "@/app/types";

export const faq: FAQItem[] = [
  {
    id: "q1",
    question: "\u00bfQu\u00e9 herramientas usan?",
    answer:
      "n8n como orquestador principal, complementado con APIs de OpenAI, Make, Zapier y los CRMs que ya uses (HubSpot, Salesforce, Pipedrive). No imponemos stack: integramos lo que ya tienes.",
  },
  {
    id: "q2",
    question: "\u00bfCu\u00e1nto tiempo toma implementar un workflow?",
    answer:
      "Depende de la complejidad. Un flujo de email automation tarda 3-5 d\u00edas. Un sistema de prospecci\u00f3n multi-canal puede llevar 2-3 semanas. Siempre entregamos con documentaci\u00f3n y capacitaci\u00f3n.",
  },
  {
    id: "q3",
    question: "\u00bfNecesito saber c\u00f3digo?",
    answer:
      "No. Dise\u00f1amos, construimos y mantenemos los workflows. T\u00fa recibes el sistema funcionando. Si quer\u00e9s hacer ajustes menores, te capacitamos.",
  },
  {
    id: "q4",
    question: "\u00bfY si una API cambia o falla?",
    answer:
      "Los workflows incluyen manejo de errores, reintentos autom\u00e1ticos y alertas por Slack/email. Monitoreamos fallos y ajustamos sin costo adicional durante el per\u00edodo de garant\u00eda.",
  },
  {
    id: "q5",
    question: "\u00bfC\u00f3mo se cobra?",
    answer:
      "Por proyecto fijo tras diagn\u00f3stico inicial. Sin retainer ni costos ocultos. El precio depende de la cantidad de nodos, integraciones y complejidad l\u00f3gica.",
  },
];
