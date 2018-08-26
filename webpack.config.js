const path = require('path');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,/\.css$/,
      exclude: /node_modules/,
      use: {
      loader: 'babel-loader','style-loader!css-loader',
      options: {
        presets: ['react']
      }
    }
    }]
  }
}
