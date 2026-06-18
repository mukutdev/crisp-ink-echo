import t1 from "@/assets/team/t1.jpg";
import t2 from "@/assets/team/t2.jpg";
import t3 from "@/assets/team/t3.jpg";
import t4 from "@/assets/team/t4.jpg";
import t5 from "@/assets/team/t5.jpg";
import t6 from "@/assets/team/t6.jpg";

const team = [
  { id: "1", name: "Maya Torres", image: t1, role: "Ultra Runner" },
  { id: "2", name: "Jonas Hale", image: t2, role: "Alpinist" },
  { id: "3", name: "Sofia Chen", image: t3, role: "Cyclist" },
  { id: "4", name: "Kai Durant", image: t4, role: "Desert Runner" },
  { id: "5", name: "Elsa Voss", image: t5, role: "Skier" },
  { id: "6", name: "Owen Marsh", image: t6, role: "Thru-Hiker" },
];

export function TeamGallery() {
  // Duplicate for seamless infinite scroll
  const items = [...team, ...team];

  return (
    <section className="overflow-hidden py-20 md:py-28">
      <div className="px-6 text-center md:px-12">
        <p className="eyebrow text-stone">Deepstrike Team</p>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[3.25rem]">
          Worn by the people who test our limits
        </h2>
      </div>

      <div className="relative mt-14">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-scroll-x gap-5 px-5">
          {items.map((member, i) => (
            <div
              key={`${member.id}-${i}`}
              className="shrink-0 select-none"
              style={{ width: "clamp(240px, 22vw, 320px)" }}
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="aspect-[3/4] w-full object-cover grayscale transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-ink">
                {member.name}
              </p>
              <p className="text-center text-xs text-stone">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex justify-center px-6">
        <a
          href="#top"
          className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink/90"
        >
          Explore Deepstrike Team
        </a>
      </div>
    </section>
  );
}
