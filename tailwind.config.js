/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./bulid/*'],
  theme: {
    fontFamily : {
      sahel: ['sahel']
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
],

}

