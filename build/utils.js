// var path = require('path')
// var glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// var PAGE_PATH = path.resolve(__dirname, '../src/pages')
// var merge = require('webpack-merge')

// //多入口配置
// exports.entries = function() {
// 	var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
// 	var map = {}
// 	entryFiles.forEach(filePath => {
// 		var filename = filePath.substring(
// 			filePath.lastIndexOf('/') + 1,
// 			filePath.lastIndexOf('.')
// 		)
// 		map[filename] = filePath
// 	})
// 	return map
// }

// //多页面输出配置
// exports.htmlPlugin = function() {
// 	let entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
// 	let arr = []
// 	entryHtml.forEach(filePath => {
// 		let filename = filePath.substring(
// 			filePath.lastIndexOf('/') + 1,
// 			filePath.lastIndexOf('.')
// 		)
// 		let conf = {
// 			template: filePath,
// 			filename: filename + '.html',
// 			chunks: [filename],
// 			inject: true,
// 		}
// 		if (process.env.NODE_ENV === 'production') {
// 			conf = merge(conf, {
// 				chunks: ['manifest', 'vendor', filename],
// 				minify: {
// 					removeComments: true,
// 					collapseWhitespace: true,
// 					removeAttributeQuotes: true,
// 				},
// 				chunksSortMode: 'dependency',
// 			})
// 		}
// 		arr.push(new HtmlWebpackPlugin(conf))
// 	})
// 	return arr
// }

// 多配置
const generatePage = function ({
	entry = '',
	title = '',
	template = './src/public/index.html',
	name = '',
	chunks = ['vendors', 'runtime'],
} = {}) {
	return {
		entry,
		plugins: [
			new HtmlWebpackPlugin({
				title,
				chunks,
				template,
				filename: `${name}.html`,
			}),
		],
	}
}

const pages = [
	generatePage({
		entry: {
			test: './src/pages/test/test.js',
		},
		title: 'test',
		name: 'test',
		chunks: ['test', 'vendors', 'runtime'],
	}),
	// generatePage({
	// 	entry: {
	// 		index: './src/pages/index/index.js',
	// 	},
	// 	title: '首页',
	// 	name: 'index',
	// 	chunks: ['index', 'vendors', 'runtime'],
	// }),
	// generatePage({
	//     entry: {
	//         price: './src/pages/price/price.js',
	//     },
	//     title: '价格',
	//     name: 'price',
	//     chunks: ['price', 'vendors', 'runtime'],
	// }),
	// generatePage({
	//     entry: {
	//         works: './src/pages/works/works.js',
	//     },
	//     title: '案例',
	//     name: 'works',
	//     chunks: ['works', 'vendors', 'runtime'],
	// }),
	// generatePage({
	// 	entry: {
	// 		careers: './src/pages/careers/careers.js',
	// 	},
	// 	title: '加入我们',
	// 	name: 'careers',
	// 	chunks: ['careers', 'vendors', 'runtime'],
	// }),
	// generatePage({
	//     entry: {
	//         about: './src/pages/about/about.js',
	//     },
	//     title: '关于',
	//     name: 'about',
	//     chunks: ['about', 'vendors', 'runtime'],
	// }),
]

module.exports = {
	pages,
}
