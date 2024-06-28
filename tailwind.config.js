/** @type {import('tailwindcss').Config} */
import konstaConfig from "konsta/config";

export default konstaConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: { "sans": ["Nunito", "sans-serif"] },
      ios: "font-sans",
    },
  },

  plugins: [],
});
