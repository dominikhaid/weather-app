const colors = require('tailwindcss/colors');

module.exports.override = {
    gray: {
      darkest: colors.coolGray['900'],
      dark: colors.coolGray['800'],
      DEFAULT: colors.coolGray['500'],
      light: colors.coolGray['100'],
      lightest: colors.coolGray['50'],
    },
    green: {
      darkest: colors.lime['900'],
      dark: colors.lime['800'],
      DEFAULT: colors.lime['500'],
      light: colors.lime['100'],
      lightest: colors.lime['50'],
    },
    white: {
      DEFAULT: 'var(--color-white)',
    },
    primary: {
      darkest: colors.teal['900'],
      dark: colors.teal['800'],
      DEFAULT: colors.teal['500'],
      light: colors.teal['100'],
      lightest: colors.teal['50'],
    },
    secondary: {
      darkest: colors.coolGray['900'],
      dark: colors.coolGray['800'],
      DEFAULT: colors.coolGray['500'],
      light: colors.coolGray['100'],
      lightest: colors.coolGray['50'],
    },
  },