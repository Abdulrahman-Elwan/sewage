import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#073B5C",
          50: "#EFF8FC",
        },
        green: {
          DEFAULT: "#0FA878",
          light: "#EFFAF6",
        },
        orange: {
          DEFAULT: "#FF914D",
        },
        ink: "#073B5C",
        muted: "#5D7180",
      },
      fontFamily: {
        arabic: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(7, 59, 92, 0.12)",
        card: "0 4px 24px -4px rgba(7, 59, 92, 0.08)",
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "200px 0" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flow: "flow 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
