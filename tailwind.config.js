/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'ff': '#FF2c5c',
        'blue': '#0F4C81',
        'green': '#00A65A',
        'yellow': '#FFD700',
        'purple': '#6Fz42C1',
        'pink': '#FF69B4',
        'orange': '#FF8C00',
        'teal': '#008080',
        'gray': '#808080',
        'black': '#1F1F1F',
        'white': '#FFFFFF'
      }
    },
  },
  plugins: [],
}
