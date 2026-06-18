import { Instagram, Twitter, Youtube } from "lucide-react";
import logoDark from "@/assets/logo-dark.png.asset.json";

const groups = [
  { title: "Shop", links: ["New In", "Women", "Men", "Outerwear"] },
  { title: "About", links: ["Our Practice", "Materials", "Sustainability", "Stockists"] },
  { title: "Support", links: ["Contact", "Shipping", "Returns", "Size Guide"] },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <img
              src={logoDark.url}
              alt="Deepstrike"
              className="h-8 w-auto opacity-0 md:h-10"
              style={{ filter: "invert(1)", opacity: 1 }}
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Considered technical apparel, engineered to outlast the season.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#top"
                  aria-label={["Instagram", "Twitter", "YouTube"][i]}
                  className="grid h-9 w-9 place-items-center rounded-sm border border-paper/20 text-paper/80 transition-colors hover:border-paper hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-paper"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {groups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="eyebrow text-[0.65rem] text-paper/50">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#best-sellers"
                      className="text-sm text-paper/75 transition-colors hover:text-paper"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-paper/50">
            © {new Date().getFullYear()} Deepstrike. All rights reserved.
          </p>
          <label className="flex items-center gap-2 text-xs text-paper/60">
            <span className="sr-only">Select region</span>
            <select className="rounded-sm border border-paper/20 bg-transparent px-3 py-1.5 text-xs text-paper/80 focus:border-paper focus:outline-none">
              <option className="text-ink">United States (USD $)</option>
              <option className="text-ink">United Kingdom (GBP £)</option>
              <option className="text-ink">Europe (EUR €)</option>
              <option className="text-ink">Japan (JPY ¥)</option>
            </select>
          </label>
        </div>
      </div>
    </footer>
  );
}
