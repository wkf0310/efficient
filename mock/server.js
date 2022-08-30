let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json') //登录json
const loginsearch = require('./common/loginsearch.json') //日志json
let app = express() //实例化express

// 登录接口
app.use('/user/login', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '登陆成功',
			loginData
		})
	)
})
// 登录日志
app.use('/home/loginsearch', function (req, res) {
	res.json(
		Mock.mock({
			status: 200,
			msg: '登陆成功',
			loginsearch
		})
	)
})
// 监听
app.listen(8999, () => {
	console.log('监听8999')
})
