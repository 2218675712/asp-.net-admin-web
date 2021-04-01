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
  status: '10000',
  message: '',
  type: 'success',
  data: [{
    path: '121212',
    id: '2342342',
    authName: '23323',
    children: [{
      path: '121212',
      id: '2342342',
      authName: '233232'
    }]
  }, {
    path: '5435',
    id: '345435',
    authName: '455454',
    children: [{
      path: '454',
      id: '45',
      authName: '233232'
    }]
  }]
})
