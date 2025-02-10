module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': require('postcss-nesting'),
    tailwindcss: require('tailwindcss'),
    autoprefixer: require('autoprefixer'),
  }
};
