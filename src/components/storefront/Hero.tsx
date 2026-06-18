import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative -mt-[73px] flex h-dvh min-h-[640px] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <img
        src={heroImage}
        alt="A figure in technical outerwear crossing a misty mountain ridge"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/50" />

      {/* Editorial transparent headline */}
      <div className="relative flex flex-col items-center px-6 text-center">
        <span className="eyebrow mb-6 text-[0.78rem] tracking-[0.32em] text-paper/70">
          Autumn / Winter 2026
        </span>
        <h1 className="font-display text-[clamp(3rem,12vw,9.5rem)] font-semibold leading-[0.92] text-paper/15 mix-blend-overlay [text-shadow:0_2px_40px_rgba(0,0,0,0.25)]">
          DEEPSTRIKE
        </h1>
        <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-paper/75">
          Technical apparel engineered for movement. Built quiet, worn loud.
        </p>
      </div>

      {/* Frosted glass pill CTAs */}
      <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-wrap items-center justify-center gap-3">
        <a
          href="#best-sellers"
          className="rounded-full border border-paper/30 bg-paper/15 px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper backdrop-blur-md transition-colors hover:bg-paper/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
        >
          Shop New In
        </a>
        <a
          href="#story"
          className="rounded-full border border-paper/30 bg-paper/15 px-7 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-paper backdrop-blur-md transition-colors hover:bg-paper/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
        >
          Lookbook
        </a>
      </div>
    </section>
  );
}
