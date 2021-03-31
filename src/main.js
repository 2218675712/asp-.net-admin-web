import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import store from './store'

const moke = false

if (moke) {
  require('./mock/api')
}
Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
Vue.use(ElementUI)
// 根据前端的跨域方式做调整
// Axios.defaults.baseURL = '/api'
Axios.defaults.baseURL = '/api'
// 根据环境变量获取不同的请求地址
// Axios.defaults.baseURL=env.baseURL
// 设置请求超时
Axios.defaults.timeout = 3000
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 添加请求拦截器添加token
Axios.interceptors.request.use((config) => {
  config.headers.authorization = window.sessionStorage.getItem('token')
  return config
})
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
