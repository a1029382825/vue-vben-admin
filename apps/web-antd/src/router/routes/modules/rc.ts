import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:outline-settings-remote',
      keepAlive: true,
      order: 5,
      title: '远程遥控',
    },
    name: 'RC',
    path: '/rc',
    children: [
      {
        meta: {
          title: '远程遥控',
        },
        name: 'RCIndex',
        path: '/rc/index',
        component: () => import('#/views/rc/index.vue'),
      },
    ],
  },
];

export default routes;
