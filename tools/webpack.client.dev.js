const path = require('path')
const webpack = require('webpack')
const CONFIG = require('./webpack.base')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const { CLIENT_ENTRY, CLIENT_OUTPUT, PUBLIC_PATH } = CONFIG

module.exports = {
  devtool: 'eval',
  entry: {
    main: [
      'webpack/hot/only-dev-server',
      'webpack-hot-middleware/client',
      CLIENT_ENTRY
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'aphrodite'
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    path: CLIENT_OUTPUT
  },
  module: {
    preLoaders: [
      {
        // set up standard-loader as a preloader
        test: /\.jsx?$/,
        loader: 'standard',
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|server)/,
        query: {
          cacheDirectory: true,
          presets: ["es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        options: {
          import: true
        }
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?mimetype=image/png'
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        loader: 'url-loader?mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ],
    rules: [
      /*
      {
        test: /\.less$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1, import: true } },
          'less-loader'
        ]
      }
      */
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          {
            fallbackLoader: 'style-loader',
            loader: 'css-loader!less-loader'
          })
      },
    ]
  },
  standard: {
    // config options to be passed through to standard e.g.
    parser: 'babel-eslint'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', 2),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css"),
  ],
}
