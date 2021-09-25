const registerRouter = require('./backend/router')

module.exports = {
	css: {
		loaderOptions: {
			scss: {
				// 全局引入变量和 mixin
				prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `,
			},
		},
	},
	devServer: {
		before(app) {
			console.log('app++++++', app)
			registerRouter(app)
		},
	},
	configureWebpack: (config) => {
		if (process.env.npm_config_report) {
			const BundleAnalyzerPlugin =
				require('webpack-bundle-analyzer').BundleAnalyzerPlugin
			config.plugins.push(new BundleAnalyzerPlugin())
		}
	},
	productionSourceMap: false,
	publicPath: process.env.NODE_ENV === 'production' ? '/music-next/' : '/',
}
