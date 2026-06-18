import logo from "@/assets/logo.avif.asset.json";
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
      <div className="absolute inset-0 bg-ink/25" />

      {/* Centered logo mark */}
      <img
        src={logo.url}
        alt="Deepstrike"
        className="relative w-[clamp(220px,42vw,560px)] select-none opacity-95 drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)]"
      />

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
