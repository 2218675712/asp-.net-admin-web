import Vue from 'vue'
import Axios from 'axios'
// 在main.js引入qs
import qs from 'qs'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueLazyload from 'vue-lazyload'
import VueCookies from 'vue-cookies'
import VueAMap from 'vue-amap'
import Vant from 'vant'
import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
// 配全局属性配置，在任意组件内可以使用this.$qs获取qs对象
Vue.prototype.$qs = qs

const moke = false
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
Vue.use(Vant)
// 根据前端的跨域方式做调整
// Axios.defaults.baseURL = '/api'
Axios.defaults.baseURL = '/S1mple_SchoolManager'
// 设置请求超时
Axios.defaults.timeout = 3000
// 设置post请求为form表单
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 带上coolie配置为true
Axios.defaults.withCredentials = false

/**
 * 接口错误拦截
 */
Axios.interceptors.response.use(function (response) {
  const res = response.data
  const path = location.hash
  if (res.code === 10000) {
    return response
  } else if (res.infocode === '10000') {
    // 临时配置获取定位接口不会出错
    return response
  } else if (res.code === 10002) {
    if (path !== '#/login') {
      ElementUI.Message({
        message: res.message,
        type: 'error'
      })
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    ElementUI.Message({
      message: res.message,
      type: 'warning'
    })
    return Promise.reject(res)
  }
}, (error) => {
  const res = error.response
  ElementUI.Message({
    message: res.data.message,
    type: 'error'
  })
  return Promise.reject(error)
})
Vue.use(VueCookies)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
