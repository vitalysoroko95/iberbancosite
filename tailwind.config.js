/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '6.25rem',
        sm: '1rem',
      },
      screens: {
        '2xl': '1440px',
      },


      colors: {
      
        'primary': 'var(--primary)',
        'primary_light': '#89C0E9',
        'primary_ultra_light': '#E9E9E9',
        'background': '#F6F9FF',

        'secondary': '#FFBB54',
        'secondary_light': '#FEC979',
        'red': '#FF6471',
        'light_red': '#FF8A94',

        'black': '#2A2E37',
        'main_gray': "#979797",
        'light_gray': '#EEEFEF',
        'white': '#FFFFFF',
    
        
      },


    extend: {


      fontFamily: {
        inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mulish: ['var(--font-mulish)', ...defaultTheme.fontFamily.sans],
      },


      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  },

  plugins: [require("tailwindcss-animate"),  require('@tailwindcss/typography'),
  function ({ addComponents, addBase,  theme }) {
  addComponents({
    '.body': {
      fontFamily: theme('fontFamily.inter'),
      color: '#77797E',
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem',
    },
    '.link': {
      fontFamily: theme('fontFamily.inter'),
      color: '#2A2E37',
      fontSize: '0.875rem',
      fontWeight: '600',
      lineHeight: '1.125rem',
      padding: '2.5rem 0',
      position: 'relative', 
     
    },

    '.link::before:hover': {
      content:'',
      position: 'absolute',
      height: '1.2px',
      backgroundColor: '#2046A1',
      right:'0',
      left: '0',
      bottom: '-1.2px'
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
}],
}