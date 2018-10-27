const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/vue-hljs-lite.js'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'vue-hljs-lite.js',
    library: 'vue-hljs-lite',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
