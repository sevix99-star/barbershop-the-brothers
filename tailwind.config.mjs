/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        card: "#1A1A1A",
        gold: "#C9A84C",
        "gold-hover": "#E2C06B",
        border: "#2A2A2A",
        whatsapp: "#075E30",
        "text-primary": "#F5F5F5",
        "text-secondary": "#9CA3AF",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
