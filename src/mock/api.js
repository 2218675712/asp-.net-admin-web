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
  code: 73,
  message: 'anim',
  data: [
    {
      MenuID: 32,
      MenuController: 'ex eiusmod',
      MenuMethod: '17',
      MenuPath: 'amet et irure elit eiusmod',
      MenuText: 'ut in cillum',
      SubmenuID: null,
      IsDelete: true,
      ChildLists: [
        {
          MenuID: 4,
          MenuController: 'in sunt',
          MenuMethod: '28',
          MenuPath: 'ipsum',
          MenuText: 'Excepteur laborum voluptate proident',
          SubmenuID: 50,
          IsDelete: false
        },
        {
          MenuID: 77,
          MenuController: 'sint labore nulla ad',
          MenuMethod: '69',
          MenuPath: 'esse',
          MenuText: 'labore laborum commodo',
          SubmenuID: 20,
          IsDelete: false
        }
      ]
    },
    {
      MenuID: 98,
      MenuController: 'ipsum ut laborum non',
      MenuMethod: '81',
      MenuPath: 'quis ipsum officia minim qui',
      MenuText: 'irure sunt nisi',
      SubmenuID: null,
      IsDelete: true,
      ChildLists: [
        {
          MenuID: 90,
          MenuController: 'qui cillum anim aute',
          MenuMethod: '7',
          MenuPath: 'amet anim magna Ut',
          MenuText: 'occaecat',
          SubmenuID: 45,
          IsDelete: false
        },
        {
          MenuID: 90,
          MenuController: 'sunt',
          MenuMethod: '85',
          MenuPath: 'consectetur do fugiat',
          MenuText: 'occaecat Excepteur',
          SubmenuID: 35,
          IsDelete: true
        },
        {
          MenuID: 45,
          MenuController: 'mollit aliquip dolor',
          MenuMethod: '31',
          MenuPath: 'enim consequat eu',
          MenuText: 'nostrud',
          SubmenuID: 54,
          IsDelete: false
        },
        {
          MenuID: 25,
          MenuController: 'nostrud',
          MenuMethod: '67',
          MenuPath: 'ex',
          MenuText: 'officia in voluptate fugiat',
          SubmenuID: 34,
          IsDelete: true
        }
      ]
    },
    {
      MenuID: 73,
      MenuController: 'culpa sed nostrud ut aliquip',
      MenuMethod: '26',
      MenuPath: 'sed amet',
      MenuText: 'elit',
      SubmenuID: null,
      IsDelete: false,
      ChildLists: [
        {
          MenuID: 58,
          MenuController: 'dolor ullamco dolor commodo irure',
          MenuMethod: '99',
          MenuPath: 'labore',
          MenuText: 'elit',
          SubmenuID: 58,
          IsDelete: false
        },
        {
          MenuID: 32,
          MenuController: 'in magna ipsum',
          MenuMethod: '1',
          MenuPath: 'officia dolor voluptate tempor aliquip',
          MenuText: 'magna nisi',
          SubmenuID: 3,
          IsDelete: true
        },
        {
          MenuID: 48,
          MenuController: 'ut',
          MenuMethod: '48',
          MenuPath: 'proident laboris exercitation sunt',
          MenuText: 'Ut',
          SubmenuID: 57,
          IsDelete: false
        },
        {
          MenuID: 87,
          MenuController: 'in ut deserunt',
          MenuMethod: '33',
          MenuPath: 'Excepteur',
          MenuText: 'minim Excepteur deserunt sit',
          SubmenuID: 7,
          IsDelete: false
        }
      ]
    },
    {
      MenuID: 54,
      MenuController: 'laboris mollit amet ut',
      MenuMethod: '33',
      MenuPath: 'labore',
      MenuText: 'aliquip amet sit',
      SubmenuID: null,
      IsDelete: true,
      ChildLists: [
        {
          MenuID: 47,
          MenuController: 'adipisicing eu pariatur ut voluptate',
          MenuMethod: '74',
          MenuPath: 'Excepteur',
          MenuText: 'dolor',
          SubmenuID: 65,
          IsDelete: true
        },
        {
          MenuID: 72,
          MenuController: 'officia',
          MenuMethod: '68',
          MenuPath: 'dolore aliquip culpa commodo',
          MenuText: 'esse veniam',
          SubmenuID: 47,
          IsDelete: true
        }
      ]
    }
  ]
})
