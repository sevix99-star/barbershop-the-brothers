/**
 * Central image imports. Using `astro:assets` imports unlocks responsive
 * srcset + AVIF/WebP generation at build time.
 */
import heroBanner from "../assets/gallery/hero-banner.jpg";
import interior1 from "../assets/gallery/interior-1.jpg";
import interior2 from "../assets/gallery/interior-2.jpg";
import interior3 from "../assets/gallery/interior-3.jpg";
import mens1 from "../assets/gallery/mens-haircut-1.jpg";
import mens2 from "../assets/gallery/mens-haircut-2.jpg";
import mens3 from "../assets/gallery/mens-haircut-3.jpg";
import mens4 from "../assets/gallery/mens-haircut-4.jpg";

export const HERO_IMAGE = heroBanner;

export interface GalleryCell {
  src: ImageMetadata;
  area: "c1" | "c2" | "c3" | "c4" | "c5" | "c6" | "c7";
  labelKey: number;
}

export const GALLERY_CELLS: readonly GalleryCell[] = [
  { src: interior1, area: "c1", labelKey: 0 },
  { src: mens1, area: "c2", labelKey: 1 },
  { src: mens2, area: "c3", labelKey: 2 },
  { src: mens3, area: "c4", labelKey: 3 },
  { src: interior2, area: "c5", labelKey: 4 },
  { src: mens4, area: "c6", labelKey: 5 },
  { src: interior3, area: "c7", labelKey: 6 },
];
