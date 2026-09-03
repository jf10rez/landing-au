import { Product } from "@/app/types";
import type { Locale } from "@/app/lib/i18n/config";
import type { Messages } from "@/app/lib/i18n/dictionaries";
import { getCategories } from "@/app/catalogo/data";

export function getProducts(locale: Locale, dict: Messages): Product[] {
  const categories = getCategories(dict);

  const agentProducts: Product[] = categories.flatMap((category) =>
    category.employees.map((employee) => ({
      id: employee.slug,
      category: "empleado-ia",
      categoryLabel: dict.productCategories.empleadoIa,
      title: employee.name,
      description: employee.tagline,
      features: employee.starterFeatures.slice(0, 4),
      tags: employee.skills.slice(0, 4),
      ctaLabel: dict.products.viewAgent,
      ctaHref: `/${locale}/catalogo/${employee.slug}`,
    })),
  );

  const comercialTags = [
    "n8n",
    "HubSpot / Salesforce",
    "LinkedIn",
    "Email Sequences",
    "CRM Sync",
  ];
  const marketingTags = [
    "Meta Ads",
    "Google Ads",
    "Content IA",
    "Reporting",
    "Social Posting",
  ];

  return [
    ...agentProducts,
    {
      id: "comercial",
      category: "comercial",
      categoryLabel: dict.productCategories.comercial,
      title: dict.products.comercial.title,
      description: dict.products.comercial.description,
      features: dict.products.comercial.features,
      tags: comercialTags,
      ctaLabel: dict.products.comercial.ctaLabel,
      ctaHref: "#pricing",
    },
    {
      id: "marketing",
      category: "marketing",
      categoryLabel: dict.productCategories.marketing,
      title: dict.products.marketing.title,
      description: dict.products.marketing.description,
      features: dict.products.marketing.features,
      tags: marketingTags,
      ctaLabel: dict.products.marketing.ctaLabel,
      ctaHref: "#pricing",
    },
    {
      id: "openclaw",
      category: "openclaw",
      categoryLabel: dict.productCategories.openclaw,
      title: dict.products.openclaw.title,
      description: dict.products.openclaw.description,
      features: dict.products.openclaw.features,
      tags: ["OpenClaw", "AI Agent", "Telegram", "WhatsApp", "24/7", "One-Click"],
      ctaLabel: dict.products.openclaw.ctaLabel,
      ctaHref: "#pricing",
    },
  ];
}