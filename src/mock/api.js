import Mock from 'mockjs'

Mock.mock('/api/login/GetLoginByPhone', {
  status: '10000',
  message: '登录成功',
  type: 'success',
  data:
    {
      id: '12',
      username: 'admin',
      email: 'admin@51purse.com',
      avatarUrl: '',
      token: ''
    }

})
Mock.mock('/api/menus', {
  code: 10000,
  message: '成功',
  data: [
    {
      MenuID: 2,
      MenuController: 'HomePage',
      MenuMethod: 'GetMenuByList',
      MenuPath: 'HomePage/GetMenuByList',
      MenuText: '主页',
      SubmenuID: null,
      IsDelete: false,
      ChildLists: []
    },
    {
      MenuID: 5,
      MenuController: 'TeacherListController',
      MenuMethod: 'GetTeacherByList',
      MenuPath: 'TeacherListController/GetTeacherByList',
      MenuText: '教师管理',
      SubmenuID: null,
      IsDelete: false,
      ChildLists: []
    },
    {
      MenuID: 8,
      MenuController: 'CheckWorkManagerController',
      MenuMethod: 'GetCheckWorkByStudent',
      MenuPath: 'CheckWorkManagerController/GetCheckWorkByStudent',
      MenuText: '考勤管理',
      SubmenuID: null,
      IsDelete: false,
      ChildLists: [
        {
          MenuID: 9,
          MenuController: 'CheckTimeController',
          MenuMethod: 'GetCheckTimeByClass',
          MenuPath: 'CheckTimeController/GetCheckTimeByClass',
          MenuText: '考勤时间设置',
          SubmenuID: 8,
          IsDelete: false
        },
        {
          MenuID: 13,
          MenuController: 'AttendanceController',
          MenuMethod: 'GetAttendanceByList',
          MenuPath: 'AttendanceController/GetAttendanceByList',
          MenuText: '学生考勤',
          SubmenuID: 8,
          IsDelete: false
        },
        {
          MenuID: 20,
          MenuController: 'LeaveController',
          MenuMethod: 'GetLeaveByList',
          MenuPath: 'LeaveController/GetLeaveByList',
          MenuText: '学生请假审批',
          SubmenuID: 8,
          IsDelete: false
        }
      ]
    },
    {
      MenuID: 14,
      MenuController: 'TrackLocationController',
      MenuMethod: 'GetTrackLocationByList',
      MenuPath: 'TrackLocationController/GetTrackLocationByList',
      MenuText: '轨迹定位',
      SubmenuID: null,
      IsDelete: false,
      ChildLists: []
    }
  ]
})
