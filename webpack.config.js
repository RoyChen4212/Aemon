const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './components/index.js',
    desktop: './components/consumer/desktop/index.js',
    mobile: './components/consumer/mobile/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
      },
    ],
  },
};

// "storybook": "npm-run-all -p css:watch storybook:start",
// "storybook:start": "start-storybook -p 9001 -c .storybook",
// "storybook:build": "build-storybook -c .storybook -o dist_old",
// "storybook:build:all": "npm-run-all -p css:build storybook:build",
// "css:watch": "node-sass-chokidar ./components -o ./components --watch",
// "css:build": "node-sass-chokidar ./components -o ./dist_old",
// "heroku-postbuild": "npm-run-all -p storybook:build:all",
// "svg:build": "copyfiles -u 1 `find components -type f \\( -iname \"*.svg\" \\) | tr '\n' ' '` dist_old",
// "build:all": "npm-run-all -p css:build svg:build build:release",
// "build:release": "babel components/ --out-dir dist_old"
