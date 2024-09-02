/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
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
        pebblePrimary: "#207BFF",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0px 25px 15px 0px rgba(0, 0, 0, 0.08), 0px -2px 4px 0px rgba(0, 0, 0, 0.05)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        initialLoad: "transitionIn 0.9s ease-in",
        "infinite-scroll": "infinite-scroll 70s linear infinite",
        "infinite-scroll-sm": "infinite-scroll-sm 20s linear infinite",
        "nav-load": "nav-load 400ms ease-in",
        "nav-link-load": "nav-link-load 500ms ease-in 400ms",
        "product-load": "slide-in 500ms ease-in-out 400ms",
      },
      boxShadow: {
        12: "0px 15px 60px -10px rgb(109 117 143 / 33%)",
      },
      keyframes: {
        transitionIn: {
          from: {
            opacity: "0",
            transform: "rotateX(-10deg)", // Corrected typo
          },
          to: {
            opacity: "1",
            transform: "rotateX(0deg)", // Corrected typo
          },
        },
        "infinite-scroll": {
          // Moved this outside of transitionIn
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-sm": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "nav-load": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "nav-link-load": {
          "0%": {
            transform: "scale(0)",
          },
          "90%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "product-load": {
          "0%": {
            transform: "scale(0)",
          },
          "90%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "slide-in": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: 0,
          },

          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
