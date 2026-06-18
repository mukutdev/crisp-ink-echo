import { useState } from "react";
import { Plus, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { PlaceholderImage } from "./PlaceholderImage";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
        <PlaceholderImage
          tone={product.tone}
          label={product.name}
          className="absolute inset-0 h-full w-full transition-opacity duration-500 group-hover:opacity-0"
        />
        <PlaceholderImage
          tone={product.hoverTone}
          label="Back view"
          className="absolute inset-0 h-full w-full scale-[1.02] opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        />

        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-sm bg-paper/90 px-2 py-1 eyebrow text-[0.55rem] text-ink">
            New
          </span>
        )}

        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Quick add ${product.name}`}
          className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-1.5 rounded-sm bg-ink/95 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-paper opacity-0 backdrop-blur transition-all duration-300 hover:bg-ink focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink group-hover:translate-y-0 group-hover:opacity-100"
        >
          {added ? (
            <>
              <Check className="h-3.5 w-3.5" strokeWidth={2} /> Added
            </>
          ) : (
            <>
              <Plus className="h-3.5 w-3.5" strokeWidth={2} /> Quick Add
            </>
          )}
        </button>
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        {product.swatches.map((s) => (
          <span
            key={s.name}
            title={s.name}
            className="h-3 w-3 rounded-full border border-hairline"
            style={{ backgroundColor: s.tone }}
          />
        ))}
      </div>

      <div className="mt-2 flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-medium text-ink">{product.name}</h3>
        <span className="text-sm tabular-nums text-stone">${product.price}</span>
      </div>
    </article>
  );
}
