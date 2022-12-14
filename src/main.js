import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全屏
import fullscreen from 'vue-fullscreen'
// 引入http
import http from './utils/httpreq'
Vue.prototype.$http = http
Vue.use(fullscreen)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
