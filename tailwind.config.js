/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{svg,png,webp}",
  ],
  theme: {
    extend: {
      padding: {
        '3px': '3px',
      },
      screens: {
        'tablet': '1360px'
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}
