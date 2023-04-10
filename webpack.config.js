const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { //Loader para archivos Jss
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test:/\.(png|gif|jpg|svg)$/,
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            },
            { // Loader para css
                test: /\.css$/,
                use:  ['style-loader','css-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
    ],
    devServer: {
        historyApiFallback : true,
        compress: true,
        port: 8000,

    },
};