/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite-react/**/*.js", 
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        custom: ['Kanit', 'sans-serif'],
        titleFont: ['Syne'] 
      },
    },
  },
  plugins: [

    require('flowbite/plugin'),

  ],
}

