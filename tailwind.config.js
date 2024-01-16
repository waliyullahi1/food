/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'playfair-display': ['Playfair Display', 'serif'],
    },
    extend: {
      fontFamily: {
        'playfair-display': ['Playfair Display', 'serif'],
      },
      colors:{
        primary:'#474747',
        secondary:'#AD343E',
        tertiary:'#F9F9F7'
      }
    },
  },
  plugins: [],
}