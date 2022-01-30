import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

// 导入SVG图标
import '@/icons'
// 基于TOKEN拦截处理验证用户登陆
import '@/permission'

// 注册自定义指令
import * as directives from '@/directives'
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
