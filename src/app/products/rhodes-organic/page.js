"use client";

import ProductsHero from "@/components/Products/rhodes-organic/ProductsHero";
import FeaturesSection from "@/components/Products/rhodes-organic/FeaturesSection";
import ShowcaseSection from "@/components/Products/rhodes-organic/ShowcaseSection";
import PricingSection from "@/components/Products/rhodes-organic/PricingSection";
import CTASection from "@/components/Products/rhodes-organic/CTASection";

export default function RhodesOrganicPage() {
  return (
    <main>
      <ProductsHero />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
