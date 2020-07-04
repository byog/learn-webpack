const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
// const TerserWebpackPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const Merge = require('webpack-merge')
const Utils = require('./utils.js')

const commonCssLoader = [
    // // only apply in production mode
    // MiniCssExtractPlugin.loader,
    // only apply in development mode, to service css hmr
    'style-loader',
    'css-loader',
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [require('postcss-preset-env')],
        },
    },
]

// process.env.NODE_ENV = 'development'

let devConf = {
    mode: 'development',
    context: resolve(__dirname, '../'),
    // index.html for hmr - ['./src/index.js', './src/index.html']
    entry: {
        // main: './src/main.js',
        // contact: './src/contact.js',
    },

    devtool: 'eval-source-map',
    // devtool: 'eval-cheap-module-source-map',

    output: {
        // all resource refer this path
        publicPath: './',
        path: resolve(__dirname, '../dist/dev'),
        // filename: 'js/[name].[contenthash:10].js',
        filename: './js/[name].js',
        // name for non-entry file，like import()
        chunkFilename: './js/[name]_chunk.js',
        // expose name
        // library: '[name]',
        // where this liarary (by library name) attach to
        // {broser: 'window', node: 'global', module: 'commonjs'}
        // libraryTarget: 'window',
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
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
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath: 'imgs',
                },
            },
            // other assets, like font
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media/font',
                },
            },
            // {
            //     exclude: /\.(css|scss|js|html|jpg|png|gif)$/,
            //     loader: 'file-loader',
            //     options: {
            //         outputPath: 'media',
            //     },
            // },
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                resolve(__dirname, '../dist'),
            ],
        }),
        new StylelintPlugin({
            context: './src',
            configFile: './.stylelintrc.js',
            files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
            // lintDirtyModulesOnly: true,
            cache: true,
        }),
        // new webpack.DllReferencePlugin({
        //     manifest: resolve(__dirname, 'dll/manifest.json'),
        // }),
        // new AddAssetHtmlPlugin({
        //     filepath: resolve(__dirname, 'dll/axios.js'),
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     filename: 'index.html',
        //     chunks: ['main'],
        //     // minify: {
        //     //     collapseWhitespace: true,
        //     //     removeComments: true,
        //     // },
        // }),
        // new HtmlWebpackPlugin({
        //     template: './src/contact.html',
        //     filename: 'contact.html',
        //     chunks: ['contact'],
        // }),
    ],

    optimization: {
        // minimizer: [
        //     // new TerserWebpackPlugin({
        //     //     cache: true,
        //     //     parallel: true,
        //     //     sourceMap: true,
        //     // }),
        // ],
    },

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
}

// // multiple configuration for multiple pages
// console.log(Utils.pages.map(page => Merge(page, devConf)))
// module.exports = Utils.pages.map(page => Merge(page, devConf))

// single configuration for multiple pages
console.log(Merge([devConf].concat(Utils.pages)))

module.exports = Merge([devConf].concat(Utils.pages))
