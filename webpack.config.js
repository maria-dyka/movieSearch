const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
            contentBase: './dist',
            hot: true
    },
    module: {
        rules: [
            { test: /\.js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                } }
        ]
    }
};