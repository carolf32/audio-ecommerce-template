/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-4": "#7f7f7f",
        "grey-3": "#bababa",
        "grey-2": "#f3f3f3",
        "grey-1": "#f6f6f6",
        "grey-0": "#ffffff",

        "green-default": "#0acf83",
        "black-default": "#000000",
        "yellow-default": "#ffc120",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
