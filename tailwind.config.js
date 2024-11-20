/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      cus: ["Poppins", "sans-serif"],
    },
    extend: {
      width: {
        container: "1170px",
      },
      colors: {
        primary: "#000000",
        secondary: "#FAFAFA",
        deepsecondary: "#F5F5F5",
        third: "#DB4444",
      },
    },
  },
  plugins: [],
};
