/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        "Freeman":"Freeman",
        "font2":"Josefin"
      }
    },
  },
variants: {
  extend: {
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  }
  },
  plugins: [],
}

