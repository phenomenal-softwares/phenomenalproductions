import React from "react";
import Products from "@/components/Products/Products";

export const metadata = {
  title: "Our Products | Phenomenal Productions",
  description: "Explore our suite of digital products, built with excellence for Nigerian businesses and beyond.",
  openGraph: {
    title: "Explore Our Products | Phenomenal Productions",
    description: "From exam portals to mobile apps and games, we create solutions that solve real problems.",
    url: "https://phenomenalproductions.com.ng/products",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phenomenal Products Showcase",
      },
    ],
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main>
      <Products />
    </main>
  );
}