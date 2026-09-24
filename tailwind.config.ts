import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Primary & Accent Tokens
        brand: {
          green: "#1F5C3F",
          "green-dark": "#15402C",
          "green-light": "#2A7C55",
          gold: "#C69214",
          "gold-light": "#E0AB2D",
          "gold-dark": "#9E740F",
          parchment: "#F4F1E8",
          "parchment-card": "#FAF8F3",
          charcoal: "#222222",
          "charcoal-muted": "#383838",
          grey: "#5A5A5A",
          "grey-light": "#7D7D7D",
          border: "#E2DCCF",
        },
        // Pillar Specific Accents
        pillar: {
          academy: "#D97706",
          "academy-light": "#FEF3C7",
          advisory: "#1E293B",
          "advisory-light": "#F1F5F9",
          lightagrios: "#0D9488",
          "lightagrios-light": "#CCFBF1",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "system-ui", "sans-serif"],
        serif: ["var(--font-roboto)", "Roboto", "system-ui", "sans-serif"],
      },
      boxShadow: {
        parchment: "0 4px 20px -2px rgba(34, 34, 34, 0.05), 0 2px 6px -1px rgba(34, 34, 34, 0.03)",
        "parchment-hover": "0 10px 25px -3px rgba(31, 92, 63, 0.12), 0 4px 10px -2px rgba(198, 146, 20, 0.08)",
        gold: "0 4px 14px 0 rgba(198, 146, 20, 0.35)",
        green: "0 4px 14px 0 rgba(31, 92, 63, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
