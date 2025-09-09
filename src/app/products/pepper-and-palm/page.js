import ProductsHero from "@/components/Products/pepper-and-palm/ProductsHero";
import FeaturesSection from "@/components/Products/pepper-and-palm/FeaturesSection";
import ShowcaseSection from "@/components/Products/pepper-and-palm/ShowcaseSection";
import PricingSection from "@/components/Products/pepper-and-palm/PricingSection";
import CTASection from "@/components/Products/pepper-and-palm/CTASection";
import DeveloperInfo from "@/components/Products/pepper-and-palm/DeveloperInfo";

export default function PepperAndPalmPage() {
  return (
    <main>
      <ProductsHero />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <CTASection />
      <DeveloperInfo />
    </main>
  );
}
