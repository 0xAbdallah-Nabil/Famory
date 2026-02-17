/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0ch", visibility: "visible" },
          "100%": { width: "50ch" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 3s steps(40, end) infinite alternate",
        blink: "blink 0.7s step-end infinite",
      },
    },
  },
  plugins: [],
};
