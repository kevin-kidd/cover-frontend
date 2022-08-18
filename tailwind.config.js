/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{svg,png,webp}",
  ],
  theme: {
    fontSize: {
      'xs': '.375rem',
      'sm': '.5rem',
      'tiny': '.625rem',
      'kindasmaller': '.75rem',
      'kindasmall': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      padding: {
        '3px': '3px',
      },
      screens: {
        'chromebook': '920px',
        'laptop': '1150px',
        'tablet': '1320px',
        'desktop': '1400px',
      },
      borderWidth: {
        '3': '3px'
      },
      minWidth: {
        '52': '13rem'
      }
    },
  },
  plugins: [
     require('@tailwindcss/forms'),
  ],
}
