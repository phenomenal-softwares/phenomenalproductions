import HeroSection from "@/components/HeroSection";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import VideoBackgroundSection from "@/components/VideoBackground/VideoBackgroundSection";
import HomeProducts from "@/components/HomeProducts/HomeProducts";
import GeneralPricingTable from "@/components/GeneralPricingTable/GeneralPricingTable";
import HomeTestimonials from "@/components/HomeTestimonials/HomeTestimonials";
import HomeCTA from "@/components/HomeCTA/HomeCTA";

export const metadata = {
  title: "PHENOMENAL SOFTWARES NIG. LTD",
  description:
    "We build premium websites and mobile applications for brands and businesses.",
  alternates: {
    canonical: "https://phenomenalproductions.com.ng",
  },
  keywords: [
    "Phenomenal Productions",
    "Phenomenal Softwares Nig. Ltd",
    "Phenomenal Softwares",
    "Nigerian software company",
    "web development Nigeria",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "PHENOMENAL SOFTWARES NIG. LTD",
    description:
      "Nigerian software company specializing in web development, mobile applications, and digital solutions.",
    url: "https://phenomenalproductions.com.ng",
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

export default function HomePage() {
  return (
    <main>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <HomeAbout />
      </div>
      <div id="video-background">
        <VideoBackgroundSection />
      </div>
      <div id="products">
        <HomeProducts />
      </div>
      <div id="pricing">
        <GeneralPricingTable />
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
