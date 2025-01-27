/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    extend: {
      keyframes:{
        fillTheBlank: {
          '0%' : {height : '0%'},
          '100%' : {height : '110%'},
        },
        show :{
          '0%':{ opacity:'0'},
          '100%':{opacity:'1'}
        },
        hide :{
          '0%':{ opacity:'1'},
          '100%':{opacity:'0'}
        },
      },
      animation :{
        'showContent' : 'showFromBot 1s forwards',
        'fillTheBlank' : 'fillTheBlank 2s linear infinite',
        'show' : 'show 1s forwards',
        'hide' : 'hide 1s forwards',
      },
      colors:{
        adobBlue :{
          '100':'#5164B8',
          '500':'#57607D',
          '900':'#1039F5'
        },
        adobOrange:{
          '500':'#FAB800',
          '700':'#A58837',
          '900':'#504935'
        }
      }
     },
  },
  plugins: [],
}

