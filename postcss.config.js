const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: {
    autoprefixer,
    tailwindcss: { config: './tailwind.config.js' },
  },
}
