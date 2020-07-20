const { resolve } = require('path')
const Merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const Utils = require('./utils.js')

const baseWebpackConfig = require('./webpack.base.config')

// process.env.NODE_ENV = 'production'

const commonCssLoader = [
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

const prodConf = Merge.smart(baseWebpackConfig, {
	mode: 'production',

	devtool: 'eval-source-map',
	// devtool: 'eval-cheap-module-source-map',

	output: {
		path: resolve(__dirname, '../dist'),
		filename: './js/[name].[contenthash:10].js',
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				sideEffects: true,
				use: [...commonCssLoader],
			},
			{
				test: /\.s[ac]ss$/,
				use: [...commonCssLoader, 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
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
		],
	},

	plugins: [
		new OptimizeCssAssetsPlugin(),
		// new webpack.DllReferencePlugin({
		//     manifest: resolve(__dirname, 'dll/manifest.json'),
		// }),
		// new AddAssetHtmlPlugin({
		//     filepath: resolve(__dirname, 'dll/axios.js'),
		// }),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [
				'**/*',
				resolve(__dirname, '../dist'),
			],
		}),
		new MiniCssExtractPlugin({
			filename: './css/[name].[contenthash:10].css',
			// chunkFilename: './css/[name].[contenthash:10].css',
		}),
	],

	optimization: {
		// sideEffects: true,
		splitChunks: {
			// chunks: 'all',
			// minSize: 30000,
			// maxSize: 0,
			// minChunks: 1,
			// maxAsyncRequests: 6,
			// maxInitialRequests: 4,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'initial',
					name: 'vendors',
					enforce: true,
					priority: 20,
				},
				common: {
					chunks: 'initial',
					minSize: 0,
					name: 'common',
					minChunks: 2,
					priority: 10,
					// reuseExistingChunk: true,
				},
			},
		},
		// package the hash of refer another module  in current module  into a runtime file
		// fix: a file's contenthash change when modify b file - a only refer b, nothing else, like import()
		/**
		 * @param {string} [multiple|single]
		 */
		runtimeChunk: {
			name: (entrypoint) => `runtime-${entrypoint.name}`,
		},
	},
})

// // multiple configuration for multiple pages
// console.log(Utils.pages.map(page => Merge(page, prodConf)))
// module.exports = utils.pages.map(page => Merge(page, prodConf))

// single configuration for multiple pages
console.log(Merge([prodConf].concat(Utils.pages)))
module.exports = Merge([prodConf].concat(Utils.pages))
