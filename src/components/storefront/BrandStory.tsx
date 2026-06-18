import { Reveal } from "./Reveal";
import storyImg from "@/assets/sections/story.jpg";

export function BrandStory() {
  return (
    <section id="story" className="overflow-hidden border-y border-hairline bg-card">
      <div className="relative px-6 py-20 md:px-12 md:py-32">
        {/* background hairline */}
        <div className="pointer-events-none absolute left-0 top-1/2 -z-0 hidden h-px w-full bg-hairline md:block" />

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Vertical eyebrow */}
          <div className="hidden md:col-span-1 md:block">
            <div className="origin-top-left translate-x-4 rotate-90">
              <span className="eyebrow flex items-center gap-4 whitespace-nowrap text-[0.6rem] text-stone">
                Our Practice <span className="h-px w-12 bg-hairline" /> 003
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:col-span-11 md:grid-cols-11">
            {/* Heading */}
            <Reveal className="z-10 md:col-span-11 lg:col-span-10">
              <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[0.9] tracking-tight text-ink sm:text-5xl md:text-7xl lg:text-[5.5rem]">
                We design for the{" "}
                <span className="font-light italic text-stone">long arc</span> —
                pieces that outlast the season.
              </h2>
            </Reveal>

            {/* Image */}
            <Reveal className="group relative md:col-span-7" delay={120}>
              <div className="overflow-hidden rounded-sm bg-muted">
                <img
                  src={storyImg}
                  alt="Technical garment detail with sealed seams"
                  loading="lazy"
                  className="aspect-[5/3] w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Technical annotation */}
              <div className="absolute -bottom-5 -right-3 hidden bg-ink p-4 text-paper lg:block">
                <p className="mb-1 text-[0.55rem] uppercase leading-none tracking-[0.2em]">
                  Detail: Ref_2026_Seam
                </p>
                <p className="text-[0.55rem] tabular-nums opacity-50">
                  45.5232° N, 122.6765° W
                </p>
              </div>
            </Reveal>

            {/* Text */}
            <Reveal
              className="flex h-full flex-col justify-end md:col-span-4"
              delay={200}
            >
              <div className="border-l border-hairline pl-8">
                <p className="mb-10 text-base leading-relaxed text-stone md:text-lg">
                  Every garment begins with a problem to solve: how to make it
                  last. We work in a tight, deliberate palette so the focus
                  remains on the seams, honest fabrics, and a fit built around
                  the body.
                </p>

                <a
                  href="#best-sellers"
                  className="group inline-flex items-center gap-4 eyebrow text-[0.7rem] text-ink"
                >
                  <span>Explore the collection</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth="1.5"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
