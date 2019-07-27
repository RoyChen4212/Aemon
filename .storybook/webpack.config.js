const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(svg|png)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
