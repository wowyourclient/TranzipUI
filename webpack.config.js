let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
let path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/client.js",
  module: {
    loaders: [
    {
        test: /\.jsx?$/,
        loaders: ['babel?presets[]=es2015,presets[]=react'],
        exclude: /(node_modules|bower_components)/,
    },
    {
        test: /\.s?css$/,
        loader: 'style!css!sass'
    }
    ]
  },
  output: {
    path: `${__dirname}/src/`,
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
