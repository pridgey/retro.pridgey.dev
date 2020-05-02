const path = require("path");

module.exports = {
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js.js",
  },
  mode: "development",

  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
};
