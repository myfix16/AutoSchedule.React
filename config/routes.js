export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          // {
          //   name: 'login',
          //   path: '/user/login',
          //   component: './user/Login',
          // },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/homepage',
    name: 'Homepage',
    icon: 'home',
    component: './Index',
  },
  {
    path: '/schedule',
    name: 'Schedule',
    icon: 'InsertRowAboveOutlined',
    component: './Schedule/schedule.jsx',

  },
  {
    path: '/about',
    name: 'About Us',
    hideInMenu: true,
    component: './About/about.jsx',

  },
  {
    path: '/',
    redirect: '/homepage',
  },
  {
    component: './404',
  },
];
