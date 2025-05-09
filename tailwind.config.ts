import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        background: {
          DEFAULT: "#F0F4F8",
          dark: "#0b0d10",
        },
        primary: "#FF6A00",
        secondary: "#E65C00",
        accent: {
          DEFAULT: "#A2A8B4",
          dark: "#D0D4DC",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      animation: {
        'fade-slide': 'fadeSlide 0.3s ease-out forwards',
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
