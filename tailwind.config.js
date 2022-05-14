module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'my-sans': ['"URW Gothic"', 'sans-serif']
    },
    extend: {
      colors: {
        'cool-white': 'rgb(217, 233, 233)',
        'cool-blue': 'rgb(10, 146, 146)',
        'cool-green': 'rgb(111, 161, 111)',
        'cool-black': 'rgb(86, 86, 86)',
        'cooler-black': 'rgb(54, 52, 52)'

      }
    },
  },
  plugins: [],
}
