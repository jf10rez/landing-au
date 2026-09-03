import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/app/lib/i18n/config";
import { getDictionary, type Messages } from "@/app/lib/i18n/dictionaries";
import { SITE_URL } from "@/app/lib/i18n/utils";
import { getFaq } from "@/app/data/faq";
import { Navbar } from "@/app/sections/Navbar";
import { Hero } from "@/app/sections/Hero";
import { SocialProof } from "@/app/sections/SocialProof";
import { Products } from "@/app/sections/Products";
import { HowItWorks } from "@/app/sections/HowItWorks";
import { Stack } from "@/app/sections/Stack";
import { UseCases } from "@/app/sections/UseCases";
import { Pricing } from "@/app/sections/Pricing";
import { FAQ } from "@/app/sections/FAQ";
import { Footer } from "@/app/sections/Footer";
import { StickyCTA } from "@/app/components/ui/StickyCTA";
import { ParallaxProvider } from "@/app/components/animation/ParallaxProvider";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const faq = getFaq(dict);
  const jsonLd = buildJsonLd(locale, dict, faq);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ParallaxProvider>
        <Navbar locale={locale} t={dict.nav} />
        <main className="flex-1">
          <Hero locale={locale} dict={dict} />
          <SocialProof dict={dict} />
          <Products locale={locale} dict={dict} />
          <HowItWorks dict={dict} />
          <Stack dict={dict} />
          <UseCases dict={dict} />
          <Pricing locale={locale} dict={dict} />
          <FAQ dict={dict} />
        </main>
        <Footer locale={locale} dict={dict} />
        <StickyCTA locale={locale} t={dict.stickyCta} />
      </ParallaxProvider>
    </>
  );
}

function buildJsonLd(
  locale: Locale,
  dict: Messages,
  faq: { id: string; question: string; answer: string }[],
) {
  const j = dict.jsonLd;
  const anchor = (hash: string) => `${SITE_URL}/${locale}${hash}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Ilaxus",
        url: SITE_URL,
        logo: `${SITE_URL}/logo-wide.png`,
        description: j.organizationDescription,
        email: "contacto@ilaxus.com",
        sameAs: [
          "https://linkedin.com/company/ilaxus",
          "https://twitter.com/ilaxus",
        ],
      },
      {
        "@type": "WebSite",
        url: SITE_URL,
        name: j.websiteName,
        description: j.websiteDescription,
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: j.navProducts,
            url: anchor("#productos"),
          },
          {
            "@type": "SiteNavigationElement",
            name: j.navHowItWorks,
            url: anchor("#como-funciona"),
          },
          {
            "@type": "SiteNavigationElement",
            name: j.navCases,
            url: anchor("#casos"),
          },
          {
            "@type": "SiteNavigationElement",
            name: j.navContact,
            url: anchor("#pricing"),
          },
        ],
      },
      {
        "@type": "Product",
        name: j.productComercial.name,
        description: j.productComercial.description,
        category: "Business Process Automation",
        brand: { "@type": "Brand", name: "Ilaxus" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: j.productComercial.offerDescription,
          },
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Product",
        name: j.productMarketing.name,
        description: j.productMarketing.description,
        category: "Marketing Automation",
        brand: { "@type": "Brand", name: "Ilaxus" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: j.productMarketing.offerDescription,
          },
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        name: j.websiteName,
        description: j.serviceDescription,
        provider: {
          "@type": "Organization",
          name: "Ilaxus",
          url: SITE_URL,
        },
        areaServed: j.areaServed,
        serviceType: "Business Process Automation",
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: j.navHome,
            item: SITE_URL,
          },
        ],
      },
    ],
  };
}