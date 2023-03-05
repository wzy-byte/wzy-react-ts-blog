const path = require("path");
const {merge} = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const baseConfig = require("./webpack.base");

/** @type {import("webpack").Configuration} */
module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        open: true,
        port: 3000,
        compress: false,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "../public")
        }
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
});
