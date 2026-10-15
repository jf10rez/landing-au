import { WhatsAppIcon } from "@/app/components/icons/StackIcons";
import { whatsappUrl } from "@/app/lib/contact";

/**
 * Botón flotante de WhatsApp, visible en todo el sitio (esquina inferior izquierda).
 * El StickyCTA de la home ocupa la esquina inferior derecha, por eso se sitúa a la izquierda.
 */
export function WhatsAppFloat({
  message,
  ariaLabel,
}: {
  message: string;
  ariaLabel: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-3 text-white shadow-[0_0_24px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base sm:px-4 sm:py-3.5"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
