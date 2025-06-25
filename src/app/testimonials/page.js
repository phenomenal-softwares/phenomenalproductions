import TestimonialHero from "@/components/Testimonials/TestimonialHero";
import TestimonialsGrid from "@/components/Testimonials/TestimonialsGrid";
import FeaturedQuote from "@/components/Testimonials/FeaturedQuote";
import TestimonialCTA from "@/components/Testimonials/TestimonialCTA";

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialHero />
      <TestimonialsGrid />
      <FeaturedQuote />
      <TestimonialCTA />
    </main>
  );
}
