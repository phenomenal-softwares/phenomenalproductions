"use client";

import ProductsHero from "@/components/Products/castle-royal/ProductsHero";
import FeaturesSection from "@/components/Products/castle-royal/FeaturesSection";
import ShowcaseSection from "@/components/Products/castle-royal/ShowcaseSection";
import PricingSection from "@/components/Products/castle-royal/PricingSection";
import CTASection from "@/components/Products/castle-royal/CTASection";

export default function CastleRoyalPage() {
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
