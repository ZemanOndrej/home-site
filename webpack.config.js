let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
let path = require("path");



let APP_DIR = path.join(__dirname, "/");

let config = {

    devServer: {
        publicPath: "/",
        historyApiFallback: {
            index: './dist/index.html',
        }
    },
    context: APP_DIR,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/index.js",
    watch: true,
    output: {
        publicPath: "/",
        path: APP_DIR + "/dist",
        filename: "bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }


        ]
    }
};


module.exports = config;