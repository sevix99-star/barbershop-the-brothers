/**
 * Single source of truth for all contact and social data.
 * Env vars take precedence; sensible fallbacks are used where the value is
 * known (email, Fresha URL, directions). Sensitive numbers (phone, WhatsApp,
 * KVK, BTW) default to empty string so nothing is ever rendered as a placeholder.
 *
 * Client setup: copy .env.example → .env and fill in the PUBLIC_* values,
 * OR set them in Vercel → Project → Settings → Environment Variables.
 */

import type { Lang } from "../i18n/utils";

// NEEDS_REAL_VALUE: replace PUBLIC_WHATSAPP in .env / Vercel env vars
// Format: +31612345678
export const CONTACT = {
  whatsapp: import.meta.env.PUBLIC_WHATSAPP ?? "",
  whatsappText: {
    nl: "Hallo, ik wil een afspraak maken.",
    en: "Hello, I would like to book an appointment.",
    pl: "Cześć, chcę umówić wizytę.",
  } satisfies Record<Lang, string>,

  // Falls back to the known Fresha listing so the CTA is never broken
  fresha:
    import.meta.env.PUBLIC_BOOKING_URL ??
    "https://www.fresha.com/a/barbershop-the-brothers-lelystad",

  email: import.meta.env.PUBLIC_EMAIL ?? "info@barbershopthebrothers.nl",
  phone: import.meta.env.PUBLIC_PHONE ?? "",
  kvk: import.meta.env.PUBLIC_KVK ?? "",
  btw: import.meta.env.PUBLIC_BTW ?? "",

  googleMapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=De+Promesse+113+Lelystad",
  // NEEDS_REAL_VALUE: set PUBLIC_MAPS_EMBED to the full Google Maps embed URL
  googleMapsEmbed: import.meta.env.PUBLIC_MAPS_EMBED ?? "",
  // NEEDS_REAL_VALUE: set PUBLIC_GOOGLE_REVIEWS_URL to the Google Place reviews URL
  googleReviewsUrl: import.meta.env.PUBLIC_GOOGLE_REVIEWS_URL ?? "",

  address: "De Promesse 113, 8232 VZ Lelystad",

  instagram: import.meta.env.PUBLIC_INSTAGRAM_URL ?? "",
  tiktok: import.meta.env.PUBLIC_TIKTOK_URL ?? "",
  facebook: import.meta.env.PUBLIC_FACEBOOK_URL ?? "",
} as const;

/** Build a wa.me URL with a pre-filled, locale-aware message. Returns "" when
 *  no WhatsApp number is configured so callers can gate rendering on truthiness. */
export function buildWhatsAppUrl(lang: Lang): string {
  const digits = CONTACT.whatsapp.replace(/\D/g, "");
  if (!digits) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(CONTACT.whatsappText[lang])}`;
}
