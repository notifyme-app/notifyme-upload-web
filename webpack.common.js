const path = require("path");
const webpack = require('webpack');

module.exports = env => {
  return {
    entry: ['babel-polyfill', "./src/index.js"],
    output: {
      path: __dirname + '/dist',
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            "loader": "babel-loader",
            "options": {
              "presets": [
                "@babel/preset-env",
              ]
            }
          }
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "static/fonts"
              }
            },
          ]
        }
      ]
    },
    resolve: {
      fallback: {
        path: require.resolve("path-browserify")
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'POST_URL': JSON.stringify(env.POST_URL)
      })
    ]
  }
}
