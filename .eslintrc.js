module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: [
		// 'eslint:recommended',
		'plugin:vue/recommended',
		'prettier',
	],
	parser: 'vue-eslint-parser',

	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['vue'],
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'vue/html-indent': [
					'error',
					'tab',
					// {
					// 	attribute: 1,
					// 	baseIndent: 1,
					// 	closeBracket: 0,
					// 	ignores: [],
					// },
				],
			},
		},
	],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['warn', 'single'],
		// 'comma-dangle': ['error', 'always'],
		'no-cond-assign': ['error', 'always'],
		semi: ['error', 'never'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
}
