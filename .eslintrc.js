

// "off" or 0 - 关闭规则
// "warn" or 1 - 将规则视为一个警告（不会影响退出码）
// "error" or 2 - 将规则视为一个错误 (退出码为1)
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-var': 'error', //要求使用 let 或 const 而不是 var
		'no-duplicate-imports': 'error', //禁止重复模块导入
		'prefer-destructuring': 'warn', //优先使用数组和对象解构
		'prefer-const': 'warn', //要求使用 const 声明那些声明后不再被修改的变量
	},
}
