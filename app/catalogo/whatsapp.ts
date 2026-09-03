import type { Locale } from "@/app/lib/i18n/config";
import { getDictionary } from "@/app/lib/i18n/dictionaries";
import { format } from "@/app/lib/i18n/utils";

const WHATSAPP_NUMBER = "573116626021";

export function whatsappHref(
  locale: Locale,
  agentName: string,
  plan: string,
) {
  const message = format(getDictionary(locale).whatsapp.message, {
    name: agentName,
    plan,
  });
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}