/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{svg,png,webp}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      padding: {
        '3px': '3px',
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
      width: {
        "90%": "90%"
      },
      spacing: {
        "sidebar": "13rem"
      },
      maxWidth: {
        '3/4': '75%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
};
