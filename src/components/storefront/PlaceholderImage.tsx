interface PlaceholderImageProps {
  tone: string;
  className?: string;
  /** optional secondary label shown faintly, e.g. a product tag */
  label?: string;
  zoom?: boolean;
}

/**
 * Tasteful monochrome placeholder tile. A soft diagonal sheen plus a faint
 * label so the layout reads cleanly without real photography.
 */
export function PlaceholderImage({ tone, className = "", label, zoom }: PlaceholderImageProps) {
  return (
    <div
      className={`overflow-hidden ${className.includes("absolute") ? "" : "relative"} ${className}`}
      style={{ backgroundColor: tone }}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-0 ${zoom ? "animate-slow-zoom" : ""}`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 38%, rgba(0,0,0,0.12) 100%)",
        }}
      />
      {label ? (
        <span className="absolute bottom-3 left-3 eyebrow text-[0.6rem] text-ink/40">
          {label}
        </span>
      ) : null}
    </div>
  );
}
