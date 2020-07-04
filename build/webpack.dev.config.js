const { resolve } = require('path')
const Merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const Utils = require('./utils.js')

// process.env.NODE_ENV = 'development'

const devConf = Merge.smart(baseWebpackConfig, {
    mode: 'development',

    devtool: 'eval-source-map',
    // devtool: 'eval-cheap-module-source-map',

    output: {
        path: resolve(__dirname, '../dist/dev'),
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [require('postcss-preset-env')],
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
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
        // contentBase: resolve(__dirname, '../src'),
        publicPath: '/',
        // watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/,
        },
        compress: true,
        port: 3000,
        hot: true,
        // log hide
        // clientLogLevel: 'none',
        // only show some start up info
        // quiet: true,
        // do not fullscreen show when error
        // overlay: false,
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

// // multiple configuration for multiple pages
// console.log(Utils.pages.map(page => Merge(page, devConf)))
// module.exports = Utils.pages.map(page => Merge(page, devConf))

// single configuration for multiple pages
console.log(Merge([devConf].concat(Utils.pages)))

module.exports = Merge([devConf].concat(Utils.pages))
