module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'accent-1': '#333',
        transparent: 'transparent',
        current: 'currentColor',
        'primary':'#ffe119',
        'secondary': '#fd7400',
        'primary-dark': '#341f3a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
