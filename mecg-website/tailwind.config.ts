import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        lora: ["var(--font-lora), serif"],
        glacial: ["var(--font-glacial), sans-serif"],
        sans: ["Glacial Indifference", "sans-serif"],
        serif: ["Glacial Indifference", "serif"],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }], // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'base': ['1.15rem', { lineHeight: '1.75rem' }], // 18.4px (15% larger than 16px)
        'lg': ['1.265rem', { lineHeight: '1.9rem' }], // 20.24px (15% larger than 17.6px)
        'xl': ['1.38rem', { lineHeight: '2rem' }], // 22.08px (15% larger than 19.2px)
        '2xl': ['1.725rem', { lineHeight: '2.25rem' }], // 27.6px (15% larger than 24px)
        '3xl': ['2.07rem', { lineHeight: '2.5rem' }], // 33.12px (15% larger than 28.8px)
        '4xl': ['2.76rem', { lineHeight: '1' }], // 44.16px (15% larger than 38.4px)
        '5xl': ['3.45rem', { lineHeight: '1' }], // 55.2px (15% larger than 48px)
        '6xl': ['4.14rem', { lineHeight: '1' }], // 66.24px (15% larger than 57.6px)
        '7xl': ['4.83rem', { lineHeight: '1' }], // 77.28px (15% larger than 67.2px)
        '8xl': ['5.52rem', { lineHeight: '1' }], // 88.32px (15% larger than 76.8px)
        '9xl': ['6.9rem', { lineHeight: '1' }], // 110.4px (15% larger than 96px)
      },
      colors: {
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
        // Custom colors
        'mecg-dark-blue': '#3f63af',
        mecg: {
          red: "#E4002B",
          black: "#000000",
          gray: {
            light: "#E5E5E5",
            DEFAULT: "#808080",
            dark: "#333333",
          },
          blue: {
            extraLight: "#f0f5ff",
            light: "#ccdeff",
            dark: "#3f63af",
          },
          orange: "#f58e4f",

        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "25%": { transform: "translateX(-1px) rotate(-1deg)" },
          "75%": { transform: "translateX(1px) rotate(1deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-reverse": "spin-reverse 8s linear infinite",
        "shake": "shake .5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config