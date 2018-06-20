var path = require("path");
var Html = require("html-webpack-plugin");
var Clean = require("clean-webpack-plugin");

module.exports = {
    entry: './src/Main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: /src/,
                exclude: /node_module/
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            }, 
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    outputPath: 'images/'  // 输出目录
                }
            }
        ]
    },
    plugins: [
        new Clean('dist'),
        new Html({
            template: './index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        hot: true
    },
    mode: 'development'
};