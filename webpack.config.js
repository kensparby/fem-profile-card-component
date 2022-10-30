const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.join(__dirname, "/src/index.js"),
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    hot: true,
    compress: true,
    open: false,
    historyApiFallback: true,
    watchFiles: {
      paths: ["src/**/*.{js,html}"],
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.{png|jpg|jpeg|gif|svg}$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.css$/,
      //   include: path.join(__dirname, "src"),
      //   use: ["css-loader", "style-loader", "postcss-loader"],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Frontend Mentor | Profile Card Component",
      template: path.join(__dirname, "src/template_index.html"),
      filename: "index.html",
      favicon: "src/assets/images/favicon-32x32.png",
    }),
  ],
};
