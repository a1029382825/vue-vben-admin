import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:sharp-account-tree',
      keepAlive: true,
      order: 3,
      title: '任务管理',
    },
    name: 'Task',
    path: '/task',
    children: [
      {
        meta: {
          title: '任务列表',
        },
        name: 'TaskList',
        path: '/task/list',
        component: () => import('#/views/task/list.vue'),
      },
    ],
  },
];

export default routes;
