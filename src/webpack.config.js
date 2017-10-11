const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        angular: './implementations/angular.js',
        react: './implementations/react.js',
        stats: './helpers/stats.js',
        vendor: ['moment', 'chance', 'stats.js']
    },
    output: {
        path: path.resolve(__dirname, "public", "js"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.pug$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'pug-loader',
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js"
        })
    ],
    devtool: "eval"
}