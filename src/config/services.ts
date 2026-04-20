/**
 * Typed service registry. Localized name/desc/price/duration live in i18n;
 * this file holds the data that does NOT change per locale: ordering, numeric
 * index, icon glyph, and which card is flagged as "most booked".
 *
 * The `iconKey` maps into `ICONS` below — plain SVG strings so the Astro
 * component can render them without a runtime lookup.
 */

export type ServiceId = "haircut" | "beard" | "fade" | "kids" | "wash" | "combo";

export interface ServiceEntry {
  id: ServiceId;
  number: string;
  iconKey: ServiceId;
  popular?: boolean;
}

export const SERVICES: readonly ServiceEntry[] = [
  { id: "haircut", number: "01", iconKey: "haircut" },
  { id: "beard", number: "02", iconKey: "beard" },
  { id: "fade", number: "03", iconKey: "fade", popular: true },
  { id: "kids", number: "04", iconKey: "kids" },
  { id: "wash", number: "05", iconKey: "wash" },
  { id: "combo", number: "06", iconKey: "combo" },
];

export const ICONS: Record<ServiceId, string> = {
  haircut: `<svg width="48" height="48" viewBox="0 0 48 48" class="ic" aria-hidden="true"><path d="M8 24 C8 14 15 8 24 8 C33 8 40 14 40 24"/><path d="M14 24 L14 36"/><path d="M34 24 L34 36"/><path d="M20 24 L20 40"/><path d="M28 24 L28 40"/></svg>`,
  beard: `<svg width="48" height="48" viewBox="0 0 48 48" class="ic" aria-hidden="true"><circle cx="24" cy="16" r="6"/><path d="M12 32 C12 24 36 24 36 32 L34 40 C34 42 14 42 14 40 Z"/><path d="M18 34 L18 40 M24 34 L24 42 M30 34 L30 40"/></svg>`,
  fade: `<svg width="48" height="48" viewBox="0 0 48 48" class="ic" aria-hidden="true"><path d="M8 12 L40 12"/><path d="M8 18 L40 18" opacity=".85"/><path d="M8 24 L40 24" opacity=".6"/><path d="M8 30 L40 30" opacity=".35"/><path d="M8 36 L40 36" opacity=".15"/></svg>`,
  kids: `<svg width="48" height="48" viewBox="0 0 48 48" class="ic" aria-hidden="true"><circle cx="24" cy="18" r="8"/><path d="M10 40 C10 32 18 28 24 28 C30 28 38 32 38 40"/><path d="M20 14 Q24 10 28 14"/></svg>`,
  wash: `<svg width="48" height="48" viewBox="0 0 48 48" class="ic" aria-hidden="true"><path d="M24 8 C28 14 32 18 32 24 C32 29 28 32 24 32 C20 32 16 29 16 24 C16 18 20 14 24 8 Z"/><path d="M14 38 Q18 34 22 38 Q26 34 30 38 Q34 34 38 38"/></svg>`,
  combo: `<svg width="48" height="48" viewBox="0 0 48 48" class="ic" aria-hidden="true"><path d="M14 8 L14 24 C14 28 18 30 22 30"/><path d="M34 8 L34 24 C34 28 30 30 26 30"/><path d="M18 32 C18 36 22 40 24 40 C26 40 30 36 30 32"/><circle cx="14" cy="8" r="2"/><circle cx="34" cy="8" r="2"/></svg>`,
};

export const USP_ICONS: readonly string[] = [
  `<svg width="44" height="44" viewBox="0 0 44 44" class="ic" aria-hidden="true"><circle cx="22" cy="22" r="20"/><path d="M8 22 L22 22 L36 22"/><path d="M14 16 L30 28"/><path d="M14 28 L30 16"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 44 44" class="ic" aria-hidden="true"><path d="M8 30 C8 20, 16 14, 22 14 C28 14, 36 20, 36 30"/><path d="M14 30 L14 36 M22 30 L22 36 M30 30 L30 36"/><circle cx="22" cy="10" r="2"/></svg>`,
  `<svg width="44" height="44" viewBox="0 0 44 44" class="ic" aria-hidden="true"><rect x="6" y="10" width="32" height="24"/><path d="M6 18 L38 18"/><circle cx="22" cy="26" r="3"/></svg>`,
];
