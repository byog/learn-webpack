const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TerserWebpackPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    context: resolve(__dirname, '../'),
    entry: {
        main: './src/main.js',
        contact: './src/contact.js',
    },

    output: {
        publicPath: '/',
        filename: './js/[name].js',
        chunkFilename: './js/[name]_chunk.js',
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            // {
            //     test: /\.css$/i,
            //     use: ['css-loader'],
            // },
            // {
            //     test: /\.s[ac]ss$/,
            //     use: ['css-loader', 'sass-loader'],
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
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
                exclude: /\.(css|scss|js|html|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media',
                },
            },
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new StylelintPlugin({
            context: './src',
            configFile: './.stylelintrc.js',
            files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
            // lintDirtyModulesOnly: true,
            cache: true,
        }),
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
