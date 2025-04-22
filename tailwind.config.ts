
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        vinyl: {
          cream: "#F5F1E8",
          brown: "#7D5A50",
          gold: "#BF9B6F",
          dark: "#1A1814",
          sepia: "#D4C19C",
          mahogany: "#4A3226",
          amber: "#E6AF4B",
          navy: "#2D3142",
          sage: "#A6B1A9",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        "vinyl-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "record-wobble": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        "needle-drop": {
          "0%": { transform: "rotate(-20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        "vinyl-spin": "vinyl-spin 4s linear infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
        "record-wobble": "record-wobble 6s ease-in-out infinite",
        "needle-drop": "needle-drop 1.5s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        'wood-grain': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzdENUE1MCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PHBhdGggZD0iTTAgMCBMIDEwMCAxMDAgTSA1MCAwIEwgMTAwIDUwIE0gMCA1MCBMIDU1IDEwMCBNIDAgNSBMIDkwIDk1IE0gNSAwIEwgOTUgOTAiIHN0cm9rZT0iIzdENUE1MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')",
        'paper-texture': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0Y1RjFFOCIgZmlsbC1vcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48Y2lyY2xlIGN4PSI3MCIgY3k9IjQwIiByPSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48Y2lyY2xlIGN4PSI5MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjcwIiByPSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjgwIiByPSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjkwIiByPSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiLz48L3N2Zz4=')",
        'background-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMC00OGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMCA0OGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNnptLTQ4IDBjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZ6bTQ4LTQ4Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02em0tNDggMGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNnptMCAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNnoiIGZpbGw9IiM0MzM4QkIiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')",
      },
      boxShadow: {
        'vintage': '0 10px 30px -15px rgba(79, 70, 229, 0.15)',
        'record': '0 10px 25px -5px rgba(79, 70, 229, 0.2)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
