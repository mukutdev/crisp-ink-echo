import { Truck, RotateCcw, ShieldCheck, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Truck, label: "Free Shipping over $125" },
  { icon: RotateCcw, label: "Free 30-Day Returns" },
  { icon: ShieldCheck, label: "Secure Checkout" },
  { icon: BadgeCheck, label: "2-Year Warranty" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-hairline" aria-label="Store guarantees">
      <ul className="grid grid-cols-2 gap-px px-6 py-2 md:grid-cols-4 md:px-12">
        {badges.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center justify-center gap-2.5 px-2 py-5 text-center"
          >
            <Icon className="h-4 w-4 shrink-0 text-ink" strokeWidth={1.5} />
            <span className="text-xs font-medium text-stone">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
