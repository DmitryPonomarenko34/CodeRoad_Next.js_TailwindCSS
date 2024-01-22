/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-dmsans)', ...fontFamily.sans],
        rubik: 'var(--font-rubik)',
        plusjakarta: 'var(--font-plus-jakarta)',
      },
      colors: {
        'primary': '#310E7C',
        'secondary': '#377771',
        'tertiary': '#F7744C',
        'background': '#F9F8F8',
        'bgGradient': 'linear-gradient(180deg, rgba(55, 119, 113, 0.6) 0%, rgba(55, 119, 113, 0) 100%)',
        'error': '#BF4D49',
        'success': '#179B34',
        'black': '#1A202C',
        'indented': 'inset 3px 3px 6px #CCDBE8, inset -3px -3px 6px 1px rgba(255, 255, 255, 0.5)',
        'elevated': '0px 8px 24px rgba(149, 157, 165, 0.2',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}