let mode = process.env.npm_lifecycle_event;

const { resolve } = require("path");
const path = require("path");
const postcssPlugins = [require("postcss-import")];

let config = {
  entry: "./app/index.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postcssPlugins,
              },
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

if (mode === "dev") {
  config.devServer = {
    host: "local-ip",
    hot: true,
    open: {
      app: {
        name: "firefox",
      },
    },
    port: 3000,
    static: {
      directory: path.join(__dirname, "app"),
    },
  };
}

if (mode === "build") {
}

module.exports = config;
