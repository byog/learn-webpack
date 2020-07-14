const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TerserWebpackPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
	context: resolve(__dirname, '../'),
	entry: {
		// main: './src/main.js',
		// contact: './src/contact.js',
	},

	output: {
		publicPath: './',
		filename: './js/[name].js',
		chunkFilename: './js/[name]_chunk.js',
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader',
			},
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
		new CleanWebpackPlugin(),
		new StylelintPlugin({
			context: './src',
			configFile: './.stylelintrc.js',
			files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
			// files: ['src/**/*.css'],
			// lintDirtyModulesOnly: true,
			cache: true,
			// fix: true,
		}),
		// new HtmlWebpackPlugin({
		//     template: './src/index.html',
		//     filename: 'index.html',
		//     chunks: ['main'],
		// }),
		// new HtmlWebpackPlugin({
		//     template: './src/contact.html',
		//     filename: 'contact.html',
		//     chunks: ['contact'],
		// }),
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
			vue$: 'vue/dist/vue.esm.js',
			components: resolve(__dirname, '../src/components'),
			assets: resolve(__dirname, '../src/assets'),
			modules: resolve(__dirname, '../src/modules'),
			css: resolve(__dirname, '../src/css'),
		},
		// ignore file extension
		extensions: ['.css', '.scss', '.sass', '.js', '.ejs', '.ts', '.vue'],
		// where the module when parse, find path quickly
		modules: [resolve(__dirname, '../node_modules')],
	},

	// import resource by CDN
	externals: {},
}
