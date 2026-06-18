import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PlaceholderImage } from "./PlaceholderImage";

const tiles = [
  { label: "Women", tone: "oklch(0.7 0.004 90)" },
  { label: "Men", tone: "oklch(0.42 0.004 90)" },
];

export function CategoryTiles() {
  return (
    <section className="px-6 pb-20 md:px-12 md:pb-28">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
        {tiles.map((tile, i) => (
          <Reveal key={tile.label} delay={i * 100}>
            <a
              href="#best-sellers"
              className="group relative block aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[3/4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <PlaceholderImage
                tone={tile.tone}
                className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-6 md:p-8">
                <span className="font-display text-2xl font-semibold tracking-tight text-paper md:text-3xl">
                  Shop {tile.label}
                </span>
                <ArrowUpRight
                  className="h-6 w-6 text-paper transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
