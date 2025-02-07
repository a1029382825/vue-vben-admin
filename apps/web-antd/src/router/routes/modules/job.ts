import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:round-swap-calls',
      keepAlive: true,
      order: 4,
      title: '作业管理',
    },
    name: 'Job',
    path: '/job',
    children: [
      {
        meta: {
          title: '作业记录',
        },
        name: 'JobList',
        path: '/job/list',
        component: () => import('#/views/job/list.vue'),
      },
    ],
  },
];

export default routes;
