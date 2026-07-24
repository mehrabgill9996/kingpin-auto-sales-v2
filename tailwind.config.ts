import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crown: {
          red: "#B8272C",
          redDark: "#8F1E22",
          gold: "#D4AF37",
          goldLight: "#E8C766",
          cream: "#FBF7EF",
        },
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 8px 20px -4px rgba(212, 175, 55, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
