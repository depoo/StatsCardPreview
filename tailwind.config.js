/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue-main': 'hsl(233, 47%, 7%)',
        'desaturated-blue-card': 'hsl(244, 38%, 16%)',
        'Soft-violet': 'hsl(277, 64%, 61%)',

        'White-headind-stats': 'hsl(0, 0%, 100%)',
        'Slightly-transparent-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'Slightly-transparent-headings': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily:{
        'Inter': [ 'Inter', 'sans-serif'],
        'Lexend': [ 'Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

