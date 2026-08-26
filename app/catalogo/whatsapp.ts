const WHATSAPP_NUMBER = "573116626021";

export function whatsappHref(agentName: string, plan: string) {
  const message = `Hola, me interesa contratar a ${agentName} (plan ${plan}) que vi en el catálogo de Ilaxus. ¿Me ayudan a empezar?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
