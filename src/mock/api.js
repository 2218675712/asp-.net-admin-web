import Mock from 'mockjs'

Mock.mock('/user/login', {
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
Mock.mock('/menus', {
  status: '10000',
  message: '',
  type: 'success',
  data: [{
    path: '121212',
    id: '2342342',
    authName: '',
    children: {
      path: '121212',
      id: '2342342',
      authName: ''
    }
  }]
})
