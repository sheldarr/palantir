const path = require('path');

module.exports = {
    entry: {
        angular: './implementations/angular.js'
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
    }
}