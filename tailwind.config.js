/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lust: "#E12013",
        "white-2": "#f2f2f2",
        isabelline: "#f4f0ec",
        "outer-space": "#333c45",
        "selective-yellow": "#ffb400",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
}
