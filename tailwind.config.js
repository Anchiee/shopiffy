/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "transparent": {
          100: "rgba(0, 0, 0, 0)",
          200: "rgba(0, 0, 0, .2)",
          300: "rgba(0, 0, 0, .3)",
          400: "rgba(0, 0, 0, .4)",
        },
        "softBlack": "#1e293b",
        "softGray": "#826f6f",
        "softBrown": {
          100: "#D0B8A8",
          200: "#aa9c8e",
          300: "#756a60",
        },
      },
      fontFamily: {
        Manrope: ["Manrope", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "19": "4.8rem",
        "38": "9.5rem"
      }
    },
  },
  plugins: [],
}

