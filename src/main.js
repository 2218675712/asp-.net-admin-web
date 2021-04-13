import Vue from 'vue'
import Axios from 'axios'
// 在main.js引入qs
import qs from 'qs'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import VueAMap from 'vue-amap'

import App from './App.vue'
import router from './router'
import store from './store'
// 配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
Vue.prototype.$qs = qs

const moke = true
if (moke) {
  require('./mock/api')
}
Vue.config.productionTip = false
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'cf8a25f617d748d62e5c9380c8e2c934',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
Vue.use(VueAxios, Axios)
Vue.use(ElementUI) // global css
// 根据前端的跨域方式做调整
// Axios.defaults.baseURL = '/api'
Axios.defaults.baseURL = '/api'
// 设置请求超时
Axios.defaults.timeout = 3000
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 添加请求拦截器添加token
/* Axios.interceptors.request.use((config) => {
  config.headers.authorization = window.sessionStorage.getItem('token')
  return config
}) */
/**
 * 接口错误拦截
 */
/* Axios.interceptors.response.use(function (response) {
  const res = response.data
  const path = location.hash
  // eslint-disable-next-line eqeqeq
  if (res.status === 10000) {
    return res.data
  } else if (res.status === 10001) {
    if (path !== '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    this.$message.warning(res.msg)
    return Promise.reject(res)
  }
}, (error) => {
  const res = error.response
  this.$message.error(res.data.message)
  return Promise.reject(error)
}) */
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
