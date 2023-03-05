const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

/** @type {import("webpack").Configuration} */
module.exports = {
    entry: path.join(__dirname, "../src/index.tsx"),
    output: {
        filename: "static/js/[name].[chunkhash:8].js",
        path: path.resolve(__dirname, "../dist"),
        clean: true,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                include: [path.resolve(__dirname, "../src")],
                test: /.(ts|tsx)$/,
                use: ["thread-loader", "babel-loader"]
            },
            {
                test: /.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /.(png|jpg|jpeg|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: "static/images/[name].[contenthash:8][ext]"
                }
            },
            {
                test: /.(woff2?|eot|ttf|otf)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: "static/images/[name].[contenthash:8][ext]"
                }
            },
            {
                test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: "static/images/[name].[contenthash:8][ext]"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".tsx", ".ts"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            inject: true
        }),
        new webpack.DefinePlugin({
            "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV)
        })
    ],
    cache: {
        type: "filesystem"
    }
};
