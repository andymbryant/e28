const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  entry: 'index.js',
  /* ... */
  plugins: [
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Roboto', variants: ['800', '400', '300'] },
      ],
    }),
  ],
};
