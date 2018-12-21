const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "../")
      }
    ]
  }
};