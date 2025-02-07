import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:round-map',
      keepAlive: true,
      order: 1,
      title: '地块管理',
    },
    name: 'Farm',
    path: '/farm',
    children: [
      {
        meta: {
          title: '地块列表',
        },
        name: 'FarmList',
        path: '/farm/list',
        component: () => import('#/views/farm/list.vue'),
      },
    ],
  },
];

export default routes;
