import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:sharp-precision-manufacturing',
      keepAlive: true,
      order: 2,
      title: '设备管理',
    },
    name: 'Device',
    path: '/device',
    children: [
      {
        meta: {
          title: '设备列表',
        },
        name: 'DeviceList',
        path: '/device/list',
        component: () => import('#/views/device/list.vue'),
      },
    ],
  },
];

export default routes;
