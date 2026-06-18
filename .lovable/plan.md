## Premium Minimal-Monochrome Apparel Storefront

A single, responsive, mobile-first homepage with a refined editorial fashion aesthetic. Local-state cart, client-side filtering, restrained motion. Your uploaded image is used as the brand logo.

### Visual system
- **Palette (strict grayscale):** paper `#f4f2ee`, ink `#0d0d0c`, mid-gray secondary `~#6b6862`, hairline borders. No color accents. Defined as semantic tokens in `src/styles.css` (`@theme`).
- **Type:** Bricolage Grotesque (display headlines) + Archivo (body), via `@fontsource` packages. Uppercase micro-labels with wide letter-spacing for eyebrows.
- **Rhythm:** generous whitespace, large section padding, calm vertical cadence.
- **Logo:** uploaded `Untitled_3.avif` hosted via lovable-assets, used in nav + footer (inverts/sizes cleanly on the paper background).

### Motion (subtle only)
- IntersectionObserver staggered fade-up reveals on scroll (no layout shift).
- Smooth hover transitions on cards, tiles, links.
- One infinite CSS marquee.
- Slow hero image zoom (Ken Burns).
- Respects `prefers-reduced-motion`.

### Sections (top → bottom)
1. **Announcement bar** — slim, dismissible ("Free shipping over $125 · Free returns").
2. **Nav** — sticky, transparent → solid on scroll. Left logo, center links (New In / Women / Men / Outerwear / About), right icons (search, account, cart w/ live count badge). Mobile hamburger → full-screen overlay menu.
3. **Hero** — full-bleed mono placeholder tile w/ slow zoom, large editorial headline, one supporting line, two CTAs (Shop New In primary, Lookbook ghost).
4. **Best Sellers** — working category tabs (New In / Tops / Bottoms / Outerwear) filtering grid client-side. ProductCard: image w/ hover-swap to 2nd image, color-swatch row, name + price, hover "Quick Add" that increments cart badge.
5. **Shop by Category** — two split tiles (Women / Men), hover zoom, overlaid label + arrow.
6. **Brand-story band** — asymmetric: oversized statement text + supporting paragraph.
7. **Marquee** — infinite horizontal tagline/category words.
8. **Newsletter / early-access** — heading, inline email input + submit, terms line.
9. **Trust badges** — free shipping, free returns, secure checkout, warranty (check icons + labels).
10. **Footer** — logo, quick links (Shop / About / Support), social icons, region selector, copyright.

### Architecture & technical
- **Components:** `AnnouncementBar`, `Navbar`, `MobileMenu`, `Hero`, `SectionHeading`, `CategoryTabs`, `ProductCard`, `BestSellers`, `CategoryTiles`, `BrandStory`, `MarqueeRow`, `Newsletter`, `TrustBadges`, `Footer`, `PlaceholderImage` (tasteful mono tile), plus a `useReveal` hook for IntersectionObserver.
- **Cart:** local React state (count only for now); `CartContext` so the badge updates from Quick Add anywhere.
- **Data:** `products` array (id, name, price, category, swatches, two image refs) — structured to swap in a real catalog later.
- **Accessibility:** semantic landmarks (header/nav/main/section/footer), single `<main>`, visible focus states, aria-labels on icon-only buttons, accessible tabs, alt text. Smooth scroll, no layout shift.
- **Build:** all on the homepage route (`src/routes/index.tsx`) composed from the components above; mono placeholder tiles so layout reads without real assets.

### Files
- `src/routes/index.tsx` — compose page.
- `src/components/storefront/*` — the components above.
- `src/context/CartContext.tsx`, `src/hooks/useReveal.ts`, `src/data/products.ts`.
- `src/styles.css` — tokens, fonts, marquee/zoom keyframes.
- Logo asset pointer in `src/assets/logo.avif.asset.json`.
