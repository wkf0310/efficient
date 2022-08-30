import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('../views/index.vue'),
		redirect: '/home',
		children: [
			{
				// 职级岗位
				path: '/BasicPage',
				name: 'BasicPage',
				component: () => import('../views/BasicPage.vue')
			},
			{
				// 岗位管理
				path: '/administration',
				name: 'administration',
				component: () => import('../views/administration.vue')
			},
			{
				// 首页
				path: '/home',
				name: 'home',
				component: () => import('../views/home.vue')
			},
			{
				// 已办事项
				path: '/Completeditems',
				name: 'Completeditems',
				component: () => import('../views/CompletedItems.vue')
			},
			{
				// 用户管理
				path: '/user',
				name: 'user',
				component: () => import('../views/UserView.vue')
			},
			{
				// 角色管理
				path: '/role',
				name: 'role',
				component: () => import('../views/RoleView.vue')
			},
			{
				// 权限管理
				path: '/power',
				name: 'power',
				component: () => import('../views/PowerView.vue')
			},
			{
				// 邮件处理
				path: '/mail',
				name: 'mail',
				component: () => import('../views/MailView.vue')
			},
			{
				// 待办事项
				path: '/waititem',
				name: 'waititem',
				component: () => import('../views/waitItemView.vue')
			},
			{
				// 菜单管理
				path: '/menu',
				name: 'menu',
				component: () => import('../views/MenuView.vue')
			},
			{
				// 部门管理
				path: '/branck',
				name: 'branck',
				component: () => import('../views/branchView.vue')
			},
			{
				// 操作日志
				path: '/operationlog',
				name: 'operationlog',
				component: () => import('../views/Operationlog.vue')
			},
			{
				// 材料管理
				path: '/material',
				name: 'material',
				component: () => import('../views/Material.vue')
			},
			{
				// 工资条录入
				path: '/payrollentry',
				name: 'payrollentry',
				component: () => import('../views/Payrollentry.vue')
			},
			{
				// 登录日志
				path: '/loginlog',
				name: 'loginlog',
				component: () => import('../views/Loginlog.vue')
			},
			{
				// 配置审批流程
				path: '/approvalprocess',
				name: 'approvalprocess',
				component: () => import('../views/ApprovalprocessView.vue')
			},
			{
				// 配置审批类型
				path: '/approvaltype',
				name: 'approvaltype',
				component: () => import('../views/ApprovaltypeView.vue')
			},
			{
				// 我发起的
				path: '/launch',
				name: 'launch',
				component: () => import('../views/LaunchView.vue')
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
