# Rumaan Cuisine — Website

A one-page, mobile-first marketing site for **Rumaan Cuisine**, a halal Middle Eastern & Mediterranean restaurant in Cedar Park, Texas.

Plain HTML5 / CSS3 / vanilla JavaScript. No build step, no framework — open `index.html` in a browser or upload the folder to any static host.

---

## 1. What's in this folder

```
rumaan-cuisine/
├── index.html          → the entire one-page site
├── css/style.css        → all styles (design tokens as CSS variables at the top)
├── js/main.js            → scroll reveals, active-nav highlighting, footer year
├── assets/
│   ├── images/           → PLACEHOLDER photos — see section 2 below
│   ├── logo/              → typographic wordmark (see section 3)
│   └── icons/             → empty, reserved for future icon assets
├── favicon/favicon.svg   → simple monogram favicon
├── robots.txt
├── sitemap.xml
└── README.md
```

## 2. ⚠️ Photos are placeholders — replace before launch

No real photography or logo file was supplied with the brief, so every image in `assets/images/` is a **clearly labeled placeholder** (cream/black background, a caption naming the exact photo needed, and the recommended pixel size). None of them are real or stock photos of the restaurant — they exist only so the layout is complete and easy to review.

Replace each file **using the exact same filename** so you don't need to touch the HTML:

| Filename | Used for | Recommended size |
|---|---|---|
| `hero-bg.jpg` | Hero background | 1920×1280 (landscape) |
| `about-photo.jpg` | About section | 1000×1250 (portrait) |
| `dish-falafel.jpg` | Featured dish: Falafel | 900×900 (square) |
| `dish-kafta-plate.jpg` | Featured dish: Kafta Plate | 900×900 |
| `dish-lamb-wrap.jpg` | Featured dish: Lamb Wrap | 900×900 |
| `dish-mixed-grill.jpg` | Featured dish: Mixed Grill | 900×900 |
| `dish-shawarma.jpg` | Featured dish: Chicken & Beef Shawarma | 900×900 |
| `dish-baba-ghanouj.jpg` | Featured dish: Baba Ghanouj | 900×900 |
| `dish-mint-lemonade.jpg` | Featured dish: Mint Lemonade | 900×900 |
| `dish-zaatar-pie.jpg` | Featured dish: Cheese & Za'atar Pie | 900×900 |
| `atmosphere-bg.jpg` | Atmosphere section background | 1920×1200 |
| `mint-lemonade-highlight.jpg` | Mint lemonade close-up | 900×1150 (portrait) |
| `gallery-1.jpg` … `gallery-8.jpg` | Gallery grid | ~900×900–1100, mixed |
| `location-photo.jpg` | Location section | 1000×1100 (portrait) |
| `cta-bg.jpg` | Final call-to-action background | 1920×1100 |

**Tips:**
- Keep new files as `.jpg`/`.webp` and the same filenames, or update the `src` in `index.html` if you rename them.
- For best performance, export photos as WebP (with a JPEG fallback if you want maximum compatibility) and compress to roughly 150–400 KB each.
- Every `<img>` already has a descriptive `alt` — update the alt text once a real photo is in place so it describes what's actually shown (this matters for accessibility and SEO).

## 3. Logo

No logo file was provided, so the header and footer currently use a **typographic wordmark** built in `assets/logo/rumaan-mark.svg` (uses the brand colors and the site's serif typeface). If you have a real logo file:

1. Drop it into `assets/logo/` (SVG preferred; PNG with transparency also works).
2. In `index.html`, update both `<img src="assets/logo/rumaan-mark.svg" ...>` references (one in the header, one in the footer) to point to the new file.
3. Update `favicon/favicon.svg` similarly if you want the favicon to match the real mark, or export a proper favicon set (16×16, 32×32, 180×180 for iOS) from it.

## 4. "View Full Menu" link

No live menu URL was provided in the brief. The **View Full Menu** button in the Menu section currently points to `href="#"`. Once you have a URL for your full menu (a PDF, a dedicated menu page, or a third-party ordering platform), open `index.html`, search for:

```html
<!-- TODO: replace href="#" with the real hosted menu URL when available -->
```

and update the `href`.

## 5. Domain-specific placeholders

`index.html`, `robots.txt`, and `sitemap.xml` reference `https://www.rumaancuisine.com/` as a placeholder domain for the canonical URL, Open Graph tags, and sitemap. Once the site is deployed to its real domain, do a find-and-replace for `rumaancuisine.com` across these files.

## 6. Content sourced directly from the brief

All copy, the address, phone number, hours, and social links come directly from what was provided — nothing about pricing, reviews, staff, restaurant history, nutritional information, or additional hours/services was invented. If any of the following changes, update it in `index.html`:

- **Address:** 11200 Lakeline Mall Dr, Unit F-18, Cedar Park, TX 78613
- **Phone:** +1 512-551-3500 (used for both the `tel:` link and the WhatsApp link)
- **Hours:** Mon–Sat 11:30 AM–9:00 PM, Sun 11:30 AM–6:00 PM, plus Extended Hookah Hours Fri & Sat 9:00 PM–2:00 AM
- **Instagram:** @rumaancuisine
- **Facebook:** facebook.com/RumaanCuisine

## 7. Design system

- **Colors** (`css/style.css`, top of file): red `#B52D2D`, green `#234D2C`, cream `#F5EBDD`, black `#171717`, white `#FFFFFF` — all as CSS custom properties, so a palette tweak only needs to happen in one place.
- **Type:** Fraunces (serif, headlines) + Work Sans (sans-serif, body/UI), loaded from Google Fonts.
- **Motion:** subtle fade/reveal on scroll, image hover-zoom, and smooth-scroll anchor navigation. Everything respects `prefers-reduced-motion`.
- **Navigation:** no hamburger menu at any screen size — a compact, horizontally scrollable anchor bar sits under the top bar on mobile and centers itself on larger screens.

## 8. Deployment

This is a static site — it can be hosted anywhere that serves static files:

- **Netlify / Vercel:** drag-and-drop the `rumaan-cuisine` folder, or connect a Git repo.
- **GitHub Pages:** push the contents of this folder to a repo and enable Pages.
- **Any traditional web host:** upload the folder via FTP/SFTP to the site's public root.

No build step or `node_modules` is required.

## 9. Before you launch — quick checklist

- [ ] Replace all placeholder photos in `assets/images/`
- [ ] Add a real logo (or keep the wordmark) in `assets/logo/`
- [ ] Add the real "View Full Menu" link
- [ ] Replace `rumaancuisine.com` with the live domain in `index.html`, `robots.txt`, `sitemap.xml`
- [ ] Test at 360px, 375px, 414px, tablet, and 1440px+ widths
- [ ] Run the page through a Lighthouse/accessibility check after real photos are added
