"use client";
import HeroSection from "@/components/HeroSection";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeProducts from "@/components/HomeProducts/HomeProducts";

export default function HomePage() {
  return (
    <main>
      {/* ====== CAROUSEL / HIGHLIGHTS ====== */}
      <HeroSection />

      {/* ====== ABOUT SECTION ====== */}
      <div id="about">
        <HomeAbout />
      </div>
      {/* ====== HOME PRODUCTS SECTION ====== */}
      <div id="products">
        <HomeProducts />
      </div>

      {/* ====== CALL TO ACTION ====== */}
      <section>
        [CTA placeholder — “Create an App for Your Brand” button]
      </section>

      {/* ====== FOOTER ====== */}
      <section>[Footer placeholder]</section>
    </main>
  );
}
