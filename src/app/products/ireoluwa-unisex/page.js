import ProductsHero from "@/components/Products/ireoluwa-unisex/ProductsHero";
import FeaturesSection from "@/components/Products/ireoluwa-unisex/FeaturesSection";
import ShowcaseSection from "@/components/Products/ireoluwa-unisex/ShowcaseSection";
import PricingSection from "@/components/Products/ireoluwa-unisex/PricingSection";
import CTASection from "@/components/Products/ireoluwa-unisex/CTASection";
import DeveloperInfo from "@/components/Products/ireoluwa-unisex/DeveloperInfo";

export const metadata = {
  title: "Ireoluwa Unisex Store | Powered by Phenomenal Productions",
  description:
    "Explore the Ireoluwa Unisex Store, a fashion demo by Phenomenal Productions. Stylish unisex clothing, bags, shoes, and accessories — showcasing our creativity and digital craftsmanship.",
  alternates: {
    canonical: "https://phenomenalproductions.com.ng/products/ireoluwa-unisex",
  },
  keywords: [
    "Phenomenal Productions",
    "Ireoluwa Unisex Store",
    "fashion demo site",
    "clothing site template",
    "fashion site template",
    "web development Nigeria",
    "clothes website",
    "website template",
    "online clothing store",
    "Nigerian software company",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ireoluwa Unisex Store | Powered by Phenomenal Productions",
    description:
      "A stylish unisex fashion demo built by Phenomenal Productions. Clothing, shoes, bags, and accessories — showcasing elegant, scalable digital experiences.",
    url: "https://phenomenalproductions.com.ng/products/ireoluwa-unisex",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phenomenal Productions Hero Banner",
      },
    ],
    type: "website",
  },
};

export default function IreoluwaUnisexPage() {
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
