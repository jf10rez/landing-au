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
import { faq } from "@/app/data/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Ilaxus",
      url: "https://ilaxus.com",
      logo: "https://ilaxus.com/logo-wide.png",
      description:
        "Workflows inteligentes con n8n y agentes de IA que automatizan ventas, marketing y operaciones. Resultados reales, no procesos. Para tu arquitectura.",
      email: "contacto@ilaxus.com",
      sameAs: [
        "https://linkedin.com/company/ilaxus",
        "https://twitter.com/ilaxus",
      ],
    },
    {
      "@type": "WebSite",
      url: "https://ilaxus.com",
      name: "Ilaxus — Automatización con IA que da resultados reales",
      description:
        "Workflows con n8n y agentes de IA que llenan tu pipeline y actualizan tus dashboards solos. Sin plantillas.",
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          name: "Productos",
          url: "https://ilaxus.com/#productos",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Cómo funciona",
          url: "https://ilaxus.com/#como-funciona",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Casos",
          url: "https://ilaxus.com/#casos",
        },
        {
          "@type": "SiteNavigationElement",
          "name": "Contacto",
          "url": "https://ilaxus.com/#pricing",
        },
      ],
    },
    {
      "@type": "Product",
      name: "Automatización comercial con IA para equipos de ventas",
      description:
        "Leads enriquecidos, pipeline automático, CRM sincronizado. Tu equipo deja de copiar datos y empieza a cerrar deals. Integración con HubSpot, Salesforce, LinkedIn.",
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
          description: "Proyecto a medida según diagnóstico",
        },
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      name: "Automatización para agencias de marketing",
      description:
        "Dashboards multi-cliente que se actualizan solos, contenido con IA de idea a publicación, optimización de campañas programada y cross-platform en un clic.",
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
          description: "Proyecto a medida según diagnóstico",
        },
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Service",
      name: "Automatización empresarial con IA",
      description:
        "Workflows con n8n y agentes de IA que dan resultados en ventas, marketing y operaciones. Sin plantillas. Hecho a la medida de tu arquitectura.",
      provider: {
        "@type": "Organization",
        name: "Ilaxus",
        url: "https://ilaxus.com",
      },
      areaServed: [
        { "@type": "Country", name: "España" },
        { "@type": "Country", name: "México" },
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
      <ParallaxProvider>
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
      </ParallaxProvider>
    </>
  );
}
