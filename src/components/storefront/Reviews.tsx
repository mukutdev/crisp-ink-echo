import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    quote:
      "Wore the shell through three days of alpine rain. Bone dry the entire time — nothing else comes close.",
    name: "Daniel R.",
    detail: "Stormline Shell",
  },
  {
    quote:
      "The fit is exact and the fabric still looks new after a full season of daily wear. Worth every cent.",
    name: "Priya N.",
    detail: "Field Midlayer",
  },
  {
    quote:
      "Quiet, considered, and built like nothing I own. You feel the difference the moment you put it on.",
    name: "Marcus L.",
    detail: "Trail Pant",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="border-b border-hairline bg-card px-6 py-20 md:px-12 md:py-28"
    >
      <Reveal className="text-center">
        <p className="eyebrow text-stone">What People Say</p>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[3.25rem]">
          Tested in the field, trusted by thousands
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-px md:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal key={review.name} delay={120 + i * 100}>
            <figure className="flex h-full flex-col justify-between border border-hairline bg-background p-8 md:p-10">
              <div>
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-3.5 w-3.5 fill-ink text-ink"
                      strokeWidth={1}
                    />
                  ))}
                </div>
                <blockquote className="mt-6 text-base leading-relaxed text-ink">
                  “{review.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-hairline pt-5">
                <p className="text-sm font-medium text-ink">{review.name}</p>
                <p className="text-xs text-stone">{review.detail}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
