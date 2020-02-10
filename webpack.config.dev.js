const path = require('path');

module.exports = {
  entry: {
    starter: './bundles/starter.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'app', 'js')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      }
    ]
  }
}