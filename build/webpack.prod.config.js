const { resolve } = require('path')
const Merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.config')

process.env.NODE_ENV = 'production'

const commonCssLoader = [
    // // only apply in production mode
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [require('postcss-preset-env')],
        },
    },
]

module.exports = Merge(baseWebpackConfig, {
    mode: 'production',

    devtool: 'eval-source-map',
    // devtool: 'eval-cheap-module-source-map',

    output: {
        path: resolve(__dirname, '../dist'),
    },

    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/i,
                        use: commonCssLoader,
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [...commonCssLoader, 'sass-loader'],
                    },
                    {
                        test: /\.js$/i,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        [
                                            '@babel/preset-env',
                                            {
                                                targets: {
                                                    edge: '17',
                                                    firefox: '60',
                                                    chrome: 67,
                                                    safari: '11.1',
                                                    ie: '9',
                                                },
                                                // useBuiltIns: 'usage',
                                                // corejs: 3,
                                            },
                                        ],
                                    ],
                                    plugins: [
                                        [
                                            '@babel/plugin-transform-runtime',
                                            {
                                                corejs: 3,
                                            },
                                        ],
                                    ],
                                    cacheDirectory: true,
                                },
                            },
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:10].css',
        }),
        new OptimizeCssAssetsPlugin(),
        // new webpack.DllReferencePlugin({
        //     manifest: resolve(__dirname, 'dll/manifest.json'),
        // }),
        // new AddAssetHtmlPlugin({
        //     filepath: resolve(__dirname, 'dll/axios.js'),
        // }),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'vendors',
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    // priority: -20,
                    reuseExistingChunk: true,
                },
                axiosBase: {
                    test: (module) => {
                        return /axios/.test(module.context)
                    },
                    chunks: 'initial',
                    name: 'axiosBase',
                    priority: 10,
                },
            },
        },
        // package the hash of refer another module  in current module  into a runtime file
        // fix: a file's contenthash change when modify b file - a only refer b, nothing else, linke import()
        runtimeChunk: {
            name: (entrypoint) => `runtime-${entrypoint.name}`,
        },
    },
})
