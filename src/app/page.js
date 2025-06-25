"use client";
import HeroSection from "@/components/HeroSection";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeProducts from "@/components/HomeProducts/HomeProducts";
import HomeTestimonials from "@/components/HomeTestimonials/HomeTestimonials";
import HomeCTA from "@/components/HomeCTA/HomeCTA";

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
