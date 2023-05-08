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
        'primary-red': '#FF2c5c',
        'primary-blue': '#0F4C81',
        'primary-green': '#00A65A',
        'primary-yellow': '#FFD700',
        'primary-purple': '#6F42C1',
        'primary-pink': '#FF69B4',
        'primary-orange': '#FF8C00',
        'primary-teal': '#008080',
        'primary-gray': '#808080',
        'primary-black': '#1F1F1F',
        'primary-white': '#FFFFFF',
      }
    },
  },
  plugins: [],
}
