module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xxl': {'max': '160rem'},
      'xl': {'max': '120rem'},
      'lg': {'max': '90rem'},
      'md': {'max': '64rem'},
      'sm': {'max': '48rem'}
    },
    spacing: {
      'xsmall': '0.5rem',
      'small': '1rem',
      'medium': '2rem',
      'large': '4rem',
      'xlarge': '8rem'
    },
    colors: {
      transparent: 'transparent',
      black: 'grey.1000',
      white: 'grey.100',
      grey: {
        1000: '#0D0D0D',
        900: '#272727',
        800: '#404040',
        700: '#5A5A5A',
        600: '#737373',
        500: '#A0A0A0',
        400: '#B5B5B5',
        300: '#CACACA',
        200: '#DFDFDF', 
        100: '#F4F4F4'
      },
      main: { // Red
        900: '#3E1E1A',
        700: '#6D222E',
        DEFAULT: '#902C3D',
        300: '#C54459',
        200: '#D47383'
      },
      warmOne: {
        900: '#907127',
        700: '#C09635',
        DEFAULT: '#D2AE5B',
        300: '#E0C88F',
        200: '#EDE0BF',
        100: '#FBF7EF'
      },
      warmTwo: {
        900: '#5E1E1C',
        700: '#8D5D2A',
        DEFAULT: '#B97A37',
        300: '#D09B62',
        200: '#DEB991'
      },
      coldOne: { // Olive
        900: '#0C0E07',
        700: '#2E361B',
        DEFAULT: '#4F5D2F',
        300: '#738844',
        200: '#95AD5C',
        100: '#AFC185'
      },
      coldTwo: { // Blue
        900: '#120C2E',
        700: '#261961',
        DEFAULT: '#392692',
        300: '#735DD5',
        200: '#9D8DE2'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
