/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{svg,png,webp}"
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
        'default': '1919px',
        'big': '2500px',
        '4k': '3200px'
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '9': '9px',
        '12': '12px'
      },
      minWidth: {
        '52': '13rem'
      },
      maxWidth: {
        '1/2': '60%',
        '1/2l': '65%',
        '3/4': '75%'
      }
    },
  },
  plugins: [
     require('@tailwindcss/forms')
  ],
}
