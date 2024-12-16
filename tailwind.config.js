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
        showFromBot :{
          '0%':{transform : 'translateY(60px)',opacity:'0'},
          '100%':{transform : 'translateY(0px)',opacity:'1'}
        },
        fillTheBlank: {
          '0%' : {height : '0%'},
          '100%' : {height : '110%'},
        },
        openUp:{
          '0%' : {transform : 'translateY(-20px)',height :'0rem'},
          '100%' : {transform : 'translateY(0px)', height :'6.5rem'},
        },
        closeUp :{
          '0%' : {transform : 'translateY(0px)',height :'6.5rem'},
          '100%' : {transform : 'translateY(-20px)', height :'0rem'},
        },
        rotateDown :{
          '0%' :{transform: 'rotate(0deg)'},
          '100%' :{transform: 'rotate(180deg)'},
        },
        show :{
          '0%':{ opacity:'0'},
          '100%':{opacity:'1'}
        },
        hide :{
          '0%':{ opacity:'1'},
          '100%':{opacity:'0'}
        },
        expand: {
          '0%':{transform : 'scaleX(0.2)', opacity:'0'},
          '100%':{transform : 'scale(1)' ,opacity:'1'}
        }
      },
      animation :{
        'showContent' : 'showFromBot 1s forwards',
        'fillTheBlank' : 'fillTheBlank 2s linear infinite',
        'show' : 'show 1s forwards',
        'hide' : 'hide 1s forwards',
        'expandNavBar':'expand 1s forwards',
        'hideContent' : 'hide 0.5s forwards',
        'rotateDown' : 'rotateDown 1s linear forwards',
        'openSideMenu' : 'openUp 0.5s linear forwards',
        'closeSideMenu' : 'closeUp 0.5s linear forwards',
      },
      backgroundImage: {
        'city': "url('@/assets/images/darkCity.jpg')"
      }
     },
  },
  plugins: [],
}

