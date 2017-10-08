const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        angular: './implementations/angular.js',
        stats: './helpers/stats.js'
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
            }
        ]
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        filename: "commons.js",
    })]
}