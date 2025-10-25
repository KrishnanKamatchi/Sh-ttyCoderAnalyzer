import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        "hot-pink": "hsl(var(--hot-pink))",
        "cyber-purple": "hsl(var(--cyber-purple))",
        "warning-orange": "hsl(var(--warning-orange))",
        "angry-red": "hsl(var(--angry-red))",
        "electric-blue": "hsl(var(--electric-blue))",
        "puke-green": "hsl(var(--puke-green))",
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
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "chaos-pulse": {
          "0%, 100%": {
            textShadow: "3px 3px 0px hsl(330 100% 60%), -3px -3px 0px hsl(200 100% 60%)",
          },
          "50%": {
            textShadow: "-3px 3px 0px hsl(280 95% 65%), 3px -3px 0px hsl(25 100% 55%)",
          },
        },
        "rotate-chaos": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        glitch: "glitch 0.5s infinite",
        "chaos-pulse": "chaos-pulse 1.5s ease-in-out infinite",
        "rotate-chaos": "rotate-chaos 3s ease-in-out infinite",
        shake: "shake 0.5s",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
