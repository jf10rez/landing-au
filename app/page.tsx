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
      name: "Operador IA",
      url: "https://operador-ia.com",
      logo: "https://operador-ia.com/logo.png",
      sameAs: [
        "https://linkedin.com/company/operador-ia",
        "https://twitter.com/operador_ia",
      ],
    },
    {
      "@type": "Service",
      name: "Automatizaci\u00f3n de workflows con IA",
      description:
        "Dise\u00f1amos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas en ventas, marketing y operaciones.",
      provider: {
        "@type": "Organization",
        name: "Operador IA",
      },
      areaServed: "ES",
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
