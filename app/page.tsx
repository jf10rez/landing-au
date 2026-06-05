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
import { faq } from "@/app/data/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Ilaxus",
      url: "https://ilaxus.com",
      logo: "https://ilaxus.com/logo.png",
      description:
        "Automatizaci\u00f3n de procesos empresariales con IA. Dise\u00f1amos workflows con n8n, agentes de IA y APIs adaptados a tu arquitectura de negocio.",
      email: "contacto@ilaxus.com",
      sameAs: [
        "https://linkedin.com/company/ilaxus",
        "https://twitter.com/ilaxus",
      ],
    },
    {
      "@type": "WebSite",
      url: "https://ilaxus.com",
      name: "Ilaxus \u2014 Automatizaci\u00f3n de Procesos B2B",
      description:
        "Automatizamos workflows empresariales con n8n y agentes de IA. Sin plantillas.",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          name: "Productos",
          url: "https://ilaxus.com/#productos",
        },
        {
          "@type": "SiteNavigationElement",
          name: "C\u00f3mo funciona",
          url: "https://ilaxus.com/#como-funciona",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Casos",
          url: "https://ilaxus.com/#casos",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Agendar",
          url: "https://ilaxus.com/#pricing",
        },
      ],
    },
    {
      "@type": "Product",
      name: "Automatizaci\u00f3n de ventas y operaciones B2B",
      description:
        "Workflows de prospecci\u00f3n, CRM, secuencias de email y reporting para equipos comerciales B2B. Integraci\u00f3n con HubSpot, Salesforce, LinkedIn y m\u00e1s.",
      category: "Business Process Automation",
      brand: {
        "@type": "Brand",
        name: "Ilaxus",
      },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: "Proyecto a medida seg\u00fan diagn\u00f3stico",
        },
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      name: "Automatizaci\u00f3n para agencias de marketing",
      description:
        "Reporting multi-cliente automatizado, pipelines de contenido con IA, optimizaci\u00f3n de campa\u00f1as y publicaci\u00f3n cross-platform para agencias de marketing.",
      category: "Marketing Automation",
      brand: {
        "@type": "Brand",
        name: "Ilaxus",
      },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: "Proyecto a medida seg\u00fan diagn\u00f3stico",
        },
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Service",
      name: "Automatizaci\u00f3n de procesos empresariales con IA",
      description:
        "Dise\u00f1amos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas en ventas, marketing y operaciones. Arquitectura a medida.",
      provider: {
        "@type": "Organization",
        name: "Ilaxus",
        url: "https://ilaxus.com",
      },
      areaServed: [
        { "@type": "Country", name: "Espa\u00f1a" },
        { "@type": "Country", name: "M\u00e9xico" },
        { "@type": "Country", name: "Colombia" },
        { "@type": "Country", name: "Argentina" },
        { "@type": "Country", name: "Chile" },
      ],
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
          name: "Home",
          item: "https://ilaxus.com",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Products />
        <HowItWorks />
        <Stack />
        <UseCases />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
