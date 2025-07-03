import HeroSection from "@/components/HeroSection";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeProducts from "@/components/HomeProducts/HomeProducts";
import HomeTestimonials from "@/components/HomeTestimonials/HomeTestimonials";
import HomeCTA from "@/components/HomeCTA/HomeCTA";

export const metadata = {
  title: "Phenomenal Productions | Top-Tier App Development in Nigeria",
  description: "We build elegant, scalable digital solutions for brands and businesses. Let’s turn your app idea into a phenomenal product.",
  openGraph: {
    title: "Phenomenal Productions | Top-Tier App Development",
    description: "Elegant, scalable web and mobile app development for Nigerian and global brands.",
    url: "https://phenomenalproductions.com.ng",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jgp",
        width: 1200,
        height: 630,
        alt: "Phenomenal Productions Hero Banner",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <div id="home"><HeroSection /></div>
      <div id="about">
        <HomeAbout />
      </div>
      <div id="products">
        <HomeProducts />
      </div>
      <div id="testimonials">
        <HomeTestimonials />
      </div>
      <div id="cta">
        <HomeCTA />
      </div>
    </main>
  );
}

