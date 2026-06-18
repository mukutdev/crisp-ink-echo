import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/storefront/AnnouncementBar";
import { Navbar } from "@/components/storefront/Navbar";
import { Hero } from "@/components/storefront/Hero";
import { BestSellers } from "@/components/storefront/BestSellers";
import { CategoryTiles } from "@/components/storefront/CategoryTiles";
import { BrandStory } from "@/components/storefront/BrandStory";
import { TeamGallery } from "@/components/storefront/TeamGallery";
import { MarqueeRow } from "@/components/storefront/MarqueeRow";
import { Newsletter } from "@/components/storefront/Newsletter";
import { TrustBadges } from "@/components/storefront/TrustBadges";
import { Footer } from "@/components/storefront/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepstrike — Technical Apparel, Engineered to Last" },
      {
        name: "description",
        content:
          "Considered technical apparel in a quiet monochrome palette. Shop outerwear, tops, and bottoms engineered for the elements.",
      },
      { property: "og:title", content: "Deepstrike — Technical Apparel" },
      {
        property: "og:description",
        content:
          "Considered technical apparel in a quiet monochrome palette, engineered to outlast the season.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <BestSellers />
        <CategoryTiles />
        <BrandStory />
        <TeamGallery />
        <MarqueeRow />
        <Newsletter />
        <TrustBadges />
      </main>
      <Footer />
    </CartProvider>
  );
}
