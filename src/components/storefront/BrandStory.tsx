import { Reveal } from "./Reveal";
import storyImg from "@/assets/sections/story.jpg";

export function BrandStory() {
  return (
    <section id="story" className="border-y border-hairline bg-card">
      <div className="grid grid-cols-1 gap-10 px-6 py-20 md:grid-cols-12 md:gap-8 md:px-12 md:py-32">
        <Reveal className="md:col-span-7">
          <p className="eyebrow text-stone">Our Practice</p>
          <p className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[3.25rem]">
            We design for the
            <br className="hidden md:block" /> long arc — pieces that
            outlast the season and earn their place.
          </p>
          <div className="mt-10 overflow-hidden rounded-sm">
            <img
              src={storyImg}
              alt="Technical garment detail with sealed seams"
              loading="lazy"
              className="aspect-[5/3] w-full object-cover"
            />
          </div>
        </Reveal>


        <Reveal className="self-end md:col-span-4 md:col-start-9" delay={120}>
          <p className="text-base leading-relaxed text-stone">
            Every garment begins with a problem to solve: how to move, how to
            shield, how to last. We work in a tight, deliberate palette so the
            making speaks for itself — sealed seams, honest fabrics, and a fit
            built around the body in motion.
          </p>
          <a
            href="#best-sellers"
            className="mt-6 inline-block eyebrow text-[0.7rem] text-ink underline-offset-4 hover:underline"
          >
            Explore the collection →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
