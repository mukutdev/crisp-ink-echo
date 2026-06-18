import { useEffect, useState } from "react";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { MobileMenu } from "./MobileMenu";
import logoDark from "@/assets/logo-dark.png.asset.json";
import logoLight from "@/assets/logo.avif.asset.json";

const links = ["New In", "Women", "Men", "Outerwear", "About"];

export function Navbar() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-hairline bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 md:px-12"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center" aria-label="Deepstrike home">
          <img
            src={scrolled ? logoDark.url : logoLight.url}
            alt="Deepstrike"
            className="h-7 w-auto md:h-9"
          />
        </a>

        <ul className="hidden items-center justify-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#best-sellers"
                className={`eyebrow text-[0.9rem] transition-colors ${
                  scrolled ? "text-ink/80 hover:text-ink" : "text-paper/90 hover:text-paper"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className={`flex items-center justify-end gap-1.5 ${scrolled ? "text-ink" : "text-paper"}`}>
          <button
            type="button"
            aria-label="Search"
            className="rounded-sm p-2 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden rounded-sm p-2 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink sm:block"
          >
            <User className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Cart, ${count} items`}
            className="relative rounded-sm p-2 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-ink px-1 text-[0.6rem] font-semibold leading-none text-paper">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="rounded-sm p-2 transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink md:hidden"
          >
            <Menu className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
