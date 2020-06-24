const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
    context: resolve(__dirname, '../'),
    entry: {
        main: './src/main.js',
        contact: './src/contact.js',
    },

    output: {
        filename: 'js/[name].[contenthash:10].js',
        publicPath: '/',
        chunkFilename: 'js/[name]_chunk.js',
    },

    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.html$/i,
                        loader: 'html-loader',
                    },
                    {
                        test: /\.css$/i,
                        use: ['css-loader'],
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: ['css-loader', 'sass-loader'],
                    },
                    {
                        test: /\.js$/i,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'eslint-loader',
                                options: {
                                    // fix: true,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.(jpg|png|gif)$/i,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[hash:10].[ext]',
                            outputPath: 'imgs',
                        },
                    },
                    // other assets, like font
                    {
                        exclude: /\.(css|scss|js|html|jpg|png|gif)$/,
                        loader: 'file-loader',
                        options: {
                            outputPath: 'media',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: 'contact.html',
            chunks: ['contact'],
        }),
    ],

    // optimization: {
    //     minimizer: [
    //         new TerserWebpackPlugin({
    //             cache: true,
    //             parallel: true,
    //             sourceMap: true,
    //         }),
    //     ],
    // },

    // rules for parsing module
    resolve: {
        alias: {
            $css: resolve(__dirname, 'src/css'),
        },
        // ignore file extension
        extensions: ['.css', '.scss', '.sass', '.js', '.ejs', '.ts'],
        // where the module when parse, find path quickly
        modules: [resolve(__dirname, '../node_modules')],
    },

    // import resource by CDN
    externals: {},
}
