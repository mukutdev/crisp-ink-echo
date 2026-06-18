import { X } from "lucide-react";
import logoDark from "@/assets/logo-dark.png.asset.json";

const links = ["New In", "Women", "Men", "Outerwear", "About"];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-paper transition-opacity duration-300 md:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
        <img src={logoDark.url} alt="Deepstrike" className="h-5 w-auto" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-sm p-1 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
        >
          <X className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>
      <nav className="flex flex-col px-6 pt-6" aria-label="Mobile">
        {links.map((link, i) => (
          <a
            key={link}
            href="#best-sellers"
            onClick={onClose}
            className="border-b border-hairline py-5 font-display text-3xl font-medium tracking-tight text-ink transition-opacity hover:opacity-60"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}
