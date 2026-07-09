import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { CartProvider, useCart } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/storefront/AnnouncementBar";
import { Navbar } from "@/components/storefront/Navbar";
import { Footer } from "@/components/storefront/Footer";

import { PlaceholderImage } from "@/components/storefront/PlaceholderImage";
import editorial1 from "@/assets/sections/pdp-editorial-1.jpg";
import editorial2 from "@/assets/sections/pdp-editorial-2.jpg";
import editorial3 from "@/assets/sections/pdp-editorial-3.jpg";
import {
  getProductById,
  getProductDetail,
  getProductImage,
  SIZES,
  type Product,
  type Size,
} from "@/data/products";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => {
    const product = getProductById(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — Deepstrike" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — Deepstrike`;
    const description = `${product.name}, considered technical apparel engineered in a quiet monochrome palette. $${product.price}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="eyebrow text-stone">Not found</p>
      <h1 className="font-display text-4xl font-semibold text-ink">This piece isn't available</h1>
      <Link
        to="/"
        className="mt-2 rounded-full bg-ink px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper"
      >
        Back to shop
      </Link>
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar />
      <main>
        <ProductDetailView product={product} />
        <FeatureList product={product} />
        <EditorialGallery />
        <ReviewsBlock />


      </main>
      <Footer />
    </CartProvider>
  );
}

function ProductDetailView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const detail = getProductDetail(product);
  const image = getProductImage(product.id);
  const gallery = Array.from({ length: 5 });

  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState<Size | null>(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const galleryToneFor = (i: number) =>
    i === 0 ? product.tone : i % 2 === 0 ? product.hoverTone : product.tone;

  const step = (dir: 1 | -1) =>
    setActiveImg((i) => (i + dir + gallery.length) % gallery.length);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addItem();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <section className="px-6 pt-6 md:px-12">
      <nav aria-label="Breadcrumb" className="eyebrow text-[0.65rem] text-stone">
        <Link to="/" className="hover:text-ink">
          Shop
        </Link>
        <span className="px-2 text-hairline">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="mt-4 grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
        {/* Gallery */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            {image && activeImg === 0 ? (
              <img
                src={image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <PlaceholderImage
                tone={galleryToneFor(activeImg)}
                label={`${product.name} · view ${activeImg + 1}`}
                className="absolute inset-0 h-full w-full"
              />
            )}

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-paper/80 text-ink backdrop-blur transition-colors hover:bg-paper"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-hairline bg-paper/80 text-ink backdrop-blur transition-colors hover:bg-paper"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-2.5 py-1 text-[0.6rem] font-semibold text-paper tabular-nums">
              {activeImg + 1} / {gallery.length}
            </span>
          </div>

          <ul className="mt-3 grid grid-cols-5 gap-2">
            {gallery.map((_, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setActiveImg(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-current={activeImg === i}
                  className={`relative block aspect-square w-full overflow-hidden rounded-sm border transition-colors ${
                    activeImg === i ? "border-ink" : "border-hairline hover:border-stone"
                  }`}
                >
                  {image && i === 0 ? (
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <PlaceholderImage
                      tone={galleryToneFor(i)}
                      className="h-full w-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className="lg:pb-16">
          <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-5">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {product.name}
            </h1>
            <span className="text-lg tabular-nums text-ink md:text-xl">${product.price}</span>
          </div>

          <p className="mt-6 text-[0.95rem] font-medium text-ink">{detail.tagline}</p>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-stone">
            {detail.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-5 text-sm text-stone">*{detail.shippingNote}</p>

          {/* Color */}
          <div className="mt-8 flex items-center gap-6">
            <span className="eyebrow w-16 text-[0.7rem] text-ink">Color</span>
            <div className="flex items-center gap-2.5">
              {product.swatches.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  title={s.name}
                  aria-label={s.name}
                  aria-pressed={color === i}
                  onClick={() => setColor(i)}
                  className={`grid h-8 w-8 place-items-center rounded-full border transition-all ${
                    color === i ? "border-ink" : "border-hairline hover:border-stone"
                  }`}
                >
                  <span
                    className="h-5 w-5 rounded-full border border-hairline"
                    style={{ backgroundColor: s.tone }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6 flex items-center gap-6">
            <span className="eyebrow w-16 text-[0.7rem] text-ink">Size</span>
            <div className="flex flex-wrap items-center gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={size === s}
                  onClick={() => setSize(s)}
                  className={`grid h-10 w-10 place-items-center rounded-full border text-xs font-semibold transition-colors ${
                    size === s
                      ? "border-ink bg-ink text-paper"
                      : "border-hairline text-ink hover:border-stone"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add */}
          <div className="mt-8 flex items-stretch gap-3">
            <div className="flex items-center rounded-full border border-hairline">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-12 w-12 place-items-center text-ink transition-opacity hover:opacity-60"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="w-8 text-center text-sm tabular-nums text-ink">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="grid h-12 w-12 place-items-center text-ink transition-opacity hover:opacity-60"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={!size}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" strokeWidth={2} /> Added
                </>
              ) : size ? (
                "Add to cart"
              ) : (
                "Select a size"
              )}
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-10 border-t border-hairline">
            <Accordion title="Features">
              <ul className="space-y-2 text-sm text-stone">
                {detail.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-ink">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Specs">
              <ul className="space-y-2 text-sm text-stone">
                {detail.specs.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="text-ink">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>

          <ul className="mt-8 space-y-3">
            {["5 year warranty", "Free returns in the US", "Duty-free to EU & Canada"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-paper">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[0.95rem] font-medium text-ink">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-stone transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}

function FeatureList({ product }: { product: Product }) {
  const detail = getProductDetail(product);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <ul className="border-t border-ink/80">
        {detail.featureRows.map((row, i) => {
          const isOpen = open === i;
          return (
            <li key={row.title} className="border-b border-ink/80">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="grid w-full grid-cols-[minmax(7rem,10rem)_1fr_auto] items-center gap-4 py-6 text-left transition-opacity hover:opacity-70 md:gap-8 md:py-8"
              >
                <span className="eyebrow text-[0.65rem] text-ink md:text-[0.7rem]">
                  {row.label}
                </span>
                <span className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl md:text-4xl">
                  {row.title}
                </span>
                <Plus
                  className={`h-6 w-6 shrink-0 text-ink transition-transform duration-300 md:h-7 md:w-7 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  strokeWidth={1.25}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="grid grid-cols-[minmax(7rem,10rem)_1fr] gap-4 pb-8 md:gap-8">
                    <span aria-hidden="true" />
                    <span className="max-w-xl text-sm leading-relaxed text-stone">
                      {row.copy}
                    </span>
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const editorialItems = [
  { src: editorial1, caption: "A highly ventilated running tee", span: "aspect-[16/11] sm:col-span-2 sm:aspect-auto sm:h-full" },
  { src: editorial2, caption: "Body-mapped perforation", span: "" },
  { src: editorial3, caption: "All-day comfort", span: "" },
];

function EditorialGallery() {
  return (
    <section className="px-6 pb-4 md:px-12">
      <div className="grid grid-cols-1 gap-3 sm:h-[34rem] sm:grid-cols-4 lg:h-[42rem]">
        {editorialItems.map((item) => (
          <figure
            key={item.caption}
            className={`group relative overflow-hidden rounded-sm bg-muted ${
              item.span || "aspect-[3/4] sm:aspect-auto sm:h-full"
            }`}
          >
            <img
              src={item.src}
              alt={item.caption}
              loading="lazy"
              width={1008}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute left-4 top-4 z-10 eyebrow text-[0.65rem] text-paper mix-blend-difference">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>

  );
}





function ReviewsBlock() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="eyebrow text-stone">Customer Reviews</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
          Be the first to write a review
        </h2>
        <p className="mt-4 text-sm text-stone">
          No reviews yet — share your experience with this piece.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-ink px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Write a review
        </button>
      </div>
    </section>
  );
}
