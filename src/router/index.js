import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import TrackLocation from '../views/TrackLocation'
import CheckTimeByClass from '../views/CheckTimeByClass'
import LeaveByList from '../views/LeaveByList'
import AttendanceList from '../views/AttendanceList'
import PersonalInfo from '../views/Student/PersonalInfo'
import StudentHome from '../views/Student/Home'
import ModifyInformation from '../views/Student/ModifyInformation'
import cookies from 'vue-cookies'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/GetTrackLocationByList',
        component: TrackLocation
      },
      {
        path: '/GetCheckTimeByClass',
        component: CheckTimeByClass
      },

      {
        path: '/GetLeaveByList',
        component: LeaveByList
      },

      {
        path: '/GetAttendanceByList',
        component: AttendanceList
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/Student',
    name: 'Student',
    component: StudentHome,
    children: [
      {
        path: '/Home',
        component: StudentHome
      },
      {
        path: '/PersonalInfo',
        component: PersonalInfo
      },
      {
        path: '/ModifyInformation',
        component: ModifyInformation
      }
    ]
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
  // 用户直接访问登录页放行
  if (to.path === '/login') return next()
  // 判断是否登录
  const adminID = cookies.get('Admin_ID')
  const adminPassword = cookies.get('Admin_Password')
  const adminName = cookies.get('Admin_Name')
  // 没有登陆强制跳转到登录页
  if (!adminID || !adminPassword || !adminName) {
    return next('/login')
  }

  if (to.matched.length === 0) { // 如果未匹配到路由
    from.path ? next({ path: from.path }) : next('/login')// 如果上级也未匹配到路由则跳转主页面，如果上级能匹配到则转上级路由
  } else {
    next() // 如果匹配到正确跳转
  }
})

export default router
