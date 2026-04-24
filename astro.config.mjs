import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

/** @type {import('astro').AstroIntegration} */
const inlineCss = {
  name: "inline-css",
  hooks: {
    "astro:build:done": async ({ dir, pages }) => {
      const { readFile, writeFile } = await import("node:fs/promises");
      const { existsSync } = await import("node:fs");
      const { fileURLToPath } = await import("node:url");
      const { join } = await import("node:path");
      const distDir = fileURLToPath(dir);

      for (const { pathname } of pages) {
        const htmlPath = join(distDir, pathname, "index.html");
        if (!existsSync(htmlPath)) continue;
        let html = await readFile(htmlPath, "utf-8");
        let changed = false;
        for (const [fullMatch, href] of html.matchAll(
          /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/g,
        )) {
          const cssPath = join(distDir, href.slice(1));
          if (!existsSync(cssPath)) continue;
          const css = await readFile(cssPath, "utf-8");
          html = html.replace(fullMatch, `<style>${css}</style>`);
          changed = true;
        }
        if (changed) await writeFile(htmlPath, html);
      }
    },
  },
};

export default defineConfig({
  site: "https://barbershopthebrothers.nl",
  output: "static",
  adapter: vercel(),
  // Bind IPv4 so http://127.0.0.1:4321 works (default can be [::1]-only on Windows)
  server: {
    host: "127.0.0.1",
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), inlineCss],
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en", "pl"],
    routing: { prefixDefaultLocale: true },
  },
});