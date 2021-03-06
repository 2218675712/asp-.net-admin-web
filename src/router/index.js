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
import HomeMenu from '../views/Student/HomeMenu'
import SchoolTimetable from '../views/Student/SchoolTimetable'
import Notice from '../views/Student/Notice'
import cookies from 'vue-cookies'
import ClockIn from '../views/Student/ClockIn'

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
    redirect: '/HomeMenu',
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
        name: 'ModifyInformation',
        path: '/ModifyInformation',
        component: ModifyInformation
      },
      {
        path: '/HomeMenu',
        component: HomeMenu
      },
      {
        path: '/SchoolTimetable',
        component: SchoolTimetable
      },
      {
        path: '/Notice',
        component: Notice
      }, {
        path: '/ClockIn',
        component: ClockIn
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // ?????????????????????????????????

  if (to.path === '/login') return next()
  // ??????????????????
  const adminID = cookies.get('Admin_ID')
  const adminPassword = cookies.get('Admin_Password')
  const adminName = cookies.get('Admin_Name')
  // ????????????????????????????????????
  if (!adminID || !adminPassword || !adminName) {
    return next('/login')
  }

  if (to.matched.length === 0) { // ????????????????????????
    from.path ? next({ path: from.path }) : next('/login')// ????????????????????????????????????????????????????????????????????????????????????????????????
  } else {
    next() // ???????????????????????????
  }
})

export default router
