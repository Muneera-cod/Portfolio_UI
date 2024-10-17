/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '840px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
     'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'worksans':"Work Sans",
      'zens':'Zen Kaku Gothic Antique'
    },
  
    extend: {
      colors: {
        markClr:'#0077FF',
        navtext:'#333',
        othrtext:'#222',
        lightbluetext:'#79B2F2',
      },
    },
    
  },
  plugins: [],
}