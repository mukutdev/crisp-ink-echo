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
    isNew: false,
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
    isNew: false,
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
    isNew: false,
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
