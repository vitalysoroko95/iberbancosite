/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2046A1',
        'primary-light': '#89C0E9',
        'primary-ultra-light': '#E9E9E9',
        'background': '#F6F9FF',

        'secondary': '#FFBB54',
        'secondary-light': '#FEC979',
        'red': '#FF6471',
        'light-red': '#FF8A94',

        'black': '#2A2E37',
        'main-gray': '#979797',
        'light-gray': '#EEEFEF',
        'white': '#FFFFFF'
      },
      fontFamily: {
        inter: [`var(--font-inter)`, 'sans-serif'],
        sora: [`var(--font-mulish)`, 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '6.25rem',
          sm: '1rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}
