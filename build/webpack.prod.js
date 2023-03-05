const path = require("path");
const {merge} = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
    mode: "production",
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../public"),
                    to: path.resolve(__dirname, "../dist"),
                    filter: (source) => !source.includes("index.html")
                }
            ]
        }),
        new CompressionPlugin({
            test: /.(js|css)$/,
            filename: "[path][base].gz",
            algorithm: "gzip",
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({parallel: true})
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    name: "vendors",
                    minChunks: 1,
                    chunks: "initial",
                    minSize: 0,
                    priority: 1
                },
                commons: {
                    name: "commons",
                    minChunks: 2,
                    chunks: "initial",
                    minSize: 0
                }
            }
        }
    }
});
