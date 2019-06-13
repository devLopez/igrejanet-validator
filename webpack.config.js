const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: './dist/',
        filename: 'index.js',
        library: 'IgrejanetValidator',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]
};