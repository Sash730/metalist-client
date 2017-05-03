var path = require( 'path' );
var webpack = require( 'webpack' );
var NODE_ENV = process.argv.NODE_ENV || 'development';

module.exports = {

  context : __dirname + '/client/app',
  entry : './app',
  output : {
    filename : 'app.bundle.js',
    path: __dirname + '/build'
  },
  watch : NODE_ENV == 'development',
  devtool : NODE_ENV == 'development' ? 'source-map' : null,
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader',
        query : {
          presets : [ 'es2015' ]
        }
      },
      {
        test : /\.css$/,
        loader : 'style!css!postcss-loader'
      },
      {
        test : /\.less$/,
        loader : "css-loader!less-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  resolve : {
    extensions : [ ' ', '.js' ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ]
};