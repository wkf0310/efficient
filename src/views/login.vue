<template>
	<div class="login-box">
		<div class="login">
			<p>OA系统登录</p>
			<!-- form表单 -->
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
				<!-- 用户 -->
				<el-form-item prop="user">
					<el-input v-model="ruleForm.user" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<!-- 密码 -->
				<el-form-item prop="password">
					<el-input v-model="ruleForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
					<p style="cursor: pointer" class="pwd" @click="forgotPassword">忘记密码？</p>
				</el-form-item>
				<!-- 验证 -->
				<el-form-item prop="verification">
					<el-input v-model="ruleForm.verification" style="width: 240px" placeholder="验证码" class="yz"></el-input>
					<div class="send" style="cursor: pointer" @click="verificationCode" v-if="flag">验证码图片</div>
					<div class="send" style="cursor: pointer" v-else><img src="/favicon.ico" alt="" @click="testing" /></div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="Signin" @click="login('ruleForm')">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
		<footer>
			<p>©2022美团版权所有京ICP证070791号京公网安备11010502025545号</p>
		</footer>
		<!-- 修改密码弹框 -->
		<bulletframe :dialogFormVisible="dialogFormVisible" @cancel="cancel"></bulletframe>
	</div>
</template>

<script>
import { v4 as uuid4 } from 'uuid'
// 引入axios
import axios from 'axios'
// 引入弹框
import bulletframe from '../components/BulletFrame.vue'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'login',
	components: {
		bulletframe
	},
	data() {
		return {
			flag: true, // 验证码图片
			dialogFormVisible: false, //弹框状态
			ruleForm: {
				user: '', //用户
				password: '', //密码
				verification: '' //验证
			},
			rules: {
				user: [
					{ required: true, message: '请输入用户名', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 6, max: 10, message: '长度在 6 到 10个数字', trigger: 'blur' }
				],
				verification: [
					{ required: true, message: '请输入验证码', trigger: 'blur' },
					{ min: 3, max: 5, message: '验证码不一致', trigger: 'blur' }
				]
			}
		}
	},
	created() {
		console.log(uuid4())
		this.$http.post('/effect/user/login').then((res) => {
			console.log(res)
		})
		// axios.post('/effect/home/loginsearch').then((res) => {
		// 	console.log(res)
		// })
	},
	mounted() {},
	methods: {
		// 登录
		login(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!')
					this.$router.push('/index')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		// 忘记密码弹框
		forgotPassword() {
			this.dialogFormVisible = true
		},
		// 验证码图片显示
		verificationCode() {
			this.flag = !this.flag
		},
		// 图片切换
		testing() {
			var time = 2
			var data = setInterval(() => {
				time--
				if (time == 0) {
					this.flag = true
					clearInterval(data)
				}
			}, 1000)
		},
		// 取消弹框
		cancel() {
			this.dialogFormVisible = false
		}
	}
}
</script>
<style scoped lang="scss">
.login-box {
	width: 100%;
	height: 100%;
	background: url('/public/login.png') no-repeat;
	background-size: 100% 100%;
	position: relative;
	.login {
		width: 495px;
		height: 453px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: #ffffff;
		border-radius: 34px;
		text-align: center;
		padding: 0px 60px;
		.yz {
			position: relative;
			left: -10px;
		}
		// 忘记密码
		.pwd {
			font-size: 14px;
			font-weight: 0;
			margin: 0;
			position: absolute;
			right: 0;
			top: 32px;
			color: #f5c65c;
		}
		// 发送验证码
		.send {
			float: right;
			color: #d2c9cc;
			border-radius: 14px;
			width: 118px;
			height: 40px;
			border: 1px solid #d2c9cc;
		}
		// 头部字标题
		p {
			font-size: 28px;
			font-weight: 400px;
			margin-top: 40px;
			margin-bottom: 30px;
		}
		// input 下边距
		.el-form-item {
			margin-bottom: 30px;
		}
		// 登录按钮
		.Signin {
			background-color: #d9bffb;
			width: 333px;
			border: 0;
			border-radius: 10px;
			margin-top: 10px;
			height: 55px !important;
			font-size: 22px;
		}
	}
	// 底部
	footer {
		width: 100%;
		position: absolute;
		bottom: 60px;
		font-size: 15px;
		text-align: center;
		color: #9a9a9a;
	}
}
</style>
