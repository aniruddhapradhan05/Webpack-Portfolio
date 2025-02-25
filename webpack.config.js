const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
    historyApiFallback: true, 
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, // Match both .sass and .scss files
        use: [
          'style-loader', 
          'css-loader',   
          'sass-loader',  
        ],
      },
      {
        test : /\.html$/,
        use : 'html-loader'
      },
    ],
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "index.html" // Outputs at /index.html
    }),
  ],
};