import { PlaceholderImage } from "./PlaceholderImage";
import logo from "@/assets/logo.avif.asset.json";

export function Hero() {
  return (
    <section
      id="top"
      className="relative -mt-[73px] flex h-dvh min-h-[640px] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <PlaceholderImage
        tone="oklch(0.62 0.004 90)"
        className="absolute inset-0 h-full w-full"
        zoom
      />
      <div className="absolute inset-0 bg-ink/15" />

      {/* Centered logo mark */}
      <img
        src={logo.url}
        alt="Deepstrike"
        className="relative w-[clamp(220px,42vw,560px)] select-none opacity-95 drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
      />

      {/* Quiet scroll cue */}
      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 eyebrow text-[0.6rem] text-paper/70">
        Scroll
      </span>
    </section>
  );
}
