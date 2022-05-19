module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      'my-sans': ['"URW Gothic"', 'sans-serif']
    },
    extend: {
      colors: {
        'cool-white': 'rgb(217, 233, 233)',
        'dark-cool-white': 'rgb(196, 221, 221)',

        'dark-cool-background': 'rgb(32, 55, 55)',

        'cool-blue': 'rgb(10, 146, 146)',
        'dark-cool-blue': 'rgb(8, 117, 117)',

        'cooler-blue': 'rgb(4, 163, 155)',
        'dark-cooler-blue': 'rgb(85, 219, 210)',

        'cool-green': 'rgb(111, 161, 111)',
        'dark-cool-green': 'rgb(87, 117, 77)',

        'cool-black': 'rgb(86, 86, 86)',

        'cooler-black': 'rgb(54, 52, 52)',
        'dark-cooler-black': 'rgb(199, 194, 186)'

      }
    },
  },
  plugins: [],
}