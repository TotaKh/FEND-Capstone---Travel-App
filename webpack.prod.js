const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const miniCssExtractPlugin = require('mini-css-extract-plugin') 
const workboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/client/js/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),

        new miniCssExtractPlugin ({filename:'[name].[contenthash].css'}),
        new workboxWebpackPlugin.GenerateSW()

    ]
}