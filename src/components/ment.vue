<template>
	<div>
		<!-- 侧边栏 -->
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			background-color="#7aabf6"
			text-color="#fff"
			active-text-color="#fff"
			:collapse="isCollapse"
			:collapse-transition="false"
			router
		>
			<!-- 侧边栏头部 -->
			<div class="top">
				<img src="/log.png" width="40px" alt="" />
				<p v-show="isCollapse == false">OA管理系</p>
			</div>
			<!-- <el-menu-item index="/home">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>基础配置</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="/BasicPage">职级管理</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group>
					<el-menu-item index="/administration">岗位管理</el-menu-item>
				</el-menu-item-group>
			</el-submenu> -->
			<!-- 循环 -->
			<el-menu-item index="/home">
				<i class="el-icon-s-home" style="color: #fff"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu v-for="item in menuList" :key="item.id" :index="item.id + ''">
				<template slot="title">
					<i :class="item.icon" style="color: #fff"></i>
					<span>{{ item.title }}</span>
				</template>
				<el-menu-item-group v-for="item1 in item.child" :key="item1.id">
					<el-menu-item :index="item1.path">{{ item1.title }}</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: '',
	props: ['isCollapse'],
	components: {},
	data() {
		return {
			menuList: [
				// {
				// 	id: 1,
				// 	title: '首页',
				// 	path: '/home',
				// 	icon: 'el-icon-s-home'
				// },
				{
					id: 2,
					title: '基础配置',
					icon: 'el-icon-setting',
					child: [
						{
							id: 11,
							title: '用户管理',
							path: '/user'
						},
						{
							id: 22,
							title: '角色管理',
							path: '/role'
						},
						{
							id: 33,
							title: '权限管理',
							path: '/power'
						},
						{
							id: 44,
							title: '菜单管理',
							path: '/menu'
						},
						{
							id: 444,
							title: '职级管理',
							path: '/BasicPage'
						},
						{
							id: 55,
							title: '岗位管理',
							path: '/administration'
						},
						{
							id: 66,
							title: '操作日志',
							path: '/operationlog'
						},
						{
							id: 77,
							title: '登录日志',
							path: '/loginlog'
						},
						{
							id: 88,
							title: '字典管理',
							path: '/index'
						},
						{
							id: 99,
							title: '部门管理',
							path: '/branck'
						}
					]
				},
				{
					id: 3,
					title: '配置工作流',
					icon: 'el-icon-tickets',
					child: [
						{
							id: 111,
							title: '配置审批流程',
							path: '/approvalprocess'
						},
						{
							id: 222,
							title: '配置审批类型',
							path: '/approvaltype'
						}
					]
				},
				{
					id: 4,
					title: '材料管理',
					icon: 'el-icon-document-copy',
					child: [
						{
							id: 21,
							title: '材料管理',
							path: '/material'
						}
					]
				},
				{
					id: 5,
					title: '企业通讯',
					icon: 'el-icon-microphone',
					child: [
						{
							id: 31,
							title: '邮件处理',
							path: '/mail'
						},
						{
							id: 41,
							title: '工资条录入',
							path: '/payrollentry'
						}
					]
				},
				{
					id: 6,
					title: '合同管理',
					icon: 'el-icon-folder-opened'
				},
				{
					id: 7,
					title: 'OA审批',
					icon: 'el-icon-user',
					child: [
						{
							id: 121,
							title: '待办事项',
							path: '/waititem'
						},
						{
							id: 212,
							title: '已办事项',
							path: '/Completeditems'
						},
						{
							id: 313,
							title: '我发起的',
							path: '/launch'
						}
					]
				}
			]
		}
	},
	created() {},
	mounted() {},
	methods: {}
}
</script>
<style scoped lang="scss">
.el-submenu__icon-arrow,
.el-icon-arrow-down {
	color: #fff !important;
}
.el-menu-item.is-active {
	background-color: #f2c238 !important;
}
.el-aside {
	background-color: #7aabf6;
	color: #333;
	height: 100vh;
	.top {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 75px;
		color: #fff;
		p {
			font-size: 20px;
			margin-left: 5px;
		}
	}
}
</style>
