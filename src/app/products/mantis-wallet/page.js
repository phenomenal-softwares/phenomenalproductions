import ProductsHero from "@/components/Products/mantis-wallet/ProductsHero";
import FeaturesSection from "@/components/Products/mantis-wallet/FeaturesSection";
import ShowcaseSection from "@/components/Products/mantis-wallet/ShowcaseSection";
import PricingSection from "@/components/Products/mantis-wallet/PricingSection";
import CTASection from "@/components/Products/mantis-wallet/CTASection";
import DeveloperInfo from "@/components/Products/mantis-wallet/DeveloperInfo";

import "@/components/Products/mantis-wallet/colors.global.css";

export default function MantisWalletPage() {
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
