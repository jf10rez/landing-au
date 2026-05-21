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

export default function Home() {
  return (
    <>
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
