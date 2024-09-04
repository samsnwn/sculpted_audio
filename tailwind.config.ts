import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        DEFAULT: {
          'width': '5px',
          'height': '5px',
          'thumb-color': '#888',
          'track-color': '#f1f1f1',
          'hover-thumb-color': '#555',
        },
      },
      screens: {
        "2xs": "320px",
        "xs": "480px",
        "sm": "640px",
        "md": "768px",
        "lg": "960px",
        "xl": "1200px",
        "2xl": "1400px",
      },
      colors: {
        red: '#F74B25',
        gray: {
          DEFAULT: '#353D3F',
          100: '#353D3A'
        },
        steel: '#2D2928',
        note: '#5E4C47',
        silver: '#A9AEB7',
        black: {
          DEFAULT: "#000",
          100: "rgba(0, 0, 0, 0.98)",
          200: "rgba(17, 25, 40, 0.90)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#E5DBD2",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
      },
      keyframes: {
      },
      animation: {
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar'),
  ],
} satisfies Config;



export default config;

