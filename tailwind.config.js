/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mulish: ['var(--font-mulish)', ...defaultTheme.fontFamily.sans],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '6.25rem',
          sm: '1rem',
        },
        screens: {
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
      function ({ addComponents, addBase,  theme }) {
      addComponents({
        '.body': {
          fontFamily: theme('fontFamily.inter'),
          color: '#77797E',
          fontSize: '1rem',
          fontWeight: '400',
          lineHeight: '1.5rem',
        },
      }),
      addBase({
        'h1': { fontSize: '4rem', fontFamily: theme('fontFamily.mulish'), fontWeight: '600'},
        'h2': { fontSize: '3rem', fontFamily: theme('fontFamily.mulish'), fontWeight: '800'},
        'h3': { fontSize: '2rem', fontFamily: theme('fontFamily.mulish'), fontWeight: '400'},
        'h4': { fontSize: '1.5rem', fontFamily: theme('fontFamily.inter'), fontWeight: '600'},
        'h5': { fontSize: '1.25rem', fontFamily: theme('fontFamily.inter'), fontWeight: '600'},
        'h6': { fontSize: '1.2rem', fontFamily: theme('fontFamily.inter'), fontWeight: '400'},
      })
    }
  ],
}
