import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      <p className="eyebrow text-stone">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
