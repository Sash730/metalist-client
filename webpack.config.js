var path = require( 'path' );
var webpack = require( 'webpack' );
var NODE_ENV = process.argv.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context : __dirname + '/client/app',
  entry : './app',
  output : {
    filename : 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'ng-annotate-loader!babel-loader'
      },
      {
        test : /\.css$/,
        loader : 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        use :[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: "assets/fonts/[name].[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './client/')) + '!html-loader',
        exclude: (path.resolve(__dirname, './client/index.html'))
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: "assets/images/[name].[hash].[ext]"
            }
          }
        ],
      },
      {
        test: /favicon\.ico$/,
        loader: 'url-loader',
        query: {
          limit: 1,
          name: '[name].[ext]',
        }
      }
]
  },
  resolve : {
    extensions : [ ' ', '.js' ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './client/index.html'),
      filename: 'index.html',
      mobile: true,
      inject: true
    })
  ]
};