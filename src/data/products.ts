import p1 from "@/assets/products/p1.jpg";
import p2 from "@/assets/products/p2.jpg";
import p3 from "@/assets/products/p3.jpg";
import p4 from "@/assets/products/p4.jpg";
import p5 from "@/assets/products/p5.jpg";
import p6 from "@/assets/products/p6.jpg";
import p7 from "@/assets/products/p7.jpg";
import p8 from "@/assets/products/p8.jpg";

export type Category = "tops" | "bottoms" | "outerwear";

export interface Swatch {
  name: string;
  /** grayscale tone used for the swatch dot */
  tone: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  isNew: boolean;
  /** base tone for the primary placeholder image */
  tone: string;
  /** tone shown on hover (second image) */
  hoverTone: string;
  swatches: Swatch[];
}

export const SIZES = ["S", "M", "L", "XL"] as const;
export type Size = (typeof SIZES)[number];

export interface ProductDetail {
  tagline: string;
  paragraphs: string[];
  shippingNote: string;
  features: string[];
  specs: string[];
  /** feature detail rows shown further down the page */
  highlights: { label: string; title: string; copy: string }[];
}

const categoryLabel: Record<Category, string> = {
  tops: "Top",
  bottoms: "Bottom",
  outerwear: "Outerwear",
};

/**
 * Builds long-form PDP content for a product from its base attributes so
 * every product resolves a full detail page without hand-authoring each one.
 */
export function getProductDetail(product: Product): ProductDetail {
  return {
    tagline: `The ${product.name}, engineered for movement and built to outlast the season.`,
    paragraphs: [
      `The ${product.name} is cut from a considered, technical fabric and finished with a clean monochrome hand. Every panel is placed to reduce bulk and let the piece move with you, whether you're commuting through weather or covering ground on foot.`,
      `Details are deliberate: matte hardware, bonded seams, and a quiet Deepstrike mark. Nothing decorative — only what earns its place. Built to enable you to go further.`,
    ],
    shippingNote: "Orders ship within 2 business days.",
    features: [
      "Weather-resistant technical shell",
      "Articulated, movement-mapped panels",
      "Bonded, low-bulk seams",
      "Matte corrosion-resistant hardware",
      "Reflective Deepstrike branding",
    ],
    specs: [
      `Sizes ${SIZES[0]}–${SIZES[SIZES.length - 1]}`,
      product.swatches.map((s) => s.name).join(", "),
      `${categoryLabel[product.category]} · Engineered in a monochrome palette`,
    ],
    highlights: [
      {
        label: "Considered weight",
        title: "Lightweight Build",
        copy: "A barely-there weight that disappears the moment you put it on, without sacrificing structure.",
      },
      {
        label: "Moves with you",
        title: "Four-Way Stretch",
        copy: "A resilient construction that moves in every direction through the full range of motion, never restrictive.",
      },
      {
        label: "All-day comfort",
        title: "Built to Last",
        copy: "Finished to survive real use — abrasion-resistant, easy to care for, and designed to outlast the season.",
      },
    ],
  };
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

const productImages: Record<string, string> = {
  p1, p2, p3, p4, p5, p6, p7, p8,
};

export function getProductImage(id: string): string | undefined {
  return productImages[id];
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Aramid Shell Jacket",
    price: 420,
    category: "outerwear",
    isNew: true,
    tone: "oklch(0.78 0.004 90)",
    hoverTone: "oklch(0.4 0.004 90)",
    swatches: [
      { name: "Bone", tone: "oklch(0.9 0.004 90)" },
      { name: "Graphite", tone: "oklch(0.45 0.004 90)" },
      { name: "Ink", tone: "oklch(0.2 0.004 90)" },
    ],
  },
  {
    id: "p2",
    name: "Technical Crew Knit",
    price: 185,
    category: "tops",
    isNew: true,
    tone: "oklch(0.83 0.004 90)",
    hoverTone: "oklch(0.62 0.004 90)",
    swatches: [
      { name: "Ash", tone: "oklch(0.7 0.004 90)" },
      { name: "Ink", tone: "oklch(0.2 0.004 90)" },
    ],
  },
  {
    id: "p3",
    name: "Field Cargo Trouser",
    price: 240,
    category: "bottoms",
    isNew: true,
    tone: "oklch(0.6 0.004 90)",
    hoverTone: "oklch(0.35 0.004 90)",
    swatches: [
      { name: "Slate", tone: "oklch(0.5 0.004 90)" },
      { name: "Bone", tone: "oklch(0.9 0.004 90)" },
    ],
  },
  {
    id: "p4",
    name: "Sealed Mac Coat",
    price: 510,
    category: "outerwear",
    isNew: true,
    tone: "oklch(0.5 0.004 90)",
    hoverTone: "oklch(0.72 0.004 90)",
    swatches: [
      { name: "Graphite", tone: "oklch(0.45 0.004 90)" },
      { name: "Stone", tone: "oklch(0.75 0.004 90)" },
    ],
  },
  {
    id: "p5",
    name: "Boxy Pocket Tee",
    price: 95,
    category: "tops",
    isNew: true,
    tone: "oklch(0.9 0.004 90)",
    hoverTone: "oklch(0.55 0.004 90)",
    swatches: [
      { name: "Bone", tone: "oklch(0.9 0.004 90)" },
      { name: "Ash", tone: "oklch(0.7 0.004 90)" },
      { name: "Ink", tone: "oklch(0.2 0.004 90)" },
    ],
  },
  {
    id: "p6",
    name: "Tapered Wool Pant",
    price: 265,
    category: "bottoms",
    isNew: true,
    tone: "oklch(0.4 0.004 90)",
    hoverTone: "oklch(0.6 0.004 90)",
    swatches: [
      { name: "Ink", tone: "oklch(0.2 0.004 90)" },
      { name: "Slate", tone: "oklch(0.5 0.004 90)" },
    ],
  },
  {
    id: "p7",
    name: "Insulated Liner Vest",
    price: 195,
    category: "outerwear",
    isNew: true,
    tone: "oklch(0.7 0.004 90)",
    hoverTone: "oklch(0.45 0.004 90)",
    swatches: [
      { name: "Stone", tone: "oklch(0.75 0.004 90)" },
      { name: "Graphite", tone: "oklch(0.45 0.004 90)" },
    ],
  },
  {
    id: "p8",
    name: "Ribbed Mock Layer",
    price: 145,
    category: "tops",
    isNew: true,
    tone: "oklch(0.55 0.004 90)",
    hoverTone: "oklch(0.8 0.004 90)",
    swatches: [
      { name: "Ash", tone: "oklch(0.7 0.004 90)" },
      { name: "Ink", tone: "oklch(0.2 0.004 90)" },
    ],
  },
];

export type TabKey = "new" | "tops" | "bottoms" | "outerwear";

export const tabs: { key: TabKey; label: string }[] = [
  { key: "new", label: "New In" },
  { key: "tops", label: "Tops" },
  { key: "bottoms", label: "Bottoms" },
  { key: "outerwear", label: "Outerwear" },
];

export function filterProducts(tab: TabKey): Product[] {
  if (tab === "new") return products.filter((p) => p.isNew);
  return products.filter((p) => p.category === tab);
}
