const path = require('path');
const webpack = require('webpack');
let debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: __dirname + "/src",
    entry: "./app/app.js",
    mode : 'development',
    output: {
        filename: 'script.min.js',
        path: path.join(__dirname, 'dist/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-object-rest-spread']
                    }
                }
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
