// Fuente única de verdad para los canales de contacto de Ilaxus.
// Úsalo en footer, CTAs, JSON-LD y cualquier punto que enlace a contacto.

export const CONTACT = {
  email: "comercial@ilaxus.com.co",
  phoneDisplay: "+57 311 662 6021",
  phoneE164: "+573116626021",
  whatsappNumber: "573116626021",
  linkedin: "https://www.linkedin.com/company/illaxus/",
  instagram: "https://www.instagram.com/ilaxus.ai/",
} as const;

export const EMAIL_HREF = `mailto:${CONTACT.email}`;
export const PHONE_HREF = `tel:${CONTACT.phoneE164}`;

/**
 * Construye un enlace a WhatsApp con mensaje opcional precargado.
 * Ej.: whatsappUrl("Hola, quiero información") -> https://wa.me/573...?text=...
 */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** true para URLs externas (https, mailto, tel) que no deben prefijarse con el locale. */
export function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href);
}
