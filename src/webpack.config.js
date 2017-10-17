const path = require('path');
const webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: {
        angular: './implementations/angular.js',
        angular2: './implementations/angular2.js',
        mithril: './implementations/mithril.js',
        polyfills: './helpers/polyfills.js',
        react: './implementations/react.js',
        stats: './helpers/stats.js',
        vendor: ['moment', 'chance', 'stats.js'],
        vue: './implementations/vue.js'
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
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
