const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

// // nodejs env
// process.env.NODE_ENV = 'development'

const commonCssLoader = [
    // // only apply in production mode
    MiniCssExtractPlugin.loader,
    // only apply in development mode, to service css hmr
    // 'style-loader',
    'css-loader',
    // {
    //     loader: 'postcss-loader',
    //     options: {
    //         ident: 'postcss',
    //         plugins: () => [require('postcss-preset-env')],
    //     },
    // },
]

module.exports = {
    // mode: 'development',
    mode: 'production',

    devtool: 'eval-source-map',
    // devtool: 'eval-cheap-module-source-map',

    // index.html for hmr - ['./src/index.js', './src/index.html']
    entry: './src/index.js',
    // entry: {
    //     index: './src/index.js',
    //     temp: './src/temp.js',
    // },

    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'dist'),
        // all resource refer this path
        publicPath: '/',
        // name for non-entry file，like import()
        chunkFilename: '[name]_chunk.js',
        // expose name
        // library: '[name]',
        // where this liarary (by library name) attach to
        // {broser: 'window', node: 'global', module: 'commonjs'}
        // libraryTarget: 'window',
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
                    // {
                    //     test: /\.(jpg|png|gif)$/i,
                    //     loader: 'url-loader',
                    //     options: {
                    //         limit: 8 * 1024,
                    //         name: '[hash:10].[ext]',
                    //         outputPath: 'imgs',
                    //     },
                    // },
                    // // other assets, like font
                    // {
                    //     exclude: /\.(css|scss|js|html|jpg|png|gif)$/,
                    //     loader: 'file-loader',
                    //     options: {
                    //         outputPath: 'media',
                    //     },
                    // },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            // },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/built.[contenthash:10].css',
        }),
        // new OptimizeCssAssetsPlugin(),
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
        minimizer: [
            new TerserWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            }),
        ],
    },

    // rules for parsing module
    resolve: {
        alias: {
            $css: resolve(__dirname, 'src/css'),
        },
        // ignore file extension
        extensions: ['.css', 'scss', 'sass'],
        // where the module when parse, find path quickly
        modules: [resolve(__dirname, '/node_modules')],
    },

    // import resource by CDN
    externals: {},

    devServer: {
        contentBase: resolve(__dirname, 'dist'),
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
}
