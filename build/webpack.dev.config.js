const { resolve } = require('path')
const Merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.config')

process.env.NODE_ENV = 'development'

module.exports = Merge(baseWebpackConfig, {
    mode: 'development',

    devtool: 'eval-source-map',
    // devtool: 'eval-cheap-module-source-map',

    output: {
        path: resolve(__dirname, '../dist/dev'),
    },

    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/i,
                        use: ['style-loader', 'css-loader'],
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
                        ],
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                resolve(__dirname, '../dist'),
            ],
        }),
    ],

    devServer: {
        contentBase: resolve(__dirname, '../dist/dev'),
        // watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/,
        },
        compress: true,
        port: 3000,
        hot: true,
        // log hide
        ClientLogLevel: 'none',
        // only show some start up info
        quiet: true,
        // do not fullscreen show when error
        overlay: false,
        // proxy: {
        //     // receive /api/xxx request, proxy this request to another server
        //     '/api': {
        //         target: 'http://localhost:5000',
        //         pathRewrite: {
        //             '^api': '',
        //         },
        //     },
        // },
    },
})
