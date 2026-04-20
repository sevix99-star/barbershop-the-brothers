/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        "bg-2": "#121212",
        surface: "#1A1A1A",
        "surface-2": "#141414",
        card: "#1A1A1A",
        line: "#2A2A2A",
        "line-2": "#1F1F1F",
        border: "#2A2A2A",
        gold: "#C9A84C",
        "gold-soft": "#8E7633",
        "gold-hover": "#E2C06B",
        ink: "#F5F5F0",
        "ink-dim": "#A8A59A",
        "ink-mute": "#6E6B62",
        whatsapp: "#075E30",
        "whatsapp-accent": "#25D366",
        "text-primary": "#F5F5F0",
        "text-secondary": "#A8A59A",
        "text-muted": "#6E6B62",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        serif: ['"Cormorant Garamond"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        cond: ['"DM Sans"', "sans-serif"],
      },
      maxWidth: {
        wrap: "1280px",
      },
    },
  },
  plugins: [],
};
