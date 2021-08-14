const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const configDev = {
  mode: 'development',
  
  entry: {
    index: path.join(__dirname, 'src', 'index.js')
  },

  watchOptions: {
    aggregateTimeout: 1500,
    poll: 1000
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  }
}

const configProd = {
  ...configDev,
  mode: 'production',
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [      
      new TerserPlugin({
      terserOptions: {
        ecma: undefined,
        warnings: false,
        parse: {},
        compress: {
          drop_console: true,
        },
        mangle: {
          toplevel: true,
          // properties: false,
          properties: {
            regex: /(__[a-zA-Z]+)/,
          },
          // properties: {
          //   regex: /__/g,
          // },
        }, // Note `mangle.properties` is `false` by default.
        module: false,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,
      },
    })],
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.js'),
        /**
         * Note: You can do HTLM minification here OR in `html-loader` - but not both.
         *
         * Exact filesize reduction may vary depending on settings used in each.
        */
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyURLs: true,
        },
      })
    ]
  }
}

module.exports = (env) => {
  // return configProd
  return env.production ? configProd : configDev
}
