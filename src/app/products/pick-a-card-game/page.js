import ProductsHero from "@/components/Products/pick-a-card-game/ProductsHero";
import FeaturesSection from "@/components/Products/pick-a-card-game/FeaturesSection";
import ShowcaseSection from "@/components/Products/pick-a-card-game/ShowcaseSection";
import PricingSection from "@/components/Products/pick-a-card-game/PricingSection";
import CTASection from "@/components/Products/pick-a-card-game/CTASection";
import DeveloperInfo from "@/components/Products/pick-a-card-game/DeveloperInfo";

import "@/components/Products/pick-a-card-game/colors.global.css";

export default function PickACardGamePage() {
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
