import { FAQItem } from "@/app/types";

export const faq: FAQItem[] = [
  {
    id: "q1",
    question: "¿Qué herramientas de automatización usan?",
    answer:
      "n8n como orquestador principal, complementado con APIs de OpenAI, Make, Zapier y los CRMs que ya uses (HubSpot, Salesforce, Pipedrive). No imponemos stack: integramos lo que ya tienes.",
  },
  {
    id: "q2",
    question: "¿Cuánto tiempo toma implementar un workflow?",
    answer:
      "Depende de la complejidad. Un flujo de email automation tarda 3-5 días. Un sistema de prospección multi-canal puede llevar 2-3 semanas. Siempre entregamos con documentación y capacitación.",
  },
  {
    id: "q3",
    question: "¿Necesito saber programar para automatizar procesos?",
    answer:
      "No. Diseñamos, construimos y mantenemos los workflows. Tú recibes el sistema funcionando. Si querés hacer ajustes menores, te capacitamos.",
  },
  {
    id: "q4",
    question: "¿Y si una API cambia o falla?",
    answer:
      "Los workflows incluyen manejo de errores, reintentos automáticos y alertas por Slack/email. Monitoreamos fallos y ajustamos sin costo adicional durante el período de garantía.",
  },
  {
    id: "q5",
    question: "¿Cómo se cobra?",
    answer:
      "Por proyecto fijo tras diagnóstico inicial. Sin retainer ni costos ocultos. El precio depende de la cantidad de nodos, integraciones y complejidad lógica.",
  },
  {
    id: "q6",
    question: "¿Cuánto cuesta automatizar procesos empresariales?",
    answer:
      "El costo depende de la complejidad del flujo y las integraciones necesarias. Hacemos un diagnóstico gratuito de 30 minutos para mapear tus procesos y darte un presupuesto exacto. Los proyectos típicos arrancan desde €2,500 para workflows básicos hasta €15,000+ para arquitecturas multi-sistema.",
  },
  {
    id: "q7",
    question: "¿Con qué CRMs se integran sus workflows?",
    answer:
      "Trabajamos con HubSpot, Salesforce, Pipedrive, Zoho CRM, y cualquier CRM que tenga API REST. Si tu CRM no tiene API pública, podemos usar scraping controlado o integraciones vía Zapier/Make como puente intermedio.",
  },
];
