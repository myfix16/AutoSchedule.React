export default [
  // {
  //   path: '/',
  //   layout: false,
  //   routes: [
  //     {
  //       path: '/user',
  //       routes: [
  //         // {
  //         //   name: 'login',
  //         //   path: '/user/login',
  //         //   component: './user/Login',
  //         // },
  //       ],
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  {
    path: '/',
    redirect: '/homepage',
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
    hideInMenu: true,
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
    component: './404',
  },
];
