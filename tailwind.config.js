/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}", // incluye si usas carpeta src
    ],
    theme: {
      extend: {
        colors: {
          primary: "#000000",

          danger: {
            light: "#F87171",
            DEFAULT: "#EF4444",
            dark: "#B91C1C",
          },
          success: "#22C55E",      // Verde
        },
      },
    },
    plugins: [],
  }
  