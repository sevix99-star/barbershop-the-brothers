# Audit notes — items that need the client

One line per item. All autonomously-fixable Lighthouse issues were addressed
in code (see the phase-2 commit); what remains here is business data.

## Client-supplied environment variables

These keys live in `.env.example`. The page already ships working without
them (the component hides the feature or renders a fallback), but filling
them unlocks the live version.

- [ ] `PUBLIC_BOOKING_URL` — real Fresha booking URL for the "Book via Fresha" button.
- [ ] `PUBLIC_WHATSAPP` — international-format WhatsApp number (e.g. `+31612345678`) for chat + Location.
- [ ] `PUBLIC_PHONE` — business phone number for Location contact list + JSON-LD `telephone`.
- [ ] `PUBLIC_EMAIL` — business email for Location contact list + JSON-LD `email`.
- [ ] `PUBLIC_KVK` — Kamer van Koophandel (Chamber of Commerce) number for Footer.
- [ ] `PUBLIC_BTW` — Dutch VAT / BTW number for Footer.
- [ ] `PUBLIC_INSTAGRAM_URL` — Instagram profile URL (Footer + Gallery CTA).
- [ ] `PUBLIC_FACEBOOK_URL` — Facebook page URL (Footer).
- [ ] `PUBLIC_TIKTOK_URL` — TikTok profile URL (Footer, optional).
- [ ] `PUBLIC_MAPS_EMBED` — exact Google Maps iframe `src` URL for the real pin.
- [ ] `PUBLIC_GOOGLE_REVIEWS_URL` — Google Place reviews link (the "See all 109 reviews" CTA).

## Things only the client can decide

- [ ] Confirm final service prices and durations in `src/i18n/{nl,en,pl}.json` under `services.items[]` — current values are the existing site's prices.
- [ ] Confirm gallery images + captions; swap the seven files in `src/assets/gallery/` if new photography is shot. Labels live in `gallery.labels[]` per locale.
- [ ] Review the three review quotes under `reviews.items[]` — right now they are the existing site's picks; swap for fresh Google reviews whenever desired.
- [ ] Decide whether to add a Google Place ID / Review widget for a dynamic rating fetch (not wired today; static `5.0 / 109` is used).

## Already handled autonomously (for the record)

- `color-contrast`: WhatsApp CTA uses `#075E30` + white (≈ 7.9:1, WCAG AA).
- `label-content-name-mismatch`: logo and external-link icons now use visible text + `sr-only` supplement instead of conflicting `aria-label`.
- `modern-image-formats` / `uses-responsive-images` / `image-delivery-insight`: every `<img>` is now `astro:assets <Image>` with AVIF/WebP + `srcset` + explicit width/height.
- `render-blocking-insight` / `network-dependency-tree-insight`: fonts self-hosted via `@fontsource` with `font-display: swap`; hero preload in the head.
