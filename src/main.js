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
const moke = true
if (moke) {
  require('./mock/api')
}
Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
Vue.use(ElementUI)
// 根据前端的跨域方式做调整
Axios.defaults.baseURL = '/api'
// 根据环境变量获取不同的请求地址
// Axios.defaults.baseURL=env.baseURL
// 设置请求超时
Axios.defaults.timeout = 5000

Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
