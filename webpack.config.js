const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [   
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: 'style.css'}
        ),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/card.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'homepage.html',
            template: 'src/index.html'
        }),

        new CopyPlugin({
            patterns: [
              { from: 'src/images', to: 'images' },
            ],
        }),
    ],
};
