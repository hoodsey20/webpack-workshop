const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        inner: './src/inner.js'
	},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }
            },
        ]
    }
}
