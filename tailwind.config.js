module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.ul': {
                
                'text-decoration-color': 'blue',
            },
        }
        addUtilities(extendUnderline)
    }
],
}