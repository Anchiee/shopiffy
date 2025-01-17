/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "softBlack": "#1e293b",
        "softGray": "#826f6f",
        "softBrown": {
          100: "#D0B8A8",
          200: "#aa9c8e",
          300: "#756a60"
        },
      },
      fontFamily: {
        Manrope: ["Manrope", "serif"],
      },
      spacing: {
        "38": "9.5rem"
      }
    },
  },
  plugins: [],
}

