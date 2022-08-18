/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '3px': '3px',
      }
    },
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}
