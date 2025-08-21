import ProductsHero from "@/components/Products/primeshelter/ProductsHero";
import FeaturesSection from "@/components/Products/primeshelter/FeaturesSection";
import ShowcaseSection from "@/components/Products/primeshelter/ShowcaseSection";
import PricingSection from "@/components/Products/primeshelter/PricingSection";
import CTASection from "@/components/Products/primeshelter/CTASection";

export default function PrimeshelterPage() {
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
