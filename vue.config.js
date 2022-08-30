// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
// 	transpileDependencies: true, //生产环境的构造
// 	lintOnSave: false,
// 	productionSourceMap: false,
// 	publicPath: './', //根目录
// 	outputDir: 'dist', //输出文件地址
// 	assetsDir: 'static', //输出文件地址
// 	devServer: {
// 		port: 8089, //端口号
// 		https: false, //开启网络加密运输协议
// 		host: '0.0.0.0', //域名
// 		open: true,
// 		// 配置代理跨域
// 		proxy: {
// 			'/api': {
// 				changeOrigin: true,
// 				target: 'http://www.baidu.com',
// 				pathRewrite: {
// 					'/api': ''
// 				}
// 			}
// 		}
// 	}
// })
// // pro  -> produciton (生产，全量，真机，线上)
// // stage (灰机，备机)
// // test --测试环境，也可以自己使用
// // dev ---我们可以使用开发环境

const { defineConfig } = require('@vue/cli-service')
// console.log(process.env);
module.exports = defineConfig({
	//第三方依赖是否需要转移，避免出现第三方的转移
	transpileDependencies: true, //是否在开发环境下通过 eslin-loader 在每次保存时 lint 代码。
	lintOnSave: false, //代理端口配置
	devServer: {
		port: 8089, // 端口号
		https: false,
		host: '0.0.0.0',
		open: true,
		// 配置代理npm
		proxy: {
			// change xxx-api/login => mock/login
			// detail: https://cli.vuejs.org/config/#devserver-proxy
			[process.env.VUE_APP_BASE_API]: {
				target: process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:8999` : process.env.VUE_APP_CONSOLE_URL,
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_BASE_API]: ''
				}
			}
		}
	}
})
