const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './app/main.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './app/wpk')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // use: 'css-loader?minimize&sourceMap!sass-loader?sourceMap'
                use: 'css-loader?sourceMap!sass-loader?sourceMap'
            })
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // use: 'css-loader?minimize&sourceMap!less-loader?sourceMap'
                use: 'css-loader?sourceMap!less-loader?sourceMap'
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                // use: 'css-loader?minimize&sourceMap!less-loader?sourceMap'
                use: 'css-loader?minimize&sourceMap!postcss-loader'
            })
        }]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}