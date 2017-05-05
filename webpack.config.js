var path = require( 'path' );
var webpack = require( 'webpack' );
const ROOT_PATH = path.resolve(__dirname);
var NODE_ENV = process.argv.NODE_ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  context : __dirname + '/client/app',
  entry : {
    app: './app',
    vendor: ['moment', 'moment-timezone']
  },
  output : {
    filename : '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  watch : NODE_ENV == 'development',
  //devtool : NODE_ENV == 'development' ? 'source-map' : null,
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'ng-annotate-loader!babel-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: "assets/fonts/[name].[ext]"
            }
          }
        ]
      },
      {
        test : /\.css$/,
        loader : 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //include: path.resolve(__dirname, './client/'),
          use: "css-loader!less-loader",
        })
      },
      // {
      //   test : /\.less$/,
      //   loader : "css-loader!less-loader"
      // },
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
              limit: 1000,
              name: "assets/images/[name].[ext]"
            }
          }
        ]
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
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",

      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      title: 'Metalist 1925',
      template: path.resolve(__dirname, './client/index.html'),
      filename: 'index.html',
      mobile: true,
      inject: true
    })
  ]
};