const words = [
  "Engineered Fabrics",
  "Quiet Palettes",
  "Sealed Seams",
  "Built to Last",
  "Field Tested",
];

export function MarqueeRow() {
  const sequence = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-hairline py-6" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {sequence.map((word, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl font-medium tracking-tight text-ink/70 md:text-4xl">
              {word}
            </span>
            <span className="text-ink/30">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
