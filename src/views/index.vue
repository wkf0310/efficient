<template>
	<div class="box">
		<!-- 首页 -->
		<!-- 全屏包裹 -->
		<fullscreen :fullscreen.sync="fullscreen">
			<el-container>
				<!-- 侧边栏组件 -->
				<el-aside :width="isCollapse ? '68px' : '200px'">
					<menus :isCollapse="isCollapse"></menus>
				</el-aside>
				<!-- 头部 -->
				<el-main>
					<header>
						<!-- 侧边栏切换 -->
						<div class="left">
							<i class="el-icon-s-fold" v-if="isCollapse" @click="isCollapse = !isCollapse"></i>
							<i class="el-icon-s-unfold" v-else @click="isCollapse = !isCollapse"></i>
						</div>
						<div class="right">
							<ul>
								<li>
									<i class="el-icon-s-flag"></i>
									<span class="sp">10</span>
								</li>
								<li>
									<i class="el-icon-message-solid"></i>
									<span class="sp1">10</span>
								</li>
								<li>
									<i class="el-icon-message"></i>
									<span class="sp2">10</span>
								</li>
								<li>
									<i class="el-icon-rank" @click="toggle"></i>
								</li>
								<li>
									<el-popover placement="top-start" width="200" trigger="hover">
										<p slot="reference">
											<img src="/favicon.ico" alt="" />
											<span>草鸡管理员</span>
										</p>
										<ul class="uu">
											<li>修改密码</li>
											<li>退出登录</li>
											<li class="bom">个人中心</li>
										</ul>
									</el-popover>
								</li>
							</ul>
						</div>
					</header>
					<!-- 内置组件 -->
					<keep-alive>
						<!-- 路由容器 -->
						<router-view></router-view>
					</keep-alive>
				</el-main>
			</el-container>
		</fullscreen>
	</div>
</template>

<script>
// 侧边栏
import menus from '../components/ment.vue'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'index',
	components: {
		menus
		// home
	},
	data() {
		return {
			fullscreen: false, //全屏
			isCollapse: false //侧边栏收缩
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 全屏
		toggle() {
			this.fullscreen = !this.fullscreen
		}
	}
}
</script>
<style scoped lang="scss">
.uu {
	border: 1px solid #dcdfe6;
	text-align: center;
	li {
		padding: 5px 8px;
		border-bottom: 1px solid #dcdfe6;
	}
	.bom {
		border: 0;
	}
}
.el-aside {
	background-color: #7aabf6;
	color: #333;
	height: 100vh;
}

.el-main {
	padding: 0 !important;
	background-color: #ffffff;
	color: #333;
	height: 100vh;
	header {
		padding: 0 10px;
		height: 70px;
		background-color: #ffffff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #dcdfe6;
		border-top: 1px solid #dcdfe6;
		.left {
			margin-left: 10px;
			i {
				font-size: 28px;
			}
		}
		i {
			font-size: 24px;
			color: #b3b3b3;
		}
		ul {
			display: flex;
			align-items: center;
			position: relative;
			li {
				padding: 10px;
				.sp {
					position: absolute;
					top: 5px;
					left: 25px;
					display: inline-block;
					padding: 2px;
					background-color: red;
					border-radius: 4px;
					font-size: 12px;
					color: #fff;
				}
				.sp1 {
					position: absolute;
					top: 5px;
					left: 68px;
					display: inline-block;
					padding: 2px;
					background-color: #f4c438;
					border-radius: 4px;
					font-size: 12px;
					color: #fff;
				}
				.sp2 {
					position: absolute;
					top: 5px;
					left: 115px;
					display: inline-block;
					padding: 2px;
					background-color: #c2c2fb;
					border-radius: 4px;
					font-size: 12px;
					color: #fff;
				}
			}
			li:nth-child(4) {
				i {
					transform: rotateX(30deg);
				}
			}
			li:nth-child(5) {
				vertical-align: baseline;
				p {
					margin-top: 15px;
				}
				span {
					display: inline-block;
					position: relative;
					top: -10px;
				}
				span:hover {
					cursor: pointer;
				}
			}
		}
	}
}
</style>
