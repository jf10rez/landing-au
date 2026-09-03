import { FAQItem } from "@/app/types";
import type { Messages } from "@/app/lib/i18n/dictionaries";

export function getFaq(dict: Messages): FAQItem[] {
  return dict.faq.items;
}