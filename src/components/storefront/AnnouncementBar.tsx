import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="relative bg-ink text-paper">
      <div className="mx-auto flex max-w-[1400px] items-center justify-center px-12 py-2.5">
        <p className="eyebrow text-center text-[0.625rem] text-paper/90">
          Free shipping over $125 · Free returns
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm p-1 text-paper/70 transition-colors hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-paper"
        >
          <X className="h-3.5 w-3.5" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}
