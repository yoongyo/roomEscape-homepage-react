module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'pc': '400px',
        'mo': '350px'
      },
      width: {
        'pc': '300px',
        'mo': '289px'
      },
      fontSize: {
        'mo': '11px'
      },
      backgroundColor: {
        'booking': '#fcc81c',
        'theme': '#252525',
        'main': '#1b1b1b'
      },
      borderColor: {
        'theme': '#252525',
        'booking': '#fcc81c'
      },
      textColor: {
        'booking': '#fcc81c',
        'primary': '#FFFFFF'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
