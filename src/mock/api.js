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
Mock.mock('/api/HomePage/GetMenuByList', {
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
Mock.mock('/api/Schedule/GetScheduleList', {
  code: 10000,
  result: true,
  message: '查询成功!',
  data: [
    {
      ScheduleID: 1,
      Serial: 1,
      Schedule: '早读',
      StartTime: '07:40:00',
      EndTime: '08:00:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 2,
      Serial: 2,
      Schedule: '第一节',
      StartTime: '08:15:00',
      EndTime: '09:00:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 3,
      Serial: 3,
      Schedule: '第二节',
      StartTime: '09:10:00',
      EndTime: '09:55:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 4,
      Serial: 4,
      Schedule: '第三节',
      StartTime: '10:20:00',
      EndTime: '11:05:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 5,
      Serial: 5,
      Schedule: '第四节',
      StartTime: '11:15:00',
      EndTime: '12:00:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 6,
      Serial: 6,
      Schedule: '午休',
      StartTime: '12:00:00',
      EndTime: '14:00:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 7,
      Serial: 7,
      Schedule: '第五节',
      StartTime: '14:10:00',
      EndTime: '14:55:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 8,
      Serial: 8,
      Schedule: '第六节',
      StartTime: '15:05:00',
      EndTime: '15:50:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 9,
      Serial: 9,
      Schedule: '第七节',
      StartTime: '16:00:00',
      EndTime: '16:45:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 10,
      Serial: 10,
      Schedule: '第八节',
      StartTime: '16:55:00',
      EndTime: '17:40:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 11,
      Serial: 11,
      Schedule: '晚自习',
      StartTime: '20:10:00',
      EndTime: '21:00:00',
      ScheduleType: 1,
      IsDelete: false
    },
    {
      ScheduleID: 12,
      Serial: 12,
      Schedule: '熄灯',
      StartTime: '22:00:00',
      EndTime: '06:00:00',
      ScheduleType: 1,
      IsDelete: false
    }
  ]
})
Mock.mock('/api/CurriculumList/GetCurriculumList', {
  code: 10000,
  result: true,
  message: '查询成功!',
  data: [
    {
      Week: '星期一',
      Curriculum: '数学',
      IsDelete: false,
      Schedule: '第一节',
      StartTime: '08:15:00',
      EndTime: '09:00:00'
    }
  ]
}
)
