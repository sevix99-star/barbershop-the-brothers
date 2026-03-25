import nl from "./nl.json";
import en from "./en.json";
import pl from "./pl.json";

const translations = { nl, en, pl } as const;

type TranslationSchema = typeof nl;
export type Lang = keyof typeof translations;
export const defaultLang: Lang = "nl";
export const languages: Record<Lang, string> = {
  nl: "Nederlands",
  en: "English",
  pl: "Polski",
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "nl" || lang === "en" || lang === "pl") {
    return lang;
  }
  return defaultLang;
}

export function t(lang: Lang, key: string): string {
  const keys = key.split(".");
  let value: unknown = translations[lang] as TranslationSchema;

  for (const k of keys) {
    if (typeof value !== "object" || value === null || !(k in value)) {
      return key;
    }
    value = (value as Record<string, unknown>)[k];
  }

  return typeof value === "string" ? value : key;
}

export function getLocalizedPath(lang: Lang, path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalizedPath === "/" ? "/" : normalizedPath}`;
}

export function getTranslations(lang: Lang): TranslationSchema {
  return translations[lang] as TranslationSchema;
}
