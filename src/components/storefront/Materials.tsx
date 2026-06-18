import { Reveal } from "./Reveal";
import materialsImg from "@/assets/sections/materials.jpg";

const specs = [
  {
    no: "01",
    title: "Sealed Seams",
    body: "Every join is taped and pressure-tested to keep weather out and warmth in.",
  },
  {
    no: "02",
    title: "Recycled Shells",
    body: "Outer fabrics woven from regenerated nylon, with no loss to durability.",
  },
  {
    no: "03",
    title: "Field Repaired",
    body: "Built to be mended, not replaced — backed by a two-year repair promise.",
  },
];

export function Materials() {
  return (
    <section
      id="materials"
      className="overflow-hidden border-b border-hairline bg-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <Reveal className="group relative">
          <img
            src={materialsImg}
            alt="Macro detail of sealed seams and a waterproof zipper"
            loading="lazy"
            width={1280}
            height={1600}
            className="h-full min-h-[420px] w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute left-6 top-6 bg-ink/90 px-4 py-2 text-paper backdrop-blur-sm">
            <p className="text-[0.55rem] uppercase leading-none tracking-[0.2em]">
              Material Study — 2026
            </p>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-14 md:py-28 lg:px-20">
          <Reveal>
            <p className="eyebrow text-stone">Made to Last</p>
            <h2 className="mt-5 max-w-md font-display text-3xl font-semibold leading-[1.0] tracking-tight text-ink sm:text-4xl md:text-5xl">
              Honest materials,{" "}
              <span className="font-light italic text-stone">engineered</span> to
              endure.
            </h2>
          </Reveal>

          <ul className="mt-12 space-y-px">
            {specs.map((spec, i) => (
              <Reveal key={spec.no} delay={120 + i * 80}>
                <li className="grid grid-cols-[auto_1fr] gap-6 border-t border-hairline py-6">
                  <span className="font-display text-sm tabular-nums text-stone">
                    {spec.no}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-ink">
                      {spec.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone">
                      {spec.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
