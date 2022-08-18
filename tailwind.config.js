/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#38bdf8",
          "secondary": "#D926A9",
          "accent": "#1FB2A6",
          "neutral": "#e5e7eb",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
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
        "3/4": "75%",
        "sidebar": "13rem",
        "xxs": "17rem"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
};
