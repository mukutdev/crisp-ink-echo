import { PlaceholderImage } from "./PlaceholderImage";

export function Hero() {
  return (
    <section
      id="top"
      className="relative -mt-[73px] flex min-h-[92vh] items-end overflow-hidden"
      aria-label="Hero"
    >
      <PlaceholderImage
        tone="oklch(0.62 0.004 90)"
        className="absolute inset-0 h-full w-full"
        zoom
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-ink/20" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-16 md:px-12 md:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-paper/80">Autumn / Winter — Series 04</p>
          <h1 className="mt-5 font-display text-[2.75rem] font-semibold leading-[0.98] tracking-tight text-paper sm:text-6xl md:text-7xl">
            Built for the
            <br />
            elements.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-paper/85">
            Considered technical apparel — engineered fabrics, quiet palettes,
            and silhouettes that hold their line.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#best-sellers"
              className="inline-flex items-center justify-center rounded-sm bg-paper px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-paper/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Shop New In
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-sm border border-paper/60 px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-paper/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
            >
              Lookbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
