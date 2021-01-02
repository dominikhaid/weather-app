// Example `tailwind.config.js` filecorePlugins  from ('./tailwind/core');
const spacing = require('./tailwind/spacing');
const colors = require('./tailwind/colors');
const fontSize = require('./tailwind/fontsize');
const screens = require('./tailwind/screens');
const width = require('./tailwind/width');
const height = require('./tailwind/height');
const core = require('./tailwind/core');
const shadow = require('./tailwind/shadow');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  corePlugins: core,
  variants: {
    extend: {
      ringColor: ['hover'],
      ringWidth: ['hover'],
      borderColor: ['active', 'hover', 'disabled'],
      borderWidth: ['active', 'hover'],
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      cursor: ['hover', 'focus', 'disabled'],
    },
  },
  theme: {
    spacing: spacing,
    ringColor: colors,
    colors: colors,
    screens: screens,
    minWidth: width,
    maxWidth: width,
    width: width,
    height: height,
    minHeight: height,
    maxHeight: height,
    fontFamily: {
      icon: ['fontawesome'],
      body: ['Roboto', 'sans-serif'],
    },
    boxShadow: shadow,
    fontSize: fontSize,
    container: {padding: spacing},
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {transform: 'rotate(-0.3deg)'},
          '50%': {transform: 'rotate(0.3deg)'},
        },
        bounce: {
          '0%, 100%': {transform: 'translateY(4px) translateX(4px)'},
          '50%': {transform: 'translateY(0px) translateX(4px)'},
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bounce: 'bounce 3s ease-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
