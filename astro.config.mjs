import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

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
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en", "pl"],
    routing: { prefixDefaultLocale: true },
  },
});