import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:round-devices-other',
      keepAlive: true,
      order: 5,
      title: '开发测试',
    },
    name: 'Test',
    path: '/test',
    children: [
      {
        meta: {
          title: '开发测试',
        },
        name: 'TestIndex',
        path: '/test/index',
        component: () => import('#/views/test/index.vue'),
      },
    ],
  },
];

export default routes;
