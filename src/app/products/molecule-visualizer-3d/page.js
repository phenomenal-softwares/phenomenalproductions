import ProductsHero from "@/components/Products/molecule-visualizer/ProductsHero";
import FeaturesSection from "@/components/Products/molecule-visualizer/FeaturesSection";
import ShowcaseSection from "@/components/Products/molecule-visualizer/ShowcaseSection";
import PricingSection from "@/components/Products/molecule-visualizer/PricingSection";
import CTASection from "@/components/Products/molecule-visualizer/CTASection";
import DeveloperInfo from "@/components/Products/molecule-visualizer/DeveloperInfo";

import "@/components/Products/molecule-visualizer/colors.global.css";

export default function MoleculeVisualizerPage() {
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
