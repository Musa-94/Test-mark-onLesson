const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PUBLIC_PATH = path.resolve(__dirname, './public');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: PUBLIC_PATH,
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: PUBLIC_PATH,
        port: 3000,
        hot: true,
        open: true,
        watchContentBase: true,
        writeToDisck: filePath => {/(index\.html$)|(bundle\.js$)/.test(filePath)},
    },
    module: {
        rules: [
            { test: /\.html$/, use: 'html-loader'},
            { test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    preset: ['@babel/preset-evn'],
                    plugins : ['@babel/plugin-proposal-class-properties'],
                }
            }
        },
        { test: /worker\.js$, use: {
            loader: 'worker-loader',
            options: {
                
            }
        }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        })
    ]
}