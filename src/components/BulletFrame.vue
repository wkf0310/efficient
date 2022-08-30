<!-- eslint-disable vue/no-mutating-props -->
<template>
	<div>
		<!-- 发送弹框 -->
		<div>
			<el-dialog title="修改密码" :visible.sync="dialogFormVisible">
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="用户名" prop="user">
						<el-input v-model="ruleForm.user"></el-input>
					</el-form-item>
					<el-form-item label="新密码" prop="pwd">
						<el-input v-model="ruleForm.pwd"></el-input>
					</el-form-item>
					<el-form-item label="再次输入" prop="password">
						<el-input v-model="ruleForm.password"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="determine('ruleForm')">确定</el-button>
						<el-button @click="cancel">取 消</el-button>
						<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
					</el-form-item>
				</el-form>
				<!-- <div slot="footer" class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="determine(ruleForm)">确 定</el-button>
				</div> -->
			</el-dialog>
		</div>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'bull',
	props: ['dialogFormVisible'],
	components: {},
	data() {
		var checkAge = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('用户名不能为空'))
			}
		}
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				if (this.ruleForm.password !== '') {
					this.$refs.ruleForm.validateField('password')
				}
				callback()
			}
		}
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'))
			} else if (value !== this.ruleForm.pwd) {
				callback(new Error('两次输入密码不一致!'))
			} else {
				callback()
			}
		}
		return {
			ruleForm: {
				user: '',
				password: '',
				pwd: ''
			},
			// 正则验证
			rules: {
				user: [{ validator: checkAge, trigger: 'blur' }],
				pwd: [{ validator: validatePass, trigger: 'blur' }],
				password: [{ validator: validatePass2, trigger: 'blur' }]
			}
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 取消
		cancel() {
			this.$emit('cancel')
		},
		// 确定
		determine(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$emit('cancel')
					console.log(1)
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>
<style scoped lang="scss"></style>
