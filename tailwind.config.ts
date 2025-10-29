import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import fluidType from "tailwindcss-fluid-type";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssRtl from "tailwindcss-rtl";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--surface))",
        foreground: "hsl(var(--text-primary))",
        muted: "hsl(var(--text-muted))",
        accent: {
          terracotta: "hsl(var(--accent-terracotta))",
          emerald: "hsl(var(--accent-emerald))",
          brass: "hsl(var(--accent-brass))",
        },
        border: "hsl(var(--border))",
        card: "hsl(var(--surface-elevated))",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        soft: "0 20px 40px -24px rgba(20, 106, 99, 0.35)",
      },
      backgroundImage: {
        "subtle-mesh": "radial-gradient(80% 120% at 50% 10%, rgba(216, 110, 77, 0.12), transparent), radial-gradient(60% 90% at 80% 40%, rgba(20, 106, 99, 0.08), transparent)",
      },
      animation: {
        "scroll-fade": "scrollFade 1.2s ease both",
      },
      keyframes: {
        scrollFade: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [fluidType, tailwindcssAnimate, tailwindcssRtl, typography],
};

export default config;
