import { useState } from "react";
import { tabs, filterProducts, type TabKey } from "@/data/products";
import { SectionHeading } from "./SectionHeading";
import { ProductCard } from "./ProductCard";
import { Reveal } from "./Reveal";

export function BestSellers() {
  const [active, setActive] = useState<TabKey>("new");
  const items = filterProducts(active);

  return (
    <section
      id="best-sellers"
      className="px-6 py-20 md:px-12 md:py-28"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="Best Sellers" title="The current edit" />

        <Reveal>
          <div
            role="tablist"
            aria-label="Filter products by category"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                role="tab"
                aria-selected={active === tab.key}
                onClick={() => setActive(tab.key)}
                className={`eyebrow border-b-2 pb-1 text-[0.7rem] transition-colors ${
                  active === tab.key
                    ? "border-ink text-ink"
                    : "border-transparent text-stone hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-6">
        {items.map((product, i) => (
          <Reveal as="li" key={product.id} delay={(i % 4) * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
