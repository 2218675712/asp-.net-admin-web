import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import GetTrackLocationByList from '../views/GetTrackLocationByList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/GetTrackLocationByList',
        component: GetTrackLocationByList
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
/* // 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // 用户直接访问登录页放行
  if (to.path === '/login') return next()
  // 判断是否登录
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有登陆强制跳转到登录页
  if (!tokenStr) {
    return next('/login')
  }
  next()
}) */
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { // 如果未匹配到路由
    from.path ? next({ path: from.path }) : next('/login')// 如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
  } else {
    next() // 如果匹配到正确跳转
  }
})
export default router
